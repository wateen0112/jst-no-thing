\<script setup>
import LogoY from '@/assets/svg/home/LogoY.svg';
import AccessMore from '@/assets/svg/home/access-more.svg';
import SaveMoney from '@/assets/svg/home/save-money.svg';
import HelpPlanet from '@/assets/svg/home/help-planet.svg';

</script>
<template>
  <div class="tw-w-full  tw-flex-col tw-flex tw-mt-14 tw-justify-center tw-items-center  ">
<img class=" tw-w-[150px] lg:tw-w-[200px]"  :src="LogoY" />
<p class="tw-text-center lg:tw-text-2xl tw-py-3">Do it worry free with YJOZ Gurentee Cover up to 20,000 AED </p>
<VBtn color="blueGrey" class="tw-text-black tw-mx-6 tw-mb-5  " rounded> <RouterLink  class="tw-capitalize "  to="/gurantee">Learn more</RouterLink></VBtn> 
<div class=" tw-grid lg:tw-grid-cols-3 lg:tw-px-20 tw-bg-blueGrey tw-w-full tw-pb-5 lg:tw-h-[300px] tw-bg-day-blueGrey ">
<div class="tw-flex tw-justify-center tw-items-center tw-flex-col">
    <img  class=" tw-w-[80px] lg:tw-w-[130px]" :src="AccessMore"/>
    <h2 class="lg:tw-block tw-hidden">Access More</h2>
    <h4 class="lg:tw-hidden">Access More</h4>
    <p class=" tw-text-sm lg:tw-text-xl">Get Things Done</p>
</div>
<div class="tw-flex tw-justify-center tw-items-center tw-flex-col">
    <img  class=" tw-w-[80px] lg:tw-w-[130px]" :src="SaveMoney"/>
    <h2 class="lg:tw-block tw-hidden">Save Money</h2>
    <h4 class="lg:tw-hidden">Save Money</h4>
    <p class="lg:tw-text-xl">Buy Less share more</p>
</div>
<div class="tw-flex tw-justify-center tw-items-center tw-flex-col">
    <img  class=" tw-w-[80px] lg:tw-w-[130px]" :src="HelpPlanet"/>
    <h2 class="lg:tw-block tw-hidden">Help the planet</h2>
    <h4 class="lg:tw-hidden">Help the planet</h4>
    <p class="lg:tw-text-xl">Reduse Waste</p>
</div>

</div>

  </div>
</template>