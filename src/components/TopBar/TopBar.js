import {mapMutations} from 'vuex';
import { saveAs } from 'file-saver';

export default{
    methods:{
         ...mapMutations([ "unDo", "reDo"]),
        clearCanvas(){
            this.$store.commit("clearCanvas");
            this.$store.commit("recordCanvas");
        },
        saveCanvas(){
            var canvas = this.$store.state.ctx.canvas; 
            canvas.toBlob(function(blob) {
                saveAs(blob, "pretty image.png");
            });
        }
    }
}