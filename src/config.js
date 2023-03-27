export default {
  // page1部分
  page1: {
    titleEn: 'Hello,I`m ZhangXiangbin', //英文标题
    title: '一个追梦在前端路上的小白', //中文标题
  },
  // page2部分
  page2: {
    authorImg: 'me.jpg', // 作者头像
    xinhui: '我叫张祥斌，是一名毕业三年的社会工作者。', // 幸会
    qiuzhi: '无意向', // 求职意向
    guanyuwo: '作为一名计算机专业毕业的，很可惜，没有掌握前端js、html、css基本技术和Vue框架、UI框架，nodejs等等，也没有公司项目实战的经验和一些java安卓开发经历。希望可以和大家一起学习，共同进步！' // 关于我
  },
  // page3部分
  page3: [{
    icon: 'icon-tubiao-',
    title: 'UI设计',
    msg: ['PS切图、界面排版']
  },{
    icon: 'icon-diannao', // 图标
    title: '网页制作', // 标题
    msg: ['响应式页面', 'css、scss动画效果',] //介绍
  }, {
    icon: 'icon-qianbi1',
    title: '前端功能',
    msg: ['JS完成常见的交互功能', '用AJAX读取后台数据且渲染']
  },  {
    icon: 'icon-shouji',
    title: '框架',
    msg: ['vue框架','UI框架、express框架、mysql',]
  }],
  // page4部分
  page4: {
    // 我的历程
    course: [{
      date: '2016/9——2020.7', // 时间
      desc: { // 经历
        title: '昆明理工大学',
        list: ['没有参加过计算机相关竞赛', '普通的本科生', '开发公司工作']
      }
    }, {
      date: '2018/9——2020/7',
      desc: {
        title: '昆明理工大学',
        list: ['学习些许前端语言', '构建页面 / 利用JS、CSS3等制作网站，vue有关项目', '1247游戏工作室','计算机证书都没得','大学英语四级证书','奖学金：无']
      }
    }, {
      date: '2018/9——2020/7',
      desc: {
        title: '昆明理工大学',
        list: ['学习java语言', '学习Android', '未参加云南省互联网技能大赛', '全国计算机等级二级证书，不考', '国家励志奖学金：无']
      }
    }],
    // 我的拓展技能掌握
    singlelist: [{
      title: 'bootsrap',
      text: '了解'
    }, {
      title: 'Element-ui',
      text: '掌握'
    }, {
      title: 'mint-ui',
      text: '掌握'
    }, {
      title: 'scss',
      text: '掌握'
    }],
    // 我的基本技能掌握
    proresslist: [{
      title: 'HTML、CSS、SCSS',
      value: '90%'
    }, {
      title: 'JS、JQ',
      value: '90%'
    }, {
      title: 'Vue',
      value: '90%'
    }, {
      title: 'NodeJs',
      value: '80%'
    }, {
      title: 'sql',
      value: '80%'
    }]
  },
  // page5部分
  page5: [{
    title: '1247游戏工作室',
    content: '昆明理工大学1247游戏工作室独立站点的维护',
    image: 'box1.png',
    href: 'https://lab508.gitee.io/'
  }, {
    title: '图书管理系统',
    content: 'Vue,NodeJs图书管理系统前后端',
    image: 'box3.jpg',
    href: 'https://gitee.com/wttAndroid/book_admin'
  }, {
    title: '校园约吧',
    content: 'Vue,NodeJs移动端校园项目前后端',
    image: 'box5.jpg',
    href: 'https://gitee.com/wttAndroid/xyy_server'
  }, {
    title: '蘑菇街',
    content: 'Vue蘑菇街商城案例前端',
    image: 'box2.png',
    href: 'https://github.com/wttAndroid/MyShoppingStreet'
  }, {
    title: '个人简历',
    content: 'html,css,jq,bootsrap搭建个人简历网站',
    image: 'box4.png',
    href: ''
  }, {
    title: '二维码生成器',
    content: 'Android二维码生成器',
    image: 'box6.jpeg',
    href: ''
  }],
  // page6部分
  page6: {
    github: 'https://github.com/wttAndroid',
    bili: '',
    email: 'Mailto:1457321681@qq.com?Subject=邮箱标题&Body=邮箱内容！',
    zhihu: '',
    weixin: "<img style='width:120px' src='https://zhangxiangbin123.github.io/web-resume/src/img/weixin.jpg' alt='我的微信，加载失败'>",
      qq: "<img style='width:120px' src='https://zhangxiangbin123.github.io/web-resume/src/img/QQ.jpg' alt='我的QQ，加载失败'>"
  }
}
