/**
 * Created by zl1030 on 2017/7/8.
 */

// 把日期格式化
exports.formatDate = function (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

// 获取格式化好的当前时间
exports.getNowFormatDate = function () {
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

// 初始化一个图表
exports.initDefaultChart = function (tmpChart, name) {
  tmpChart.chartType = this.CHART_TYPE.LINE
  tmpChart.setOption({
    title: {
      text: name
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: []
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
      data: [],
      axisLabel: {
        interval: 0
      }
    },
    yAxis: {
      type: 'value'
    },
    series: []
  })
  return tmpChart
}

// 根据图表数据刷新图表
exports.refreshChart = function (chart, chartData) {
  var option = chart.getOption()
  chart.clear()

  var {legend, xAxisData, series} = chartData

  option.legend = legend
  option.xAxis = xAxisData
  option.series = series

  chart.setOption(option)
}

// 图表类型
exports.CHART_TYPE = {
  // 线图
  LINE: 'line',
  BAR: 'bar',
  // 柱状图
  COLUMN: 'bar'
}

// 创建一个空的图表数据模板
exports.createEmptyChartData = function (chartType) {
  // X轴是否离原点有一定距离
  var bondaryGap = true
  if (chartType === this.CHART_TYPE.LINE) {
    bondaryGap = false
  }

  return {
    legend: {
      data: []
    },
    xAxisData: {
      type: 'category',
      boundaryGap: bondaryGap,
      data: []
    },
    series: [],
    pushLegend: function (name) {
      this.legend.data.push(name)
    },
    pushXAxis: function (name) {
      this.xAxisData.data.push(name)
    },
    pushData: function (name, data) {
      this.series.push({
        name: name,
        type: chartType, // 该参数实际影响图表绘制类型
        data: data
      })
    }
  }
}
