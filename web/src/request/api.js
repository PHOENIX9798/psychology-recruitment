import { post } from './http'

export const DEVELOPMENT = false;

/*超级管理员*/

export const countOrganization = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/countOrganization.php', p);
};//计算单位总数

export const viewOrganization = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve( p.result));
  return post('/viewOrganization.php', p);
};//查看最新单位

export const loadOrganization = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/loadOrganization.php', p);
};//加载剩余单位

export const addOrganization = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/addOrganization.php', p);
};//添加单位

export const startOrganization = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve( p.result));
  return post('/startOrganization.php', p);
};//开始单位

export const stopOrganization = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/stopOrganization', p);
};//停用单位

export const removeOrganization = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/removeOrganization.php', p);
};//删除单位

/*管理员*/
export const viewStaff = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/viewStaff.php', p);
};//查看全部主试

export const pullStaff = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/pullStaff.php', p);
};//拉取主试

export const newStaff = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/newStaff.php', p);
};//查看新加入的主试

export const loadNewStaff = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/loadNewStaff.php', p);
};//查看剩余新加入的主试。

export const viewReport = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/viewReport.php', p);
};//查看全部举报

export const viewComment = p => {
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/viewComment.php', p);
};//查看全部评论

/*用户*/

export const startReg = p =>{
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/register.php', p);
};//用户注册

export const startLogin = p =>{
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/login.php', p);
};//用户登录

export const logout = p =>{
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/logout.php', p);
};//用户注销


/*实验*/
export const showTest = p =>{
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/viewTest.php', p);
};//主页展示最新实验

export const viewTest = p =>{
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/viewTest.php', p);
};//查看实验详情

export const addQuestionnaire = p =>{
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/AddQuestionnaire.php', p);
};//新增问卷标题等信息

export const addQuestion = p =>{
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/AddQuestion.php', p);
};//新增问卷问题和选项

export const viewQuestionnaireList = p =>{
  if(DEVELOPMENT) return new Promise(resolve => resolve(p.result));
  return post('/SearchQuestionnaire.php', p);
};//新增问卷问题和选项

export const showUser = p => post('/view.php', p);//用户信息展示

export const createTest = p => post('/createTest.php', p);//创建实验
export const changeTest = p => post('/changeTest.php', p);//编辑实验
export const dealTest = p => post('/dealTest.php', p);//更改实验状态

export const createPublic = p => post('/addPublic.php', p);//创建科普，暂未使用
export const viewPublic = p => post('/viewPublic.php', p);//查看科普

export const viewLabel = p => post('/viewLabel.php', p);//查看已有的实验标签
export const addLabel = p => post('/addLabel.php', p);//添加一个实验标签
export const deleteLabel = p => post('/deleteLabel.php', p);//删除指定实验已有的所有标签
export const addTestLabel = p => post('/addTestLabel.php', p);//为指定实验添加标签

export const viewPlace = p => post('/viewPlace.php', p);//查看地点

export const addQn = p => post('/addQn.php', p);//添加问卷
export const viewQn = p => post('/viewQn.php', p);//查看问卷
export const changeQn = p => post('/changeQn.php', p);//查看问卷

export const reportAdd = p => post('/ReportAdd.php', p);//增加举报
