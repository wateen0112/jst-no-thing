<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {useProductStore} from '@/store/product';
import UserImg from  '@/assets/svg/product/user.svg'
const store = useProductStore();
const {product}= storeToRefs(store);

</script>
<template>
  <div class="tw-mt-5 tw-min-h-[100px] tw-rounded-2xl tw-shadow-md ">
   <div class="tw-p-4">
    <p>Item owned by <RouterLink to="../profile/1">{{ product.owner.first_name}}  {{ product.owner.last_name}}</RouterLink> </p>
  <div class="tw-grid tw-grid-cols-7 tw-mt-4">
<div>
<div class="img-box tw-w-[40px] tw-h-[40px] tw-rounded-full">
  <img class="tw-w-[40px] tw-h-[40px]   tw-border tw-border-solid  tw-rounded-full " :src="product.owner.image??UserImg" alt="">
</div>

</div>
<div class="tw-col-span-6">
  <p class="tw-text-leightGrey">{{ product.owner.about_me??'Start renting today and experince the benifits'}}</p>
</div>
  </div>
  <!-- action VBtns --> 
  <div class="tw-flex tw-justify-center  tw-items-center tw-gap-8">

    <RouterLink to="../profile/1">  <VBtn  height="25px" width="160px" :rounded="true" color="blueGrey" variant="elevated"><span class=" tw-text-xs tw-capitalize tw-text-black">Message {{ product.owner.first_name }}</span></VBtn></RouterLink>
    <RouterLink to="../profile/1"><VBtn  height="25px" width="160px" :rounded="true" color="blueGrey" variant="elevated"><span class="   tw-text-xs  tw-capitalize tw-text-black">See {{ product.owner.first_name }}` pofile </span></VBtn></RouterLink>


  </div>
  </div>
  </div>
</template> 