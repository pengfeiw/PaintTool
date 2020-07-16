<template>
  <div>
    <div v-for="(colorGroup, index) in colorGroups" class="flex" :key="index">
      <ColorItem v-for="(color, index) in colorGroup" :backgroundColor="color" :key="index"></ColorItem>
    </div>
    <el-divider></el-divider>
    <div class="flex">
      <div class="selectColor" :style="{backgroundColor:this.$store.state.drawColor}"></div>
      <div>
        RGB:
        <input type="text" class="inputR" placeholder="R" value="0" @change="setColor($event.target.value, 0)"/>
        <input type="text" class="inputG" placeholder="G" value="0" @change="setColor($event.target.value, 1)"/>
        <input type="text" class="inputB" placeholder="B" value="0" @change="setColor($event.target.value, 2)"/>
      </div>
    </div>
  </div>
</template>
<script src="./ColorPanel.js"></script>
<style scoped>
.flex {
  display: flex;
}
.selectColor {
  width: 35px;
  height: 35px;
  border: 1px solid gray;
  flex-shrink: 0;
}

.selectColor + div {
  margin-left: 5px;
  vertical-align: middle;
  padding-top:8px;
}

input {
  width: 20px;
}
input+input {
    margin-left:2px;
}
</style>