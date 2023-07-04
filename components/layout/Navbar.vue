<script setup lang="ts">
import  Logo from '@/assets/svg/home/LogoA.svg';
import  MenuIcon from '@/assets/svg/home/menu-icon.svg';
import  ThemeToggler from '@/components/website/home/ThemeToggler.vue'
import Localizer from '../Localizer.vue';
import {useAppStore} from '@/store/app';
import {useDark , useToggle} from '@vueuse/core'
import { storeToRefs } from 'pinia';
import SearchBar from '@/components/website/home/SearchBar.vue';
import { THEME } from '~/api/home/endpoints';

const store = useAppStore();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const toggle = ref<boolean> (false)
const{searchBarAtTheTop, mainTheme}  = storeToRefs(store); 
const toolBar  = ref<boolean>(false)
const mNavbar = ref<boolean>(false)
watch(toggle , ()=>{
  
  toggleDark();

  
  mainTheme.value = toggle.value ?'light':'dark'
  // localStorage.setItem('theme', useDark().value?'light':'dark')
  console.log('vuetify : ',mainTheme.value);
})
</script>

<template>
  <client-only>
    <nav class="tw-bg-day-surface tw-fixed  tw-top-0 tw-left-0 tw-right-0 tw-bg-surface tw-z-40 tw-shadow-md tw-mb-4">
      <div class=" tw-flex tw-justify-between tw-items-center lg:tw-grid lg:tw-grid-cols-10 tw-py-3 ">


<div class="tw-col-span-2 tw-flex tw-justify-center tw-items-start  tw-px-4 lg:tw-px-10 tw-flex-col">
<router-link to="/" >  <img :src="Logo" alt="Logo" class="tw-pt-2 tw-w-[100px]"/></router-link>

</div>
<div class="tw-col-span-6 tw-px-10 lg:tw-flex tw-justify-center tw-items-center tw-hidden">
<SearchBar v-if="searchBarAtTheTop" :atNav="true"/>

<!-- <Localizer/> -->
</div>
<div class=" tw-hidden tw-col-span-2 lg:tw-grid tw-grid-cols-3 tw-pl-10  tw-gap-10 tw-justify-center">

<router-link to="/items/new" class="tw-mt-1 tw-min-w-[100px] tw-text-[#EE2E53] ">
 start Listing
</router-link>

<router-link to="/login">
  <VBtn class="tw-rounded-full login-btn"  >Login</VBtn>
</router-link>
<VBtn  v-if="!toolBar" @click="toolBar=!toolBar" variant="text"><img class="tw-w-[24px]" :src="MenuIcon" alt=""></VBtn>
<VBtn v-else @click="toolBar=!toolBar" variant="text"><VIcon size="30">mdi-close</VIcon></VBtn>
<!-- tool bar-->
<div v-if="toolBar"  class=" tw-z-40
tw-flex tw-flex-col tw-bg-white tw-p-5 tw-rounded-lg tw-shadow-lg
tw-absolute tw-top-16 tw-right-3 tw-w-[150px] tw-min-h-[50px] ">
<RouterLink  @click="toolBar=false" class="tw-text-black  tw-z-40 hover:tw-text-day-primary"  to="">Rentals</RouterLink>


   <RouterLink @click="toolBar=false" class="tw-text-black tw-cursor-pointer tw-z-40 hover:tw-text-day-primary" to="">Favourites</RouterLink>

  <RouterLink  @click="toolBar=false" class="tw-text-black hover:tw-text-day-primary tw-cursor-pointer tw-z-40" to="">Profile</RouterLink>
  <RouterLink  @click="toolBar=false" class="tw-text-black  hover:tw-text-day-primary tw-cursor-pointer tw-z-40" to="">My items</RouterLink>
  <div class="tw-z-40" >
    <VDivider  @click="toolBar=false" class="tw-py-1"></VDivider>
    <RouterLink class="tw-text-red-400    tw-cursor-pointer" to="/">Logout</RouterLink>
  </div>

  
</div>
</div>
<!-- mobile navbar content and btn    -->
<div class="lg:tw-hidden tw-block">
  <VBtn  v-if="!mNavbar" @click="mNavbar=!mNavbar" variant="text"><img :src="MenuIcon" alt=""></VBtn>
<VBtn v-else @click="mNavbar=!mNavbar" variant="text"><VIcon size="30">mdi-close</VIcon></VBtn>

</div>
</div>
<div>
  <div   v-if="mNavbar" class="tw-flex tw-flex-col lg:tw-hidden tw-px-4">
    <RouterLink  @click="mNavbar=false" class="tw-text-black  tw-z-40 hover:tw-text-day-primary"  to="/login">Login</RouterLink>


   <RouterLink @click="mNavbar=false" class="tw-text-black tw-cursor-pointer tw-z-40 hover:tw-text-day-primary" to="items/new">Start Listing</RouterLink>

<RouterLink  @click="mNavbar=false" class="tw-text-black  tw-z-40 hover:tw-text-day-primary"  to="">Rentals</RouterLink>


   <RouterLink @click="mNavbar=false" class="tw-text-black tw-cursor-pointer tw-z-40 hover:tw-text-day-primary" to="">Favourites</RouterLink>

  <RouterLink  @click="mNavbar=false" class="tw-text-black hover:tw-text-day-primary tw-cursor-pointer tw-z-40" to="">Profile</RouterLink>
  <RouterLink  @click="mNavbar=false" class="tw-text-black  hover:tw-text-day-primary tw-cursor-pointer tw-z-40" to="">My items</RouterLink>
  <div class="tw-z-40" >
    <VDivider  @click="mNavbar=false" class="tw-py-1"></VDivider>
    <RouterLink class="tw-text-red-400    tw-cursor-pointer" to="/">Logout</RouterLink>
  </div>

</div>
</div>
    </nav>
  </client-only>
</template>

<style lang="scss">
nav{
  box-shadow: 0px 19px 25px -17px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 19px 25px -17px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 19px 25px -17px rgba(0,0,0,0.75);
}
.login-btn {

text-transform: capitalize;
background: radial-gradient(86.09% 235.32% at 7.86% 13.67%, #EE5C2E 0%, #EE2E53 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
/* VBtn_shadow */
box-shadow: 0px 15px 25px rgba(238, 46, 83, 0.25);
border-radius: 100px;
color:#fff


}
</style>