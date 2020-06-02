/*超级管理员*/
//查看单位总数
import {post} from "./http";
import {DEVELOPMENT} from "./api";

export const countOrganization = {
  code:1,
  total:16
};
//查看最新单位
export const viewOrganization = {
  code:1,
  organization:[{
    id:1,
    name: '华东师范大学',
    userName:'醒了',
    phone:'18916582201',
    state:'使用中'
  }, {
    id:2,
    name: '上海交通大学',
    userName:'会飞的pig',
    phone:'17044372501',
    state:'未使用'
  }, {
    id:3,
    name: '上海大学',
    userName:'zpchen',
    phone:'15590285165',
    state:'使用中'
  }, {
    id:4,
    name: '复旦大学',
    userName:'zjsi',
    phone:'13244348972',
    state:'使用中'
  }, {
    id:5,
    name: '华东理工大学',
    userName:'rhai',
    phone:'17043255597',
    state:'使用中'
  }]
};
//加载剩余单位
export const loadOrganization = {
  code:1,
  organization:[{
    id:6,
    name: '华东师范大学',
    userName:'醒了',
    phone:'18916582201',
    state:'使用中'
  }, {
    id:7,
    name: '华东师范大学',
    userName:'醒了',
    phone:'18916582201',
    state:'使用中'
  }]
};
//添加一个单位
export const addOrganization = {
  code:1,
  id:1
};
//使用一个单位
export const startOrganization = {
  code:1
};
//禁用一个单位
export const stopOrganization = {
  code:1
};
//移除一个单位
export const removeOrganization = {
  code:1
};
/*单位管理员-主试*/
//查看全部主试
export const viewStaff = {
  code:1,
  staff:[
    {id:1,userName:'醒了',realName:'马惠昕',phone:'18916582201',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
    {id:2,userName:'会飞的pig',realName:'海日',phone:'13289765327',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
    {id:3,userName:'zjsi',realName:'刘庥秀',phone:'15590285165',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
    {id:4,userName:'zpchen',realName:'陈志鹏',phone:'18643283849',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
    {id:5,userName:'rhai',realName:'司泽君',phone:'18916586372',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
    {id:6,userName:'xxliu',realName:'何丹妮',phone:'18643285097',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
    {id:7,userName:'ginger',realName:'金健',phone:'19921871016',isTest:'通过',proof:'无',inUse:'使用中',state:'P'}
  ]
};

export const pullStaff = {
  code:1,
  newStaff:'醒了,zpchen ,rhai'
};

export const newStaff = {
  code:1,
  newStaff:[
    {id:1,userName:'醒了',realName:'马惠昕',phone:'18916582201',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
    {id:2,userName:'会飞的pig',realName:'海日',phone:'13289765327',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
    {id:3,userName:'zjsi',realName:'刘庥秀',phone:'15590285165',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
    {id:4,userName:'zpchen',realName:'陈志鹏',phone:'18643283849',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
    {id:5,userName:'rhai',realName:'司泽君',phone:'18916586372',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
    {id:6,userName:'xxliu',realName:'何丹妮',phone:'18643285097',isTest:'通过',proof:'无',inUse:'使用中',state:'P'},
  ]
};

//查看本单位全部举报
export const viewReport = {
  code:1,
  report:[
    {id:1,category:'主试举报被试',content:'晚了15min,而且态度贼差',staff:'醒了',participate:'无',weight:'25',state:'P'},
    {id:2,category:'被试举报主试',content:'人身攻击，骂人',staff:'hxma',participate:'rhai',weight:'30',state:'P'},
    {id:3,category:'主试举报被试',content:'不认真做问卷',staff:'zjsi',participate:'rhai',weight:'15',state:'P'},
    {id:4,category:'主试举报评论',content:'评论内容不属实',staff:'',participate:'rhai',weight:'35',state:'P'},
    {id:5,category:'被试举报主试',content:'不给钱',staff:'做完实验不给钱',participate:'xxliu',weight:'5',state:'P'},
    {id:6,category:'主试举报被试',content:'没来实验',staff:'xxm',participate:'hxma',weight:'10',state:'P'},
    {id:7,category:'主试举报被试',content:'迟到',staff:'xxm',participate:'hxma',weight:'10',state:'P'},
    {id:8,category:'主试举报被试',content:'迟到',staff:'xxm',participate:'hxma',weight:'10',state:'P'}
  ]
};

//查看本单位全部评论

export const viewComment = {
  code:1,
  comment:[
    {id:1,title:'诚招问卷被试',name:'会飞的pig',content:'这个实验性价比挺高',state:'P'},
    {id:2,title:'诚招问卷被试',name:'会飞的pig',content:'这个实验性价比挺高',state:'P'},
    {id:3,title:'诚招问卷被试',name:'会飞的pig',content:'这个实验性价比挺高',state:'P'},
    {id:4,title:'诚招问卷被试',name:'会飞的pig',content:'这个实验性价比挺高',state:'P'},
    {id:5,title:'诚招问卷被试',name:'会飞的pig',content:'这个实验性价比挺高',state:'P'},
    {id:6,title:'诚招问卷被试',name:'会飞的pig',content:'这个实验性价比挺高',state:'P'},
    {id:7,title:'诚招问卷被试',name:'会飞的pig',content:'这个实验性价比挺高',state:'P'},
    {id:8,title:'诚招问卷被试',name:'会飞的pig',content:'这个实验性价比挺高',state:'P'},
    {id:9,title:'诚招问卷被试',name:'会飞的pig',content:'这个实验性价比挺高',state:'P'},
    {id:10,title:'诚招问卷被试',name:'会飞的pig',content:'这个实验性价比挺高',state:'P'},
  ]
};
/*用户*/
export const startReg = {
  code:1
};//用户注册

export const startLogin = {
  code:1,
  id:3
};//用户登录

export const logout = {
  code:1,
};//用户注销

/*实验*/
export const currentTest = {
  code:1,
  test:{
    id:1,
    title:'诚招线上问卷被试',
    introduction:'非心理学专业或心理学大一',
    duration:1,
    money:1,
    number:25,
    person:3,
    category:'本站问卷',
    HR:'',
    state:'NOTSTARTED',
    logo:'',//单位logo
    creatorName:'会飞的pig',
    createTime:'2020-03-12 13:00:00',
    placeTime:[{
      id:1,
      place:'华东师范大学中北校区教书院',
      time:[{id:1,start:'2020-03-15 13:00:00' , people:25 ,sign:3}]
    }],
    tag:[{
      id:1,
      point:'body',
      content:'左利手'
    },{
      id:2,
      point:'type',
      content:'红外线'
    }],
    questionnaire:[
      {
        title:'大学生情绪管理',
        remark:'本问卷仅适用于大学生',
        startTime:'2020-03-16 05:00:00',
        endTime:'2020-03-18 05:00:00'
      }
    ]
  }
};//展示当前实验信息

export const showTest = {
  code:1,
  test:[{
    id:1,
    title:'一份有趣的短小问卷',
    introduction:'阅读4个情境，回答4道选择题',
    duration:5,
    money:1,
    category:'本站问卷',
    state:'NOTSTARTED',
    logo:require("../../src/assets/用户1.jpg"),//单位logo
  }, {
    id:2,
    title:'诚招线上问卷被试',
    introduction:'非心理学专业或心理学大一',
    duration:2,
    money:1,
    category:'本站问卷',
    state:'NOTSTARTED',
    logo:require("../../src/assets/用户2.jpg")//单位logo
  },{
    id:3,
    title:'推箱子实验',
    introduction:'六个月内参与过推箱子实验的请勿参加',
    duration:20,
    money:30,
    category:'线下',
    state:'STARTED',
    logo:require("../../src/assets/用户3.jpg")//单位logo
  },{
    id:4,
    title:'毕业答卷，求扩',
    introduction:'上次填过的也可以填',
    duration:5,
    money:2,
    category:'本站问卷',
    state:'NOTSTARTED',
    logo:require("../../src/assets/用户3.jpg")//单位logo
  },{id:5,
    title:'疫情相关小实验',
    introduction:'问卷星，红包随机',
    duration:1,
    money:1,
    category:'问卷星',
    state:'NOTSTARTED',
    logo:require("../../src/assets/用户3.jpg")//单位logo
  },{id:6,
    title:'高校学生态度问卷',
    introduction:'在校学生（仅限大一、研二），之前做过的请不要做答',
    duration:3,
    money:1,
    category:'问卷星',
    state:'NOTSTARTED',
    logo:require("../../src/assets/用户3.jpg")//单位logo
  },{id:7,
    title:'男被试招募',
    introduction:'人格及情绪应对方式，后续实验高达120￥',
    duration:1,
    money:1,
    category:'问卷星',
    state:'NOTSTARTED',
    logo:require("../../src/assets/用户3.jpg")//单位logo
  },{id:8,
    title:'拖延和职业决策困难',
    introduction:'审核通过红包概率发放',
    duration:5,
    money:1,
    category:'问卷星',
    state:'NOTSTARTED',
    logo:require("../../src/assets/用户3.jpg")//单位logo
  },{
    id:9,
    title:'情绪相关消费行为实验',
    introduction:'请认真作答，后台会仔细审核',
    duration:8,
    money:1,
    category:'问卷星',
    state:'STARTED',
    logo:require("../../src/assets/用户3.jpg")//单位logo
  }]
};//首页展示最新实验
