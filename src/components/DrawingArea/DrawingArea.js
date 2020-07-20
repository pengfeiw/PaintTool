import { tools } from "@/const.js";
import { shape } from "@/const.js";

export default {
    data() {
        return {
            lastPosition: {
                x: 0,
                y: 0
            },
            isDrawing: false
        }
    },
    created() {
    },
    mounted() {
        this.$store.state.ctx = this.$refs.cav.getContext('2d');
        this.updateCanvasSize();
        window.addEventListener("resize", this.updateCanvasSize);
        this.$store.commit("recordCanvas");
    },
    computed: {
        ctx() {
            return this.$store.state.ctx;
        }
    },
    methods: {
        mouseDown(e) {
            this.lastPosition.x = e.offsetX;
            this.lastPosition.y = e.offsetY;
            if (e.button === 0) {
                this.isDrawing = true;
            }
        },
        mouseUp() {
            if (this.isDrawing) {
                this.$store.commit("recordCanvas");
            }
            this.isDrawing = false;
        },
        mouseMove(e) {
            if (this.isDrawing) {
                if (this.$store.state.isDrawShape) {
                    this.moveToHistoryByIndex(this.$store.state.canvasHistoryIndex);
                    //绘制形状
                    switch (this.$store.state.shapeTool) {
                        case shape.LINE:
                            this.drawLine(this.lastPosition.x, this.lastPosition.y, e.offsetX, e.offsetY);
                            break;
                        case shape.RECT:
                            this.drawRect(this.lastPosition.x, this.lastPosition.y, e.offsetX, e.offsetY);
                            break;
                        case shape.CIRCLE:
                            this.drawEllipse(this.lastPosition.x, this.lastPosition.y, e.offsetX, e.offsetY);
                            break;
                        default:
                            break;
                    }
                }
                else {
                    //画笔或者橡皮擦
                    switch (this.$store.state.tool) {
                        case tools.Pen.name:
                            this.drawLine(this.lastPosition.x, this.lastPosition.y, e.offsetX, e.offsetY);
                            break;
                        case tools.Eraser.name:
                            this.erasureCanvas(this.lastPosition.x, this.lastPosition.y, e.offsetX, e.offsetY);
                            break;
                        default:
                            break;
                    }
                    this.lastPosition = { x: e.offsetX, y: e.offsetY };
                }
            }
        },
        mouseLeave() {
            this.mouseUp();
        },
        //调整canvas大小: canvas调整大小后，canvas上内容会自动清空，所以需要记录图形，然后重新绘制到canvas上
        updateCanvasSize() {
            var cavImg = this.ctx.getImageData(0, 0, this.$refs.cav.width, this.$refs.cav.height);
            var cavLineDash = this.ctx.getLineDash();
            var cavLineW = this.ctx.lineWidth;
            this.$refs.cav.width = this.$refs.cav.parentElement.offsetWidth;
            this.$refs.cav.height = this.$refs.cav.parentElement.offsetHeight;
            this.ctx.putImageData(cavImg, 0, 0);
            this.ctx.setLineDash(cavLineDash);
            this.ctx.lineWidth = cavLineW;
        },
        drawLine(x1, y1, x2, y2) {
            this.$store.commit("drawLine", { x1, y1, x2, y2 });
        },
        drawRect(x1, y1, x2, y2){
            this.$store.commit("drawRect", {x1, y1, x2, y2});
        },
        drawEllipse(x1, y1, x2, y2){
            this.$store.commit("drawEllipse", {x1, y1, x2, y2});
        },
        erasureCanvas(x1, y1, x2, y2) {
            this.$store.commit("erasureCanvas", { x1, y1, x2, y2 });
        },
        moveToHistoryByIndex(index){
            this.$store.commit("moveToHistoryByIndex", {historyIndex: index});
        }
    }
}