<template>
  <div id="app">
    <TopBar />
    <div class="flex-box">
      <el-collapse class="tool-part">
        <el-collapse-item title="颜色">
          <ColorPanel />
        </el-collapse-item>
        <el-collapse-item title="形状">
          <ShapePanel />
        </el-collapse-item>
        <el-collapse-item title="工具"></el-collapse-item>
      </el-collapse>
      <DrawingArea class="drawing-part"/>
      <!-- <ShapePanel/> -->
    </div>
  </div>
</template>

<script>
import ColorPanel from "@/components/ColorPanel/ColorPanel.vue";
import TopBar from "@/components/TopBar/TopBar.vue";
import DrawingArea from "@/components/DrawingArea/DrawingArea.vue";
import ShapePanel from '@/components/ShapePanel/ShapePanel.vue';

export default {
  name: "App",
  components: {
    ShapePanel,
    TopBar,
    ColorPanel,
    DrawingArea
  }
};
</script>

<style>
.flex-box {
  display: flex;
  height: 100%;
}
.tool-part{
  width:200px;
  margin-right:20px;
}

.drawing-part{
  flex-grow: 1;
}

#app{
  display:flex;
  flex-direction:column;
  height:100vh;
}
</style>
