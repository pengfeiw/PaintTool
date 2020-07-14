<template>
    <div>
        <img :src="toolImg" :alt="toolName">
    </div>
</template>

<script src="./ToolItem.js"></script>

<style scoped>
    img{
        height:100%;
        width:100%;
        margin:0px;
        border:1px solid white;
    }
    div{
        width:48px;
        height:48px;
        padding:0px;
        margin:1px;
    }
    img:hover{
        border:1px solid blue;
    }
</style>