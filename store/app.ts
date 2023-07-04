import { defineStore } from "pinia";
import { SliderItem, Tag } from "~/api/home";
import {  HOME_API, SLIDER_API, THEME } from "~/api/home/endpoints";
const {GET,POST, DELETE} = useApi();
export const useAppStore = defineStore('app',()=>{
const sliderItems = ref<SliderItem[]> ([]);
const searchBarAtTheTop= ref<boolean>(false);
const mainTheme = ref<string>(THEME.DAY);
const dialog = ref<boolean> (false);
const tags = ref<Tag[]>([])
async function getSliderItems (){
    try {
        const res  = await GET<SliderItem[]>(SLIDER_API.GET_SLIDER);
       sliderItems.value = res.data.data; 
   sliderItems.value.forEach((item:SliderItem)=>{
    console.log(item);
    
   })
       
    } catch (error) {
        throw(error);
    }
}
async function getTags (){
    try {
        const res = await   GET<Tag[]>(HOME_API.ALL_TAGS);
        tags.value = res.data.data;
    } catch (error) {
        throw(error);
    }
}
function matchTags (tag:string){
    
getTags();
let color =tags.value.filter((t:Tag)=>{
return tag===t.tag
})[0]
}
function toggleDialog (){
    dialog.value = !dialog.value ; 
}
return  {
   sliderItems ,
   dialog , 
   mainTheme,
   searchBarAtTheTop,
   
   getSliderItems,
   toggleDialog
}
})