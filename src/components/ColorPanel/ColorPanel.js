import ColorItem from "@/components/ColorItem/ColorItem.vue";
import {color} from "@/const.js";

export default {
    data(){
        return {
            colorGroups: color,
            item:[1, 2, 3]
        }
    },
    components:{
        ColorItem
    }
};