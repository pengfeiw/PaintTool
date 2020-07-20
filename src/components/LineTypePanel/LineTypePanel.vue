<template>
  <div class="flex-box">
    <div class="line-width panel-item">
      <el-dropdown>
        <div>
          <img :src="IMGS.LineWidth" alt />
          <div class="textDiv">粗细</div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(LineWI, name) in IMGS.LineW" :key="name">
            <img
              :src="LineWI"
              :alt="name.match(/\d/)+'pt'"
              :widthIndex="name.match(/\d+/)"
              @click="changeWidth($event.target.attributes.widthIndex.nodeValue)"
            />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="line-type panel-item">
      <el-dropdown>
        <div>
          <img :src="IMGS.LineType" alt />
          <div class="textDiv">线型</div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item>
            <img :src="IMGS.LineType1" alt="solid" />
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="IMGS.LineType2" alt="dash1" />
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="IMGS.LineType3" alt="dash2" />
          </el-dropdown-item> -->
          <el-dropdown-item v-for="(LineDash, name) in IMGS.LineT" :key="name">
            <img 
            :src="LineDash"
            :dashIndex="name.match(/\d+/)"
            @click="changeLineDash($event.target.attributes.dashIndex.nodeValue)">
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script src="./LineTypePanel.js"></script>

<style scoped>
.flex-box {
  display: flex;
}

.textDiv {
  text-align: center;
  color: cornflowerblue;
}

.panel-item {
  border: 1px solid gray;
}

.panel-item:hover {
  border: 1px solid blue;
}

.panel-item + .panel-item {
  margin-left: 5px;
}
</style>