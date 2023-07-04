import { axiosIns } from "../lib/axios";
import { useToast } from "vue-toastification";
import Swal from "sweetalert2";
import { SweetAlertOptions } from "sweetalert2";
import { AxiosRequestConfig, AxiosError, AxiosPromise } from "axios";
import { serialize } from "object-to-formdata";
import { Options } from "object-to-formdata";

type NotificationsType = {
  error?: string | boolean;
  comfirm?: SweetAlertOptions | boolean;
  success?: string | boolean;
};
type paramsType = { [param: string]: string };
let defaultSerializerOptions: Options | boolean = {
  indices: true,
  dotsForObjectNotation: true,
  noFilesWithArrayNotation: true,
};

const defaultPostNotifications: NotificationsType = {
  comfirm: false,
  success: false,
  error: true,
};

const defaultGetNotification: NotificationsType = {
  comfirm: false,
  success: false,
  error: true,
};

const defaultDeleteNotification: NotificationsType = {
  comfirm: {
    text: "This Item Will Be Deleted .. Are You Sure ? ",
    icon: "warning",
    confirmVBtnText: "Yes , Delete",
    denyVBtnText: "Cancel",
  },

  error: true,
  success: "تم الحذف بنجاح",
};

export const useApi = () => {
  const toast = useToast();
  const handleErrorMessage = (
    { response }: AxiosError | any,
    notifications: string | boolean
  ) => {
    console.log('inside error handler');

    if (typeof notifications == "boolean" && response) {
      console.log('Error Handler Catch', response);
      if (response.data) {



        for (const key in response.data) {

          if (typeof response.data[key] === 'string') {
            toast.error(response.data[key].split(' ').slice(0, 20).join(' '), { timeout: 0 })
          }
        }

        if (response.data.errors) {
          for (const key in response.data.errors) {
            if (Object.prototype.hasOwnProperty.call(response.data.errors, key)) {
              const errorType = response.data.errors[key];
              if (typeof errorType == "object" && Array.isArray(errorType)) {
                errorType.forEach((msg) => {
                  toast.error(msg);
                });
              }
            }
          }
        }

      }

      else if (response.message) toast.error(response.message);
      else if (response.statusText) toast.error(response.statusText);
      else toast.error("Server Error");
    } else if (typeof notifications == "string") {
      toast.error(notifications)
    }
  };

  const GET = async <T>(
    url: string,
    params?: paramsType,
    notifications: NotificationsType = defaultGetNotification,
    config?: AxiosRequestConfig
  ) => {
    try {
    
      
      const response = await axiosIns.get<T>(url, { params, ...config });
      return { ...response, data: response.data as T };
    } catch (error) {
      if (notifications.error) handleErrorMessage(error, notifications.error);
      throw error;
    }
  };
  const POST = async <T>(
    url: string,
    body: any = {},
    notifications: NotificationsType = defaultPostNotifications,
    config: AxiosRequestConfig & { formData?: boolean | Options } = {}
  ): AxiosPromise<T> => {
    try {

      let response;
      if (config.formData) {
        if (typeof config.formData === "object") {
          defaultSerializerOptions = config.formData as Options;
        }
        response = await axiosIns.post<T>(url, serialize(body, defaultSerializerOptions as Options), { ...config });
      } else {
        response = await axiosIns.post<T>(url, { ...body }, { ...config });
       
      }

      if (notifications.success && response.status == 200) {
        if (typeof notifications.success == "string")
          toast.success(notifications.success)
        else toast.success("success");
      }

      return response;
    }
    catch (error) {
      if (notifications.error) {

        handleErrorMessage(error, notifications.error);
      }
      throw error;
    }
  };
  const DELETE = async (
    url: string,
    body: any,
    params?: paramsType[],
    notifications: NotificationsType = defaultDeleteNotification,
    config?: AxiosRequestConfig
  ) => {
    return new Promise((resolve, reject) => {
      if (notifications.comfirm && typeof notifications.comfirm == "object")
        Swal.fire({
          icon: "warning",
          showCancelVBtn: true,
          confirmVBtnColor: "#3085d6",
          cancelVBtnColor: "#d33",
          ...notifications.comfirm,
        }).then((result) => {
          if (result.isConfirmed) {
            axiosIns
              .delete(url, { ...params, ...config, data: body })
              .then((res) => {
                if (
                  res.status == 200 &&
                  typeof notifications.success == "string"
                ) {
                  if (notifications.success) toast.success(notifications.success);
                }
                resolve(res);
              })
              .catch((er) => {
                if (notifications.error)
                  handleErrorMessage(er, notifications.error);
                reject(er);
              });
          }
        });
      else {
        axiosIns
          .delete(url, { ...params, ...config })
          .then((res) => {
            if (res.status == 200 && typeof notifications.success == "string") {
              toast.error(notifications.success);
            }
            resolve(res);
          })
          .catch((er) => {
            if (notifications.error)
              handleErrorMessage(er, notifications.error);
            reject(er);
          });
      }
    });
  };

  return {
    GET,
    POST,
    DELETE,
  };
};
