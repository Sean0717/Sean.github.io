//因为导航栏和侧边栏的代码较多，所以抽离出来
// const wyNav = require('./nav.js')
// const wySidebar = require('./sidebar.js')

module.exports = {
  title: "VitePress", //网站标题
  description: "Just playing around", //网站描述,会生成<meta>便签
  // author: "Sean0717", //作者
  base: '/', //根目录 if https://foo.github.io/bar/，so将base设置为“/bar/”
  markdown: {
    lineNumbers: true, //显示代码行数
  },
  lastUpdated: true, //以git提交的时间为更新时间
  themeConfig: {
    // nav: wyNav, //导航栏配置
    // sidebar: wySidebar, //侧边栏配置
    author: 'Sean',
    lastUpdatedText: '上次更新时间', //最后更新时间文本
    // logo: "/avatar.jpeg", //导航栏左侧头像
    docFooter: { //上下篇文本
      prev: '上一篇',
      next: '下一篇'
    }

  }
};