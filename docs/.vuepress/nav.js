// 最顶上一层的导航栏
module.exports = [
  // 定位到 00.目录页中的内容

  // 首页
  { text: '首页', link: '/' },

  // 计算机基础
  {
    text: '计算机基础',
    link: '/base/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      
      // 写法一：带小标题的下拉框
      // {
      //   text: '前端文章',
      //   items: [
      //     { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
      //     { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
      //   ],
      // },

      // 写法二：不带小标题的下拉框
      // 注意 这里面的link是对应md文档中的permalink
      { text: '计算机导论', link: '/pages/42f1d2/' },
      //{ text: '数电', link: '/note/javascript/' },
      { text: '汇编', link: '/pages/29f27e/' },
    ],
  },

  // 前端
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《JavaScript教程》', link: '/note/javascript/' },
          { text: '《JavaScript高级程序设计》', link: '/note/js/' },
          { text: '《ES6 教程》', link: '/note/es6/' },
          { text: '《Vue》', link: '/note/vue/' },
          { text: '《React》', link: '/note/react/' },
          {
            text: '《TypeScript 从零实现 axios》',
            link: '/note/typescript-axios/',
          },
          // {
          //   text: '《Git》',
          //   link: '/note/git/',
          // },
          {
            text: 'TypeScript',
            link: '/pages/51afd6/',
          },
          {
            text: 'JS设计模式总结',
            link: '/pages/4643cd/',
          },
        ],
      },
    ],
  },

  // 后端
  {
    text: '后端',
    link: '/houduan/',
    // 这里展示了 下拉的选项
    items: [
      // 写法一：带小标题的下拉框
      {
        text: 'Java',
        items: [
          // 注意 这里面的link是md文档中的permalink
          { text: 'Java基础', link: '/catalogs/Java/' },
          { text: 'Spring', link: '/catalogs/Spring/' },
        ],
      },
    ],
  },

  // 中间件
  {
    text: '中间件',
    link: '/middleware/',
    items: [
      {
        text: '搜索引擎',
        items: [
          { text: 'ElasticSearch', link: '/pages/596552/' },
        ]
      }, {
        text: '消息队列',
        items: [
          { text: 'RabbitMQ', link: '/pages/e645d9/' },
        ]
      }, {
        text: '服务器',
        items: [
          { text: 'Nginx🌐', link: '/pages/e89510/' },
        ]
      }, {
        text: '服务框架',
        items: [
          //{ text: 'Dubbo', link: '/pages/48771f/' },
          { text: 'SpringCloudAlibaba', link: '/catalogs/Alibaba/' },
        ]
      },
    ]
  },
  
  // 数据库
  {
    text: '数据库',
    link: '/db/',
    items: [
      {
        text: 'SQL 数据库',
        items: [
          { text: 'MySQL', link: '/pages/eb28bf/' }
        ]
      },
      {
        text: 'NoSQL 数据库',
        items: [
          //{ text: 'NoSQL数据库概论', link: '/pages/7ab056/' },
          { text: 'Redis', link: '/pages/3ef6e3/' },
          //{ text: 'MongoDB', link: '/pages/91197c/' },
          //{ text: 'HBase', link: '/pages/2aae92/' }
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'MyBatis', link: '/pages/0e424f/' },
          { text: 'MyBatis-Plus', link: '/pages/e0594a/' }
        ]
      },
    ]
  },

  // 工具
  // 理一下：先通过导航栏 工具(这里的配置)->部署->Linux(定位到/catalogs/Linux/文件)目录->具体文件
  { text: '工具', 
  link: '/tools/', // 定位到 00.目录页/06.工具
  items: [
    {
      text: '部署',
      items: [
        { text: 'Linux', link: '/catalogs/Linux/' }, // 定位到Liunx目录
        { text: 'Docker', link: '/catalogs/Docker/' }, // 定位到Docker目录
      ]
    }
    , {
      text: '管理',
      items: [
        { text: 'Maven', link: '/catalogs/Maven/' }, // 定位到Maven目录
        { text: 'Git', link: '/catalogs/Git/' }, // 定位到Git目录
      ]
    },
  ]
},

  // 面试
  {
    text: '面试',
    link: '/interview/',
    items: [
      // { text: '十大排序算法', link: '/pages/eab19d/' },
      // { text: '力扣算法题', link: '/pages/40ee62/' },
      // { text: '初级开发篇', link: '/pages/39558d/' },
      // { text: '中高进阶篇', link: '/pages/47c622/' },
      { text: 'MySQL', link: '/pages/329723/' },
    ]
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },

  // 更多
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
      { text: '收藏', link: '/pages/beb6c0bd8a66cea6/' },
      { text: '关于', link: '/about/' },
    ],
  },

  // 定位到 @pages 目录中的链接
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
