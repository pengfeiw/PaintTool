<template>
    <div>
        <canvas ref="cav" width="60px" height="30px"></canvas>
    </div>
</template>

<script src="./ShapeItem.js">
</script>

<style scoped>
    div{
        margin:1px;
        padding: 0px;
    }
    canvas{
        border: 1px solid white;
        background-color:cornsilk;
        margin: 0px;
    }

    canvas:hover{
        border:1px solid blue;
    }
</style>
