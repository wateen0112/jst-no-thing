<script  setup lang="ts">
const props = defineProps({
    padding:{
        type:String,
    default:5   
    },
    paddingX:{
        type:String,
    default:5    
    },
    paddingY:{
        type:String,
    default:5    
    },
    rounded:{
        type:String||Boolean
        ,default:100
    }
    ,width:{
    type:String ,
    default:'auto'

    }   ,height:{
    type:String ,
    default:'auto'

    },
    color:{
        type:String,
        defaut:''
    }
,text:{
    type:Boolean , 
    default:false
}
})

const totalPadding = computed(()=>{
    return props.padding!=='5' ? `tw-px-[${props.paddingX}px] tw-py-[${props.paddingY}px]`:`tw-p-[${props.padding}px] `;
})
const width = computed(()=>{
    return props.width=='0'?`tw-w-auto`:`tw-w-[${props.width}px]`
})
const height = computed(()=>{
    return props.height=='auto'?`tw-h-auto`:`tw-h-[${props.height}px]`
})
 const raduis = computed(()=>{
return props.rounded ||parseInt(props.rounded)>=80? 'tw-rounded-full': parseInt(props.rounded)<12 ?'tw-rounded-sm':parseInt(props.rounded)<30 ?'tw-rounded-md':parseInt(props.rounded)<40 ?'tw-rounded-lg':parseInt(props.rounded)>80 ?'tw-rounded-full':'tw-rounded-null'
 })

</script>
<template>
    <button type="button" :class="`${!text?'custom-btn':''} ${totalPadding} ${width}  ${height} ${raduis}`">

        <slot></slot>
    </button>
</template>
<style>
.custom-btn {

text-transform: capitalize;
background: radial-gradient(86.09% 235.32% at 7.86% 13.67%, #EE5C2E 0%, #EE2E53 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
/* VBtn_shadow */
box-shadow: 0px 15px 25px rgba(238, 46, 83, 0.25);



display: flex ;
justify-content: center;
align-items: center;
color:#fff


}
.custom-btn:hover {
    box-shadow: 0px 5px 10px rgba(141, 127, 130, 0.25);

}
</style>