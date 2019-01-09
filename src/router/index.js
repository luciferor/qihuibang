import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue' //引入主页
import Login from '../pages/login.vue' //引入登录页
import Register from '../pages/reg.vue' //引入注册页
import Getpassword from '../pages/forgetpass.vue' //引入找回密码页
import Susscess from '../pages/susscess.vue' //引入找回密码页
import Creatinfo from '../pages/creatinfo.vue' //引入完善公司页
import Informations from '../pages/company/informations.vue' //引入公司信息页
import Datastatistics from '../pages/company/datastatistics.vue' //引入数据统计页
import Examsettings from '../pages/company/examsettings.vue' //引入审批管理页
import Integralsettings from '../pages/company/integralsettings.vue' //引入帮分管理页
import Organizationsettings from '../pages/company/organizationsettings.vue' //引入组织架构设置页
import Projectmanagers from '../pages/company/projectmanagers.vue' //引入项目管理页
import Rightsettings from '../pages/company/rightsettings.vue' //引入权限管理页
import Schedusettings from '../pages/company/schedusettings.vue' //引入排班设置页
import Tasksettings from '../pages/company/tasksettings.vue' //常规任务设置页
import Welfaresettings from '../pages/company/welfaresettings.vue' //福利设置页
import Editinfos from '../pages/company/editinfos.vue' //公司信息编辑页
import Jobmanager from '../pages/company/Jobmanager.vue' //工作岗位管理页
import Departmentmanager from '../pages/company/Departmentmanager' //部门管理
import Ownersense from '../pages/company/Ownersense' //自我价值观
import Statisticsview from '../pages/company/Statisticsview' //统计页面
import Addschedu from '../pages/company/addschedu' //添加排班页面
import Editschedu from '../pages/company/editschedu' //编辑排班
import DepTable from '../pages/company/deptable' //部门列表
import Notice from '../pages/company/notice' //通知设置
import Allpeople from '../pages/ranking/allpeople' //全部排名
import Allpeoplehistory from '../pages/ranking/allpeoplehistory' //全部历史排名
import Departments from '../pages/ranking/departments' //部门排名
import Departmentshistory from '../pages/ranking/departmentshistory' //部门历史排名
import Designdepartment from '../pages/ranking/designdepartment' //设计部排名
import Operationdepartment from '../pages/ranking/operationdepartment' //运营部排名
import Techdepartment from '../pages/ranking/techdepartment' //技术部排名
import RecentNews from '../pages/ranking/recentNews' //最新动态
import Personalnews from '../pages/ranking/personalnews' //最新动态
import Fuli from '../pages/ranking/fuli' //福利页
import Glorywall from '../pages/ranking/glorywall' //荣誉墙页
import Awardnow from '../pages/ranking/awardnow' //颁发奖品
import Officenotice from '../pages/office/officenotice' //办公-通知
import NoticeDetail from '../pages/office/noticeDetail' //办公-通知详情
import Officehome from '../pages/office/officehome' //办公首页
import Handbook from '../pages/office/handbook' //管理手册
import Attendance from '../pages/office/attendance' //考勤
import SignIn from '../pages/office/signIn' //签到
import Announcement from '../pages/office/announcement' //公告
import DeliverAnnounce from '../pages/office/deliverAnnounce' //发布公告
import EditAnnounce from '../pages/office/editAnnounce' //编辑公告
import Shenpi from '../pages/office/shenpi' //审批
import Myshenpi from '../pages/office/myshenpi' //我的审批
import ShenpiGoout from '../pages/office/shenpiGoout' //审批-外出
import ShenpiVacate from '../pages/office/shenpiVacate' //审批-请假
import ShenpiBuka from '../pages/office/shenpiBuka' //审批-补卡
import AttendanceRecord from '../pages/office/attendanceRecord' //考勤记录
import AttendanceDetail from '../pages/office/attendanceDetail' //考勤详情

import Fulibangfen from '../pages/catalog/fulibangfen' //福利邦分
import Selfinfo from '../pages/catalog/selfinfo' //个人信息
import Feedback from '../pages/catalog/feedback' //意见反馈

import BriefReport from '../pages/office/briefReport' //简报
import ReportDetail from '../pages/office/reportDetail' //简报详情
import WaitMeJudge from '../pages/office/waitMeJudge' //待我评审

import Reciatesettings from '../pages/company/reciatesettings.vue' //赞赏设置
import Addreciates from '../pages/company/addreciates.vue' //添加赞赏页面
import Eidtreciates from '../pages/company/eidtreciates.vue' //编辑赞赏页面
import Reciatesdescriptions from '../pages/company/reciatesdescriptions.vue' //赞赏详情
import Chat from '../pages/chat' //聊天界面
import None from '../pages/company/none' //显示开发中界面

Vue.use(Router)

export default new Router({
        routes: [{
                path: '/',
                name: 'Index',
                component: Index,
                children: [ //主页下面的子路由
                    {
                        path: '/pages/company/informations',
                        name: 'Informations',
                        component: Informations
                    }, {
                        path: '/pages/company/datastatistics',
                        name: 'Datastatistics',
                        component: Datastatistics
                    },
                    {
                        path: '/pages/company/examsettings',
                        name: 'Examsettings',
                        component: Examsettings
                    },
                    {
                        path: '/pages/company/integralsettings',
                        name: 'Integralsettings',
                        component: Integralsettings
                    },
                    {
                        path: '/pages/company/organizationsettings',
                        name: 'Organizationsettings',
                        component: Organizationsettings
                    },
                    {
                        path: '/pages/company/projectmanagers',
                        name: 'Projectmanagers',
                        component: Projectmanagers
                    },
                    {
                        path: '/pages/company/rightsettings',
                        name: 'Rightsettings',
                        component: Rightsettings
                    },
                    {
                        path: '/pages/company/schedusettings',
                        name: 'Schedusettings',
                        component: Schedusettings
                    },
                    {
                        path: '/pages/company/tasksettings',
                        name: 'Tasksettings',
                        component: Tasksettings
                    },
                    {
                        path: '/pages/company/welfaresettings',
                        name: 'Welfaresettings',
                        component: Welfaresettings
                    },
                    {
                        path: '/pages/company/editinfos',
                        name: 'Editinfos',
                        component: Editinfos
                    },
                    {
                        path: '/pages/company/jobmanager',
                        name: 'Jobmanager',
                        component: Jobmanager
                    },
                    {
                        path: '/pages/company/departmentmanager',
                        name: 'Departmentmanager',
                        component: Departmentmanager
                    },
                    {
                        path: '/pages/company/ownersense',
                        name: 'Ownersense',
                        component: Ownersense
                    },
                    {
                        path: '/pages/company/addschedu',
                        name: 'Addschedu',
                        component: Addschedu
                    },
                    {
                        path: '/pages/company/editschedu',
                        name: 'Editschedu',
                        component: Editschedu
                    },
                    {
                        path: '/pages/company/notice',
                        name: 'Notice',
                        component: Notice
                    },
                    {
                        path: '/pages/ranking/allpeople',
                        name: 'Allpeople',
                        component: Allpeople
                    },
                    {
                        path: '/pages/ranking/allpeoplehistory',
                        name: 'Allpeoplehistory',
                        component: Allpeoplehistory
                    },
                    {
                        path: '/pages/ranking/departmentshistory',
                        name: 'Departmentshistory',
                        component: Departmentshistory
                    },
                    {
                        path: '/pages/ranking/departments',
                        name: 'Departments',
                        component: Departments
                    },
                    {
                        path: '/pages/ranking/designdepartment',
                        name: 'Designdepartment',
                        component: Designdepartment
                    },
                    {
                        path: '/pages/ranking/operationdepartment',
                        name: 'Operationdepartment',
                        component: Operationdepartment
                    },
                    {
                        path: '/pages/ranking/techdepartment',
                        name: 'Techdepartment',
                        component: Techdepartment
                    },
                    {
                        path: '/pages/ranking/recentNews',
                        name: 'RecentNews',
                        component: RecentNews
                    },
                    {
                        path: '/pages/ranking/personalnews',
                        name: 'Personalnews',
                        component: Personalnews
                    },
                    {
                        path: '/pages/ranking/fuli',
                        name: 'Fuli',
                        component: Fuli
                    },
                    {
                        path: '/pages/ranking/glorywall',
                        name: 'Glorywall',
                        component: Glorywall
                    },
                    {
                        path: '/pages/ranking/awardnow',
                        name: 'Awardnow',
                        component: Awardnow
                    },
                    {
                        path: '/pages/office/officenotice',
                        name: 'Officenotice',
                        component: Officenotice
                    },
                    {
                        path: '/pages/office/noticeDetail',
                        name: 'NoticeDetail',
                        component: NoticeDetail
                    },

                    {
                        path: '/pages/office/officehome',
                        name: 'Officehome',
                        component: Officehome
                    },
                    {
                        path: '/pages/office/handbook',
                        name: 'Handbook',
                        component: Handbook
                    },
                    {
                        path: '/pages/office/attendance',
                        name: 'Attendance',
                        component: Attendance
                    },
                    {
                        path: '/pages/office/signIn',
                        name: 'SignIn',
                        component: SignIn
                    },
                    {
                        path: '/pages/office/announcement',
                        name: 'Announcement',
                        component: Announcement
                    },
                    {
                        path: '/pages/office/shenpi',
                        name: 'Shenpi',
                        component: Shenpi
                    },
                    {
                        path: '/pages/office/myshenpi',
                        name: 'Myshenpi',
                        component: Myshenpi
                    },
                    {
                        path: '/pages/office/shenpiGoout',
                        name: 'ShenpiGoout',
                        component: ShenpiGoout
                    },
                    {
                        path: '/pages/office/shenpiBuka',
                        name: 'ShenpiBuka',
                        component: ShenpiBuka
                    },
                    {
                        path: '/pages/office/shenpiVacate',
                        name: 'ShenpiVacate',
                        component: ShenpiVacate
                    },
                    {
                        path: '/pages/office/attendanceRecord',
                        name: 'AttendanceRecord',
                        component: AttendanceRecord
                    },
                    {
                        path: '/pages/office/attendanceDetail',
                        name: 'AttendanceDetail',
                        component: AttendanceDetail
                    },

                    {
                        path: '/pages/office/editAnnounce',
                        name: 'EditAnnounce',
                        component: EditAnnounce
                    },
                    {
                        path: '/pages/office/deliverAnnounce',
                        name: 'DeliverAnnounce',
                        component: DeliverAnnounce
                    },
                    {
                        path: '/pages/catalog/fulibangfen',
                        name: 'Fulibangfen',
                        component: Fulibangfen
                    },
                    {
                        path: '/pages/catalog/selfinfo',
                        name: 'Selfinfo',
                        component: Selfinfo
                    },
                    {
                        path: '/pages/catalog/feedback',
                        name: 'Feedback',
                        component: Feedback
                    },
                    {
                        path: '/pages/office/briefReport',
                        name: 'BriefReport',
                        component: BriefReport
                    },
                    {
                        path: '/pages/office/reportDetail',
                        name: 'ReportDetail',
                        component: ReportDetail
                    },
                    {
                        path: '/pages/office/waitMeJudge',
                        name: 'WaitMeJudge',
                        component: WaitMeJudge
                    },


                    //-------------------------------------------------------------------------------------------
                ]
            },
            {
                path: '/pages/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/pages/company/reciatesettings',
                name: 'Reciatesettings',
                component: Reciatesettings
            },
            {
                path: '/pages/company/addreciates',
                name: 'Addreciates',
                component: Addreciates
            },
            {
                path: '/pages/company/eidtreciates',
                name: 'Eidtreciates',
                component: Eidtreciates
            },
            {
                path: '/pages/company/reciatesdescriptions',
                name: 'Reciatesdescriptions',
                component: Reciatesdescriptions
            },
            {
                path: '/pages/company/editinfos',
                name: 'Editinfos',
                component: Editinfos
            },
            {
                path: '/pages/getpassword',
                name: 'Getpassword',
                component: Getpassword
            },
            {
                path: '/pages/susscess',
                name: 'Susscess',
                component: Susscess
            },
            {
                path: '/pages/creatinfo',
                name: 'Creatinfo',
                component: Creatinfo
            },
            //统计页面
            {
                path: '/pages/company/statisticsview',
                name: 'Statisticsview',
                component: Statisticsview
            },
            {
                path: '/pages/company/notice',
                name: 'Notice',
                component: Notice
            },
            {
                path: '/pages/company/none',
                name: 'None',
                component: None
            }
            //-------------------------------------------------------------------------------------------
        ]
    }, {
        path: '/pages/login',
        name: 'Login',
        component: Login
    }, {
        path: '/pages/register',
        name: 'Register',
        component: Register
    }, {
        path: '/pages/getpassword',
        name: 'Getpassword',
        component: Getpassword
    }, {
        path: '/pages/susscess',
        name: 'Susscess',
        component: Susscess
    }, {
        path: '/pages/creatinfo',
        name: 'Creatinfo',
        component: Creatinfo
    },
    //统计页面
    {
        path: '/pages/company/statisticsview',
        name: 'Statisticsview',
        component: Statisticsview
    }, {
        path: '/pages/company/deptable',
        name: 'DepTable',
        component: DepTable
    }, {
        path: '/pages/chat',
        name: 'Chat',
        component: Chat
    }

)