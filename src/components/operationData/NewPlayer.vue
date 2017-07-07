<template>
  <!--<div class="hello">-->
  <section class="chart-container">
    <el-row>
      <el-col :span="24">
        <h1>{{ msg }}</h1>
      </el-col>
      <el-col :span="24">
        <h2>Hello {{ username }}</h2>
        <h2>开关状态:{{value1}}</h2>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click.native.prevent="requestData1">请求1</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click.native.prevent="requestData2">请求2</el-button>
      </el-col>
      <el-col :span="12">
        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
      </el-col>
      <el-col :span="12">
        <el-switch
          v-model="value1"
          on-text=""
          off-text="">
        </el-switch>
      </el-col>
    </el-row>
  </section>
  <!--</div>-->
</template>

<script>
  import { requestLogin } from '../../api/api'
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    components: {
      ElCol,
      ElRow
    },
    name: 'hello',
    data () {
      return {
        msg: '新增玩家',
        value1: true,
        username: 'unknown',
        chartData: [],
        myChart: null
      }
    },
    mounted () {
      var user = sessionStorage.getItem('access-user')
      if (user) {
        user = JSON.parse(user)
        console.log('user:' + user)
        this.username = user.name || ''
      }
      // 获取页面上的图形DOM对象
      this.myChart = this.$echarts.init(document.getElementById('myChart'))
      this.chartRepaint()
    },
    methods: {
      logout () {
        var _this = this
        this.$confirm('确认退出吗?', '提示', {}).then(() => {
          _this.$router.push('/login')
        }).catch(() => {

        })
      },
      // 绘制图表
      chartRepaint () {
        this.myChart.setOption({
          title: {text: '图表测试1'},
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: this.chartData
          }]
        })
      },
      requestData1 () {
        var loginParams = {}

        requestLogin(loginParams).then(data => {
          this.chartData = [1, 2, 3, 4, 5, 6]
          this.chartRepaint()
        })
      },
      requestData2 () {
        var loginParams = {}

        requestLogin(loginParams).then(data => {
          this.chartData = [2, 5, 2, 5, 2, 5]
          this.chartRepaint()
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

  .chart-container {
    width: 100%;
    float: left;
  }
</style>
