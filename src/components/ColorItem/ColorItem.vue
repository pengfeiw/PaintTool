<template>
    <div :style="{backgroundColor:backgroundColor}" @click="changeColor"></div>
</template>

<script src="./ColorItem.js"></script>

<style scoped>
    div{
        width:30px;
        height:30px;
        margin:1px;
        border:1px solid white;
    }
    div:hover{
        border:1px solid blue;
    }
</style>