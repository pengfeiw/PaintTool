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
    created(){
    },
    mounted() {
        this.$store.state.ctx = this.$refs.cav.getContext('2d');
        this.updateCanvasSize();
        window.addEventListener("resize", this.updateCanvasSize);
    },
    computed:{
        ctx(){
            return this.$store.state.ctx;
        }
    },
    methods: {
        mouseDown(e) {
            this.lastPosition.x = e.offsetX;
            this.lastPosition.y = e.offsetY;
            if (e.button === 0){
                this.isDrawing = true;
            }
        },
        mouseUp() {
            this.isDrawing = false;
        },
        mouseMove(e) {
            if (this.isDrawing) {
                this.drawLine(this.lastPosition.x, this.lastPosition.y, e.offsetX, e.offsetY);
                this.lastPosition = {x:e.offsetX, y:e.offsetY};
            }
        },
        mouseLeave(){
            this.isDrawing = false;
        },
        //调整canvas大小: canvas调整大小后，canvas上内容会自动清空，所以需要记录图形，然后重新绘制到canvas上
        updateCanvasSize(){
            var cavImg = this.ctx.getImageData(0, 0, this.$refs.cav.width, this.$refs.cav.height);
            this.$refs.cav.width = this.$refs.cav.parentElement.offsetWidth;
            this.$refs.cav.height = this.$refs.cav.parentElement.offsetHeight;
            this.ctx.putImageData(cavImg, 0, 0);
        },
        drawLine(x1, y1, x2, y2){
            this.$store.commit("drawLine", {x1, y1, x2, y2});
        }
    }
}