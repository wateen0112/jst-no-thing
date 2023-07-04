<script setup lang="ts">
import ForgetPassword from  '@/assets/svg/home/forget-password.svg';
import  {useAuthStore} from '@/store/auth';
import { storeToRefs } from 'pinia';
import  Email from '@/assets/svg/icons/email.svg'
import { ErrorMessage, Field, Form } from "vee-validate";
import WButton from '@/components/website/main/WButton.vue'
import * as yup from "yup";
const {t}= useI18n()
const router= useRouter()
const schema = computed(() => {
  return yup.object({
    email: yup
      .string()
      .required(t('forgetPassword.errors.email'))
      .email(t('forgetPassword.errors.invalid')),
   
  });
});
const store =useAuthStore();
const {forgetPasswordDto} = storeToRefs(store);
const forgetPasswordForm = ref<InstanceType<typeof Form> | null>(null);
// Validator function

function submit(){
  forgetPasswordForm.value?.validate().then((success:any)=>{


    
    if(success.valid){
      
      store.forgetPassword().then(()=>{
   
      })
    }
  })
}
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-pb-14">
<Form 
:validation-schema="schema"
ref="forgetPasswordForm"
class="tw-flex tw-flex-col tw-min-w-[300px] tw-w-[350px] tw-gap-y-5">
<h2 class="tw-text-center">{{  $t('forgetPassword.forgetPassword')}} </h2>
<div class="tw-w-full tw-flex tw-justify-center tw-items-center"><img :src="ForgetPassword" class="tw-w-[350px] tw-h-[200px]" alt=""></div>
<p class="tw-text-center">{{  $t('forgetPassword.enterEmail')}}</p>
<div class="field">
  <Field   v-model="forgetPasswordDto.email" name="email" v-slot="{field}">
  <VTextField

  v-model="forgetPasswordDto.email" :label="$t('forgetPassword.email')"  prefix-icon="mdi-email" >
<template #prepend-inner>
  <div>
    <img class="tw-mt-1 tw-w-[24px] tw-h-[24px]" :src="Email" alt="">
  </div>
</template>  
</VTextField>
  <ErrorMessage   name="email" v-slot="{ message }">
              <span class="text-red-lighten-1">{{ message }}</span>
            </ErrorMessage>
</Field>

</div>

<WButton  @click="submit()" variant="elevated" class="btn" ><span class="tw-capitalize">{{  $t('forgetPassword.continue')}}</span></WButton>
<div class="tw-flex tw-justify-center tw-items-center ">

 </div>
</Form>

  
  </div>
</template>
<style lang="scss">
.btn {

height:44px !important;
background: radial-gradient(86.09% 235.32% at 7.86% 13.67%, #EE5C2E 0%, #EE2E53 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
/* VBtn_shadow */
box-shadow: 0px 15px 25px rgba(238, 46, 83, 0.25);
border-radius: 16px;
color:#fff


}

</style>
