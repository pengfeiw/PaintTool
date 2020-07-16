import Vue from "vue";
import Vuex from "vuex";
import {tools} from "@/const.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        ctx: null,
        drawColor: "black",
        canvasHistory: [],
        canvasHistoryIndex: -1,
        tool: tools.Pen.name,
    },
    mutations: {
        changeColor(state, color) {
            state.drawColor = color;
        },
        //绘制线段：(x1, y1)--->(x2, y2)
        drawLine(state, { x1, y1, x2, y2 }) {
            var context = state.ctx;
            context.strokeStyle = state.drawColor;
            context.beginPath();
            context.lineWidth = 1;
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
            context.closePath();
        },
        //清空Canvas
        clearCanvas(state) {
            var ctx = state.ctx;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        },

        //撤销
        unDo(state) {
            if (state.canvasHistoryIndex > 0) {
                var ctx = state.ctx;
                state.canvasHistoryIndex--;
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.putImageData(state.canvasHistory[state.canvasHistoryIndex], 0, 0);
            }
        },
        //反撤销
        reDo(state) {
            if (state.canvasHistoryIndex < state.canvasHistory.length - 1) {
                var ctx = state.ctx;
                state.canvasHistoryIndex++;
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.putImageData(state.canvasHistory[state.canvasHistoryIndex], 0, 0);
            }
        },

        //record canvas
        recordCanvas(state) {
            var cavImg = state.ctx.getImageData(0, 0, state.ctx.canvas.width, state.ctx.canvas.height);
            state.canvasHistory = state.canvasHistory.slice(0, state.canvasHistoryIndex + 1);
            state.canvasHistory.push(cavImg);
            state.canvasHistoryIndex = state.canvasHistory.length - 1;
        },

        //橡皮擦
        erasureCanvas(state, { x1, y1, x2, y2 }) {
            var context = state.ctx;
            //context.strokeStyle = state.drawColor;
            var backgroundColor = context.canvas.backgroundColor || "white";
            context.strokeStyle = backgroundColor;
            context.beginPath();
            context.lineWidth = 1;
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
            context.closePath();
        }
    }
});