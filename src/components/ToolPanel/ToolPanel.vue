<template>
    <div class="flex">
        <ToolItem v-for="(imgUrl, name) in toolImages" :toolName="name" :toolImg="imgUrl" :key="name" />    
    </div>    
</template>

<script src="./ToolPanel.js"></script>

<style scoped>
    .flex{
        display: flex;
    }
</style>