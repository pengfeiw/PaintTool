import {IMGS} from "@/const.js";

export default{
    data(){
        return {
            IMGS
        }
    },
    methods:{
        changeWidth(value){
            this.$store.commit("changeLineWidth", value);
        }
    }
}