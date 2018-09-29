<template>
  <div :style="backgroundTop">
    <div class="layout">
      <div style="display: flex;justify-content:center;align-items:center;padding-top: 40px">
        <h2 style="cursor:pointer;" @click="switchPage()">项目进度表</h2>
        <h2 style="margin-left:40px ; color:#6680ff;">部门报表</h2>
      </div>
      <div class="top-container">
        <div class="datePicker-container">
          <DatePicker type="date" placeholder="请选择日期" @on-change="getDepList"></DatePicker>
        </div>
      </div>
      <div :style="backgroundBottom" class="dep-container">
        <div class="dep-table-container">
          <table cellspacing="0" class="tables">
            <thead>
            <tr v-for="(depTitle,index) in columnsDep" style="display:table-cell;vertical-align:middle;" :key="index">
              <Affix :offset-top="0" style="width:100%;">
                <div class="table-tr">
                  <td>{{depTitle}}</td>
                </div>
              </Affix>
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
                  <Input class="main-text" type="textarea" autosize placeholder="请输入当前工作"
                            v-model="department.week_target"
                            @blur="editDepartmentProject(department.id,department.week_target,department.proportion)"></Input>
                </div>
              </td>
            </tr>

            <!--presentWork-->
            <tr class="project-tr" style="display: table-cell;vertical-align:middle;">
              <td>
                <div class="content">

                  <div style="display: flex;align-items: center">
                    <img
                      :src="department.manageUserimg==''?userImg:rootUrl+department.manageUserimg|srctransformation3"
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
                  <!-- <Button class="pigeonhole" @click="saveStatus(department.id,'finished')">归档</Button>
                  <Button class="save" @click="saveStatus(department.id,'backups')">保存版本</Button> -->
                  <p></p>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    filters: {
      srctransformation: function (value) {
        console.log('-------------------------------------');
        if (value.indexOf('http://thirdwx.qlogo.cn') != -1) {
          return value.replace(window.localStorage.api, "");
        } else {
          return value;
        }
        console.log('------------------------------------');
      },
      srctransformation2: function (value) {
        console.log('-------------------------------------');
        if (value.indexOf('http://thirdwx.qlogo.cn') != -1) {
          return value.replace(window.localStorage.api, "");
        } else {
          return value;
        }
        console.log('------------------------------------');
      },
      srctransformation3: function (value) {
        console.log('-------------------------------------');
        if (value.indexOf('http://thirdwx.qlogo.cn') != -1) {
          return value.replace(window.localStorage.api, "");
        } else {
          return value;
        }
        console.log('------------------------------------');
      },
      srctransformation4: function (value) {
        console.log('-------------------------------------');
        if (value.indexOf('http://thirdwx.qlogo.cn') != -1) {
          return value.replace(window.localStorage.api, "");
        } else {
          return value;
        }
        console.log('------------------------------------');
      },
    },
    mounted() {
      //验证是否登录
      if (!window.sessionStorage.status) {
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path: '/pages/login'});
        return;
      }
      this.getDepList(this.selectTime);

      //加载效果
      this.openFullScreen2();
    },
    methods: {
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: '数据加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 3000);
      },
      //切换部门和项目报表
      switchPage() {
        let routeData = this.$router.resolve({name: 'Statisticsview'});
        window.open(routeData.href, "_self");
      },
      editinput(_id, _index) {
        this.isid = _id;
        this.isindex = _index;
      },
      //添加class名称
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
                      color: "#3366FF", //设置拐点颜色
                      width: 0 //设置各个拐点连接的线条颜色
                    },
                  },
                  hover: {
                    lineStyle: {
                      color: "blue", //设置拐点颜色
                      width: 0 //设置各个拐点连接的线条颜色
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
            console.log("======" + params.event)
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
      initHighChart() {
        for (let i = 0; i < this.depData.length; i++) {
          let item = this.depData[i];
          let id = "eChart_" + this.depData[i].id;
          let totals = [];
          let targets = [];
          let average = [];
          let categories = [];
          if (typeof(item.userList) !== "undefined") {
            for (let j = 0; j < item.userList.length; j++) {
              let user = item.userList[j];
              categories.push(user.name);
              totals.push({
                index: i,
                y: user.totalBangfen,
                position: user.pname,
                rank: '本周排名' + user.ranking + '名',
                workTime: '平均工作时长' + user.userAverageTime + '小时',
                target: '指标邦分' + user.target_bangfen + '分',
                weekScore: '本周获得邦分' + user.totalBangfen + '分',
                averageScore: '部门平均邦分' + user.departmentAverageBangfen + '分',
              });
              targets.push(user.target_bangfen);
              average.push(user.departmentAverageBangfen);
            }
          }
          let options = {
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
              color: '#ffffff'
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
                fontSize: '14px',
              },
              crosshairs: [true, true],
              headerFormat: '<span style="font-size: 20px;">{point.key} </span>',
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
            }, {
              name: '部门平均邦分',
              data: average,
              pointPlacement: 'on',
            }]
          };

          // 图表初始化函数
          this.$hightChart.chart(id, options);
        }
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
          self.getData();
        }, function (res) {
          self.$Message.success('操作失败');
        })
      },

      //获取部门报表
      getDepList(time) {
        let self = this;
        self.selectTime = time;
        let params = new URLSearchParams();
        params.append('select_time', time);
        self.$api.get("/get/admin/getProjectDepartment", params, function (res) {
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
            setTimeout(() => {
              self.initHighChart();
            }, 3000)
          }
        }, function (res) {
          console.log(res)
        })
      },

      //修改目标和进度
      editDepartmentProject(id, weekTarget, proportion) {
        // if(weekTarget==""||weekTarget==null||weekTarget==undefined){
        //   this.$Message.error('不能提交空数据');
        //   return;
        // }
        this.isid = '';
        let self = this
        let params = new URLSearchParams();
        params.append('id', id);
        params.append('week_target', weekTarget);
        params.append('proportion', proportion);
        self.$api.post("/save/admin/projectsDepartment", params, function (res) {
          self.$Message.success('保存成功');
          self.getDepList(self.selectTime);
        }, function (res) {
          console.log(res)
        })
      },
    },


    data() {
      return {
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
        columnsDep: [
          '部门',
          '本周目标',
          '当前工作',
          '操作',
        ],
        depData: [],
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

  .dep-table-container {
    margin-top: 20px;
    padding-top: 2px;
    min-height: 850px;
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
    padding: 20px 20px 0px 20px;
    width: 100px;
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
