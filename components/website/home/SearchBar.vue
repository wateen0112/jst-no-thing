<script setup lang="ts">

import  WButton from '@/components/website/main/WButton.vue';
const props = defineProps({
    atNav:{
        type:Boolean , 
        default:false
    }
})
</script>
<template>
<div class=" tw-h-auto tw-pb-2 tw-bg-blueGrey tw-min-w-[320px] tw-w-[95%] lg:tw-w-[500px] tw-px-5   tw-bg-day-blueGrey tw-flex tw-justify-center tw-items-center tw-rounded-full">
    <VTextField class="tw-mb-2  " :persistent-hint="true" :placeholder="atNav?'Bikes , books , cameras':''"></VTextField>
    <WButton v-if="!atNav" rounded="90"  class=" tw-mt-3 tw-px-5 tw-py-3"
    >Search</WButton>

</div>
</template>
