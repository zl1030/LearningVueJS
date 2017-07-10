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
            v-for="channel in channels"
            :key="channel.id"
            :label="channel.name"
            :value="channel.id"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <span>游戏区</span>
        <el-select v-model="serverId" placeholder="请选择">
          <el-option
            v-for="server in servers"
            :key="server.id"
            :label="server.name"
            :value="server.id">
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
        <el-button type="primary" @click.native.prevent="requestData1" :loading="queryBtnLoading">请求1</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click.native.prevent="requestData2" :loading="request2Loading">请求2</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
      </el-col>
      <el-col :span="12">
        <div id="myChart2" :style="{width: '100%', height: '300px'}"></div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import { requestLogin } from '@/api/api'
  import Config from '@/../static/Config'
  import ElCol from 'element-ui/packages/col/src/col'
  import ElRow from 'element-ui/packages/row/src/row'
  import Utils from '@/Utils'

  export default {
    components: {
      ElRow,
      ElCol
    },
    name: 'hello',
    data () {
      return {
        msg: '新增玩家',
        beginDate: Utils.getNowFormatDate(),
        endDate: Utils.getNowFormatDate(),
        onlineChartData: [],
        myChart: null,
        myChart2: null,
        servers: Config.Servers,
        channels: Config.Channels,
        channelId: -1,
        serverId: -1,
        queryBtnLoading: false,
        request2Loading: false
      }
    },
    mounted () {
      // 获取页面上的图形DOM对象
      this.myChart = this.$echarts.init(document.getElementById('myChart'))
      this.myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      this.chart1Repaint()
      this.onlineChartRepaint()
    },
    filters: {
      formatDate (time) {
        var date = new Date(time)
        return Utils.formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    },
    methods: {
      // 绘制图表
      chart1Repaint () {
        this.myChart.setOption({
          title: {text: '图表测试1'},
          tooltip: {},
          legend: {
            data: ['销量', '流水']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '销量',
              type: 'bar',
              data: this.onlineChartData
            },
            {
              name: '流水',
              type: 'bar',
              data: this.onlineChartData
            }]
        })
      },
      onlineChartRepaint () {
        this.myChart2.setOption({
          title: {
            text: 'Line Chart'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        })
      },
      requestData1 () {
        this.queryBtnLoading = true

        var loginParams = {}

        requestLogin(loginParams).then(data => {
          this.onlineChartData = [1, 2, 3, 4, 5, 6]
          this.chart1Repaint()
        })

        this.queryBtnLoading = false
      },
      requestData2 () {
        var loginParams = {}

        requestLogin(loginParams).then(data => {
          this.onlineChartData = [2, 5, 2, 5, 2, 5]
          this.chart1Repaint()
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

  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
</style>
