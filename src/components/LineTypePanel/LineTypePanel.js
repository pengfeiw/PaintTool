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
        },
        changeLineDash(value){
            switch (value) {
                case "1":
                    this.$store.commit("changeLineDash", []);
                    break;
                case "2":
                    this.$store.commit("changeLineDash", [20, 10]);
                    break;
                case "3":
                    this.$store.commit("changeLineDash", [10]);
                    break;
                default:
                    break;
            }
        }
    }
}