<template>
    <div class="flex">
        <ToolItem v-for="tool in tools" :toolName="tool.name" :toolImg="tool.imgSrc" :key="tool.name" />    
    </div>    
</template>

<script src="./ToolPanel.js"></script>

<style scoped>
    .flex{
        display: flex;
    }
</style>