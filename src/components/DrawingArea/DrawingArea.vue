<template>
    <div>
        <canvas ref="cav" @mousedown="mouseDown($event)" @mouseup="mouseUp($event)" @mousemove="mouseMove($event)" @mouseleave="mouseLeave"></canvas>
    </div>
</template>

<script src="./DrawingArea.js"></script>

<style scoped>
    div{
        border:1px solid darkorange
    }
</style>