<template>
<div>
  <div class="combox" style="height:100%;">
    <div class="comcontent" v-show="false">
      <div class="comcontent-top">
        <Row>
          <i-col span="12">
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title">15</div><div class="comcontent-top-con">单日最高分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title">15</div><div class="comcontent-top-con">单周最高分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title">15</div><div class="comcontent-top-con">单月最高分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title">15</div><div class="comcontent-top-con">单季最高分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title">15</div><div class="comcontent-top-con">单年最高分</div>
            </div>
            <div class="hline1"></div>
          </i-col>
          <i-col span="12">
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title fcolorred">-15</div><div class="comcontent-top-con">单日最高减分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title fcolorred">-15</div><div class="comcontent-top-con">单周最高减分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title fcolorred">-15</div><div class="comcontent-top-con">单月最高减分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title fcolorred">-15</div><div class="comcontent-top-con">单季最高减分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title fcolorred">-15</div><div class="comcontent-top-con">单年最高减分</div>
            </div>
          </i-col>
        </Row>
      </div>
    </div>
  </div>
  <div class="comboxunder">
      <div class="comboxbtnbox">
        <i-button @click="openqq" type="primary" class="backgroundpar">联系QQ：2271645593</i-button>
        <i-button type="primary" class="backgroundpar">使用默认模版</i-button>
        <i-button type="primary" class="backgroundpar">申请修改权限</i-button>
      </div>
      <div class="comboxnuminput">
        <Tabs active-key="key1">
            <Tab-pane label="自我管理邦分" key="key1">
              <div class="comboxnuminputbox">
                <div class="comboxnuminputbox-title">
                  <div style="width:90%; float:left;">
                    <span class="tt">打卡邦分</span><span class="td">时间管理尊用时间平等原则，每个小时1邦分，如需特别设置请联系我们开放个性化设置</span>
                  </div>
                  <div style="width:10%; float:right;"><span class="fr"><i-button style="color:gray;">打卡价值观</i-button></span></div>
                </div>
                <div class="comboxnuminputbox-content">
                  <div class="fl" style="width:50%;">
                    <div>工作日：</div>
                    <Row>
                      <i-col span="8">
                        <span>按时打上班卡额外奖励</span>
                        <span><Input-number  v-model="setintegralses.timeset" @on-change="setintegrals(setintegralses.timeset,11)"></Input-number></span><span>邦分</span>
                      </i-col>
                      
                      <i-col span="16">
                        <span>每天工作满</span>
                        <span><Input-number v-model="setintegralses.hourse" @on-change="setintegrals(setintegralses.hourse,16)"></Input-number></span><span>小时，</span>
                        <span>额外奖励</span>
                        <span><Input-number v-model="setintegralses.reward" @on-change="setintegrals(setintegralses.reward,17)"></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <Row>
                      <i-col span="8">
                        <span>按时打下班卡额外奖励</span>
                        <span><Input-number v-model="setintegralses.gooff" @on-change="setintegrals(setintegralses.gooff,15)"></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <Row>
                      <i-col span="8">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每工作半小时</span>
                        <span><Input-number  v-model="setintegralses.workset" @on-change="setintegrals(setintegralses.workset,12)" ></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                  </div>
                  <div class="fr" style="width:50%;">
                    <div style="color:#ff6666;">非工作日：</div>
                    <!---------------------------------------------------------------------------------------->
                    <Row>
                      <i-col span="8">
                        <span>按时打上班卡额外奖励</span>
                        <span><Input-number  v-model="unsetintegralses.timeset" @on-change="setintegrals(unsetintegralses.timeset,18)"></Input-number></span><span>邦分</span>
                      </i-col>
                      
                      <i-col span="16">
                        <span>每天工作满</span>
                        <span><Input-number v-model="unsetintegralses.hourse" @on-change="setintegrals(unsetintegralses.hourse,21)"></Input-number></span><span>小时，</span>
                        <span>额外奖励</span>
                        <span><Input-number v-model="unsetintegralses.reward" @on-change="setintegrals(unsetintegralses.reward,22)"></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <Row>
                      <i-col span="8">
                        <span>按时打下班卡额外奖励</span>
                        <span><Input-number v-model="unsetintegralses.gooff" @on-change="setintegrals(unsetintegralses.gooff,19)"></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <Row>
                      <i-col span="8">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每工作半小时</span>
                        <span><Input-number  v-model="unsetintegralses.workset" @on-change="setintegrals(unsetintegralses.workset,20)" ></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <!---------------------------------------------------------------------------------------->
                  </div>
                </div>
              </div>
              <div class="comboxnuminputbox">
                <div class="comboxnuminputbox-title">
                  <div style="width:90%; float:left;">
                    <span class="tt">目标邦分</span><span class="td">目标管理遵循计划原则，让每个人都能为自己定计划，按照计划来办事，定了计划就给分，计划不在多而在重点，目标计划根据333原则设定</span>
                  </div>
                  <div style="width:10%; float:right;"><span class="fr"><i-button style="color:gray;">目标价值观</i-button></span></div>
                </div>
                <div class="comboxnuminputbox-content">
                  <div class="fl" style="width:50%;">
                  <div>工作日：</div>
                  <Row>
                    <i-col span="12">
                      <span>单次日目标最高分</span>
                      <span><Input-number  v-model="settargetintegrals.daytar" @on-change="setintegrals(settargetintegrals.daytar,2)" ></Input-number></span><span>邦分</span>
                    </i-col>
                    <i-col span="12">
                      <span>日目标总分</span>
                      <span><Input-number  v-model="settargetintegrals.daytol"  @on-change="setintegrals(settargetintegrals.daytol,1)"></Input-number></span><span>邦分</span>
                    </i-col>
                  </Row>
                  <Row>
                    <i-col span="12">
                      <span>单次周目标最高分</span>
                      <span><Input-number  v-model="settargetintegrals.weektar"   @on-change="setintegrals(settargetintegrals.weektar,4)"></Input-number></span><span>邦分</span>
                    </i-col>
                    <i-col span="12">
                      <span>周目标总分</span>
                      <span><Input-number  v-model="settargetintegrals.weektol"  @on-change="setintegrals(settargetintegrals.weektol,3)"></Input-number></span><span>邦分</span>
                    </i-col>
                  </Row>
                  <Row>
                    <i-col span="12">
                      <span>单次月目标最高分</span>
                      <span><Input-number  v-model="settargetintegrals.mothtar"  @on-change="setintegrals(settargetintegrals.mothtar,6)"></Input-number></span><span>邦分</span>
                    </i-col>
                    <i-col span="12">
                      <span>月目标总分</span>
                      <span><Input-number  v-model="settargetintegrals.mothtol"  @on-change="setintegrals(settargetintegrals.mothtol,5)"></Input-number></span><span>邦分</span>
                    </i-col>
                  </Row>
                  </div>
                  <div class="fr" style="width:50%;">
                    <div style="color:#ff6666;">非工作日：</div>
                    <!------------------------------------------------------------------------------------------>
                    <Row>
                      <i-col span="12">
                        <span>单次日目标最高分</span>
                        <span><Input-number v-model="unsettargetintegrals.daytar" @on-change="setintegrals(unsettargetintegrals.daytar,23)" ></Input-number></span><span>邦分</span>
                      </i-col>
                      <i-col span="12">
                        <span>日目标总分</span>
                        <span><Input-number v-model="unsettargetintegrals.daytol" @on-change="setintegrals(unsettargetintegrals.daytol,24)"></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <!------------------------------------------------------------------------------------------>                    
                  </div>
                </div>
              </div>
              <div class="comboxnuminputbox">
                <div class="comboxnuminputbox-title">
                  <div style="width:90%; float:left;">
                    <span class="tt">自我加减邦分</span><span class="td">自我加减邦分自我行为管理的表现，基于信任原则，诚信为自己加分，据实自己减分</span>
                  </div>
                  <div style="width:10%; float:right;"><span class="fr"><i-button @click="gotoowner" style="color:gray;">自我价值观</i-button></span></div>
                </div>
                <div class="comboxnuminputbox-content">
                  <div class="fl" style="width:50%;">
                    <div>工作日</div>
                    <Row>
                      <i-col span="12">
                        <span>每次最高加分</span>
                        <span><Input-number  v-model="plussubtegrals.sbestplus"  @on-change="setintegrals(plussubtegrals.sbestplus,7)"></Input-number></span><span>邦分</span>
                      </i-col>
                      <i-col span="12">
                        <span>每日最多可加邦分</span>
                        <span><Input-number  v-model="plussubtegrals.sbestps"  @on-change="setintegrals(plussubtegrals.sbestps,8)"></Input-number></span>
                        <span>邦分</span>
                      </i-col>
                    </Row>
                    <Row>
                      <i-col span="12">
                        <span>每次最高减分</span>
                        <span><Input-number  v-model="plussubtegrals.sbestsub"  @on-change="setintegrals(plussubtegrals.sbestsub,9)"></Input-number></span><span>邦分</span>
                      </i-col>
                      <i-col span="12">
                        <span>每日最多可减邦分</span>
                        <span><Input-number v-model="plussubtegrals.sbestsp"  @on-change="setintegrals(plussubtegrals.sbestsp,10)"></Input-number></span>
                        <span>邦分</span>
                      </i-col>
                    </Row>
                  </div>
                  <div class="fr" style="width:50%;">
                    <div style="color:#ff6666;">非工作日</div>
                    <div style="padding:30px 0;">
                      <span class="fl">非工作日是否可加分</span>
                      <span class="fr">
                        <i-switch v-model="isplustrue" @on-change="isplusedevent">
                            <span style="color:#FFFFFF;" slot="open"><i slot="open" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-right"></i></span>
                            <span style="color:#FFFFFF;" slot="close"><i slot="close" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-error"></i></span>
                        </i-switch>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Tab-pane>
            <!-- <Tab-pane v-show="true" label="相互管理邦分" key="key2">
            </Tab-pane>
            <Tab-pane v-show="true" label="额外邦分" key="key3">
            </Tab-pane> -->
            <Tab-pane label="惩罚邦分" key="key4">
              <div class="comboxnuminputbox">
                <div class="comboxnuminputbox-title">
                  <span class="tt" style="margin-left:17px; color:#ff6666;"></span><span class="td"></span>
                </div>
                <div class="comboxnuminputbox-content">
                  <Row>
                    <i-col span="12">
                      <span>迟到时长</span>
                      <span><Input-number  v-model="punishments.tlate" @on-change="setintegrals(punishments.tlate,13)"></Input-number></span><span>分钟,算旷工</span>
                    </i-col>
                    <i-col span="12">
                      <span>早退时长</span>
                      <span><Input-number  v-model="punishments.tearly" @on-change="setintegrals(punishments.tearly,14)" ></Input-number></span><span>分钟,算旷工</span>
                    </i-col>
                  </Row>
                </div>
              </div>
            </Tab-pane>
        </Tabs>
      </div>
  </div>
</div>
</template>

<script>
  export default {
    data(){
      return{
        rootUrl:window.localStorage.api,
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
        setintegralses:{//打卡邦分
          timeset:0,//打卡额外奖励
          workset:0,//工作办小时
          gooff:0,//按时打卡奖励
          hourse:0,//工作满多少小时奖励
          reward:0//额外奖励
        },
        //非工作日
        unsetintegralses:{//打卡邦分
          timeset:0,//打卡额外奖励
          workset:0,//工作办小时
          gooff:0,//按时打卡奖励
          hourse:0,//工作满多少小时奖励
          reward:0//额外奖励
        },
        settargetintegrals:{//目标邦分
          daytar:0,//日最高目标分
          weektar:0,//周最高目标分
          mothtar:0,//月最高目标分
          daytol:0,//日目标总分
          weektol:0,//周目标总分
          mothtol:0//月目标总分
        },
        //非工作日
        unsettargetintegrals:{
          daytar:0,//日最高目标分
          daytol:0,//周最高目标分
        },
        //非工作日是否可加分
        isplustrue:false,
        plussubtegrals:{//自我加减邦分
          sbestplus:0,//每次最高加分
          sbestsub:0,//每次最高减分
          sbestps:0,//每次最多可加减次数
          sbestsp:0//每次最多可加减次数
        },
        punishments:{//惩罚
          tlate:0,//迟到
          tearly:0//早退
        },
        count:0,
      }
    },
    methods:{
      openqq(){
        window.open('http://wpa.qq.com/msgrd?v=3&uin=2271645593&site=qq&menu=yes','_brank');
      },
      isplusedevent(){
        console.log(this.isplustrue);
        if(this.isplustrue){
          this.setintegrals(1,25);
        }else{
          this.setintegrals(0,25);
        }
      },
      setintegrals(_gold,_type){
        //console.log(_gold+"|||||||"+_type);
        //return;

        let url = window.localStorage.api+"/set/target/bangfen";//接口地址
        //console.log("---------------------------------------------------------");
        let params = new URLSearchParams();
        params.append('bangfen',_gold);//邦分
        params.append('type',_type);//类型日任务总分传1，日任务单次最高分传2，周总分传3，周单次传4，月总分传5，月单次传6，每日自我单次最高加分传7，每日自我加分总分传8，每日自我单次最高减分传9，每日自我减分总分传10，正常打上班卡奖励传11，每半小时邦分传12	
        this.$http.post(url,params).then((res)=>{
          console.log(res);
          if(res['data'].success){
            this.count++;
            if(this.count>1){
              return;//如果提示过了。就不提示了
            }
            //this.success('添加成功！'+res['data'].message);
          }else{
            this.error(res['data'].message);
          }
        }).catch((err)=>{
          console.log(err);
           this.error("网络错误请稍候重试！"+err);
        })
        //console.log("---------------------------------------------------------");
      },
      loadingintegrals(){
          let loadurl = window.localStorage.api+"/get/target/bangfen";
          this.$http.get(loadurl).then(res=>{
            console.log(res);
            this.setintegralses.timeset = Number(res['data'].message.work_up_bangfen);//打卡额外奖励
            this.setintegralses.workset = Number(res['data'].message.dimidia_bangfen);//工作办小时
            this.setintegralses.gooff = Number(res['data'].message.work_down_bangfen);//按时打卡奖励
            this.setintegralses.hourse = Number(res['data'].message.working_time);//工作满多少小时奖励
            this.setintegralses.reward = Number(res['data'].message.working_time_bangfen);//额外奖励

            this.unsetintegralses.timeset = Number(res['data'].message.not_work_up_bangfen);//非工作日打卡额外奖励
            this.unsetintegralses.workset = Number(res['data'].message.not_dimidia_bangfen);//非工作日工作办小时
            this.unsetintegralses.gooff = Number(res['data'].message.not_work_down_bangfen);//非工作日按时打卡奖励
            this.unsetintegralses.hourse = Number(res['data'].message.not_working_time);//非工作日工作满多少小时奖励
            this.unsetintegralses.reward = Number(res['data'].message.not_working_time_bangfen);//非工作日额外奖励

            this.settargetintegrals.daytar=Number(res['data'].message.once_daily_task_bangfen);//日最高目标分
            this.settargetintegrals.weektar=Number(res['data'].message.once_week_task_bangfen);//周最高目标分
            this.settargetintegrals.mothtar=Number(res['data'].message.month_task_bangfen);//月最高目标分
            this.settargetintegrals.daytol=Number(res['data'].message.daily_task_bangfen);//日目标总分
            this.settargetintegrals.weektol=Number(res['data'].message.week_task_bangfen);//周目标总分
            this.settargetintegrals.mothtol=Number(res['data'].message.month_task_bangfen);//月目标总分

            this.unsettargetintegrals.daytar=Number(res['data'].message.not_once_daily_task_bangfen);//日最高目标分
            this.unsettargetintegrals.daytol=Number(res['data'].message.not_daily_task_bangfen);//日最高目标分

            this.plussubtegrals.sbestplus=Number(res['data'].message.once_add_bangfen);//每次最高加分
            this.plussubtegrals.sbestsub=Number(res['data'].message.once_reduce_bangfen);//每次最高减分
            this.plussubtegrals.sbestps=Number(res['data'].message.add_bangfen_all);//每次最多可加减次数
            this.plussubtegrals.sbestsp=Number(res['data'].message.reduce_bangfen_all);//每次最多可加减次数
            this.punishments.tlate=Number(res['data'].message.late_time);//迟到
            this.punishments.tearly=Number(res['data'].message.leave_time);//早退

            //非工作日是否可加分
            if (Number(res['data'].message.not_work_bangfen)==1) {
              this.isplustrue = true;
            }else{
              this.isplustrue = false;
            }
          }).catch(err=>{
            console.log('网络错误,请稍候重试！'+err);
          })
        },
        gotoowner(){
          //移动到顶部
          this.$router.push({path:"/pages/company/Ownersense"});
        },
        //页面提示信息
        success(_str) {
            this.$alert(_str, '系统提示', {
                confirmButtonText: '确定',
            });
        },
        warning(_str) {
            this.$alert(_str, '系统提示', {
                confirmButtonText: '确定',
            });
        },
        error(_str) {
            this.$alert(_str, '系统提示', {
                confirmButtonText: '确定',
            });
        },

      },
      mounted(){
      //验证是否登录
        if(!window.sessionStorage.status){
          this.$Message.error('您没有登录，请您先登录');
          this.$router.push({path:'/pages/login'});
          return;
        }
        this.loadingintegrals();
      //页面启动动画
      $('combox').addClass("animated fadeIn");
      }
    
  }
</script>


<style scoped>
  .combox{
    width:100%;
    height:100%;
    border: solid 1px #ededed;
    background: #FFF;
  }

  .combox .comtitle{
    height:62px;
    line-height: 62px;
    padding-left:10px;
    font-size: 16px;
    color: #2e2f33;
    border-bottom: 1px solid #ededed;
  }

  .combox .comcontent{
    background:#FFF;
    padding:50px;
    overflow: hidden;
    min-height:885px;
  }

  .combox .comcontent .comcontent-top{
    overflow: hidden;
    height:100%;
  }

  .combox .comcontent .comcontent-top .comcontent-top-list{
    float:left;
    width:calc(20% - 1px);
  }

  .combox .comcontent .comcontent-top .hline1{
    width:1px;
    height:70px;
    background:rgb(219, 219, 219);
    overflow: hidden;
    float: left;
  }

  .combox .comcontent .comcontent-top .comcontent-top-list .comcontent-top-list-title{
    width:100%;
    height:50%;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #6680ff;
    text-align: center;
  }

  .combox .comcontent .comcontent-top .comcontent-top-list .comcontent-top-con{
    width:100%;
    height:50%;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
    text-align: center;
  }
  
  .fcolorred{
    color:#ff6666 !important;
  }
  .comboxunder{
    margin-top:10px;
    background:white;
    padding:10px;
  }

  .comboxunder .comboxbtnbox{
    overflow: hidden;
    padding:10px;
    text-align: right;
  }

  .comboxunder .comboxnuminput{
    overflow: hidden;
  }

  .comboxunder .comboxnuminput ul{
  }
  .comboxunder .comboxnuminput ul li{
    height:40px;
    line-height: 40px;
  }

  .comboxnuminputbox{
    padding:10px;
    overflow: hidden;
    width:100%;
    border-bottom: 1px solid #E0E0E0;
  }

    .comboxnuminputbox .comboxnuminputbox-title{
      height:60px;
      width:100%;
    }

    .comboxnuminputbox .comboxnuminputbox-title .tt{
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #6680ff;
    }

    .comboxnuminputbox .comboxnuminputbox-title .td{
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #b8bbcc;
    }


    .comboxnuminputbox .comboxnuminputbox-title span{
      display: block;
      float: left;
      height:60px;
      line-height:60px;
    }

    .comboxnuminputbox .comboxnuminputbox-content{
      padding:20px;
    }

    .comboxnuminputbox .comboxnuminputbox-content .ivu-row{
      padding:10px 0;
    }

</style>
