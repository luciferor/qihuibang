<template>
  <div :style="backgroundTop">

    <div class="layout">
      <h2 align="center">项目进度表</h2>

      <div class="top-container">
        <div class="datePicker-container">
          <DatePicker type="date" placeholder="请选择日期"></DatePicker>
        </div>
        <div class="add-project" @click="addProject()">
          <img src="../../images/icon_tianjia.png"/>
          <span class="add-project-text">添加项目</span>
        </div>
      </div>


      <div id="fixedTableHeader"
           style=" position: fixed;top: 0px;margin: 0 auto;z-index: 9999;width: 100%;display: none">
        <table style="width: 98%;">
          <thead>
          <tr v-for="(title,index) in columnsProject" style="display: table-cell;vertical-align:middle;" :key="index">
            <td class="table-tr">{{title}}</td>
          </tr>
          </thead>
        </table>
      </div>

      <div class="schedule-table-container">
        <table cellspacing="0">
          <thead>
          <!--style="position: fixed;top: 0px;width: 98%;background: #f7f7f7;z-index: 1000;display: flex;justify-content: space-between;"-->
          <tr v-for="(title,index) in columnsProject" style="display: table-cell;vertical-align:middle;" :key="index">
            <td class="table-tr">{{title}}</td>
          </tr>
          </thead>
          <tbody v-for="(item,index) in projectData" :key="index">
          <!--project-->
          <tr class="project-tr" style="display: table-cell;vertical-align: top">
            <td>
              <div class="content">
                <div v-show="isid==item.id&&isindex==1?false:true" style="padding:10px; width:100%;" class="posor" @click="editinput(item.id,1)">{{item.name==""?'请输入内容':item.name}}</div>
                <i-input v-show="isid==item.id&&isindex==1?true:false" placeholder="请输入项目名称" class="main-text" v-model="item.name" type="text"
                         @on-blur="editProject(item.id,'name',item.name)" :autosize="{minRows:2,maxRows:100}"/>
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
                  <Col v-for="managers in item.manager" :key="managers.index" style="display: flex;flex-direction: column">
                    <Tooltip placement="right" style="margin: 0px">
                      <div style="padding-left:2px;padding-right: 2px;padding-top: 5px;">
                        <img src="../../images/icon_shanchu.png" style="position: absolute;left: 32px"
                             v-show="item.managerIsChecked" @click="delUser(item.id,'manager','reduce',managers.id)"/>
                        <img
                          :src="managers.user_img==''?'https://devqypyp.xiaohuibang.com/images/5b860864e2d46.jpeg':rootUrl+managers.user_img"
                          style="width: 44px;height: 44px;border-radius: 70%;" @click="showManagerDelIcon(index)"
                          :onerror="defaultImg"
                          class="imgNormal"/>
                      </div>
                      <div slot="content">
                        <p style="margin-top: 10px">{{managers.name}}</p>
                        <Divider style="color: #666666;margin-top: 10px;margin-bottom: 0px;margin-left: 0px"/>
                        <p style="margin-top: 10px">平均工作时长 8小时</p>
                        <p style="margin-top: 10px">迟到率</p>
                        <p style="margin-top: 10px">加班率</p>
                        <p style="margin-top: 10px">任务完成10个/天</p>
                        <p></p>
                      </div>
                    </Tooltip>
                  </Col>
                  <div style="padding-left: 5px;padding-right: 5px;padding-top: 5px">
                    <img src="../../images/icon_chengyuan.png" @click="showAddMember(item.id,'manager')"
                         style="width: 44px;height: 44px;cursor: pointer"/>
                  </div>
                </Row>
                <br/>
                <span class="light-black-text">成员</span><br/>
                <Row type="flex">
                  <Col v-for="user in item.user" :key="user.index" style="display: flex;flex-direction: column">
                    <Tooltip placement="right" style="margin: 0px">
                      <div style="padding-left:2px;padding-right: 2px;padding-top: 5px;">
                        <img src="../../images/icon_shanchu.png" style="position: absolute;left: 32px"
                             v-show="item.userIsChecked" @click="delUser(item.id,'user','reduce',user.id)"/>
                        <img
                          :src="user.user_img==''?'https://devqypyp.xiaohuibang.com/images/5b860864e2d46.jpeg':rootUrl+user.user_img"
                          style="width: 44px;height: 44px;border-radius: 70%;" @click="showUserDelIcon(index)"
                          :onerror="defaultImg"
                          class="imgNormal"/>
                      </div>
                      <div slot="content">
                        <p style="margin-top: 10px">统计</p>
                        <Divider style="color: #666666;margin-top: 10px;margin-bottom: 0px;margin-left: 0px"/>
                        <p style="margin-top: 10px">平均工作时长 8小时/人/天</p>
                        <p style="margin-top: 10px">迟到率10%</p>
                        <p style="margin-top: 10px">加班率10%</p>
                        <p style="margin-top: 10px">任务完成10个/天</p>
                      </div>
                    </Tooltip>
                  </Col>
                  <div style="padding-left: 5px;padding-right: 5px;padding-top: 5px">
                    <img src="../../images/icon_chengyuan.png" @click="showAddMember(item.id,'user')"
                         style="width: 44px;height: 44px;cursor: pointer"/>
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
                <div v-show="isid==item.id&&isindex==2?false:true" style="padding:10px; width:100%;" class="posor" @click="editinput(item.id,2)">{{item.current_text==""?'请输入内容':item.current_text}}</div>
                <i-input v-show="isid==item.id&&isindex==2?true:false" placeholder="请输入当前工作" class="main-text" :autosize="{minRows:2,maxRows: 100}"
                         v-model="item.current_text" type="textarea"
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
                  <input-number v-model="item.week_proportion" style="width:50px" :min="min" :max="max"
                                @on-blur="editProject(item.id,'week_proportion',item.week_proportion)"/>
                </div>
                <div v-show="isid==item.id&&isindex==3?false:true" style="padding:10px; width:100%;" class="posor" @click="editinput(item.id,3)">{{item.week_text==""?'请输入内容':item.week_text}}</div>
                <i-input v-show="isid==item.id&&isindex==3?true:false" placeholder="请输入本周目标" class="main-text" :autosize="{minRows:2,maxRows: 100}"
                         v-model="item.week_text" type="textarea"
                         @on-blur="editProject(item.id,'week_text',item.week_text)"/>

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
                <div v-show="isid==item.id&&isindex==4?false:true" style="padding:10px; width:100%;" class="posor" @click="editinput(item.id,4)">{{item.month_text==""?'请输入内容':item.month_text}}</div>
                <i-input v-show="isid==item.id&&isindex==4?true:false" placeholder="请输入本月目标" class="main-text" v-model="item.month_text"
                         :autosize="{minRows:2,maxRows: 100}" type="textarea"
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
                  <i-progress :percent="Number(item.next_month_proportion)" :hide-info="hideInfo" style="width:132px;"/>
                  <input-number v-model="item.next_month_proportion" style="width:50px;" :min="min" :max="max"
                                @on-blur="editProject(item.id,'next_month_proportion',item.next_month_proportion)"/>
                </div>
                <div v-show="isid==item.id&&isindex==5?false:true" style="padding:10px; width:100%;" class="posor" @click="editinput(item.id,5)">{{item.next_month_text==""?'请输入内容':item.next_month_text}}</div>
                <i-input v-show="isid==item.id&&isindex==5?true:false" placeholder="请输入下月目标" class="main-text" v-model="item.next_month_text"
                         :autosize="{minRows:2,maxRows: 100}" type="textarea"
                         @on-blur="editProject(item.id,'next_month_text',item.next_month_text)"/>

              </div>
            </td>
          </tr>

          <!--needHelp-->
          <tr class="project-tr" style="display: table-cell;vertical-align:top;">
            <td>
              <div style="width: 180px" class="content">
                <div v-show="isid==item.id&&isindex==6?false:true" style="padding:10px; width:100%;" class="posor" @click="editinput(item.id,6)">{{item.assist==""?'请输入内容':item.assist}}</div>
                <i-input v-show="isid==item.id&&isindex==6?true:false" placeholder="请输入需要协助的问题" class="main-text" v-model="item.assist"
                         :autosize="{minRows:2,maxRows: 100}" type="textarea"
                         @on-blur="editProject(item.id,'assist',item.assist)"/>

              </div>
            </td>
          </tr>

          <!--summary-->
          <tr class="project-tr" style="display: table-cell;vertical-align:top;">
            <td>
              <div style="width: 180px" class="content">
                <div v-show="isid==item.id&&isindex==7?false:true" style="padding:10px; width:100%;" class="posor" @click="editinput(item.id,7)">{{item.summarize==""?'请输入内容':item.summarize}}</div>
                <i-input v-show="isid==item.id&&isindex==7?true:false" placeholder="请对本周工作进行总结" class="main-text" v-model="item.summarize"
                         :autosize="{minRows:2,maxRows: 100}" type="textarea"
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
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <h2 align="center">部门报表</h2>
      <div :style="backgroundBottom" class="dep-table-container">
        <table cellspacing="0">
          <thead>
          <tr v-for="(depTitle,index) in columnsDep" style="display: table-cell;vertical-align:middle;" :key="index">
            <td class="table-tr">{{depTitle}}</td>
          </tr>
          </thead>
          <tbody v-for="(department,index) in depData" :key="index">
          <!--department-->
          <tr class="project-tr" style="display: table-cell;vertical-align: top">
            <td>
              <div style="width: 160px" class="content">
                <span class="main-text">{{department.dname}}</span>
              </div>
            </td>
          </tr>

          <!--weeklyGoals-->
          <tr class="project-tr" style="display: table-cell;vertical-align:top;">
            <td>
              <div class="content">
                <span class="gray-text">完成度{{department.proportion}}%</span>
                <div style="display: flex;align-items: center;justify-content: space-around">
                  <i-progress :percent="Number(department.proportion)" :hide-info="hideInfo" style="width:132px;"/>
                  <input-number v-model="department.proportion" style="width:50px" :min="min" :max="max"
                                @on-blur="editDepartmentProject(department.id,department.week_target,department.proportion)"/>
                </div>
                <div v-show="isid==department.id?false:true" style="padding:10px; width:100%;" class="posor" @click="editinput(department.id,0)">{{department.week_target==""?'请输入内容':department.week_target}}</div>
                <i-input v-show="isid==department.id?true:false" placeholder="请输入当前工作" class="main-text" :autosize="{minRows:2,maxRows: 100}"
                         v-model="department.week_target" type="textarea"
                         @on-blur="editDepartmentProject(department.id,department.week_target,department.proportion)"/>
              </div>
            </td>
          </tr>

          <!--presentWork-->
          <tr class="project-tr" style="display: table-cell;vertical-align:middle;">
            <td>
              <div class="content">

                <div style="display: flex;align-items: center">
                  <img
                    :src="department.manageUserimg==''?'https://devqypyp.xiaohuibang.com/images/5b860864e2d46.jpeg':rootUrl+department.manageUserimg"
                    style="width: 44px;height: 44px;border-radius: 70%;" :onerror="defaultImg"/>
                  <span class="black-text" style="margin-left: 10px">主管：</span>
                  <span class="blue-text">{{department.manageUserName}}</span>
                </div>
                <div :id="forId(department.id)"
                     style="height:600px;width: 850px;margin-left: 160px;margin-right:300px;margin-bottom: 20px"></div>
              </div>
            </td>
          </tr>


          <!--action-->
          <tr class="project-tr" style="display: table-cell;vertical-align:top;">
            <td>
              <div class="action">
                <Button class="accelerate">提速</Button>
                <Button class="reward">奖罚</Button>
                <Button class="pigeonhole" @click="saveStatus(department.id,'finished')">归档</Button>
                <Button class="save" @click="saveStatus(department.id,'backups')">保存版本</Button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Modal v-model="addMemberFlag" title="添加成员" style="width: 520px"
               @on-ok="editUser(projectId,userType,editStatus)" @on-cancel="cancelEdit()">
          <div style="text-align: center">
            <Input search placeholder="请输入你要搜素的昵称" class="search-input"/>
            <div>
              <Scroll style="height: 300px;width: 500px">
                <Row type="flex">
                  <Col v-for="(user,index) in userData" style="display: flex;flex-direction: column" :key="index">
                    <div
                      style="display: flex;flex-direction: column;justify-content: space-around;width: 68px;padding-top: 30px;align-items: center"
                      @click="selectMember(index)">
                      <img style="width: 44px;height: 44px;border-radius: 70%;"
                           :src="user.user_img==''?'https://devqypyp.xiaohuibang.com/images/5b860864e2d46.jpeg':rootUrl+user.user_img"
                           :class="user.isChecked ? 'withBorder' : 'noBorder'"
                           :v-model="user.isChecked" :onerror="defaultImg"/>
                      <span style="margin-top: 13px">{{user.name}}</span>
                      <span style="margin-top: 10px">{{user.id}}</span>
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
    created() {
      setTimeout(() => {
        this.initHighChart();
      }, 2000)

    },
    mounted() {
      this.getData();
      this.getDepList();
    },
    methods: {
      editinput(_id,_index){
        console.log(_id+"====="+_index);
        this.isid = _id; 
        this.isindex = _index;
      },
      //获取项目信息
      getData() {
        console.log("getData()被调用了么")
        let self = this
        self.$api.get("/get/admin/projects", null, function (res) {
          self.projectData = []
          for (let i = 0; i < res.message.length; i++) {
            self.projectData.push({
              "id": res.message[i].id,
              "name": res.message[i].name,
              "degree": res.message[i].degree,
              "proportion": Number(res.message[i].proportion),
              "current_proportion": Number(res.message[i].current_proportion),
              "current_text": res.message[i].current_text,
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
          console.log(res)
        })
      },

      forId(index) {
        return "eChart_" + index;
      },

      //初始化报表
      initEchart() {
        for (let i = 0; i < this.depData.length; i++) {
          let item = this.depData[i];
          let id = "eChart_" + this.depData[i].id;
          let div = document.getElementById(id);
          let charts = this.$echarts.init(div);
          let totals = [];
          let target = [];
          let average = [];
          let indicator = [];
          for (let j = 0; j < item.userList.length; j++) {
            let user = item.userList[j];
            indicator.push(
              {
                name: user.name,
                max: user.target_bangfen + 50,
                workTime: user.userAverageTime,
                rank: user.ranking,
                position: user.pname
              }
            );
            totals.push(user.totalBangfen);
            target.push(user.target_bangfen);
            average.push(user.departmentAverageBangfen);
          }

          let option = {
            tooltip: {
              show: true,
              formatter: function (params) {
                console.log(JSON.stringify(params));
                let id = params.dataIndex;
                return indicator[id].name + '&nbsp;&nbsp;&nbsp;' + indicator[id].position + '<br>' + '目标邦分：' + target[id] + '分' + '<br>本周获得邦分：' + totals[id] + '分' + '<br>部门平均分：' + average[id] + '分'
                  + '<br>平均工作时长:' + indicator[id].workTime + '小时' + '<br>' + '本周排名: ' + indicator[id].rank + '名';
              }
            },
            radar: {
              // shape: 'circle',
              name: {
                textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
                }
              },
              indicator: [],
            },
            series: [{
              name: '预算 vs 开销（Budget vs spending）',
              type: 'radar',
              data: []
            }]
          };
          option.series.push({
            name: '总邦分 vs 目标邦分',
            type: 'radar',
            data: [
              {
                value: average,
                name: '部门平均分',
                pointPlacement: 'on',
                itemStyle: {
                  normal: {
                    lineStyle: {
                      color :"#3366FF", //设置拐点颜色
                      width : 0 //设置各个拐点连接的线条颜色
                    },
                  },
                  hover:{
                    lineStyle: {
                      color :"blue", //设置拐点颜色
                      width : 0 //设置各个拐点连接的线条颜色
                    },
                  }
                },
              },
              {
                value: totals,
                name: '总邦分',
                pointPlacement: 'on'
              },
              {
                value: target,
                name: '目标邦分',
                pointPlacement: 'on'
              },
            ]
          });
          option.radar.indicator = indicator;
          charts.setOption(option);
          //点击Echarts雷达图拐点时,获取indicator的name值
          charts.on('mouseover', (params) => {
            console.log("======"+params.event)
            if (params.componentType === 'topTarget') {
              // 点击到了 markPoint 上
              console.log("==============>>>" + params.event.topTarget);
              console.log(option.radar.indicator[params.event.topTarget].name);
            }
            // console.log(option.radar.indicator[params.event.topTarget.__dimIdx].name);
          });
        }

      },

      //initHighEchart
      initHighChart(){
        for (let i = 0; i < this.depData.length; i++) {
          let item = this.depData[i];
          let id = "eChart_" + this.depData[i].id;
          let totals = [];
          let targets = [];
          let average = [];
          let categories = [];
          for (let j = 0; j < item.userList.length; j++) {
            let user = item.userList[j];
            categories.push(user.name);
            totals.push({
              index:i,
              y:user.totalBangfen,
              position: user.pname,
              rank:'本周排名'+user.ranking+'名',
              workTime: '平均工作时长'+user.userAverageTime+'小时',
              target:'指标邦分'+user.target_bangfen+'分',
              weekScore:'本周获得邦分'+user.totalBangfen+'分',
              averageScore:'部门平均邦分'+user.departmentAverageBangfen+'分',
            });
            targets.push(user.target_bangfen);
            average.push(user.departmentAverageBangfen);
          }

          let options =  {
            chart: {
              polar: true,
              type: 'line'
            },
            title: {
              text: '',
              x: -80
            },
            pane: {
              size: '80%'
            },
            xAxis: {
              categories: categories,
              tickmarkPlacement: 'on',
              lineWidth: 0,
              color:'#ffffff'
            },
            yAxis: {
              gridLineInterpolation: 'polygon',
              lineWidth: 0,
              min: 0
            },
            tooltip: {
              backgroundColor: "#000000",//背景颜色
              borderWidth: 0,
              borderRadius: 5,
              shared: true,
              pointFormat: '<span style="font-size: 14px">{point.position}<br/><br/>{point.target}<br/>{point.weekScore}<br/>{point.averageScore}<br/>{point.workTime}<br/>{point.rank}</span>',
              valueSuffix: ' 分', // 数值后缀
              style: {                      // 文字内容相关样式
                color: "#ffffff",
                fontSize:'14px',
              },
              crosshairs: [true, true],
              headerFormat:'<span style="font-size: 20px;">{point.key} </span>',
            },
            legend: {
              align: 'right',
              verticalAlign: 'top',
              y: 70,
              layout: 'vertical'
            },
            series: [{
              name: '总邦分',
              data: totals,
              pointPlacement: 'on',
            }, {
              name: '目标邦分',
              data: targets,
              pointPlacement: 'on',
            }]
          };

          // 图表初始化函数
          this.$hightChart.chart(id, options);
        }
      },

      //编辑项目
      editProject(id, type, param) {
        this.isid = '';
        let self = this
        let params = new URLSearchParams();
        params.append('id', id);
        params.append('type', type);
        params.append('value', param);
        self.$api.post("/set/admin/projects", params, function (res) {
          self.$Message.success('保存成功');
          self.getData();
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
              "isChecked": false
            });
          }
          self.addMemberFlag = true
        }, function (res) {
          console.log(res)
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
        console.log(this.selUserData);
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
          self.getData();
          self.cancelEdit();
        }, function (res) {
          self.cancelEdit();
        })
      },
      //清空所有选择的用户
      cancelEdit() {
        console.log("cancelEdit被调用了么")
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
          self.getData()
        }, function (res) {
          self.$Message.success('删除失败');
        })
      },

      //归档和保存版本
      saveStatus(id, type) {
        let self = this;
        let params = new URLSearchParams();
        console.log("======id==" + id);
        console.log("======type==" + type);
        params.append('id', id);
        params.append('type', type);
        self.$api.post("/save/admin/projects/status", params, function (res) {
          if (type == "finished") {
            self.$Message.success('归档成功');
          } else {
            self.$Message.success('保存版本成功');
          }
          self.getData();
        }, function (res) {
          self.$Message.success('操作失败');
        })
      },

      //获取部门报表
      getDepList() {
        console.log("getDepList()被调用了么")
        let self = this
        self.$api.get("/get/admin/getProjectDepartment", null, function (res) {
          self.depData = [];
          for (let i = 0; i < res.message.length; i++) {
            self.depData.push({
              "id": res.message[i].id,
              "department_id": res.message[i].department_id,
              "week_target": res.message[i].week_target,
              "proportion": Number(res.message[i].proportion),
              "company_id": res.message[i].company_id,
              "dname": res.message[i].dname,
              "manageUserName": res.message[i].manageUserName,
              "manageUserimg": res.message[i].manageUserimg,
              "userList": res.message[i].userList,
              "created_at": res.message[i].created_at,
              "updated_at": res.message[i].updated_at,
            });
          }
        }, function (res) {
          console.log(res)
        })
      },

      //
      editDepartmentProject(id, weekTarget, proportion) {
        this.isid = '';
        let self = this
        let params = new URLSearchParams();
        params.append('id', id);
        params.append('week_target', weekTarget);
        params.append('proportion', proportion);
        self.$api.post("/save/admin/projectsDepartment", params, function (res) {
          self.$Message.success('保存成功');
          self.getDepList();
        }, function (res) {
          console.log(res)
        })
      },

      getScrollXY() {
        let x, y;
        if (document.body.scrollTop) { //非标准写法,chrome能识别
          x = document.body.scrollLeft;
          y = document.body.scrollTop;
        }
        else { //标准写法
          x = document.documentElement.scrollLeft;
          y = document.documentElement.scrollTop;
        }
        return {x: x, y: y};
      }
    },


    data() {
      return {
        isid:'',
        isindex:100000,
        rootUrl:window.localStorage.api,
        addMemberFlag: false,
        hideInfo: true,
        max: 100,
        min: 0,
        projectId: '',
        userType: '',
        editStatus: '',
        defaultImg: 'this.src="' + require('../../images/head_default_icon.png') + '"',
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
  .layout{
    min-height: 800px;
  }

  .schedule-table-container {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .dep-table-container {
    margin-top: 20px;
    padding-bottom: 100px;
    padding-top: 2px;
  }

  .table-tr {
    height: 56px;
    color: #666;
    padding-left: 20px;
    width: 200px;
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
    padding-top: 40px;
    color: #333;
  }

  .content{
    padding:20px 20px 20px 20px ;
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
    width: 60px;
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
    width: 60px;
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
    width: 60px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }

  .save {
    background: #6680ff;
    color: #ffffff;
    margin-top: 10px;
    height: 32px;
    width: 62px;
    border-radius: 4px;
    padding: 0px;
    font-size: 12px;
    cursor: pointer;
  }

  .action {
    display: flex;
    flex-direction: column;
    padding:20px  20px 0px 20px ;
    width: 100px;
  }
  .ivu-input {
    outline: none !important;
    border: none !important;
    resize:none !important;
    overflow: hidden;
    margin-top: 2px;

  }
  .ivu-input-number{
    outline: none;
    border: none;
  }

  .search-input{
    border: 1px solid #cccccc ;
    width: 450px;
    border-radius: 4px;
    text-align: center;
    margin: 0 auto;
    resize:none;
  }
  .ivu-date-picker{
    width: 220px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
  .add-project{
    width: 140px;
    height: 40px;
    border-radius: 4px;
  }
  .add-project-text{
    color: #6680ff;
    font-size: 18px;
    margin-left: 10px;
  }
  .withBorder{
    border: 1px solid #667fff;
  }
  .noBorder{
    border: 0px !important;
  }
  .imgNormal{
    border: 0px !important;
  }
  .imgNormal:hover{
    border: 1px solid #667fff;
  }

  /*去掉边框*/
  input,input:active{
    border: none !important;
    outline: none;
    box-shadow: none;
    width: 100%;
  }</style>
