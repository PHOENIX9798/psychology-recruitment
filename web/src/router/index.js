import Vue from 'vue'
import router from 'vue-router'
import index from '../views/index'
import login from '../components/login&register/login'
import register from "../components/login&register/registerStaff";
import information from '../views/personal'
import person from '../views/person'
import personSubject from '../views/personSubject'
import manage from '../components/manage/Nav'
import user from '../components/manage/userManage'
import discusstion from '../components/manage/discusstion'
import knowledge from '../components/manage/knowledge'
import location from '../components/manage/location'
import online from '../components/manage/onlineTest'
import report from '../components/manage/report'
import reputation from '../components/manage/reputation'
import tag from '../components/manage/tag'
import test from '../components/manage/test'
import question from '../views/question'
import addQestion from '../views/addNew'
import computeAnswer from '../views/computeQuestion'
import home from '../views/home'
import t from '../components/questionnaire/viewQuestion'//测试用

const originalPush = router.prototype.push;
router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(router);

export default new router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/loginManage',
      name: 'register',
      component: register
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/personSubject',
      name: 'personSubject',
      component: personSubject
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      redirect:'/manage/user',
      children:[
        {
          path: '/manage/user',
          name: 'user',
          component: user,
        },
        {
          path: '/manage/onlineTest',
          name: 'onlineTest',
          component: online,
        },
        {
          path: '/manage/discuss',
          name: 'discusstion',
          component: discusstion,
        },
        {
          path: '/manage/knowledge',
          name: 'knowledge',
          component: knowledge,
        },
        {
          path: '/manage/location',
          name: 'location',
          component: location,
        },
        {
          path: '/manage/report',
          name: 'report',
          component: report,
        },
        {
          path: '/manage/reputation',
          name: 'reputation',
          component: reputation,
        },
        {
          path: '/manage/tag',
          name: 'tag',
          component: tag,
        },
        {
          path: '/manage/test',
          name: 'test',
          component: test,
        },
      ]
    },
    {
      path: '/question',
      name: 'question',
      component: question
    },
    {
      path: '/questionAdd',
      name: 'questionAdd',
      component: addQestion
    },
    {
      path: '/computeAnswer',
      name: 'computeAnswer',
      component: computeAnswer
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/t',
      name: 't',
      component: t
    },
  ]
})
