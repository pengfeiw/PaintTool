import Vue from "vue";
import Vuex from "vuex";
import { tools } from "@/const.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        ctx: null,
        drawColor: "black",
        canvasHistory: [],
        canvasHistoryIndex: -1,
        tool: tools.Pen.name,
        isDrawShape: false,
        shapeTool: null,
    },
    mutations: {
        changeColor(state, color) {
            state.drawColor = color;
        },
        changeLineWidth(state, lineW) {
            state.ctx.lineWidth = lineW * 1;
        },
        changeLineDash(state, lineDash){
            state.ctx.setLineDash(lineDash);
        },
        //绘制线段：(x1, y1)--->(x2, y2)
        drawLine(state, { x1, y1, x2, y2 }) {
            var context = state.ctx;
            context.strokeStyle = state.drawColor;
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
            context.closePath();
        },
        //绘制矩形：
        drawRect(state, { x1, y1, x2, y2 }) {
            var context = state.ctx;
            context.strokeStyle = state.drawColor;
            var width = x2 - x1;
            var height = y2 - y1;
            context.strokeRect(x1, y1, width, height);
        },
        drawEllipse(state, { x1, y1, x2, y2 }) {
            var centerX = 0.5 * (x1 + x2);
            var centerY = 0.5 * (y1 + y2);
            var radiusX = 0.5 * Math.abs(x1 - x2);
            var radiusY = 0.5 * Math.abs(y1 - y2);
            var context = state.ctx;
            context.strokeStyle = state.drawColor;
            context.beginPath();
            context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
            context.stroke();
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

        //将画布恢复到指定的HistoryIndex
        moveToHistoryByIndex(state, { historyIndex }) {
            if (historyIndex <= state.canvasHistoryIndex) {
                var ctx = state.ctx;
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.putImageData(state.canvasHistory[historyIndex], 0, 0);
                state.canvasHistoryIndex = historyIndex;
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
            var backgroundColor = context.canvas.backgroundColor || "white";
            var originLineDash = context.getLineDash();
            context.strokeStyle = backgroundColor;
            context.setLineDash([]);
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
            context.closePath();
            context.setLineDash(originLineDash);
        }
    }
});