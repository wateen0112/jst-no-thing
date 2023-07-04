<script setup lang="ts">
import AboutBg from '@/assets/svg/home/about-bg.svg';
import AppHome from '@/assets/svg/home/app-home.svg';
import WButton from '../main/WButton.vue';
</script>
<template>
    <div  class=" lg:tw-px-20 tw-z-10 tw-mt-10 tw-px-5 tw-relative tw-grid  tw-grid-cols-1 lg:tw-grid-cols-7 tw-mb-10 tw-min-h-[520px]">
        <img class=" tw-hidden lg:tw-block tw-z-10 tw-absolute tw-h-[320px] tw-bottom-0 tw-object-cover tw-right-0 tw-w-full"   :src="AboutBg" />
        <div class=" tw-col-span-4 tw-z-40 lg:tw-pt-20">
            <h1 class=" tw-text-4xl lg:tw-text-6xl">
    
    <span class="text-primary">A</span>bout us 
            </h1>
            <p class="  lg:tw-text-2xl lg:tw-mt-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.  
            </p>
            <div class=" tw-mt-5   tw-flex tw-justify-center lg:tw-justify-start tw-gap-x-10 tw-items-center tw-flex-row tw-w-full"></div>
   

        <RouterLink to="/">  <VBtn color="primary" rounded>Start Earning   </VBtn></RouterLink>
        <RouterLink to="/">  <VBtn  class="mx-5 tw-capitalize" rounded color="blueGrey"><p class="tw-capitalize">Start Renting </p>  </VBtn></RouterLink>
     
        </div>
        <div class=" tw-py-5  lg:tw-col-span-3 tw-z-30 tw-flex tw-justify-center tw-items-center">
<img  class="tw-w-[150px] lg:tw-w-auto" :src="AppHome" />

        </div>
    
    
    </div>
    </template>
    <style scoped lang="scss">
        .earn-btn {

text-transform: capitalize;
background: radial-gradient(86.09% 235.32% at 7.86% 13.67%, #EE5C2E 0%, #EE2E53 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
/* VBtn_shadow */
box-shadow: 0px 15px 25px rgba(238, 46, 83, 0.25);
border-radius: 100px;
color:#fff


}

  
    </style>