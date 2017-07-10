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
      <el-col :span="4">
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
      <el-col :span="4">
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
      <el-col :span="4">
        <el-button type="primary" @click.native.prevent="reqOnlineData" :loading="queryBtnLoading">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div id="onlineChart" :style="{width: '100%', height: '300px'}"></div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import { requestOnline } from '@/api/api'
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
        msg: '在线数据',
        beginDate: Utils.getNowFormatDate(),
        endDate: Utils.getNowFormatDate(),
        onlineChart: null,
        servers: Config.Servers,
        channels: Config.Channels,
        channelId: -1,
        serverId: -1,
        queryBtnLoading: false
      }
    },
    mounted () {
      // 获取页面上的图形DOM对象
      this.onlineChart = this.$echarts.init(document.getElementById('onlineChart'))
      Utils.initDefaultChart(this.onlineChart, '在线统计')
    },
    filters: {
      formatDate (time) {
        var date = new Date(time)
        return Utils.formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    },
    methods: {
      reqOnlineData () {
        this.queryBtnLoading = true

        // 查询请求参数
        var params = {
          beginDate: this.beginDate,
          endDate: this.endDate,
          gameId: 1000,
          serverId: this.serverId,
          channelId: this.channelId
        }

        requestOnline(params).then(data => {
          let {code, tableData} = data

          if (code === 200) {
            var chartData = Utils.createEmptyChartData(Utils.CHART_TYPE.LINE)
            chartData.pushLegend('在线人数')

            var t = []
            for (var i = 0, j = tableData.length; i < j; i++) {
              chartData.pushXAxis(tableData[i].logTime)
              t.push(tableData[i].online)
            }
            chartData.pushData('在线人数', t)

            Utils.refreshChart(this.onlineChart, chartData)
          } else {
            this.$message({
              message: 'requestOnline:' + code
            })
          }

//          var chartData = Utils.createEmptyChartData(Utils.CHART_TYPE.LINE)
//          chartData.pushLegend('在线人数')
//          chartData.pushLegend('联盟广告')
//          chartData.pushLegend('搜索引擎')
//          var dateOfWeek = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
//          for (var i = 0; i < dateOfWeek.length; i++) {
//            chartData.pushXAxis(dateOfWeek[i])
//          }
//          chartData.pushData('邮件营销', [120, 132, 101, 134, 90, 230, 210])
//          chartData.pushData('联盟广告', [220, 182, 191, 234, 290, 330, 310])
//          chartData.pushData('搜索引擎', [820, 932, 901, 934, 1290, 1330, 1320])
//
//          Utils.refreshChart(this.onlineChart, chartData)
        })

        this.queryBtnLoading = false
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
