<template>
  <section class="chart-container">
    <el-row>
      <el-col :span="24">
        <h1>{{ msg }}</h1>
        <h2>{{beginDate | formatDate}}-{{endDate | formatDate}}</h2>
        <h2>{{channelId}}</h2>
        <h2>{{serverId}}</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <span>渠道</span>
        <el-select v-model="channelId" placeholder="请选择">
          <el-option
            v-for="item in channels"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <span>游戏区</span>
        <el-select v-model="serverId" placeholder="请选择">
          <el-option
            v-for="item in servers"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <div class="block">
          <span class="demonstration">起始时间</span>
          <el-date-picker
            v-model="beginDate"
            type="datetime"
            placeholder="选择起始时间">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="block">
          <span class="demonstration">结束时间</span>
          <el-date-picker
            v-model="endDate"
            type="datetime"
            placeholder="选择结束时间">
          </el-date-picker>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-button type="primary" @click.native.prevent="requestData1">请求1</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click.native.prevent="requestData2">请求2</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import { requestLogin } from '@/api/api'
  import { Servers, Channels } from '@/consts'
  import ElCol from 'element-ui/packages/col/src/col'
  import ElRow from 'element-ui/packages/row/src/row'
  import { formatDate } from '@/utils'

  export default {
    components: {
      ElRow,
      ElCol
    },
    name: 'hello',
    data () {
      return {
        msg: '新增玩家',
        beginDate: this.getNowFormatDate(),
        endDate: this.getNowFormatDate(),
        chartData: [],
        myChart: null,
        servers: Servers,
        channels: Channels,
        channelId: -1,
        serverId: -1
      }
    },
    mounted () {
      // 获取页面上的图形DOM对象
      this.myChart = this.$echarts.init(document.getElementById('myChart'))
      this.chartRepaint()
    },
    filters: {
      formatDate (time) {
        var date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    },
    methods: {
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
      },
      getNowFormatDate () {
        var date = new Date()
        var seperator1 = '-'
        var seperator2 = ':'
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
          ' ' + date.getHours() + seperator2 + date.getMinutes() +
          seperator2 + date.getSeconds()
        return currentdate
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

  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
</style>
