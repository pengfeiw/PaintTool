import {mapMutations} from 'vuex';

export default{
    methods:{
         ...mapMutations([ "unDo", "reDo"]),
        clearCanvas(){
            this.$store.commit("recordCanvas");
            this.$store.commit("clearCanvas");
        }
    }
}