import axios from 'axios'

export default {
  getmenu: function (cb) {
    axios.get('http://evelyn.bonnie/getMenuLists')
    .then(function (response) {
      // vm.items = response.data
      console.log(response.data)
      cb(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  getday: function (cb) {
    // var now = new Date
    // var omonth = now.getMonth() + 1
    // var oday = now.getDate()
    // var url = 'http://api.juheapi.com/japi/toh?v=1.0&month='+ omonth +'&day='+ oday +'&key=22223d9e1deafd145e17eedb8b7897c2'
    // axios.get('https://bird.ioliu.cn/v1/?url=' + url)
    // .then(function(data){
    //     cb(data.data.result)
    // })

  }
}