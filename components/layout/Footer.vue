<script setup lang="ts">
import Footer1 from '@/assets/svg/home/footer1.svg'
import Footer2 from '@/assets/svg/home/footer2.svg'
import  Logo from '@/assets/svg/home/LogoA.svg';
import AppStore from  '@/assets/svg/home/app-store.svg';
import PlayStore from '@/assets/svg/home/play-store.svg';
import FB  from '@/assets/svg/home/fb.svg';
import Insta from '@/assets/svg/home/insta.svg';
import Ln from '@/assets/svg/home/ln.svg';
import Snap from '@/assets/svg/home/snap.svg';
import Tiktok from '@/assets/svg/home/tiktok.svg';
import Twitter from '@/assets/svg/home/twitter.svg';
// const socialMediaItems = window.document.querySelectorAll('.socialmedia-icon');
// for(var i=0 ; i<socialMediaItems.length ; i++){
//   socialMediaItems[i].addEventListener('mouseover',()=>{
//     socialMediaItems[i].classList.remove('bw')
//     console.log('damnn');
    
//   })
//   socialMediaItems[i].addEventListener('mousleave',()=>{
//     socialMediaItems[i].classList.add('bw')
//   })

// }

const fbHoverd = ref(false);
const instaHoverd = ref(false);
const snapHoverd = ref(false);
const twitterHoverd = ref(false);
const lnHoverd = ref(false);
const tiktokHoverd = ref(false);

</script>
<template>
<client-only>
  <footer class="tw-bg-[#EBEAF0] tw-h-auto tw-min-h-[300px] tw-relative  ">
<img :src="Footer1" class=" lg:tw-block   tw-absolute tw-bottom-[40px] tw-left-0 tw-w-[100px] lg:tw-w-[250px]" alt="">
<img :src="Footer2" class="  tw-w-[250px] tw-absolute tw-top-0 tw-right-0 lg:tw-w-[400px]" alt="">
<div class=" tw-h-auto tw-min-h-[300px]">

<!-- footer content is here   . . . . -->
<div class=" tw-pt-20 ">
<div class="lg:tw-px-32 tw-px-8">
  
  <img :src="Logo" alt="">
</div>
</div>
<div class="tw-grid tw-grid-cols-3 lg:tw-grid-cols-5 tw-px-5 lg:tw-px-40 tw-gap-5 z-50">
<div class="tw-flex  tw-px-3 tw-flex-col tw-justify-start tw-gap-y-1 tw-pt-5 ">
  <router-link to="/terms" class="tw-text-black px-2 tw-text-sm lg:tw-text-lg ">Terms of service</router-link>
  <router-link to="/privacy" class="tw-text-black px-2 tw-text-sm lg:tw-text-lg">Privacy policy</router-link>
</div>

<div class="tw-flex  tw-px-3 tw-flex-col tw-justify-start tw-gap-y-1 tw-pt-5 ">
  <router-link to="/fqas" class="tw-text-black px-2 tw-text-sm lg:tw-text-lg">FQAs</router-link>
  <router-link to="/gurantee" class="tw-text-black px-2 tw-text-sm lg:tw-text-lg">Guarantee</router-link>
</div>
<div class="tw-flex  tw-px-3 tw-flex-col tw-justify-start tw-gap-y-1 tw-pt-5 ">
 
  <router-link to="/mission" class="tw-text-black px-2 tw-text-sm lg:tw-text-lg">Our Mission</router-link>
</div>
<div class="tw-flex  tw-px-3 tw-flex-col tw-justify-center lg:tw-justify-end tw-items-center tw-gap-y-1  lg:tw-col-span-2  tw-col-span-3">
<div class="tw-flex tw-flex-row tw-gap-x-5"><a class="tw-lowercase">
<img :src="AppStore" class=" tw-w-[120px] lg:tw-w-[150px]"/>

</a>
<a class="tw-lowercase">
<img :src="PlayStore" class="tw-w-[120px] lg:tw-w-[150px]"/>

</a></div>
<div class="tw-flex lg:tw-justify-start lg:tw-pl-14 tw-justify-center lg:tw-mt-0 tw-mt-4   tw-items-center tw-w-full">
 <a href="" @mouseleave="instaHoverd=false" @mouseenter="instaHoverd=true"> <img :class="!instaHoverd?'bw':''"   :src="Insta"  class="tw-w-[50px]   tw-h-[40px] socialmedia-icon   tw-cursor-pointer"  alt=""></a>
 <a href="" @mouseleave="twitterHoverd=false" @mouseenter="twitterHoverd=true"> <img :class="!twitterHoverd?'bw':''"   :src="Twitter"  class="tw-w-[50px] tw-h-[40px] socialmedia-icon   tw-cursor-pointer "  alt=""></a>
  <a href=""  @mouseleave="fbHoverd=false" @mouseenter="fbHoverd=true"> <img :src="FB" :class="!fbHoverd?'bw':''"  class="tw-w-[50px]      tw-h-[40px] socialmedia-icon   tw-cursor-pointer   "  alt=""></a>

  <a href="" @mouseleave="snapHoverd=false" @mouseenter="snapHoverd=true"> <img :src="Snap"  :class="!snapHoverd?'bw':''"   class="tw-w-[50px]    tw-h-[38px] socialmedia-icon   tw-cursor-pointer"  alt=""></a>
  <a href="" @mouseleave="tiktokHoverd=false" @mouseenter="tiktokHoverd=true"> <img :src="Tiktok" :class="!tiktokHoverd?'bw':''"    class="tw-w-[50px]  tw-h-[36px] socialmedia-icon   tw-cursor-pointer"  alt=""></a>

</div>
</div>
</div>

</div>
<p class="tw-h-[40px] tw-bg-[#fff] tw-w-full tw-text-center tw-flex tw-justify-center tw-items-center">&copy; YJOZ General Trading L.L.C 2023 </p>
</footer>

</client-only>
</template>
<style>
.bw{
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

</style>