const autoprefixer = require('autoprefixer')

module.exports = {
  plugins:[
    autoprefixer() //后处理css  ,处理不同浏览器的前缀后缀问题
  ]
}