/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: false,

  get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: '畅居', // 社区名字
  description: '一个解决实际问题的小区社区', // 社区的描述
  keywords: '畅居, 小区, 物业, 解决问题, 滨湖壹号, 中冶创业苑, 当代国际花园',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="wayde.sun@gmail.com" />'
  ],
  site_logo: '/public/images/cnodejs_light.svg', // default is `name`
  site_icon: '/public/images/cnode_icon_32.png', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    [ '/about', '关于' ]
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'bbs.sunzhongmou.com',
  google_tracker_id: 'UA-96359388-1',
  cnzz_tracker_id: '',

  // mongodb 配置
  db: 'mongodb://192.168.0.10/cj_club',

  // redis 配置，默认是本地
  redis_host: '192.168.0.11',
  redis_port: 6379,
  redis_db: 0,
  redis_password: '',

  session_secret: 'cj_club_secret', // 务必修改
  auth_cookie_name: 'node_club',

  // 程序运行的端口
  port: 8510,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS配置
  rss: {
    title: '一个解决实际问题的畅居小区社区',
    link: 'https://bbs.sunzhongmou',
    language: 'zh-cn',
    description: '一个解决实际问题的畅居小区社区',
    max_rss_items: 50
  },

  // 邮箱配置
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'szm_666@126.com',
      pass: 'hakula567'
    },
    ignoreTLS: true,
  },

  weibo_key: 1102571241,
  weibo_id: 'ihakula',

  admins: { sunzhongmou: true },

  GITHUB_OAUTH: {
    clientID: '0ab1a89a3e377fd24609',
    clientSecret: 'aafb1b109bb9d702ab6597acdab998f28fc057ce',
    callbackURL: 'https://bbs.sunzhongmou.com/auth/github/callback'
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // oneapm 是个用来监控网站性能的服务
  oneapm_key: '',

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  qn_access: {
    accessKey: 'your access key',
    secretKey: 'your secret key',
    bucket: 'your bucket name',
    origin: 'http://your qiniu domain',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: 'http://xxxxxxxx',
  },

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  file_limit: '1MB',

  // 版块
  tabs: [
    ['zy', '中冶创业苑'],
    ['bh', '滨湖壹号'],
    ['dd', '当代国际花园'],
    ['share', '物业'],
    ['ask', '帮帮'],
    ['job', '服务'],
    ['exchange', '置换'],
  ],

  // 极光推送
  jpush: {
    appKey: '4fc145a5f1955ca4b874901f',
    masterSecret: 'fba631e068ecde1ff44e162f',
    isDebug: false,
  },

  create_post_per_day: 1000, // 每个用户一天可以发的主题数
  create_reply_per_day: 1000, // 每个用户一天可以发的评论数
  create_user_per_ip: 1000,
  visit_per_day: 1000, // 每个 ip 每天能访问的次数
};

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://192.168.0.10/cj_club_test';
}

module.exports = config;
