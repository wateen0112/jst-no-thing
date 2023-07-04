<script setup lang="ts">
import FB from '@/assets/svg/home/fb-icon.svg'
import Google from '@/assets/svg/home/google-icon.svg';
import facebookLogin from 'facebook-login-vuejs';
import WButton from '@/components/website/main/WButton.vue'
import  {useAuthStore} from '@/store/auth';
import { storeToRefs } from 'pinia';

import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";
const {t}= useI18n()
const router = useRouter();
const store = useAuthStore();
const {registerDto} = storeToRefs(store);

const registerForm = ref<InstanceType<typeof Form> | null>(null);
 const termsAccepted= ref<boolean>(true)
const schema = computed(() => { return yup.object({
    email: yup
      .string()
      .required(t('register.errors.email'))
      .email(t('register.errors.invalid')),
    password: yup.string().required(t('register.errors.password')).min(6,t('register.errors.min')),
 confirm_password: yup.string().required(t('register.errors.confirmPassword')).min(6).matches(registerDto.value.password,t('register.errors.min'))
 
});
});

 function submit(){  

  registerForm.value?.validate().then((success:any)=>{
if(success.valid&&termsAccepted.value){
  store.checkEmail()
  .then()
  router.push('/completeAccount')

}
  })
}
definePageMeta({
  layout: "default",
});
</script>

<template>

  <div class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-pb-10">
<Form 
ref="registerForm"
:validation-schema="schema" class="tw-flex tw-flex-col tw-min-w-[300px] tw-w-[350px] tw-gap-y-5">
<h2 class="tw-text-center tw-py-5">{{$t('register.register')}} </h2>

 <div  class="field">
  <Field name="email" v-model="registerDto.email" v-slot="{ field }">
  <VTextField v-model="registerDto.email" prepend-inner-icon="mdi-email-outline"  :label="t('register.email')"  prefix-icon="mdi-email" />

  <ErrorMessage name="email" v-slot="{ message }">
              <span class="text-red-lighten-1">{{ message }}</span>
            </ErrorMessage>
</Field> 
</div>
<div class="field">
  <Field name="password" v-model="registerDto.password" v-slot="{ field }">
  <VTextField
  prepend-inner-icon="mdi-lock" 
  v-model="registerDto.password" :label="t('register.password')" />
  <ErrorMessage name="password" v-slot="{ message }">
              <span class="text-red-lighten-1">{{ message }}</span>
            </ErrorMessage>
</Field>
</div>
<div class="field">
  <Field name="confirm_password" v-model="registerDto.confirm_password" v-slot="{ field }">
  <VTextField 
  prepend-inner-icon="mdi-lock" 
  v-model="registerDto.confirm_password" :label="t('register.confirmPassword')"  />
  <ErrorMessage name="confirm_password" v-slot="{ message }">
              <span class="text-red-lighten-1">{{ message }}</span>
            </ErrorMessage>
</Field>
</div>
<p  class="tw-flex tw-justify-center tw-items-center "> <div class="no-bg">
  <VCheckbox   v-model="termsAccepted" class=" tw-w-[50px]"/> 

</div> {{$t('register.agree')}} <span> <RouterLink  class="text-primary tw-px-2" to="/terms">   {{$t('register.terms')}}</RouterLink></span></p>

              <span v-if="!termsAccepted" class="text-red-lighten-1">{{$t('register.errors.terms')}}</span>
         

<WButton  @click="submit" height="40"  ><span class="tw-capitalize">{{$t('register.register')}}</span></WButton>
<div class=" tw-flex tw-justify-center  tw-items-center tw-mt-5">
  <VDivider/>
  <span class="tw-min-w-[100px] tw-text-center text-leightGrey">{{$t('register.signupWith')}} </span>
  <VDivider/>
</div>
<div class="tw-flex tw-justify-center tw-items-center">

  <WButton :text="true" width="60" height="60"><img :src="FB" alt=""> </WButton>
  <WButton :text="true"  width="60" height="60"><img :src="Google" alt=""></WButton>
</div>
<div class="tw-flex tw-justify-center tw-items-center ">

  <p class="tw-text-sm">{{$t('register.haveAnAccount')}}<span> <RouterLink class="text-primary" to="/login">  {{$t('register.login')}} </RouterLink> </span></p>
</div>
</Form>

  
  </div>



  
</template>
<style scoped lang="scss">


</style>
