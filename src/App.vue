<template>
  <div id="app">
    <el-collapse>
      <el-collapse-item title="颜色">
        <ColorPanel />
      </el-collapse-item>
      <el-collapse-item title="形状"></el-collapse-item>
    </el-collapse>
    <!-- <ShapePanel/> -->
  </div>
</template>

<script>
import ColorPanel from '@/components/ColorPanel/ColorPanel.vue';
// import ShapePanel from '@/components/ShapePanel/ShapePanel.vue';

export default {
  name: 'App',
  components: {
    // ShapePanel,
    ColorPanel
  }
}
</script>

<style>

</style>
