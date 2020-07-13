import ShapeItem from "@/components/ShapeItem/ShapeItem.vue";
import {shape} from "@/const.js";

export default{
    data(){
        return {
            shapes:shape
        };
    },
    components:{
        ShapeItem
    }
}