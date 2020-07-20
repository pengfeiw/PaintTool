import {mapMutations} from 'vuex';

export default{
    methods:{
         ...mapMutations([ "unDo", "reDo"]),
        clearCanvas(){
            this.$store.commit("clearCanvas");
            this.$store.commit("recordCanvas");
        }
    }
}