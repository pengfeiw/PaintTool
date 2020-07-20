<template>
    <div>
        <!-- <canvas ref="cav" width="60px" height="30px"></canvas> -->
        <img :src="shapeImg" @click="useShapeTool">
    </div>
</template>

<script src="./ShapeItem.js">
</script>

<style scoped>
    div{
        margin:1px;
        padding: 0px;
    }
    img{
        border: 1px solid white;
        /* background-color:cornsilk; */
        margin: 0px;
    }

    img:hover{
        border:1px solid blue;
    }
</style>
