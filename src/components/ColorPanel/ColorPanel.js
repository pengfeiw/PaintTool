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
    },
    methods:{
        setColor(value, rgbIndex){
            var color = this.$store.state.drawColor;
            var drawColorRgb = this.getColorRGB(color);
            var rgbArr = drawColorRgb.match(/\d+/g);
            rgbArr[rgbIndex] = value;
            this.$store.commit("changeColor", `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`);
        },

        getColorRGB(color){
            var d = document.createElement("div");
            d.style.color = color;
            document.body.appendChild(d);
            var rgb = window.getComputedStyle(d).color;
            document.body.removeChild(d);
            return rgb;
        }
    }
};