<script setup lang="ts">
import FB from '@/assets/svg/home/fb-icon.svg'
import Google from '@/assets/svg/home/google-icon.svg';
import facebookLogin from 'facebook-login-vuejs';
import  {useAuthStore} from '@/store/auth';
import  Email from '@/assets/svg/icons/email.svg'
import  Lock from '@/assets/svg/icons/lock.svg'
import  Eye from '@/assets/svg/icons/eye.svg'
import  EyeClosed from '@/assets/svg/icons/eye-closed.svg'
import { storeToRefs } from 'pinia';
import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";
import WButton from '~/components/website/main/WButton.vue';
const {t}= useI18n()
const showPass = ref<boolean>(false);
const store = useAuthStore();
const {loginDto} = storeToRefs(store);
const loginForm = ref<InstanceType<typeof Form> | null>(null);


const schema = computed(() => {
  return yup.object({
    email: yup
      .string()
      .required(t('login.errors.email'))
      .email(t('login.errors.invalid')),
    password: yup.string().required(t('login.errors.password')).min(4),
  });
});
function submit(){
  loginForm.value?.validate().then((success:any)=>{
    if(success.valid){
      store.login()
    }
  })
}
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
<Form
:validation-schema="schema"
ref="loginForm" class="tw-flex tw-flex-col tw-min-w-[300px] tw-w-[350px] tw-gap-y-5">
<h2 class="tw-text-center tw-py-5">{{ $t('login.login') }}</h2>

<div class="field">
  <Field class="field" name="email" v-model="loginDto.email" v-slot="{ field }">
  <VTextField

  v-model="loginDto.email"  :label="$t('login.email')" >
<template #prepend-inner>
  <div>
    <img class="tw-mt-1 tw-w-[24px] tw-h-[24px]" :src="Email" alt="">
  </div>
</template>  
</VTextField>

  <ErrorMessage name="email" v-slot="{ message }">
              <span class="text-red-lighten-1">{{ message }}</span>
            </ErrorMessage>
</Field>
</div>

  <div  class="field">
    <Field v-model="loginDto.password"  name="password" v-slot="{ field }">
    <VTextField 
    :type="showPass?'text':'password'"

    v-model="loginDto.password"   :label="$t('login.password')" >
    <template #prepend-inner>
  <div>
    <img class="tw-mt-1 tw-w-[28px] tw-h-[24px]" :src="Lock" alt="">
  </div>
</template>  
<template #append-inner>
  <div @click="showPass=!showPass"  class="tw-cursor-pointer">
    <img v-if="!showPass" class="tw-mt-1 tw-w-[28px] tw-h-[24px]" :src="Eye" alt="">
    <img  v-else class="tw-mt-1 tw-w-[28px] tw-h-[24px]" :src="EyeClosed" alt="">
  </div>
</template> 
  </VTextField>
    <ErrorMessage name="password" v-slot="{ message }">
              <span class="text-red-lighten-1">{{ message }}</span>
            </ErrorMessage>
</Field>
  </div>
  <p  class="tw-flex tw-justify-end "> <router-link  class="text-primary" to="/forgetPassword">{{ $t('login.forgetPassword') }}</router-link></p>


<WButton rounded="100" height="40"  @click="submit"><span class="tw-capitalize">{{ $t('login.login') }}</span></WButton>
<div class=" tw-flex tw-justify-center  tw-items-center tw-mt-5">
  <VDivider/>
  <span class="tw-min-w-[180px] tw-text-center tw-text-sm text-leightGrey">{{ $t('login.signupWith') }} </span>
  <VDivider/>
</div>
<div class="tw-flex tw-justify-center tw-gap-3 tw-items-center">

  <WButton width="60" :text="true" height="60"><img :src="FB" alt=""> </WButton >
  <WButton width="60" :text="true" height="60"><img :src="Google" alt=""></WButton >
</div>
<div class="tw-flex tw-justify-center tw-items-center ">

  <p class="tw-text-xs"> {{ $t('login.notYjoz') }}<span> <RouterLink class="text-primary" to="/register">    {{ $t('login.signup') }} </RouterLink> </span></p>
</div>
</Form>

  
  </div>
</template>
