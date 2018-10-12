import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'//引入主页
import Login from '../pages/login.vue'//引入登录页
import Register from '../pages/reg.vue'//引入注册页
import Getpassword from '../pages/forgetpass.vue'//引入找回密码页
import Susscess from '../pages/susscess.vue'//引入找回密码页
import Creatinfo from '../pages/creatinfo.vue'//引入完善公司页
import Informations from '../pages/company/informations.vue'//引入公司信息页
import Datastatistics from '../pages/company/datastatistics.vue'//引入数据统计页
import Examsettings from '../pages/company/examsettings.vue'//引入审批管理页
import Integralsettings from '../pages/company/integralsettings.vue'//引入帮分管理页
import Organizationsettings from '../pages/company/organizationsettings.vue'//引入组织架构设置页
import Projectmanagers from '../pages/company/projectmanagers.vue'//引入项目管理页
import Rightsettings from '../pages/company/rightsettings.vue'//引入权限管理页
import Schedusettings from '../pages/company/schedusettings.vue'//引入排班设置页
import Tasksettings from '../pages/company/tasksettings.vue'//常规任务设置页
import Welfaresettings from '../pages/company/welfaresettings.vue'//福利设置页
import Reciatesettings from '../pages/company/reciatesettings.vue'//赞赏设置
import Addreciates from '../pages/company/addreciates.vue'//添加赞赏页面
import Eidtreciates from '../pages/company/eidtreciates.vue'//编辑赞赏页面
import Reciatesdescriptions from '../pages/company/reciatesdescriptions.vue'//赞赏详情
import Editinfos from '../pages/company/editinfos.vue'//公司信息编辑页
import Jobmanager from '../pages/company/Jobmanager.vue'//工作岗位管理页
import Departmentmanager from '../pages/company/Departmentmanager'//部门管理
import Ownersense from '../pages/company/Ownersense'//自我价值观
import Statisticsview from '../pages/company/Statisticsview'//统计页面
import Addschedu from '../pages/company/addschedu'//添加排班页面
import Editschedu from '../pages/company/editschedu'//编辑排班
import DepTable from '../pages/company/deptable'//部门列表
import Notice from '../pages/company/notice'//通知设置
import Chat from '../pages/chat'//聊天界面
import None from '../pages/company/none'//显示开发中界面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[//主页下面的子路由
        {
          path:'/pages/company/informations',
          name:'Informations',
          component:Informations
        },{
          path:'/pages/company/datastatistics',
          name:'Datastatistics',
          component:Datastatistics
        },
        {
          path:'/pages/company/examsettings',
          name:'Examsettings',
          component:Examsettings
        },
        {
          path:'/pages/company/integralsettings',
          name:'Integralsettings',
          component:Integralsettings
        },
        {
          path:'/pages/company/organizationsettings',
          name:'Organizationsettings',
          component:Organizationsettings
        },
        {
          path:'/pages/company/projectmanagers',
          name:'Projectmanagers',
          component:Projectmanagers
        },
        {
          path:'/pages/company/rightsettings',
          name:'Rightsettings',
          component:Rightsettings
        },
        {
          path:'/pages/company/schedusettings',
          name:'Schedusettings',
          component:Schedusettings
        },
        {
          path:'/pages/company/tasksettings',
          name:'Tasksettings',
          component:Tasksettings
        },
        {
          path:'/pages/company/welfaresettings',
          name:'Welfaresettings',
          component:Welfaresettings
        },
        {
          path:'/pages/company/reciatesettings',
          name:'Reciatesettings',
          component:Reciatesettings
        },
        {
          path:'/pages/company/addreciates',
          name:'Addreciates',
          component:Addreciates
        },
        {
          path:'/pages/company/eidtreciates',
          name:'Eidtreciates',
          component:Eidtreciates
        },
        {
          path:'/pages/company/reciatesdescriptions',
          name:'Reciatesdescriptions',
          component:Reciatesdescriptions
        },
        {
          path:'/pages/company/editinfos',
          name:'Editinfos',
          component:Editinfos
        },
        {
          path:'/pages/company/jobmanager',
          name:'Jobmanager',
          component:Jobmanager
        },
        {
          path:'/pages/company/departmentmanager',
          name:'Departmentmanager',
          component:Departmentmanager
        },
        {
          path:'/pages/company/ownersense',
          name:'Ownersense',
          component:Ownersense
        },
        {
          path:'/pages/company/addschedu',
          name:'Addschedu',
          component:Addschedu
        },
        { 
          path:'/pages/company/editschedu',
          name:'Editschedu',
          component:Editschedu
        },
        {
          path:'/pages/company/notice',
          name:'Notice',
          component:Notice
        },
        {
          path:'/pages/company/none',
          name:'None',
          component:None
        }
        //-------------------------------------------------------------------------------------------
      ]
    },
    {
      path:'/pages/login',
      name:'Login',
      component:Login
    },
    {
      path:'/pages/register',
      name:'Register',
      component:Register
    },
    {
      path:'/pages/getpassword',
      name:'Getpassword',
      component:Getpassword
    },
    {
      path:'/pages/susscess',
      name:'Susscess',
      component:Susscess
    },
    {
      path:'/pages/creatinfo',
      name:'Creatinfo',
      component:Creatinfo
    },
    //统计页面
    {
      path:'/pages/company/statisticsview',
      name:'Statisticsview',
      component:Statisticsview
    },
    {
      path:'/pages/company/deptable',
      name:'DepTable',
      component:DepTable
    },
    {
      path:'/pages/chat',
      name:'Chat',
      component:Chat
    }
  ]
})
