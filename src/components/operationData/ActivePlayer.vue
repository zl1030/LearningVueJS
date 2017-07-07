<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello {{ username }}</h2>
    <h2>开关状态:{{value1}}</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <el-button type="primary" @click.native.prevent="logout">退出</el-button>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <el-switch
      v-model="value1"
      on-text=""
      off-text="">
    </el-switch>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '活跃用户',
        value1: true,
        username: 'unknown'
      }
    },
    mounted () {
      var user = sessionStorage.getItem('access-user')
      if (user) {
        user = JSON.parse(user)
        console.log('user:' + user)
        this.username = user.name || ''
      }
      this.drawLine()
    },
    methods: {
      logout () {
        var _this = this
        this.$confirm('确认退出吗?', '提示', {}).then(() => {
          _this.$router.push('/login')
        }).catch(() => {

        })
      },
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: []
//            data: [5, 20, 36, 10, 10, 20]
          }]
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
