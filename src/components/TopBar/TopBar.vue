<template>
    <div>
        <el-button round @click="saveCanvas">保存</el-button>
        <!-- <el-button round>打开</el-button> -->
        <!-- <el-upload>
            <el-button round>打开</el-button>
        </el-upload> -->
        <el-button type="danger" round @click="clearCanvas">清空</el-button>
        <el-button id="back" icon="el-icon-back" round @click="unDo"></el-button>
        <el-button id="forward" icon="el-icon-right" round @click="reDo"></el-button>
    </div>
</template>

<script src="./TopBar.js"></script>

<style scoped>
    div{
        background-color: rgb(31, 41, 46);
        padding:5px 0px 5px 5px;
        display: flex;
        margin-bottom:20px;
    }
    
    #back{
        margin-left: 100px;
    }
    
</style>