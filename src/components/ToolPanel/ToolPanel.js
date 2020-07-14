import {toolImage} from "@/const.js";
import ToolItem from "@/components/ToolItem/ToolItem.vue";

export default{
    data(){
        return {
            toolImages: toolImage
        }
    },
    components:{
        ToolItem
    }
}