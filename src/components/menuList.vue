<template>
  <div>
    <template v-for="item in items">
      <template v-if="is_obj(item.childrenList)">
          <el-submenu :index="item.indexTag">
              <template slot="title">{{ item.levelName }}</template>
              <recursive-menu :items="item.childrenList"></recursive-menu>
          </el-submenu>
      </template>
      <template v-else>
        <router-link :to="item.routePath"><el-menu-item :index="item.indexTag">{{ item.levelName }}</el-menu-item></router-link>
      </template>
    </template>
    </el-menu>
  </div>
</template>


<script>

export default {
  name: 'recursive-menu',
  props: ['items'],
  data: () => ({
    items: []
  }),
  methods: {
    is_obj (val) {
      return Object.prototype.toString.call(val) === '[object Array]'
    }
  }
}
</script>
