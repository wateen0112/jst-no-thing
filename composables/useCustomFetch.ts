import appConfig from "~/app.config"

export const useCustomFetch = <T>(url: string, options?: any) => {
    const i18 = useI18n()
    const { GetAccessToken } = useAuth()


    return useFetch<T>(url, {
        baseURL: appConfig.API_DOMAIN,
        headers: {
            lang: i18.locale.value,
            Authorization: `Bearer ${GetAccessToken()}`
        },
        ...options,
        async onResponse({ request, response, options }) {


        },
        async onResponseError({ request, response, options }) {
            console.log("SSR RES ERROR");

        },

        async onRequest({ request, options }) {
        },
        async onRequestError({ request, options, error }) {
            console.log("SSR REQ ERROR", error);

        }
    })
}