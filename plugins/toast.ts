import toast from 'vue-toastification';
export default defineNuxtPlugin((app) => {
    app.vueApp.use(toast)
})