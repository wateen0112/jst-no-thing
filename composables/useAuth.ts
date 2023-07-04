import { BaseRoles } from "~/enums/Roles";
import { axiosIns } from "../lib/axios";
import jwt_decode from "jwt-decode";
import type { AxiosError, AxiosResponse } from "axios";
import { useToast } from "vue-toastification";
import appConfig from "~/app.config";
interface BaseUserData {
  refreshToken: string,
  accessToken: string,
  eamil?: string
  id: string,

}
type useAuthConfig = {
  loginEndpoint: string;
  refreshTokenEndpoint: string;
  key: string;
};
const defaultConfig: useAuthConfig = {
  loginEndpoint: "",
  refreshTokenEndpoint: "",
  key: appConfig.PROJECT_NAME,
};


export const useAuth = <UserData extends BaseUserData>(config: useAuthConfig = defaultConfig) => {
  const toast = useToast();

  const { POST } = useApi();

  async function EmailLogin(payload: any) {
    try {
      const response = await POST(config.loginEndpoint, payload, {
        comfirm: false,
        success: false,
        error: false,
      });
      if (response.status === 200) {
        SetUserData(response.data);
        navigateTo("/dashboard/home");
        return response;
      }
    } catch (er) {
      const result = HandleLoginError(er as AxiosError, payload);
      toast.error(result);
      throw (er)
    }
  }
  function SetUserData(userData: any) {
    const userCookie = useCookie(`user-data`, {
      expires: new Date(new Date().getFullYear() + 2, 0)
    });
    userCookie.value = userData;
  }
  function GetUserData() {
    const cookie = useCookie<UserData>(`user-data`);
    return cookie.value;
  }
  function GetAccessToken() {
    const userData = useCookie<UserData>(`user-data`);
    if (userData.value && userData.value.accessToken) {
      return userData.value.accessToken;
    } else return null;
  }
  function GetAccessTokenDecoded(): any {
    if (GetAccessToken()) return jwt_decode(GetAccessToken() as string);
    else return null;
  }
  function IsAdmin() {
    return (
      GetUserRoles()?.includes(BaseRoles.SuperAdmin) ||
      GetUserRoles()?.includes(BaseRoles.Admin)
    );
  }
  function GetRefreshToken() {
    return GetUserData()?.refreshToken;
  }
  function GetUserRoles() {
    return GetAccessTokenDecoded()?.[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ];
  }
  function IsLoggedIn() {
    return !!GetAccessToken();
  }
  function LogOut() {
    useCookie(`user-data`).value = null;
    navigateTo("/login");
  }
  function ActionsGaurd(name: string, action: string) {
    if (name === "Public") return true;
    return (
      GetUserRoles()?.includes(`${name}-${action}`) ||
      GetUserRoles()?.includes(BaseRoles.SuperAdmin)
    );
  }
  async function RefreshToken() {
    try {
      const response = await axiosIns.post("Dashboard/User/RefreshToken",
        {
          id: GetUserData()?.id,
          refreshToken: GetRefreshToken(),
        },
      );
      const { accessToken } = response.data;
      if (!accessToken) {
        LogOut();
      }
      SetUserData({
        ...GetUserData(),
        accessToken
      });

      return accessToken;
    } catch (error) {
      LogOut();
    }
  }
  function HandleLoginError(error: Error & AxiosError, requestBody: any) {
    if (error.response) {
      if (error.response.status == 404 || error.response.status == 403)
        return "المستخدم غير موجود .. يرجى التحقق من صحة المعلومات";
      else if (error.response.status == 400)
        return "كلمة المرور خاطئة .. يرجى التأكد من حالة الأحرف ";
      else if (
        error.response.status == 401 &&
        error.response.data === "confirm your email first"
      ) {
        navigateTo(`/gotMail?email=${requestBody.email}`);
        return "يرجى تأكيد البريد الالكتروني اولا";
      } else if (error.response.status == 500)
        return "حدث خطأ في الخادم .. يرجى اعادة المحاولة";
      else return "حدث خطأ ما";
    } else return "فشلت العملية";

  }
  function GetHomePage() {
    if (IsLoggedIn()) {
      return "/dashboard";
    } else return "/";
  }
  function SetAccessToken(token = '') {
    try {
      // localStorage.setItem("AccessToken", token)
    } catch (error) {
      throw error
    }
  }
  return {
    SetAccessToken,
    GetAccessToken,
    IsAdmin,
    GetRefreshToken,
    GetUserRoles,
    IsLoggedIn,
    LogOut,
    GetUserData,
    ActionsGaurd,
    GetAccessTokenDecoded,
    RefreshToken,
    EmailLogin,
    SetUserData,
    // HandleLoginResponse,
    // HandleLoginError,
    GetHomePage,
  };
};





