<script setup lang="ts">
import Otp from  '@/assets/svg/home/otp-img.svg'
import OtpInput from '@/components/website/main/OtpInput.vue'
import {useAuthStore} from '@/store/auth';
import { storeToRefs } from 'pinia';
import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";



const store = useAuthStore();
const {otpDto} = storeToRefs(store)
const otpForm = ref<InstanceType<typeof Form> | null>(null);


const schema = computed(() => {
  return yup.object({
    
    otp: yup.string().required("otp is required").min(5,'otp is not valid'),
  });
});
function submit (){
  otpForm.value?.validate().then((success:any)=>{
    if(success.valid){

    }
  })
}
</script>
<template>
  <div class="tw-flex tw-justify-center tw-items-center tw-w-full ">
  
   <Form
   ref="otpForm"
   :validation-schema="schema"
   class="tw-flex tw-justify-start tw-items-center tw-flex-col tw-mt-28 tw-gap-5 tw-w-[360px]">
    <h2 class="text-black">Vertify your phone</h2>
    <img class="tw-w-[200px]" :src="Otp" alt="">
    <p class=" lg:tw-text-lg tw-text-center">Please enter the OTP your recieved to your phone to verify your contact number</p>
<Field name="otp" v-model="otpDto.otp">
  <OtpInput v-model="otpDto.otp"/>
  <ErrorMessage name="otp" v-slot="{ message }">
              <span class="text-red-lighten-1">{{ message }}</span>
            </ErrorMessage>
</Field>
 <VBtn  @click="submit" variant="elevated" class="send-btn  tw-w-full " ><p class="tw-capitalize">Verify</p></VBtn>
 <p class="tw-mt-4">Didn’t recieve an OTP? <VBtn  variant="text"><p class="tw-capitalize text-primary">Resend</p></VBtn></p>
   </Form>
  </div>
</template>
<style  lang="scss">
.send-btn {


height:44px !important;
background: radial-gradient(86.09% 235.32% at 7.86% 13.67%, #EE5C2E 0%, #EE2E53 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
/* VBtn_shadow */
box-shadow: 0px 15px 25px rgba(238, 46, 83, 0.25);
border-radius: 16px;
color:#fff


}

</style>