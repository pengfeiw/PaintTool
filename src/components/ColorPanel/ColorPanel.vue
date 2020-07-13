<template>
    <div>
       <div v-for="(colorGroup, index) in colorGroups" class="flex" :key="index">
           <ColorItem v-for="(color, index) in colorGroup" :backgroundColor="color" :key="index"></ColorItem>
       </div>
    </div>
</template>
<script src="./ColorPanel.js"></script>
<style scoped>
    .flex{
        display: flex;
    }
</style>