<script setup lang="ts">

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-pb-10">
<div class="tw-flex tw-flex-col tw-min-w-[300px] tw-w-[350px] tw-gap-y-5">
<h2 class="tw-text-center tw-py-5">Set new password </h2>

 
  <VTextField label=" new password"/>
  <VTextField label="confirm password"/>
  <p  class="tw-flex tw-justify-center tw-items-center "> <VCheckbox class="tw-w-[5px]"/> I agree with Yjoz <span> <RouterLink  class="text-primary tw-px-2" to="/terms">   Terms and conditions </RouterLink></span></p>


<VBtn variant="elevated" class="btn" >Register</VBtn>



</div>

  
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
