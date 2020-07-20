//import {tools} from "@/const.js";

export default{
    props:{
        toolName: String,
        toolImg: String
    },
    methods:{
        changeTool(){
            this.$store.state.isDrawShape = false;
            this.$store.state.tool = this.toolName;
        }
    }
}