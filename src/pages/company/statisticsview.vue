<template>
  <div :style="backgroundTop">
    <div class="layout">
      <div style="display: flex;justify-content:center;align-items:center;padding-top: 40px">
        <h2 style="color:#6680ff;">项目进度表</h2>
        <h2 style="margin-left:40px;cursor: pointer;" @click="switchPage()">部门报表</h2>
      </div>
      <div class="top-container">
        <div class="datePicker-container">
          <DatePicker type="date" placeholder="请选择日期" @on-change="getData"></DatePicker>
        </div>
        <div class="add-project" @click="addProject()">
          <img src="../../images/icon_tianjia.png"/>
          <span class="add-project-text">添加项目</span>
        </div>
      </div>
      <div :style="backgroundBottom">
        <div class="schedule-table-container">
          <table cellspacing="0">
            <thead>
            <tr v-for="(title,index) in columnsProject"
                style="display: table-cell;vertical-align:middle;" :key="index">
              <Affix :offset-top="0" style="width: 100%;">
                <div class="table-tr">
                  <td>{{title}}</td>
                </div>
              </Affix>
            </tr>
            </thead>


            <tbody v-for="(item,index) in projectData" :key="index">
            <!--project-->
            <tr class="project-tr" style="display: table-cell;vertical-align: top">
              <td>
                <div class="content">
                  <Input class="main-text qihuibangtextarea" type="textarea" autosize placeholder="请输入项目名称" v-model="item.name"
                            @on-blur="editProject(item.id,'name',item.name)"></Input>
                  <Rate v-model="item.degree" @on-change="editProject(item.id,'degree',item.degree)"/>
                  <br>
                  <span class="gray-text">完成度{{item.proportion}}%</span>
                  <div style="display: flex;align-items: center;justify-content: space-between">
                    <i-progress :percent="Number(item.proportion)" :hide-info="hideInfo" style="width:130px;"/>
                    <input-number v-model="item.proportion" style="width: 50px" :min="min" :max="max"
                                  @on-blur="editProject(item.id,'proportion',item.proportion)"/>
                  </div>
                </div>
              </td>
            </tr>


            <!--participant-->
            <tr class="project-tr" style="display: table-cell;vertical-align:top;">
              <td>
                <div class="content" style="width: 280px">
                  <span class="light-black-text">管理员</span><br/>
                  <Row type="flex">
                    <Col v-for="managers in item.manager" :key="managers.index"
                         style="display: flex;flex-direction: column">
                      <Tooltip placement="right" style="margin: 0px">
                        <div style="padding-left:2px;padding-right: 2px;padding-top: 5px;">
                          <img src="../../images/icon_shanchu.png" style="position: absolute;left: 15px;top: -5px"
                               v-show="item.managerIsChecked" @click="delUser(item.id,'manager','reduce',managers.id)"/>
                          <img
                            :src="managers.user_img==''?userImg:rootUrl+managers.user_img|srctransformation"
                            style="width: 30px;height: 30px;border-radius: 70%;" @click="showManagerDelIcon(index)"
                            :onerror="defaultImg"
                            class="imgNormal"/>
                        </div>
                        <div slot="content">
                          <p style="margin-top: 10px">{{managers.name}}</p>
                          <Divider style="color: #666666;margin-top: 10px;margin-bottom: 0px;margin-left: 0px"/>
                          <p style="margin-top: 10px">平均工作时长 {{managers.userAverageTime}}小时</p>
                          <p style="margin-top: 10px">迟到率{{managers.Tardy}}%</p>
                          <p style="margin-top: 10px">加班率0%</p>
                          <p style="margin-top: 10px">任务完成{{managers.finishTask}}个/天</p>
                        </div>
                      </Tooltip>
                    </Col>
                    <div style="padding-left: 5px;padding-right: 5px;padding-top: 5px">
                      <img src="../../images/icon_chengyuan.png" @click="showAddMember(item.id,'manager')"
                           style="width: 30px;height: 30px;cursor: pointer"/>
                    </div>
                  </Row>
                  <br/>
                  <span class="light-black-text">成员</span><br/>
                  <Row type="flex">
                    <Col v-for="user in item.user" :key="user.index" style="display: flex;flex-direction: column">
                      <Tooltip placement="right" style="margin: 0px">
                        <div style="padding-left:2px;padding-right: 2px;padding-top: 5px;">
                          <img src="../../images/icon_shanchu.png" style="position: absolute;left:15px;top: -5px"
                               v-show="item.userIsChecked" @click="delUser(item.id,'user','reduce',user.id)"/>
                          <img
                            :src="user.user_img==''?userImg:rootUrl+user.user_img|srctransformation2"
                            style="width: 30px;height: 30px;border-radius: 70%;" @click="showUserDelIcon(index)"
                            :onerror="defaultImg"
                            class="imgNormal"/>
                        </div>
                        <div slot="content">
                          <p style="margin-top: 10px">{{user.name}}</p>
                          <Divider style="color: #666666;margin-top: 10px;margin-bottom: 0px;margin-left: 0px"/>
                          <p style="margin-top: 10px">平均工作时长 {{user.userAverageTime}}小时</p>
                          <p style="margin-top: 10px">迟到率{{user.Tardy}}%</p>
                          <p style="margin-top: 10px">加班率0%</p>
                          <p style="margin-top: 10px">任务完成{{user.finishTask}}个/天</p>
                        </div>
                      </Tooltip>
                    </Col>
                    <div style="padding-left: 5px;padding-right: 5px;padding-top: 5px">
                      <img src="../../images/icon_chengyuan.png" @click="showAddMember(item.id,'user')"
                           style="width: 30px;height: 30px;cursor: pointer"/>
                    </div>
                  </Row>
                  <br/>
                </div>
              </td>
            </tr>


            <!--presentWork-->
            <tr class="project-tr" style="display: table-cell;vertical-align:top;">
              <td>
                <div class="content">
                  <span class="gray-text">完成度{{item.current_proportion}}%</span>
                  <div style="display: flex;align-items: center;justify-content: space-around">
                    <i-progress :percent="Number(item.current_proportion)" :hide-info="hideInfo" style="width:132px;"/>
                    <input-number v-model="item.current_proportion" style="width:50px" :min="min" :max="max"
                                  @on-blur="editProject(item.id,'current_proportion',item.current_proportion)"/>
                  </div>
                  <Input class="main-text" type="textarea" autosize placeholder="请输入当前工作" v-model="item.current_text"
                            @on-blur="editProject(item.id,'current_text',item.current_text)"/>
                </div>
              </td>
            </tr>


            <!--weeklyGoals-->
            <tr class="project-tr" style="display: table-cell;vertical-align:top;">
              <td>
                <div class="content">
                  <span class="gray-text">完成度{{item.week_proportion}}%</span>
                  <div style="display: flex;align-items: center;justify-content: space-around">
                    <i-progress :percent="Number(item.week_proportion)" :hide-info="hideInfo" style="width:132px;"/>
                    <input-number v-model="item.week_proportion" style="width:50px" :min="min" :max="max" @on-blur="editProject(item.id,'week_proportion',item.week_proportion)"/>
                  </div>
                  <Input class="main-text" type="textarea" autosize placeholder="请输入内容" v-model="item.week_text" @on-blur="editProject(item.id,'week_text',item.week_text)"/>
                </div>
              </td>
            </tr>

            <!--monthlyGoals-->
            <tr class="project-tr" style="display: table-cell;vertical-align:top;">
              <td>
                <div class="content">
                  <span class="gray-text">完成度{{item.month_proportion}}%</span>
                  <div style="display: flex;align-items: center;justify-content: space-around">
                    <i-progress :percent="Number(item.month_proportion)" :hide-info="hideInfo" style="width:132px;"/>
                    <input-number v-model="item.month_proportion" style="width:50px" :min="min" :max="max"
                                  @on-blur="editProject(item.id,'month_proportion',item.month_proportion)"/>
                  </div>
                  <Input class="main-text" type="textarea" autosize placeholder="请输入本月目标" v-model="item.month_text"
                            @on-blur="editProject(item.id,'month_text',item.month_text)"/>

                </div>
              </td>
            </tr>


            <!--nextMonthlyGoals-->
            <tr class="project-tr" style="display: table-cell;vertical-align:top;">
              <td>
                <div class="content">
                  <span class="gray-text">完成度{{item.next_month_proportion}}%</span>
                  <div style="display: flex;align-items: center;">
                    <i-progress :percent="Number(item.next_month_proportion)" :hide-info="hideInfo"
                                style="width:132px;"/>
                    <input-number v-model="item.next_month_proportion" style="width:50px;" :min="min" :max="max"
                                  @on-blur="editProject(item.id,'next_month_proportion',item.next_month_proportion)"/>
                  </div>
                  <Input class="main-text" type="textarea" autosize placeholder="请输入下月目标"
                            v-model="item.next_month_text"
                            @on-blur="editProject(item.id,'next_month_text',item.next_month_text)"/>
                </div>
              </td>
            </tr>

            <!--needHelp-->
            <tr class="project-tr" style="display: table-cell;vertical-align:top;">
              <td>
                <div style="width: 180px" class="content">
                  <Input class="main-text" type="textarea" autosize placeholder="请输入需要协助的问题" v-model="item.assist"
                            @on-blur="editProject(item.id,'assist',item.assist)"/>
                </div>
              </td>
            </tr>

            <!--summary-->
            <tr class="project-tr" style="display: table-cell;vertical-align:top;">
              <td>
                <div style="width: 180px" class="content">
                  <Input class="main-text" type="textarea" autosize placeholder="请对本周工作进行总结" v-model="item.summarize"
                            @on-blur="editProject(item.id,'summarize',item.summarize)"/>
                </div>
              </td>
            </tr>
            <!--action-->
            <tr class="project-tr" style="display: table-cell;vertical-align:top;">
              <td>
                <div class="action">
                  <i-button class="accelerate">提速</i-button>
                  <i-button class="reward">奖罚</i-button>
                  <i-button class="pigeonhole" @click="saveStatus(item.id,'finished')">归档</i-button>
                  <i-button class="save" @click="saveStatus(item.id,'backups')">保存版本</i-button>
                  <i-button @click="getVersionList(item.id)" class="change-version">切换版本</i-button>
                      <div v-show="item.id==thenid?true:false" class="copy2018 unshow">
                        <div class="copycontent">
                          <el-scrollbar style="height:100%;">
                              <ul>
                                <li v-for="option in versionList" :value="option.id" :key="option.id"><el-button @click="changeVersion(option.id)" size="mini" type="text">{{ option.name }}</el-button></li>
                              </ul>
                          </el-scrollbar>
                        </div>
                    </div>
                  <!-- <i-select class="change-version" v-model="versionId" placeholder="切换版本"
                            @on-open-change="getVersionList(item.id)" @on-change="changeVersion(versionId)">
                    <i-option v-for="option in versionList" :value="option.id" :key="option.id">{{ option.name }}
                    </i-option>
                  </i-select> -->
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Modal v-model="addMemberFlag" title="添加成员" style="width: 520px"
               @on-ok="editUser(projectId,userType,editStatus)" @on-cancel="cancelEdit()">
          <div style="text-align: center">
            <Input search placeholder="请输入你要搜素的昵称" class="search-input" v-model="keyword"
                   @on-change="searchByName(keyword)"/>
            <div>
              <Scroll style="height: 300px;width: 500px">
                <Row type="flex">
                  <Col v-for="(user,index) in userData" style="display: flex;flex-direction: column" :key="index">
                    <div
                      style="display: flex;flex-direction: column;justify-content: space-around;width: 68px;padding-top: 30px;align-items: center"
                      @click="selectMember(index)">
                      <img style="width: 44px;height: 44px;border-radius: 70%;"
                           :src="user.user_img==''?userImg:rootUrl+user.user_img|srctransformation4"
                           :class="user.isChecked ? 'withBorder' : 'noBorder'"
                           :v-model="user.isChecked" :onerror="defaultImg"/>
                      <span style="margin-top: 13px">{{user.name}}</span>
                      <span style="margin-top: 10px">{{user.dname}}</span>
                      <img src="../../images/icon_xuanzhong.png" style="position: absolute;top: 25px;right: 5px"
                           v-show="user.isChecked"/>
                    </div>
                  </Col>
                </Row>
              </Scroll>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    filters: {
      srctransformation: function (value) {
        if (value.indexOf('http://thirdwx.qlogo.cn') != -1) {
          return value.replace(window.localStorage.api, "");
        } else {
          return value;
        }
      },
      srctransformation2: function (value) {
        if (value.indexOf('http://thirdwx.qlogo.cn') != -1) {
          return value.replace(window.localStorage.api, "");
        } else {
          return value;
        }
      },
      srctransformation3: function (value) {
        if (value.indexOf('http://thirdwx.qlogo.cn') != -1) {
          return value.replace(window.localStorage.api, "");
        } else {
          return value;
        }
      },
      srctransformation4: function (value) {
        if (value.indexOf('http://thirdwx.qlogo.cn') != -1) {
          return value.replace(window.localStorage.api, "");
        } else {
          return value;
        }
      },
    },
    created() {
    },
    mounted() {
      //验证是否登录
      if (!window.sessionStorage.status) {
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path: '/pages/login'});
        return;
      }
      this.getData(this.selectTime);
    },
    methods: {
      //切换页面
      switchPage() {
        let routeData = this.$router.resolve({name: 'DepTable'});
        window.open(routeData.href, "_blank");
      },
      //筛选
      searchByName(keyWord) {
        this.userData = this.allUserData.filter((item) => {  //过滤数组元素
          return item.name.includes(this.keyword); //如果包含字符返回true
        });
      },
      editinput(_id, _index) {
        this.isid = _id;
        this.isindex = _index;
      },
      //获取项目信息
      getData(time) {
        let self = this;
        self.selectTime = time;
        let params = new URLSearchParams();
        params.append('select_time', time);
        self.$api.get("/get/admin/projects", params, function (res) {
          self.projectData = []
          for (let i = 0; i < res.message.length; i++) {
            self.projectData.push({
              "id": res.message[i].id,
              "name": res.message[i].name,
              "degree": res.message[i].degree,
              "proportion": Number(res.message[i].proportion),
              "current_proportion": Number(res.message[i].current_proportion),
              "current_text": String(res.message[i].current_text),
              "week_proportion": Number(res.message[i].week_proportion),
              "week_text": res.message[i].week_text,
              "month_proportion": Number(res.message[i].month_proportion),
              "month_text": res.message[i].month_text,
              "next_month_proportion": Number(res.message[i].next_month_proportion),
              "next_month_text": res.message[i].next_month_text,
              "assist": res.message[i].assist,
              "summarize": res.message[i].summarize,
              "old_versions": res.message[i].old_versions,
              "isdelete": res.message[i].isdelete,
              "created_at": res.message[i].created_at,
              "updated_at": res.message[i].updated_at,
              "company_id": res.message[i].company_id,
              "user": res.message[i].user,
              "manager": res.message[i].manager,
              "managerIsChecked": false,
              "userIsChecked": false
            });
          }

        }, function (res) {
        })
      },

      forId(index) {
        return "eChart_" + index;
      },
      //编辑项目
      editProject(id, type, param) {
        this.isid = '';
        let self = this
        let params = new URLSearchParams();
        params.append('id', id);
        params.append('type', type);
        params.append('value', param=='null'?'':param);
        self.$api.post("/set/admin/projects", params, function (res) {
          self.$Message.success('保存成功');
          self.getData(self.selectTime);
        }, function (res) {
          console.log(res)
        })
      },

      //获取所有用户
      getUsers() {
        let self = this
        self.userData = [];
        self.$api.get("/get/users", null, function (res) {
          for (let i = 0; i < res.message.length; i++) {
            self.userData.push({
              "id": res.message[i].id,
              "name": res.message[i].name,
              "user_img": res.message[i].user_img,
              "isChecked": false,
              "dname": res.message[i].dname
            });
          }
          self.allUserData = self.userData;
          self.addMemberFlag = true
        }, function (res) {
        })
      },

      //添加项目
      addProject() {
        this.projectData.splice(0, 0, {
          id: '',
          name: '',
          degree: 0,
          proportion: 0,
          current_proportion: 0,
          current_text: '',
          week_proportion: 0,
          week_text: '',
          month_proportion: 0,
          month_text: '',
          next_month_proportion: 0,
          next_month_text: '',
          assist: '',
          summarize: '',
        })
      },
      //显示新增用户弹窗
      showAddMember(id, type) {
        this.projectId = id;
        this.userType = type;
        this.editStatus = 'add';
        this.getUsers();
      },
      //选择新增的用户
      selectMember(index) {
        let item = this.userData[index];
        item.isChecked = item.isChecked ? false : true
        if (item.isChecked) {
          this.selUserData.push(item)
        } else {
          this.selUserData.splice(this.selUserData.indexOf(item), 1)
        }
      },
      //新增用户
      editUser(id, type, status) {
        let self = this
        let params = new URLSearchParams();
        let user_id = '';
        for (let i = 0; i < this.selUserData.length; i++) {
          user_id += this.selUserData[i].id + ';';
        }
        params.append('id', id);
        params.append('type', type);
        params.append('status', status);
        params.append('user_id', user_id);
        self.$api.post("/set/admin/user/projects", params, function (res) {
          self.$Message.success('保存成功');
          self.getData(self.selectTime);
          self.cancelEdit();
        }, function (res) {
          self.cancelEdit();
        })
      },
      //清空所有选择的用户
      cancelEdit() {
        this.projectId = '';
        this.userType = '';
        this.editStatus = '';
        this.selUserData = [];
        for (let i = 0; i < this.userData.length; i++) {
          let item = this.userData[i];
          item.isChecked = false;
        }
      },

      //显示删除管理员的图标
      showManagerDelIcon(index) {
        let item = this.projectData[index];
        // item.userIsChecked = item.userIsChecked ? false :true
        item.managerIsChecked = item.managerIsChecked ? false : true
      },

      //显示删除用户的图标
      showUserDelIcon(index) {
        let item = this.projectData[index];
        item.userIsChecked = item.userIsChecked ? false : true
      },

      //删除用户
      delUser(id, type, status, user_id) {
        let self = this
        let params = new URLSearchParams();
        params.append('id', id);
        params.append('type', type);
        params.append('status', status);
        params.append('user_id', user_id);
        self.$api.post("/set/admin/user/projects", params, function (res) {
          self.$Message.success('删除成功');
          self.getData(self.selectTime)
        }, function (res) {
          self.$Message.success('删除失败');
        })
      },

      //归档和保存版本
      saveStatus(id, type) {
        let self = this;
        let params = new URLSearchParams();
        params.append('id', id);
        params.append('type', type);
        self.$api.post("/save/admin/projects/status", params, function (res) {
          if (type == "finished") {
            self.$Message.success('归档成功');
          } else {
            self.$Message.success('保存版本成功');
          }
          self.getData(self.selectTime);
        }, function (res) {
          self.$Message.success('操作失败');
        })
      },

      //版本列表
      getVersionList(id) {
        console.log(id+"要切换此ID的版本");
        this.thenid = id;
        let self = this;
        let params = new URLSearchParams();
        params.append('id', id);
        self.versionList = [];
        self.$api.get("/save/admin/projects/getVersions", params, function (res) {
          for (let i = 0; i < res.message.length; i++) {
            self.versionList.push({
              "id": res.message[i].id,
              "name": res.message[i].created_at,
            });
          }
        }, function (res) {
        })
        if($('.copy2018').css('visibility')=='hidden'){
          $('.copy2018').addClass('animated slideIn show');
        }else{
          $('.copy2018').removeClass('animated slideIn show');
        }
      },

      //切换版本
      changeVersion(id) {
        console.log(id+'第二个按钮。id代表版本')
        let self = this;
        let params = new URLSearchParams();
        if (id !== '' && id !== null && (typeof(id) !== "undefined")){
          params.append('id', id);
          self.versionList = [];
          self.$api.post("/save/admin/projects/saveVersions", params, function (res){
            self.$Message.success('切换版本成功');
            self.getData(self.selectTime);
          }, function (res) {
            self.$Message.success(res.message)
          })
        }
        if($('.copy2018').css('visibility')=='hidden'){
          $('.copy2018').addClass('animated slideIn show');
        }else{
          $('.copy2018').removeClass('animated slideIn show');
        }
        $('.copy2018').removeClass('animated slideInRight show');
      }
    },
    data() {
      return {
        thenid:0,//切换版本时使用id
        versionId: '',
        selectTime: '',
        keyword: '',
        rootImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
        userImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAADo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjR0dHW1tbb29ve3t7i4uLY2Njk5OQwtOK3AAAAI3RSTlMAC+BHIPXxdwjb7J1PFOTWx71ZArhs6dGUFqZwmJBcKahdt2kJJfYAAAJXSURBVFjDxdkJcqswDAZghTUQKNkTkjZN32/W+x/wtZlpaUIksIHpdwCNFyHbgjrE9u64SvYe3DA4rI47OyZzs+jtgJbDWzQjAxv75ILhnuyN7uDOFkTWWWeYcz9Ep9CfU09rC71Ya+rD+Yfetg51unjQ4F26Vm8BTQtxJdMltC1TYfkCGAjYhXx/gZGXd2Z8Ujw54tMxxgGMBfGT/V1igGV7rxcYZNHKZwx0edgQDwN59xuzhaAuskxlWV7K3/VdfZHCVepbJoZcN/FmFliF+i0Hz2pKrg9Wru5V4Pk/Awzl8fUdY/g9xB2/fqpNWMcd3WwsYcJtmbCKm1tAGyz1TA2WfQt4AqdUzxRgXW9b4urMWN5o92tbImgGzMCLPgO+jhnw9TNggPGmjIAoBYZvSiNlkkZOG4HNfMdiYkt8pvSLn558FKzAYIuDaEUJGFz5kiW0B4MrsLI9eWBwR4DMI3Sri6o5pLqQi3FRiFF5ZGFUezpAVpfFL2UNWSIndpln6kHH3qz4T69JmEZ39iyE4lAoVg6Oz5evXAkqvnylfDyTiClRoDdfuW4H7CGlOtXcIRWxEzaYdMQd9KqHmjno6SquoFbuXLnLEpPRnaeVzV3nMrOA1oa7cCqzgGf2Sqx6Ya/E5I8T0GeeFRpryD0raG2Q2PljHq7lp1lZ5HmVPVNVeV60S+J22scjfWCgj4kf4MNbBNM2MYa3WaZtBDWcBAYSh1ixSTMtFtt9R2g6zkkW6TUkI+rkbNHb1pm0qTu87TxlY3x46/7vfy7c//5wAXef9Pn98R+pP67D9VcSWgAAAABJRU5ErkJggg==',
        isid: '',
        isindex: 100000,
        rootUrl: window.localStorage.api,
        addMemberFlag: false,
        hideInfo: true,
        max: 100,
        min: 0,
        projectId: '',
        userType: '',
        editStatus: '',
        defaultImg: 'this.src="' + require('../../images/head_default_icon.png') + '"',
        versionList: [],
        columnsProject: [
          '项目',
          '参与人',
          '当前工作',
          '本周目标',
          '本月目标',
          '下月目标',
          '需要协助',
          '本周总结',
          '操作',
        ],
        projectData: [],
        columnsDep: [
          '部门',
          '本周目标',
          '当前工作',
          '操作',
        ],
        depData: [],
        userData: [],
        selUserData: [],
        allUserData: [],
        backgroundTop: {
          backgroundImage: 'url(' + require('../../images/img_bj_top.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          minWidth: '1900px',
        },
        backgroundBottom: {
          backgroundImage: 'url(' + require('../../images/img_bj_botton.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
        },
      }
    }
  }

</script>
<style lang="scss" scoped>
  .layout {
    min-height: 800px;
  }

  .schedule-table-container {
    margin-top: 20px;
    min-height: 810px;
    padding-bottom: 100px;
  }

  .table-tr {
    height: 56px;
    color: #666;
    padding-left: 20px;
    background-color: #f7f7f7;
    width: 100%;
    display: flex;
    align-items: center;
  }

  table {
    display: table;
    border-collapse: collapse;
    background-color: #fff;
    margin: 0 auto;
    width: 98%;
  }

  .top-container {
    margin: 0 auto;
    width: 98%;
    text-align: center;
    display: flex;
    display: -webkit-flex; /* Safari */
    justify-content: space-between;
    align-items: center;
  }

  .add-project {
    display: flex;
    background: #fff;
    width: 140px;
    height: 40px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  }

  h2 {
    color: #333;
  }

  .content {
    padding: 20px 20px 20px 20px;
  }

  thead {
    background-color: #f7f7f7;
  }

  tr {
    border: 1px solid #eeeeee;
  }

  .main-text {
    color: #333333;
    font-size: 14px;
  }

  .light-black-text {
    color: #999;
    font-size: 12px;
  }

  .gray-text {
    color: #ccc;
    font-size: 12px;
  }

  .black-text {
    color: #333;
    font-size: 16px;
  }

  .blue-text {
    color: #6680ff;
    font-size: 16px;
  }

  .accelerate {
    background: #ffffff;
    border: 1px solid #667fff;
    color: #667fff;
    height: 30px;
    width: 100px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }

  .reward {
    background: #ffffff;
    border: 1px solid #ff6666;
    color: #ff6666;
    margin-top: 10px;
    height: 30px;
    width: 100px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }

  .pigeonhole {
    background: #ffffff;
    border: 1px solid #04cc6c;
    color: #04cc6c;
    margin-top: 10px;
    height: 30px;
    width: 100px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }

  .save {
    background: #6680ff;
    color: #ffffff;
    margin-top: 10px;
    height: 32px;
    width: 100px;
    border-radius: 4px;
    padding: 0px;
    font-size: 12px;
    cursor: pointer;
  }

  .change-version {
    margin-top: 10px;
    height: 32px;
    width: 100px;
    border-radius: 4px;
    padding: 0px;
    font-size: 10px;
    cursor: pointer;
  }

  .action {
    display: flex;
    flex-direction: column;
    padding: 20px 10px 10px 10px;
    width: 120px;
    position: relative;
  }

  .ivu-input {
    outline: none !important;
    border: none !important;
    resize: none !important;
    overflow: hidden;
    margin-top: 2px;

  }

  .ivu-input-number {
    outline: none;
    border: none;
  }

  .search-input {
    border: 1px solid #cccccc;
    width: 450px;
    border-radius: 4px;
    text-align: center;
    margin: 0 auto;
    resize: none;
  }

  .ivu-date-picker {
    width: 220px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }

  .add-project {
    width: 140px;
    height: 40px;
    border-radius: 4px;
  }

  .add-project-text {
    color: #6680ff;
    font-size: 18px;
    margin-left: 10px;
  }

  .withBorder {
    border: 1px solid #667fff;
  }

  .noBorder {
    border: 0px !important;
  }

  .imgNormal {
    border: 0px !important;
  }

  .imgNormal:hover {
    border: 1px solid #667fff;
  }

  /*去掉边框*/
  input, input:active {
    border: none !important;
    outline: none;
    box-shadow: none;
    width: 100%;
    overflow: hidden;
  }

  .copy2018{
    border-radius: 5px;
    border:1px solid #ededed;
    width:160px;
    height:100%;
    position: absolute;
    right:120px;
    top:0;
    box-shadow: -4px 0px 20px 0px 
		rgba(0, 0, 0, 0.08);
    background:white;
  }

  .copy2018 .copycontent{
    height:100%;
    padding: 10px;
  }

  .unshow{
    visibility: hidden;
    z-index: -1000;
  }

  .show{
    visibility:visible;
    z-index: 1000;
  }

</style>
<style>
  text.highcharts-credits {
    display: none;
  }

  .ivu-input{
    resize: none;
    border: none !important;
  }
</style>
