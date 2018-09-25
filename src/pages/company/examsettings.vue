<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <Icon type="ios-pricetags-outline"></Icon> 审批设置
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
      <span v-show="false" class="fr"><i-button type="primary" icon="ios-plus-round" class="backgroundpar">创建新审批</i-button></span>
      <span v-show="false" class="fr colorpar"><el-button type="text" style="color:#6680ff;">排序</el-button></span>
      <span v-show="false" class="fr colorpar"><el-button type="text" style="color:#6680ff;">编辑</el-button></span>
    </div>
    <div class="comcontent">

      <div class="examboxlist" v-for="item in moudellist" :key="item.index">
        <Row>
            <i-col span="6">
              <div class="iconimg color1 fl"><img :src="item.img==''?rootImg:rootUrl+item.img" style="width:50px; height:50px;" /></div>
              <div class="icontxt fl">
                <div class="icontxt-title">{{item.name}}</div>
                <div class="icontxt-desc">{{item.info}}<br />{{item.updated_at}}更新</div>
              </div>
            </i-col>
            <i-col span="6">
              <div class="icontxt fl">
                <div class="icontxt-title">可见范围</div>
                <div class="icontxt-desc"><span style="cursor: pointer;"><el-button v-show="false"  style="color:#6680ff;" @click="editrights(item.id)" type="text">修改</el-button></span>{{item.scope=="all"?"全部可见":"部分可见"}}</div>
              </div>
            </i-col>
            <i-col span="6">
              <div class="icontxt fl">
                <el-button type="text" @click="examsetting(item.id,item.name)" style="color:#6680ff;">{{item.name=="简报"?"设置审批人":"设置审批流程"}}</el-button>
              </div>
            </i-col>
            <i-col span="6">
              <div class="icontxt fr">
                <i-switch v-model="istrue">
                    <span style="color:#FFFFFF;" slot="open"><i slot="open" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-right"></i></span>
                    <span style="color:#FFFFFF;" slot="close"><i slot="close" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-error"></i></span>
                </i-switch>
              </div>
            </i-col>
        </Row>     
      </div>
    </div>

    <!--可视范围设置-------------------------------------------->
    <div class="viseditbox unshow">
      <div class="edittitle">
        <span class="fl">以下部门和人员可看到审批模版</span>
        <span class="fr"><el-button @click="closeeditrights" type="text"><img src="../../assets/delete.png" /></el-button></span>
      </div>
      <div class="editcontents">
        <div class="editleft fl">
          <div class="listbox">
            <el-scrollbar style="height:100%;">
              <ul>
                <li class="li_list"><el-radio @change="getdepusers" v-model="depradio" :label="0">全部</el-radio></li>
                <li v-for="item in deplist" :key="item.index" class="li_list"><el-radio @change="getdepusers" v-model="depradio" :label="item.id">{{item.name}}</el-radio></li>
              </ul>
            </el-scrollbar>
          </div>
        </div>
        <div class="editcenter fl">
          <div class="userlistbox">
            <div class="listboxusers">
              <div>请选择需要查看的用户</div>
              <el-scrollbar style="height:100%;">
                <ul>
                  <li v-for="(item,index) in userlist" :key="index">
                    <div class="theuserbox">
                      <div class="userimgs fl"><img :src="item.user_img==''?'https://buff.xiaohuibang.com/images/5b9739d22cc20.png':'https://buff.xiaohuibang.com'+item.user_img" width="30" height="30" /></div>
                      <div class="usernames fl">{{item.name}}</div>
                      <div class="userclears fl"><img @click="editselecteduser(item.id,index,item.name,item.user_img)" src="../../assets/icon_zhengque.png" width="15" height="15" /></div>
                    </div>
                  </li>
                </ul>
              </el-scrollbar>
            </div>
          </div>
        </div>
        <div class="editright fl">
          <div class="userlistbox">
            <div class="listboxusers">
              <div>已经选择的用户</div>
              <el-scrollbar style="height:100%;">
                <ul>
                  <li v-for="(item,index) in editselecteduserlist" :key="index">
                    <div class="theuserbox">
                      <div class="userimgs fl"><img :src="item.img==''?'https://buff.xiaohuibang.com/images/5b9739d22cc20.png':'https://buff.xiaohuibang.com'+item.img" width="30" height="30" /></div>
                      <div class="usernames fl">{{item.name}}</div>
                      <div class="userclears fl"><img @click="clearuser(item.id,index)" src="../../assets/delete.png" width="15" height="15" /></div>
                    </div>
                  </li>
                </ul>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </div>
      <div class="editunder">
        <i-button @click="closeeditrights" style="color:gray;">取消</i-button>
        <i-button @click="savevisuser" type="primary" class="backgroundpar">保存</i-button>
      </div>
    </div>


    <!--简报审批人设置-------------------------------------------->
    <div class="examsetprobox unshow">
      <div class="edittitle">
        <span class="fl">简报审批人设置</span>
        <span class="fr"><el-button @click="jbcloseexamset" type="text"><img src="../../assets/delete.png" /></el-button></span>
      </div>
      <div class="editcontents">
        <!--此块内修改-------------------------------------------->
        <Tabs @on-click="checkedtabs" v-model="selecttabs" active-key="key1">
            <Tab-pane label="员工简报评审人" key="key1">
              <div class="editcontensbox">
                <div class="editcontents-top">
                  <span style="color:#b8bbcc;">审批人可以拖动排序，排序在前面者有优先审批权</span><br />
                  <span>
                    <el-radio @change="userroadioclick" v-model="jsspid" label="主管部门">均选部门主管</el-radio>
                    <el-radio @change="userroadioclick" v-model="jsspid" label="自定义部门">自定义</el-radio>
                  </span>
                </div>
                <div class="editcontents-content">
                  <div class="content-left fl">
                    <el-scrollbar style="height:100%;">
                      <ul>
                        <li v-for="item in deplist" :key="item.index" class="li_list"><el-radio style="width:100%; height:100%;" :disabled="jsspided" @change="getdepid" v-model="departmentcheckid" :label="item.id">{{item.name}}</el-radio></li>
                      </ul>
                    </el-scrollbar>
                  </div>
                  <div class="content-right fr">
                    <div>请选择{{titlename}}评审人</div>
                    <div class="searchbox">
                      <i-select @on-change="managereviewevent" v-model="userreviewerstr" :clearable="true" filterable style="width:200px">
                          <i-option v-for="item in alluserlist" :key="item.id" :value="item.id">{{ item.name }}</i-option>
                      </i-select>
                    </div>
                    <div class="selecteduser">
                      <el-scrollbar style="height:100%;">
                        <div v-for="(item,index) in selecteduser" :key="index" class="listboxselected fl">
                          <img :src="item.user_img==''?userImg:rootUrl+item.user_img|srctransformation" width="40" height="40" />
                          <div @click="removeselected(index,item.id)" class="remove"><img src="../../assets/delete.png" width="10" height="10" /></div>
                          <div class="namebox" style="font-size:8px;">{{item.name.substr(0,3)}}</div>
                        </div>
                      </el-scrollbar>
                    </div>
                  </div>
                </div>
              </div>
            </Tab-pane>
            <Tab-pane label="主管简报评审人" key="key2">
              <div class="editcontensbox">
                <div class="editcontents-top">
                  <span style="color:#b8bbcc;">审批人可以拖动排序，排序在前面者有优先审批权</span><br />
                  <span>
                    <el-radio @change="managerclickownner" v-model="manajsspid" label="主管互评">主管互评</el-radio>
                    <el-radio @change="managerclickownner" v-model="manajsspid" label="自定义互评">自定义</el-radio>
                  </span>
                </div>
                <div class="editcontents-content">
                  <div class="content-left fl">
                    <el-scrollbar style="height:100%;">
                      <ul>
                        <li v-for="item in allmanager" v-show="item.ismanage==1" :key="item.index" class="li_list"><el-radio style="width:100%; height:100%;" :disabled="jbsps" @change="getmanageruserid" v-model="usercheckid" :label="item.id">{{item.name}}</el-radio></li>
                      </ul>
                    </el-scrollbar>
                  </div>
                  <div class="content-right fr">
                    <div>请选择主管{{titlename}}评审人</div>
                    <div class="searchbox">
                      <i-select @on-change="reviewevent" v-model="ReviewerStr" :clearable="true" filterable style="width:200px">
                          <i-option v-for="item in alluserlist" :key="item.id" :value="item.id">{{ item.name }}</i-option>
                      </i-select>
                    </div>
                    <div class="selecteduser">
                      <el-scrollbar style="height:100%;">
                        <div v-for="(item,index) in selecteduser" :key="index" class="listboxselected fl">
                          <img :src="item.user_img==''?userImg:rootUrl+item.user_img|srctransformation2" width="40" height="40" />
                          <div @click="removeselected(index,item.id)" class="remove"><img src="../../assets/delete.png" width="10" height="10" /></div>
                          <div class="namebox" style="font-size:8px;">{{item.name.substr(0,3)}}</div>
                        </div>
                      </el-scrollbar>
                    </div>
                  </div>
                </div>
              </div>
            </Tab-pane>
        </Tabs>
        <!--此块内修改-------------------------------------------->
      </div>
      <div class="editunder">
        <i-button @click="jbcloseexamset" style="color:gray;">取消</i-button>
        <i-button @click="savemangeranduserexam"  type="primary" class="backgroundpar">保存</i-button>
      </div>
    </div>

    <!--其他审批设置-------------------------------------------->
    <div class="otherexamsetprobox unshow">
      <div class="edittitle">
        <span class="fl">{{titlename}}设置审批流程</span>
        <span class="fr"><el-button @click="ocloseexamset" type="text"><img src="../../assets/delete.png" /></el-button></span>
      </div>
      <div class="editcontents">
        <div class="examsbox-top">
          <span class="examsbox-des">审批人可以拖动排序，排序在前面者有优先审批权</span><br />
          <span><el-radio class="unshow" v-model="spcs" label="1">均选部门主管</el-radio></span>
        </div>
        <div class="examsbox-content">
          <div class="examsbox-content-left fl">
            <div class="examsbox-content-left-title">审批对象选择项</div>
            <div class="examsbox-content-left-content">
              <el-scrollbar style="height:100%;">
                <ul>
                  <li v-for="item in deplist" :key="item.index" class="li_list"><el-radio style="width:100%; height:100%;" @change="getdepid" v-model="departmentcheckid" :label="item.id">{{item.name}}</el-radio></li>
                </ul>
              </el-scrollbar>
            </div>
          </div>
          <div class="examsbox-content-center fl">
            <div class="examsbox-content-center-title">审批人(按排名先后顺序)</div>
            <div class="examsbox-content-center-content">
                    <div class="searchbox">
                      <i-select @on-change="examevent" v-model="examinationuser" :clearable="true" filterable style="width:100%;">
                          <i-option v-for="item in alluserlist" :key="item.id" :value="item.id">{{ item.name }}</i-option>
                      </i-select>
                    </div>
                    <div class="selecteduser">
                      <el-scrollbar style="height:100%;">
                        <div v-for="(item,index) in selectedexamlist" :key="index" class="listboxselected fl">
                          <img :src="item.user_img==''?userImg:rootUrl+item.user_img|srctransformation3" width="40" height="40" />
                          <div @click="removeexamselected(index,item.id)" class="remove"><img src="../../assets/delete.png" width="10" height="10" /></div>
                          <div class="namebox" style="font-size:8px;">{{item.name.substr(0,3)}}</div>
                        </div>
                      </el-scrollbar>
                    </div>
            </div>
          </div>
          <div class="examsbox-content-right fr">
            <div class="examsbox-content-right-title">抄送人(按排名先后顺序)</div>
            <div class="examsbox-content-right-content">
                    <div class="searchbox">
                      <i-select @on-change="copyevent" v-model="examcopyuser" :clearable="true" filterable style="width:100%">
                          <i-option v-for="item in alluserlist" :key="item.id" :value="item.id">{{ item.name }}</i-option>
                      </i-select>
                    </div>
                
                    <div class="selecteduser">
                      <el-scrollbar style="height:100%;">
                        <div v-for="(item,index) in selectedcopylist" :key="index" class="listboxselected fl">
                          <img :src="item.user_img==''?userImg:rootUrl+item.user_img|srctransformation4" width="40" height="40" />
                          <div @click="removecopyselected(index,item.id)" class="remove"><img src="../../assets/delete.png" width="10" height="10" /></div>
                          <div class="namebox" style="font-size:8px;">{{item.name.substr(0,3)}}</div>
                        </div>
                      </el-scrollbar>
                    </div>
            </div>
          </div>
        </div>
      </div>
      <div class="editunder">
        <i-button @click="ocloseexamset" style="color:gray;">取消</i-button>
        <i-button @click="saveexamcopys" type="primary" class="backgroundpar">保存</i-button>
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
        userImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAADo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjR0dHW1tbb29ve3t7i4uLY2Njk5OQwtOK3AAAAI3RSTlMAC+BHIPXxdwjb7J1PFOTWx71ZArhs6dGUFqZwmJBcKahdt2kJJfYAAAJXSURBVFjDxdkJcqswDAZghTUQKNkTkjZN32/W+x/wtZlpaUIksIHpdwCNFyHbgjrE9u64SvYe3DA4rI47OyZzs+jtgJbDWzQjAxv75ILhnuyN7uDOFkTWWWeYcz9Ep9CfU09rC71Ya+rD+Yfetg51unjQ4F26Vm8BTQtxJdMltC1TYfkCGAjYhXx/gZGXd2Z8Ujw54tMxxgGMBfGT/V1igGV7rxcYZNHKZwx0edgQDwN59xuzhaAuskxlWV7K3/VdfZHCVepbJoZcN/FmFliF+i0Hz2pKrg9Wru5V4Pk/Awzl8fUdY/g9xB2/fqpNWMcd3WwsYcJtmbCKm1tAGyz1TA2WfQt4AqdUzxRgXW9b4urMWN5o92tbImgGzMCLPgO+jhnw9TNggPGmjIAoBYZvSiNlkkZOG4HNfMdiYkt8pvSLn558FKzAYIuDaEUJGFz5kiW0B4MrsLI9eWBwR4DMI3Sri6o5pLqQi3FRiFF5ZGFUezpAVpfFL2UNWSIndpln6kHH3qz4T69JmEZ39iyE4lAoVg6Oz5evXAkqvnylfDyTiClRoDdfuW4H7CGlOtXcIRWxEzaYdMQd9KqHmjno6SquoFbuXLnLEpPRnaeVzV3nMrOA1oa7cCqzgGf2Sqx6Ya/E5I8T0GeeFRpryD0raG2Q2PljHq7lp1lZ5HmVPVNVeV60S+J22scjfWCgj4kf4MNbBNM2MYa3WaZtBDWcBAYSh1ixSTMtFtt9R2g6zkkW6TUkI+rkbNHb1pm0qTu87TxlY3x46/7vfy7c//5wAXef9Pn98R+pP67D9VcSWgAAAABJRU5ErkJggg==',
        alluserlist:[],//所有用户
        editid:0,//编辑的id
        leaveing:{
          status:1,
        },
        editselecteduserlist:[],//可视化，已经选择了的用户
        titlename:'',//窗口名称
        moudellist:Object,//审批项目
        deplist:Object,//部门列表
        userlist:[],//用户列表
        depradio:'1',
        isall:"not_all",//是否全选
        //--------------------------------------------------------------以下是简报评审
        jsspid:'1',//均选部门主管/自定义
        manajsspid:'1',//主管
        selectkey:'1',//简报审批选项卡key值
        allmanager:[],//所有管理员
        usertxt:'',//搜索用户关键字
        searchlist:[],//搜索出来的用户
        selecteduser:[],//已选中用户
        selecttabs:0,//选中哪一个选项卡，用于代表员工评审或者是主管
        userradio:'1',//员工简报评审人和部门
        manageradio:'1',//管理员简报评审
        usercheckid:0,//选中的管理员id
        departmentcheckid:0,//选中的部门id
        //------------------------------------------------------------以下是审批流程
        otheradio:1,//均选部门主管状态

        //审批人
        spcs:0,//均审批抄送人
        modelid:0,//模块id
        //--------------------
        examtxt:'',//搜索关键字
        examlist:[],//从服务器获取的用户列表
        selectedexamlist:[],//选择的审批人
        //抄送人
        copytxt:'',//搜索关键字
        copylist:[],//从服务器获取的抄送人
        selectedcopylist:[],//选择的抄送人

        jsspided:true,//自定义部门
        jbsps:true,//简报审批人

        istrue:true,//是否显示，默认是显示，状态为true

        ReviewerStr:'',//主管评审人搜索关键字
        userreviewerstr:'',//员工评审人搜索关键字
        examinationuser:'',//审批人
        examcopyuser:'',//抄送人

      }
    },
    filters:{
      srctransformation:function(value){
        console.log('-------------------------------------');
        if(value.indexOf('http://thirdwx.qlogo.cn')!=-1){
          return value.replace(window.localStorage.api,"");
        }else{
          return value;
        }
        console.log('------------------------------------');
      },
      srctransformation2:function(value){
        console.log('-------------------------------------');
        if(value.indexOf('http://thirdwx.qlogo.cn')!=-1){
          return value.replace(window.localStorage.api,"");
        }else{
          return value;
        }
        console.log('------------------------------------');
      },
      srctransformation3:function(value){
        console.log('-------------------------------------');
        if(value.indexOf('http://thirdwx.qlogo.cn')!=-1){
          return value.replace(window.localStorage.api,"");
        }else{
          return value;
        }
        console.log('------------------------------------');
      },
      srctransformation4:function(value){
        console.log('-------------------------------------');
        if(value.indexOf('http://thirdwx.qlogo.cn')!=-1){
          return value.replace(window.localStorage.api,"");
        }else{
          return value;
        }
        console.log('------------------------------------');
      }
    },
    methods:{
      examevent(){
        console.log(this.examinationuser);//审批人ID
        let url = window.localStorage.api+'/get/user/info?user_id='+this.examinationuser;
        this.$http.get(url).then(res=>{
          console.log(res['data'].message);
          this.addtoexams(this.examinationuser,res['data'].message.name,res['data'].message.user_img);
        }).catch(err=>{

        })
        
      },
      //************************************************************** */
      addtoexams(_id,_name,_img){//审批人
        this.selectedexamlist.push({'id':_id,'name':_name,'user_img':_img});
        console.log(this.selectedexamlist);
      },
      //-----------------------------------------------------------------------------------
      copyevent(){
        console.log(this.examcopyuser);//抄送人ID
        let url = window.localStorage.api+'/get/user/info?user_id='+this.examcopyuser;
        this.$http.get(url).then(res=>{
          this.addcopys(this.examcopyuser,res['data'].message.name,res['data'].message.user_img);
        }).catch(err=>{

        })
        
      },
      //************************************************************** */
      addcopys(_id,_name,_img){//抄送人
        //在保存到数组中
        this.selectedcopylist.push({'id':_id,'name':_name,'user_img':_img});
        console.log(this.selectedcopylist);
      },
      //-----------------------------------------------------------------------------------
      managereviewevent(){
        console.log(this.userreviewerstr);//员工评审ID
        let url = window.localStorage.api+'/get/user/info?user_id='+this.userreviewerstr;
        this.$http.get(url).then(res=>{
          this.addtousers(this.userreviewerstr,res['data'].message.name,res['data'].message.user_img);
        }).catch(err=>{

        })
      },
      //************************************************************** */
      reviewevent(){
        console.log(this.ReviewerStr);//主管评审ID
        let url = window.localStorage.api+'/get/user/info?user_id='+this.ReviewerStr;
        this.$http.get(url).then(res=>{
          this.addtousers(this.ReviewerStr,res['data'].message.name,res['data'].message.user_img);
        }).catch(err=>{

        })
      },
      //************************************************************** */
      addtousers(_id,_name,_img){//员工审批人
        //在保存到数组中
        this.selecteduser.push({'id':_id,'name':_name,'user_img':_img});
        console.log(this.selecteduser);
      },
      //-----------------------------------------------------------------------------------
      //-----------------------------------------------------------------------------------
      editrights(_id){
        this.editid = _id;
        $('.viseditbox').addClass('show animated fadeIn');
        this.getalluseres();
      },
      closeeditrights(){
        $('.viseditbox').removeClass('show animated fadeIn');
      },
      getinfosmoudle(){//获取需要审批项目
        //console.log("获取需要审批项目");
        let url = window.localStorage.api+"/get/admin/modeule";
        this.$http.get(url).then(res=>{
          //console.log(res);
          this.moudellist = res['data'].message;
        }).catch(err=>{
          console.log(err);
        })
      },
      getalldeparment(){//获取所有部门
        let url = window.localStorage.api+"/organization/getDepartment";
        this.$http.get(url).then(res=>{
          this.deplist = res['data'].message.department;
          //console.log(this.deplist);
        }).catch(err=>{
          console.log(err);
        })
      }
      ,
      getalluseres(){//获取用户列表，带部门id表示部门下面，没有id返回所有
        //console.log("获取用户列表，带部门id表示部门下面，没有id返回所有");
        let url =  window.localStorage.api+"/get/modeule/users?id="+this.editid;
        this.$http.get(url).then(res=>{
          console.log(res);
          this.editselecteduserlist = res['data'].message;
        }).catch(err=>{
          console.log(err);
        })
      },
      getdepusers(){//取得选中那个部门
        if(this.depradio==0){
          this.isall = "all";
        }
        let url =  window.localStorage.api+"/get/department/listuser?depart_id="+this.depradio;
        this.$http.get(url).then(res=>{
          //console.log(res);
          this.userlist = res['data'].message;
        }).catch(err=>{
          console.log(err);
        })

      },
      editselecteduser(_id,_index,_name,_img){//选择用户
        this.userlist.splice(_index,1);//选中了谁，就清除谁
        this.editselecteduserlist.push({'id':_id,'name':_name,'img':_img});
        this.isall = 'not_all';
      },
      clearuser(_id,_index){//清除选中用户
        this.editselecteduserlist.splice(_index,1);//选中了谁，就清除谁
        this.isall = 'not_all';
      },
      savevisuser(){
        //console.log(this.userlist);
        let ides='';
        
        if(this.isall=='all'){
          for (let index = 0; index < this.userlist.length; index++) {
            const element = this.userlist[index].id;
            ides+=";"+element;
          }
        }else{
          for (let index = 0; index < this.editselecteduserlist.length; index++) {
            const element = this.editselecteduserlist[index].id;
            ides+=";"+element;
          }
        }
        
        //将数据传到后端
        let url = window.localStorage.api+"/set/admin/modeule";
        let params = new URLSearchParams();
        params.append('id',this.editid);//模块id	
        params.append('user_ids',ides.substr(1));//用户id，用分号隔开
        params.append('type',this.isall);//全选传all，否则传not_all
        this.$http.post(url,params).then(res=>{
          if(res['data'].success){
            this.success(res['data'].message);
            $('.viseditbox').removeClass('show animated fadeIn');
            //清空数据
            this.editselecteduserlist = [];
          }

        }).catch(err=>{
          console.log(err);
        })
      },
      examsetting(_id,_name){
        this.titlename = _name;
        if(_name=="简报"){
          console.log('简报审批人设置');
          $('.examsetprobox').addClass('show animated fadeIn');
          //获取所有管理员
          let url = window.localStorage.api+"/get/department/listuser";
          this.$http.get(url).then(res=>{
            console.log("-------------------");
            console.log(res);
            console.log("-------------------");
            this.allmanager = res['data'].message;
          }).catch(err=>{
            //console.log(err);
          })
        }else{
          console.log('其他所有设置');
          this.modelid = _id;
          $('.otherexamsetprobox').addClass('show animated fadeIn');
          //$('.examsetprobox').addClass('show animated fadeIn');
        }
      },
      jbcloseexamset(){//简报是审批人
        this.selecteduser=[];
        this.departmentcheckid='';
        this.usercheckid = '';
        ///------------------------------------------------------------------------------------------------------------------------------
        $('.examsetprobox').removeClass('show animated fadeIn');
      },
      ocloseexamset(){//其他所有审批人和抄送
            this.departmentcheckid='';
            this.modelid='';
            this.examlist=[];
            this.copylist=[];
            this.selectedexamlist =[];
            this.selectedcopylist = []; 
        $('.otherexamsetprobox').removeClass('show animated fadeIn');
      },
      searchuser(value){//搜索用户
        console.log("搜索用户");
        console.log(this.ReviewerStr);
        console.log(value);
        /////
        let url = window.localStorage.api+"/select/users?name="+this.usertxt;
        this.$http.get(url).then(res=>{
          console.log(res);
          this.searchlist = res['data'].message;
        }).catch(err=>{
          console.log(err);
        })
      },
      examseacheruser(){
        let url = window.localStorage.api+"/select/users?name="+this.examtxt;
        this.$http.get(url).then(res=>{
          console.log(res);
          this.examlist = res['data'].message;
        }).catch(err=>{
          console.log(err);
        })
      },
      copysearcheruser(){
        let url = window.localStorage.api+"/select/users?name="+this.copytxt;
        this.$http.get(url).then(res=>{
          console.log(res);
          this.copylist = res['data'].message;
        }).catch(err=>{
          console.log(err);
        })
      },
      removeselected(_index,_id){//清楚已经选中的用户
        console.log(_index+"+|+"+_id);
        this.selecteduser.splice(_index,1);//选中了谁，就清除谁
        console.log(this.selecteduser);
      },
      removeexamselected(_index,_id){//清除已经选中审核用户
        this.selectedexamlist.splice(_index,1);//选中了谁，就清除谁
      },
      removecopyselected(_index,_id){//清除已经选择的抄送人
        this.selectedcopylist.splice(_index,1);//选中了谁，就清除谁
      },
      saveexamcopys(){//保存审核和抄送人
        let url = window.localStorage.api+'/set/admin/examine/users';
        let params = new URLSearchParams();
        let examsid='';
        let copysid='';
        for (let i = 0; i < this.selectedexamlist.length; i++) {
          const element = this.selectedexamlist[i].id;
          examsid +=';'+element;
        }
        for (let j = 0; j < this.selectedcopylist.length; j++) {
          const element = this.selectedcopylist[j].id;
          copysid += ';'+element;
        }
        console.log('---------------------------------------------------');
        console.log(examsid);
        console.log('---------------------------------------------------');
        console.log(copysid);

        params.append('id',this.modelid);
        params.append('department_id',this.departmentcheckid);
        params.append('user_id',examsid.substr(1));
        params.append('copy_user_id',copysid.substr(1));

        this.$http.post(url,params).then(res=>{
          if(res['data'].success){
            this.success(res['data'].message);
            this.ocloseexamset();
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      managerclickownner(){
        console.log(this.manajsspid);
        if(this.manajsspid=='自定义互评'){
          this.jbsps = false;
        }else{
          this.jbsps = true;
        }
      },
      userroadioclick(){
        console.log(this.jsspid);
        if(this.jsspid=="自定义部门"){
          this.jsspided = false;
        }else{
          this.jsspided = true;
        }
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
      checkedtabs(){
        console.log(this.selecttabs);
        this.searchlist=[];//搜索出来的用户
        this.selecteduser=[];//已选中用户
        this.usertxt="";//清空搜索记录
        this.departmentcheckid='';
        this.usercheckid = '';
      },
      getdepid(){//简报评审部门id
        //在这个模块操作
        //判断是什么窗口加载什么数据
        if(this.titlename=="简报"){
          //获取已经获取了的简报审批人
          let id =this.departmentcheckid;//简报审批人当前选择的谁
          let type = this.selecttabs==0?'user':'manager';
          let url = window.localStorage.api+'/get/admin/briefing/user?id='+id+'&type='+type;
          this.$http.get(url).then(res=>{
            console.log(res);
            let item = res['data'].message;
            this.selecteduser =[];
            for (let i = 0; i < item.length; i++) {
              this.selecteduser.push({'id':item[i].judge_user_id,'name':item[i].uname,'user_img':item[i].user_img});
            }
          }).catch(err=>{
            console.log(err);
          })
          // let url = window.localStorage.api+'/get/leave/approve/user';
          // this.$http.get(url).then(res=>{
          //   console.log(res);
          // }).catch(err=>{
          //   console.log(err);
          // })
        }else{
          console.log(this.titlename);
          let str ='';
          if(this.titlename=='请假'){str = 1}
          if(this.titlename=='补卡'){str = 2}
          if(this.titlename=='外出'){str = 3}
          let url = window.localStorage.api+'/get/admin/examine/users?id='+this.modelid+'&department_id='+this.departmentcheckid;
          this.$http.get(url).then(res=>{
            console.log(res);
            let item = res['data'].message;
            this.selectedexamlist = [];
            this.selectedcopylist = [];
            for(let i=0;i<item.admin_users.length;i++){
              this.selectedexamlist.push({'id':item.admin_users[i].id,'name':item.admin_users[i].name,'user_img':item.admin_users[i].user_img});
            }
            for (let j = 0; j< item.cope_user.length; j++) {
              this.selectedcopylist.push({'id':item.cope_user[j].id,'name':item.cope_user[j].name,'user_img':item.cope_user[j].user_img}); 
            }
          }).catch(err=>{
            console.log(err);
          })
        }
        console.log(this.departmentcheckid);
      },
      getmanageruserid(){//简报评审管理员id
        console.log(this.usercheckid);
        let id =this.usercheckid;//简报审批人当前选择的谁
        let type = this.selecttabs==0?'user':'manager';
        let url = window.localStorage.api+'/get/admin/briefing/user?id='+id+'&type='+type;
        this.$http.get(url).then(res=>{
          console.log(res);
          let item = res['data'].message;
          this.selecteduser =[];
          for (let i = 0; i < item.length; i++) {
            this.selecteduser.push({'id':item[i].judge_user_id,'name':item[i].uname,'user_img':item[i].user_img});
          }
        }).catch(err=>{
          console.log(err);
        })        
      },
      savemangeranduserexam(){//保存简报评审
        console.log(this.selecteduser);
        //构造选中用户字符串
        let userlistid="";
        for (let i = 0; i < this.selecteduser.length; i++) {
          const element = this.selecteduser[i].id;
          userlistid += ";"+element;
        }


        let thetype = '';
        let duid=0;
        if (this.selecttabs==0) {
          if(this.jsspid=="主管部门"){
            thetype='user';
            userlistid='';
            duid ='';
          }
        }
        if (this.selecttabs==0){
          if(this.jsspid=="自定义部门"){
            thetype='user';
            duid = this.departmentcheckid;
          }
        }
        if (this.selecttabs==1) {
          if(this.manajsspid=="主管互评"){
            thetype='manager';
            userlistid='';
            duid = '';
          }
        }
        if (this.selecttabs==1) {
          if(this.manajsspid=="自定义互评"){
            thetype='manager';
            duid = this.usercheckid;
          }
        }

        let url = window.localStorage.api+"/set/admin/briefing";
        let params = new URLSearchParams();
        params.append('department_id',duid);//普通用户评审时为部门id，主管评审时为被评审主管的id，不传代表默认评审人	
        params.append('judge_user_id',userlistid.substr(1));//评审人id，用分号隔开，不传代表默认评审人
        params.append('type',thetype);//普通用户传user，主管评审传manager
        this.$http.post(url,params).then(res=>{
          if(res['data'].success){
            this.success(res['data'].message);
            this.jbcloseexamset();

          }else{
            this.error('保存失败'+res['data'].message);
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      //以下是审批流程
      //获取所有用户
      getalluserlist(){
        let url =  window.localStorage.api+"/get/users";
        this.$http.get(url).then(res=>{
          console.log(res);
          this.alluserlist = res['data'].message;
          console.log("*********************");
          console.log(this.alluserlist);
          console.log("*********************");
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    mounted(){
      //验证是否登录
      if(!window.sessionStorage.status){
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path:'/pages/login'});
        return;
      }
      this.getalluserlist();//获取所有用户
      this.getinfosmoudle();//获取审批项目列表
      this.getalldeparment();//获取所有部门
      this.getalluseres();//获取所有用户
    }
  }


  $(function(){
    $(".li_list").each(function(){
      //each遍历
      $(this).mouseenter(function(){
        $(this).stop().animate({"width":"600px"},500,"linear").siblings().stop().animate({"width":"100px"},500,"linear")
      })//当鼠标进入时，让改元素撑开，而其他的元素合住，stop()用来防止当鼠标晃动多次时带来的延迟的bug   
    })
  })
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
    padding-right:50px;
    border-bottom: 1px solid #ededed;
  }

  .combox .comcontent{
    background:#FFF;
    padding:50px;
    overflow: hidden;
    min-height:885px;
  }

  .combox .comcontent .examboxlist{
    width:100%;
    background-color: #ffffff;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    border: solid 1px #ededed;
    padding:10px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .combox .comcontent .examboxlist .iconimg{
    width:50px;
    height:55px;
    padding:10px;
    padding-top:15px;
    border-radius: 5px;
    position: relative;
  }

  .combox .comcontent .examboxlist .iconimg img{
    position: absolute;
    margin:auto;
    left:0;
    top:12px;
    right:0;
    bottom: 0;
  }
  .combox .comcontent .examboxlist .icontxt{
    padding:10px;
    line-height: 100%;
  }
  .combox .comcontent .examboxlist .icontxt span{
    padding-right:10px;
    color:#6680ff;
  }


  .combox .comcontent .examboxlist .icontxt .icontxt-title{
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
    padding-bottom: 10px;
  }
  .combox .comcontent .examboxlist .icontxt .icontxt-desc{
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #8a8c99;
    line-height: 25px;
  }

  /* .color1{
    background:#429cff;
  }
  .color2{
    background:#429cff;
  }
  .color3{
    background:#ff6946;
  }
  .color4{
    background:#6680ff;
  }
  .color5{
    background:#ff5d77;
  } */

  .viseditbox{
    width: 788px;
    height: 475px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px 
      rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    margin:auto;
  }

    .viseditbox .edittitle{
      width:100%;
      height: 60px;
      background-color: #ededed;
      border-radius: 4px 4px 0px 0px
    }

    .viseditbox .edittitle span{
      display:block;
      height:60px;
      line-height: 60px;
      font-size: 18px;
      color: #5c5d66;
      padding:0px 10px;
    }

    .viseditbox .editcontents{
      height:calc(100% - 120px);
    }

    .viseditbox .editcontents .editleft{
      height:100%;
      width:33%;
      padding:20px;
    }

    .viseditbox .editcontents .editleft .listbox{
      width:100%;
      height:100%;
      padding:10px;
      background:#f7f7f7;
    }

    .viseditbox .editcontents .editleft .listbox ul{
    
    }
    .viseditbox .editcontents .editleft .listbox ul li{
      height:30px;
      line-height: 30px;
    }
    .viseditbox .editcontents .editleft .listbox ul li:hover{
      background: linear-gradient(to right, rgba(219, 217, 217, 0), rgb(109, 209, 255));
    }
    
    .viseditbox .editcontents .editright{
      height:100%;
      width:33%;
    }

    

    .viseditbox .editcontents .editright .userlistbox{
      height:100%;
      width:100%;
      padding:20px;;
    }

    .viseditbox .editcontents .editright .userlistbox .listboxusers{
      width:100%;
      height:100%;
      padding:10px;
      background:#f7f7f7;
    }

    .viseditbox .editcontents .editright .userlistbox .listboxusers ul{
      overflow: hidden;
    }
    
    .viseditbox .editcontents .editright .userlistbox .listboxusers ul li{
      height:40px;
      list-style: none;
      margin-bottom: 5px;
    }

    .viseditbox .editcontents .editright .userlistbox .listboxusers ul li .theuserbox{
      height:40px;
      padding:5px;
      background:rgb(228, 228, 228);
    }

    .viseditbox .editcontents .editright .userlistbox .listboxusers ul li .theuserbox .userimgs{
      width:30px;
      height:30px;
    }
    .viseditbox .editcontents .editright .userlistbox .listboxusers ul li .theuserbox .userimgs img{
      width:30px;
      height:30px;
      border-radius: 15px;
      
    }
    .viseditbox .editcontents .editright .userlistbox .listboxusers ul li .theuserbox .usernames{
      height:30px;
      line-height: 30px;
      padding:0px 10px;
      width:calc(100% - 55px);
    }
    .viseditbox .editcontents .editright .userlistbox .listboxusers ul li .theuserbox .userclears{
      width:15px;
      height:15px;
      border-radius: 7.5px;
      text-align: center;
      line-height: 15px;
      padding-top:1.5px;
      background:rgb(0, 255, 76);
      cursor: pointer;
    }
    .viseditbox .editcontents .editright .userlistbox .listboxusers ul li .theuserbox .userclears img{
      border-radius:5px;
      width:10px;
      height:10px;
    }



    .viseditbox .editcontents .editcenter{
      height:100%;
      width:33%;

    }

    /*------------------------------------------------------*/
    .viseditbox .editcontents .editcenter .userlistbox{
      height:100%;
      width:100%;
      padding:20px;;
    }

    .viseditbox .editcontents .editcenter .userlistbox .listboxusers{
      width:100%;
      height:100%;
      padding:10px;
      background:#f7f7f7;
    }

    .viseditbox .editcontents .editcenter .userlistbox .listboxusers ul{
      overflow: hidden;
    }
    
    .viseditbox .editcontents .editcenter .userlistbox .listboxusers ul li{
      height:40px;
      list-style: none;
      margin-bottom: 5px;
    }

    .viseditbox .editcontents .editcenter .userlistbox .listboxusers ul li .theuserbox{
      height:40px;
      padding:5px;
      background:rgb(228, 228, 228);
    }

    .viseditbox .editcontents .editcenter .userlistbox .listboxusers ul li .theuserbox .userimgs{
      width:30px;
      height:30px;
    }
    .viseditbox .editcontents .editcenter .userlistbox .listboxusers ul li .theuserbox .userimgs img{
      width:30px;
      height:30px;
      border-radius: 15px;
      
    }
    .viseditbox .editcontents .editcenter .userlistbox .listboxusers ul li .theuserbox .usernames{
      height:30px;
      line-height: 30px;
      padding:0px 10px;
      width:calc(100% - 55px);
    }
    .viseditbox .editcontents .editcenter .userlistbox .listboxusers ul li .theuserbox .userclears{
      width:15px;
      height:15px;
      border-radius: 7.5px;
      text-align: center;
      line-height: 15px;
      padding-top:1.5px;
      cursor: pointer;
    }
    .viseditbox .editcontents .editcenter .userlistbox .listboxusers ul li .theuserbox .userclears img{
      border-radius:5px;
    }

    /*------------------------------------------------------*/

    .viseditbox .editunder{
      height:60px;
      padding:10px;
      border-radius: 0px 0px 4px 4px;
      border-top:1px solid #ededed;
      text-align:center;
    }

    .viseditbox .editunder button{
      padding:8px 40px;
      margin:0 6px;
    }
  

  
  /*--简报评审样式---------------------------------------------------------------------------*/
  .examsetprobox{
    width: 588px;
    height: 555px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px 
      rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    margin:auto;
  }

      .examsetprobox .edittitle{
      width:100%;
      height: 60px;
      background-color: #ededed;
      border-radius: 4px 4px 0px 0px
    }

    .examsetprobox .edittitle span{
      display:block;
      height:60px;
      line-height: 60px;
      font-size: 18px;
      color: #5c5d66;
      padding:0px 10px;
    }

    .examsetprobox .editcontents{
      height:calc(100% - 120px);
    }

    .examsetprobox .editcontents .examsbox-top{
      color:#b8bbcc;
    }



    .examsetprobox .editcontents .editcontensbox{
      width:100%;
      height:365px;
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-top{
      padding:0 20px;
    }
    .examsetprobox .editcontents .editcontensbox .editcontents-top span{
      height:30px;
      line-height:30px;
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content{
      height:310px;
      padding:0 20px;
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-left{
      height:310px;
      width:calc(50% - 10px);
      padding:0 20px;
      background:#f7f7f7;
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-left ul{
    
    }
    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-left ul li{
      height:30px;
      line-height: 30px;
    }
    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-left ul li:hover{
      background: #f7f7f7;
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right{
      height:310px;
      width:calc(50% - 10px);
      padding:10px 20px;
      background:#f7f7f7;
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .searchbox{
      
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .searchresult{
      padding:5px;
      height: 100%;
      z-index:100;
      position: absolute;
      width:210px;
      /*-----------------------------------------------------*/
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .searchresult ul{
      overflow: hidden;
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .searchresult ul li{
      padding-bottom:1px;
      overflow: hidden;
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .searchresult ul li .theuserbox{
      height:40px;
      padding:5px;
      background:rgb(228, 228, 228);
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .searchresult ul li .theuserbox .userimgs{
      width:30px;
      height:30px;
    }
    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .searchresult ul li .theuserbox .userimgs img{
      width:30px;
      height:30px;
      border-radius: 15px;
      
    }
    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .searchresult ul li .theuserbox .usernames{
      height:30px;
      line-height: 30px;
      padding:0px 10px;
      width:calc(100% - 55px);
    }
    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .searchresult ul li .theuserbox .userclears{
      width:15px;
      height:15px;
      border-radius: 7.5px;
      text-align: center;
      line-height: 15px;
      padding-top:1.5px;
      cursor: pointer;
    }
    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .searchresult ul li .theuserbox .userclears img{
      border-radius:5px;
      width:15px;
      height:15px;
    }


    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .selecteduser{
      padding:5px;
      height:calc(100% - 30px);
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .selecteduser .listboxselected{
      padding:5px;
      position: relative;
      width:50px;
      height: 80px;
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .selecteduser .listboxselected img{
      border-radius: 20px;
    }

    .examsetprobox .editcontents .editcontensbox .editcontents-content .content-right .selecteduser .listboxselected .remove{
      width:15px;
      height:15px;
      background:red;
      position: absolute;
      color:rgb(224, 224, 224);
      cursor: pointer;
      text-align: center;
      line-height: 15px;
      border-radius: 7.5px;
      padding-top:1px;
      right:0;
      top:0;
    }

    .namebox{
      height:30px;
      line-height:30px;
      text-align: center;
      color:black;
    }

    .examsetprobox .editunder{
      height:60px;
      padding:10px;
      border-radius: 0px 0px 4px 4px;
      border-top:1px solid #ededed;
      text-align:center;
    }

    .examsetprobox .editunder button{
      padding:8px 40px;
      margin:0 6px;
    }
  /*-----------------------------------------------------------------------------*/


  /*----其他审批设置--------------------------------------------------------------------------*/
    .otherexamsetprobox{
      width: 688px;
      height: 575px;
      background-color: #ffffff;
      box-shadow: 0px 0px 20px 0px 
        rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      position:absolute;
      left:0;
      right:0;
      top:0;
      bottom: 0;
      margin:auto;
    }

      .otherexamsetprobox .edittitle{
      width:100%;
      height: 60px;
      background-color: #ededed;
      border-radius: 4px 4px 0px 0px
    }

    .otherexamsetprobox .edittitle span{
      display:block;
      height:60px;
      line-height: 60px;
      font-size: 18px;
      color: #5c5d66;
      padding:0px 10px;
    }

    .otherexamsetprobox .editcontents{
      height:calc(100% - 120px);
    }


    .otherexamsetprobox .editcontents .examsbox-top{
      height:80px;
      padding:10px;
    }



    .otherexamsetprobox .editcontents .examsbox-top span{
      height:30px;
      line-height: 30px;
    }

    .otherexamsetprobox .editcontents .examsbox-top .examsbox-des{
      width:100%;
      height:30ox;
      line-height: 30px;
      font-size: 14px;
	    color: #b8bbcc;
    }
    .otherexamsetprobox .editcontents .examsbox-content{
      height:calc(100% - 80px);
      padding:10px;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-left{
      width:34%;
      height:100%;
      padding:10px;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-left .examsbox-content-left-title{
      width:100%;
      height:30px;
      line-height: 30px;
      font-size: 14px;
      color: #5c5d66;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-left .examsbox-content-left-content{
      width:100%;
      height:calc(100% - 30px);
      padding:5px;
      background:#f7f7f7;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-left .examsbox-content-left-content ul{
      overflow: hidden;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-left .examsbox-content-left-content ul li{
      height:30px;
      line-height: 30px;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-left .examsbox-content-left-content ul li:hover{
      background:rgb(216, 216, 216);
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center{
      width:33%;
      height:100%;
      padding:10px;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-title{
      width:100%;
      height:30px;
      line-height: 30px;
      font-size: 14px;
      color: #5c5d66;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content{
      width:100%;
      height:calc(100% - 30px);
      padding:5px;
      background:#f7f7f7;
    }

    /*-------------------------------------------------------------------------------------*/
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .searchbox{
      text-align: center;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .searchresult{
      padding:5px;
      height: 45%;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .searchresult ul{
      overflow: hidden;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .searchresult ul li{
      padding-bottom:1px;
      overflow: hidden;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .searchresult ul li .theuserbox{
      height:40px;
      padding:5px;
      background:rgb(228, 228, 228);
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .searchresult ul li .theuserbox .userimgs{
      width:30px;
      height:30px;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .searchresult ul li .theuserbox .userimgs img{
      width:30px;
      height:30px;
      border-radius: 15px;
      
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .searchresult ul li .theuserbox .usernames{
      height:30px;
      line-height: 30px;
      padding:0px 10px;
      width:calc(100% - 55px);
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .searchresult ul li .theuserbox .userclears{
      width:15px;
      height:15px;
      border-radius: 7.5px;
      text-align: center;
      line-height: 15px;
      padding-top:1.5px;
      cursor: pointer;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .searchresult ul li .theuserbox .userclears img{
      border-radius:5px;
      width:15px;
      height: 15px;
    }


    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .selecteduser{
      padding:5px;
      height:calc(100% - 30px);
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .selecteduser .listboxselected{
      padding:5px;
      position: relative;
      width:50px;
      height: 80px;
    }
    
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .selecteduser .listboxselected img{
      border-radius: 20px;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-center .examsbox-content-center-content .selecteduser .listboxselected .remove{
      width:15px;
      height:15px;
      background:red;
      position: absolute;
      color:rgb(224, 224, 224);
      cursor: pointer;
      text-align: center;
      line-height: 15px;
      border-radius: 7.5px;
      padding-top:1px;
      right:0;
      top:0;
    }
    /*-------------------------------------------------------------------------------------*/
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right{
      width:33%;
      height:100%;
      padding:10px;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-title{
      width:100%;
      height:30px;
      line-height: 30px;
      font-size: 14px;
      color: #5c5d66;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content{
      width:100%;
      height:calc(100% - 30px);
      padding:5px;
      background:#f7f7f7;
    }
    /*-------------------------------------------------------------------------------------*/
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .searchbox{
      text-align: center;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .searchresult{
      padding:5px;
      height: 45%;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .searchresult ul{
      overflow: hidden;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .searchresult ul li{
      padding-bottom:1px;
      overflow: hidden;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .searchresult ul li .theuserbox{
      height:40px;
      padding:5px;
      background:rgb(228, 228, 228);
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .searchresult ul li .theuserbox .userimgs{
      width:30px;
      height:30px;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .searchresult ul li .theuserbox .userimgs img{
      width:30px;
      height:30px;
      border-radius: 15px;
      
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .searchresult ul li .theuserbox .usernames{
      height:30px;
      line-height: 30px;
      padding:0px 10px;
      width:calc(100% - 55px);
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .searchresult ul li .theuserbox .userclears{
      width:15px;
      height:15px;
      border-radius: 7.5px;
      text-align: center;
      line-height: 15px;
      padding-top:1.5px;
      cursor: pointer;
    }
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .searchresult ul li .theuserbox .userclears img{
      border-radius:5px;
      width:15px;
      height: 15px;
    }


    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .selecteduser{
      padding:5px;
      height: 100%;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .selecteduser .listboxselected{
      padding:5px;
      position: relative;
      width:50px;
      height: 80px;
    }
    
    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .selecteduser .listboxselected img{
      border-radius: 20px;
    }

    .otherexamsetprobox .editcontents .examsbox-content .examsbox-content-right .examsbox-content-right-content .selecteduser .listboxselected .remove{
      width:15px;
      height:15px;
      background:red;
      position: absolute;
      color:rgb(224, 224, 224);
      cursor: pointer;
      text-align: center;
      line-height: 15px;
      border-radius: 7.5px;
      padding-top:1px;
      right:0;
      top:0;
    }
    /*-------------------------------------------------------------------------------------*/
    .otherexamsetprobox .editunder{
      height:60px;
      padding:10px;
      border-radius: 0px 0px 4px 4px;
      border-top:1px solid #ededed;
      text-align:center;
    }

    .otherexamsetprobox .editunder button{
      padding:8px 40px;
      margin:0 6px;
    }
  /*-----------------------------------------------------------------------------------------*/

  .unshow{
    visibility: hidden;
    z-index:-1000;
  }

  .show{
    visibility: visible;
    z-index: 1000;
  }
  </style>
