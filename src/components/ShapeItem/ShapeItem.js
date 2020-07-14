import {shape} from "@/const.js";
//import ShapePanel from "../ShapePanel/ShapePanel";

export default{
    props:{
        shapeName: String
    },
    mounted(){
        var canvas = this.$refs.cav;
        const ctx = canvas.getContext('2d');
        this.drawShape(ctx);
    },
    methods:{
        drawShape(ctx){
            switch (this.shapeName) {
                case shape.LINE:
                    ctx.beginPath();
                    ctx.moveTo(10, 10);
                    ctx.lineTo(50, 20);
                    ctx.stroke();
                    break;
                case shape.RECT:
                    ctx.beginPath();
                    ctx.moveTo(7, 7);
                    ctx.lineTo(53, 7);
                    ctx.lineTo(53, 23);
                    ctx.lineTo(7, 23);
                    ctx.closePath();
                    ctx.stroke();
                    break;
                case shape.CIRCLE:
                    ctx.beginPath();
                    ctx.ellipse(30, 15, 20, 10, 0, 0, 2 * Math.PI);
                    ctx.stroke();
                    break;
                default:
                    break;
            }
        }
    }
}