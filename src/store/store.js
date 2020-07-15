import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        ctx: null,
        drawColor: "black"
    },
    mutations: {
        changeColor(state, color){
            state.drawColor = color;
        },
        //绘制线段：(x1, y1)--->(x2, y2)
        drawLine(state, {x1, y1, x2, y2}) {
            var context = state.ctx;
            context.strokeStyle = state.drawColor;
            context.beginPath();
            context.lineWidth = 1;
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
            context.closePath();
        },
        clearCanvas(state){
            var ctx = state.ctx;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
    }
});