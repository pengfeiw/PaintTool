<template>
  <div class="flex">
    <!-- <div v-for="(shape,index) in shapes" :key="index">
      <shapeItem :shapeName="shape"/>
    </div> -->
    <shapeItem v-for="(shape, name) in shapes" :shapeImg="shape" :key="name" /> 
  </div>
</template>

<script src="./ShapePanel.js">
</script>

<style scoped>
  .flex{
    display: flex;
  }
</style>