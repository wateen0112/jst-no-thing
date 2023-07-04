
<script setup lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import {useAuthStore}  from '@/store/auth'
import * as yup from "yup";
import { storeToRefs } from "pinia";
const store  = useAuthStore();
const  {signupDto} =storeToRefs(store);
const signupForm  =  ref<InstanceType<typeof Form> | null>(null);
const {t}= useI18n();
const  {signup} =  store;
const phnoeCodes = ['+971']
const schema = computed(() => { return yup.object({
    email: yup.string()
      .required(t('register.errors.email'))
      .email(t('register.errors.invalid')),
   
  
    phone_number:yup.number()
      .required(t('register.errors.email')),
    first_name:yup.string()
      .required(t('register.errors.email')),
    last_name:yup.string()
      .required(t('register.errors.email')) ,
   
 
});
});
function submit (){
    signupForm.value?.validate().then((success:any)=>{
        signup();
    })
}
</script>
<template>
    <div class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
     <Form 
     ref="signupForm"
     
     class="tw-w-[340px] tw-flex tw-flex-col tw-gap-3" :validation-schema="schema">
        <h1>complete your account</h1>
        <p>please complete following information to complete your account </p>
 
 <div >
     <VLabel> your Email</VLabel>
<Field v-slot="{ field }" name="email" v-model="signupDto.email">
   
   
    <VTextField  :readonly="true" v-model="signupDto.email"/>
    <ErrorMessage name="email" v-slot="{ message }">
              <span class="text-red-lighten-1">{{ message }}</span>
            </ErrorMessage>
</Field>
 </div>
 <VLabel> your Name</VLabel>
 <div >
  
<Field   v-model="signupDto.first_name"  v-slot="{ field }" name="first_name">
    <VTextField  label="first name" v-model="signupDto.first_name"  />
    <ErrorMessage name="first_name" v-slot="{ message }">
              <span class="text-red-lighten-1">{{ message }}</span>
            </ErrorMessage>
</Field>

 </div>
 
 <div class="tw-col-span-3">
<Field v-slot="{ field }" v-model="signupDto.last_name"  name="last_name">
   <VTextField label="last name"  v-model="signupDto.last_name"/>
   <ErrorMessage name="last_name" v-slot="{ message }">
              <span class="text-red-lighten-1">{{ message }}</span>
            </ErrorMessage>
       
        </Field>
 </div>
 <VLabel> contact information</VLabel>
<div class="tw-grid tw-grid-cols-4">
   <div>
    <VSelect v-model="signupDto.country_code"  :items="phnoeCodes"></VSelect>
   </div>
    <div class="tw-col-span-3">
<Field v-slot="{ field }"  name="phone_number"  v-model="signupDto.phone_number">
   <VTextField  label="phone number"  v-model="signupDto.phone_number"/>
</Field>
</div>


</div>
<div class="tw-w-full">
    <ErrorMessage name="phone_number" v-slot="{ message }">
           <span class="tw-w-full text-red-lighten-1">{{ message }}</span>
         </ErrorMessage>
</div>
<div class="tw-flex tw-justify-center tw-items-center tw-w-full">

<VBtn @click="submit" class="confirm-btn " width="200px" color="primary"> Confirm</VBtn>
</div>
</Form>
 </div>
 




   
</template>
 
<style>
.confirm-btn {

text-transform: capitalize;
background: radial-gradient(86.09% 235.32% at 7.86% 13.67%, #EE5C2E 0%, #EE2E53 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
/* VBtn_shadow */
box-shadow: 0px 15px 25px rgba(238, 46, 83, 0.25);
border-radius: 100px;
color:#fff


}
</style>