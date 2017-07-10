<template>
    <div class="main-content">
        <div class="outer">
            <router-view transition transition-mode="out-in"></router-view>
            v-on:viewData="main_viewData"

            <el-dialog
                title="提示"
            :visible.sync="dialogVisible"
            size="tiny"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
</el-dialog>

</div>
    </div>
</template>

<script>
export default {
  methods: {
    main_viewData () {
      console.log('main_viewData')
    }
  }
}
</script>
