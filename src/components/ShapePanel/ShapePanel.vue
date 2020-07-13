<template>
  <div>
    <div v-for="(shape,index) in shapes" :key="index">
      <shapeItem :shapeImage="shape.shapeImg" :shapeName="shape.shapeName"/>
    </div>
  </div>
</template>

<script src="./ShapePanel.js">
</script>