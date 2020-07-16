<template>
  <div class="flex-box">
    <div class="line-width panel-item">
      <el-dropdown>
        <img :src="IMGS.LineWidth" alt />
        <div class="textDiv">粗细</div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <img :src="IMGS.LineW1" alt="1pt" />
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="IMGS.LineW2" alt="2pt" />
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="IMGS.LineW3" alt="3pt" />
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="IMGS.LineW4" alt="4pt" />
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="IMGS.LineW5" alt="5pt" />
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="IMGS.LineW6" alt="7pt" />
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="IMGS.LineW7" alt="9pt" />
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="IMGS.LineW8" alt="9pt" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="line-type panel-item">
      <el-dropdown>
        <img :src="IMGS.LineType" alt />
        <div class="textDiv">线型</div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><img :src="IMGS.LineType1" alt="solid"></el-dropdown-item>
            <el-dropdown-item><img :src="IMGS.LineType2" alt="dash1"></el-dropdown-item>
            <el-dropdown-item><img :src="IMGS.LineType3" alt="dash2"></el-dropdown-item>    
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