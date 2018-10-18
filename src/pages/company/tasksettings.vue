<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <Icon type="ios-pricetags-outline"></Icon>任务管理
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
      <span v-show="false">
        <i-button @click="adduserwins" type="primary" icon="ios-add" class="colorblue fr" style="margin-top:15px; margin-right:20px;">添加成员</i-button>
        <i-button @click="opendepartment" type="primary" icon="ios-add" class="colorblue fr"  style="margin-top:15px; margin-right:20px;">部门管理</i-button>
        <i-button @click="openjob" type="primary" icon="ios-add" class="colorblue fr"  style="margin-top:15px; margin-right:20px;">岗位管理</i-button>
      </span>
    </div>
    <div class="comcontent">
    <div class="comnameclass posor" @click="companyevent">{{this.companyname}}</div>
      <div class="comleftmenu fl">
      <!---------------------->
      <ul>
          <li v-for="item in deplist" :key="item.id" v-if="item.pid==0&&item.level==0">
              <span :id="'span'+item.id" @click="getteams(item.id,item.name)" class="posor fl"><el-button type="text">{{item.name}}</el-button><img :id="'img'+item.id" src="../../assets/right.png" /></span>
              <ul class="ulhid" :id="item.id">
                  <li v-for="items in deplist" :key="items.id" v-if="items.pid==item.id&&items.level==1">
                      <span :id="'span'+items.id" @click="getteams(items.id,items.name)" class="posor fl"><el-button type="text">{{items.name}}</el-button><img :id="'img'+items.id" src="../../assets/right.png" /></span>
                      <ul class="ulhid" :id="items.id">
                          <li v-for="itemss in deplist" :key="itemss.id" v-if="itemss.pid===items.id&&itemss.level===2">
                              <span :id="'span'+itemss.id" @click="getteams(itemss.id,itemss.name)" class="posor fl"><el-button type="text">{{itemss.name}}</el-button><img :id="'img'+itemss.id" src="../../assets/right.png" /></span>
                              <ul class="ulhid" :id="itemss.id">
                                  <li v-for="itemsss in deplist" :key="itemsss.id" v-if="itemsss.pid==itemss.id&&itemsss.level==3">
                                      <span :id="'span'+itemsss.id" @click="getteams(itemsss.id,itemsss.name)" class="posor fl"><el-button  type="text">{{itemsss.name}}</el-button><img :id="'img'+itemsss.id" src="../../assets/right.png" /></span>
                                      <ul class="ulhid" :id="itemsss.id">
                                          <li v-for="itemssss in deplist" :key="itemssss.id" v-if="itemssss.pid==itemsss.id&&itemssss.level==4">
                                              <span :id="'span'+itemssss.id" @click="getteams(itemssss.id,itemssss.name)" class="posor fl"><el-button  type="text">{{itemssss.name}}</el-button><img :id="'img'+itemssss.id" src="../../assets/right.png" /></span>
                                              <ul class="ulhid" :id="itemssss.id">
                                                  <li v-for="itemsssss in deplist" :key="itemsssss.id" v-if="itemsssss.pid==itemssss.id&&itemsssss.level==5">
                                                      <span :id="'span'+itemsssss.id" @click="getteams(itemsssss.id,itemsssss.name)" class="posor fl"><el-button type="text">{{itemsssss.name}}</el-button><img :id="'img'+itemsssss.id" src="../../assets/right.png" /></span>
                                                      <ul class="ulhid" :id="itemsssss.id">
                                                          <li v-for="itemssssss in deplist" :key="itemssssss.id" v-if="itemssssss.pid==itemsssss.id&&itemssssss.level==6">
                                                              <span :id="'span'+itemssssss.id" @click="getteams(itemssssss.id,itemssssss.name)" class="posor fl"><el-button type="text">{{itemssssss.name}}</el-button><img :id="'img'+itemssssss.id" src="../../assets/right.png" /></span>
                                                              <ul class="ulhid" :id="itemssssss.id">
                                                                  <li v-for="itemsssssss in deplist" :key="itemsssssss.id" v-if="itemsssssss.pid==itemssssss.id&&itemsssssss.level==7">
                                                                      <span :id="'span'+itemsssssss.id" @click="getteams(itemsssssss.id,itemsssssss.name)" class="posor fl"><el-button type="text">{{itemsssssss.name}}</el-button><img :id="'img'+itemssssss.id" src="../../assets/right.png" /></span>
                                                                      <ul class="ulhid" :id="itemsssssss.id">
                                                                          <li v-for="itemssssssss in deplist" :key="itemssssssss.id" v-if="itemssssssss.pid==itemsssssss.id&&itemssssssss.level==8">
                                                                              <span :id="'span'+itemssssssss.id" @click="getteams(itemssssssss.id,itemssssssss.name)" class="posor fl"><el-button type="text">{{itemssssssss.name}}</el-button><img :id="'img'+itemsssssss.id" src="../../assets/right.png" /></span>
                                                                          </li>
                                                                      </ul>
                                                                  </li>
                                                              </ul>
                                                          </li>
                                                      </ul>
                                                  </li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
      </ul>
      <!---------------------->
      </div>
      <div class="comrightlist fr">
        <div class="userlist-box">

          <ul>
            <li v-for="item in userlist" :key="item.id"><span class="posor" @click="positiones(item.id,item.name)"><div style="padding-left:10px; padding-top:2px;" class="fl"><img :id="'chimg'+item.id" src="../../assets/right.png" /></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style="padding-left:20px;" class="fl">{{item.name}}</div></span>
              <ul :id="'ch'+item.id" v-show="isshow==item.id?true:false">
                <li style="cursor: pointer;" @click="persontask(itemuser.id,itemuser.name)" v-for="itemuser in item.userList" :key="itemuser.id">
                  <span style="width:50px; background:transparent;" class="fl"><img :src="itemuser.user_img==''?userImg:rootUrl+itemuser.user_img|srctransformation" width="40" height="40" /></span>
                  <span style="width:70px; background:transparent;" class="fl">{{itemuser.name}}</span>
                  <span class="fl" style=" background:transparent;">{{itemuser.mobile_phone}}</span>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </div>



    <!--用户信息面板-->
    <div class="userinfos unshow">
      <div class="userinfos-title">
        <span class="fl">成员信息</span>
        <span @click="coloseuserinfos" class="posor fr"><img src="../../assets/delete.png"/></span>
      </div>
      <div class="userinfos-content">
        <div @click="edituserinfosbtn" class="usercoreinfos">
          <div class="imgbox fl"><img :src="userinfoes.userimg==''?userImg:rootUrl+userinfoes.userimg" width="50" height="50" /></div>
          <div class="infoscenter fl">
            <div><span class="username">{{userinfoes.username}}</span><span class="usercall">{{userinfoes.usercall}}</span></div>
            <div class="dep">{{userinfoes.userdep}}-{{userinfoes.userldep}}</div>
            <div>
              <span :v-show="userlistinfos.ismanage==1?false:false" class="admin fl">主管</span><span :v-show="userlistinfos.isadmin==1?false:false" class="manager fl">管理员</span>
            </div>
          </div>
          <div class="userrightimg">
            <img src="../../assets/left.png" />
          </div>
        </div>
        <div class="tolbf"><span class="textbf fl">福利邦分</span><span class="textbfgold fr">{{userlistinfos.total_score}}</span></div>
        <div class="totals">
          <div class="totalslist">
            <div class="a">今日</div>
            <div class="e">{{userlistinfos.todayScore}}分</div>
            <div class="f">{{userlistinfos.todayRank}}分</div>
          </div>
          <div class="totalslist">
            <div class="b">昨日</div>
            <div class="e">{{userlistinfos.yesterdayScore}}分</div>
            <div class="f">{{userlistinfos.yesterdayRank}}名</div>
          </div>
          <div class="totalslist">
            <div class="c">本周</div>
            <div class="e">{{userlistinfos.weekScore}}分</div>
            <div class="f">{{userlistinfos.weekRank}}名</div>
          </div>
          <div class="totalslist">
            <div class="d">本月</div>
            <div class="e">{{userlistinfos.monthScore}}分</div>
            <div class="f">{{userlistinfos.monthRank}}名</div>
          </div>
        </div>
        <div class="underlist">
          <div class="listboxes"><span class="fl">邦分折扣</span><span class="fr">0.7/1</span></div>
          <div class="listboxes"><span class="fl">邦分排名范围</span><span class="fr">全员</span></div>
        </div>

      </div>
    </div>
    <!--用户信息面板-->

    <!--编辑用户信息面板-->
    <div class="edituserinfos unshow">
      <div  class="userinfos-title">
        <span @click="closeedituserinfos" class="posor fl"><img src="../../assets/left.png"/></span>
      </div>
      <div class="userinfos-content">
        <div class="underlist">
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl" style="line-height:150px;">头像</div>
            <div class="list-content fl">
              <div class="list-content-img fl"><img :src="userinfoes.userimg==''?userImg:rootUrl+userinfoes.userimg" width="50" height="50" /></div>
              <div class="list-content-upbtn fl">
                <span style="font-weight:bold; Width:60px; display:block;">上传头像</span>
                <span style="color:gray; display:block; Width:60px;">{{userinfoes.userimg}}</span>
                <span style="display:block; Width:60px;">
                  <Upload :show-upload-list="false" :format="['jpg','jpeg','png']" :before-upload="photohandleBeforeUpload" :on-format-error="handleFormatError" action="/" type="drag">
                      <i-button style="background:#6680ff; width:100%; color:white;" icon="ios-cloud-upload-outline">选择文件</i-button>
                  </Upload>
                </span>
              </div>
            </div>
          </div>

          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">姓名</div>
            <div class="list-content fl">
                <el-input size="small" placeholder="请输入姓名..." style="width:100%;" v-model="userinfoes.username"></el-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">电话</div>
            <div class="list-content fl">
                <el-input size="small" placeholder="请输入手机号..." style="width:100%;" v-model="userinfoes.usercall"></el-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">部门</div>
            <div class="list-content fl">
                <i-select @on-change="selectdepevent" v-model="adduserlist.udepid">
                    <i-option v-for="item in adduserlist.deplist" :key="item.id" :value="item.id">{{ item.name }}</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">岗位</div>
            <div class="list-content fl">
                <i-select v-model="adduserlist.uldepid">
                    <i-option v-for="item in adduserlist.ldeplist" :key="item.id" :value="item.id">{{ item.name }}</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">是否主管</div>
            <div class="list-content fl">
                <i-select v-model="userinfoes.isadmin">
                    <i-option  value="1">是</i-option>
                    <i-option  value="0">否</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">福利邦分</div>
            <div class="list-content fl">
                <el-input size="small" placeholder="请输入邦分..." style="width:100%;" v-model="userinfoes.bf"></el-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <!--div class="boxlist">
            <div class="list-title fl">排名范围</div>
            <div class="list-content fl">
                <el-input placeholder="请输入姓名..." style="width:100%;" v-model="userinfoes.area"></el-input>
            </div>
          </div-->
          <!--列表结束-->
          <div class="linecenter"></div>
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <i-button @click="saveinformations" style="background:#6680ff; color:white; float:right;">确 定</i-button>
          </div>

        </div>

      </div>
    </div>
    <!--编辑用户信息面板-->

    <!--添加用户窗口-->
    <div class="adduserwin unshow">
      <div class="adduserwin-title"><span class="fl">添加成员</span><span class="posor fr" @click="closeadduserwins"><img src="../../assets/delete.png" /></span></div>
      <div class="adduserwin-content">
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">姓名</div>
            <div class="list-content fl">
                <el-input size="small" placeholder="请输入姓名..." style="width:100%;" v-model="adduserlist.username"></el-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">电话</div>
            <div class="list-content fl">
                <el-input size="small" placeholder="请输入手机号..." style="width:100%;" v-model="adduserlist.usercall"></el-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">部门</div>
            <div class="list-content fl">
                <i-select @on-change="selectdepevent" v-model="adduserlist.udepid">
                    <i-option v-for="item in adduserlist.deplist" :key="item.id" :value="item.id">{{ item.name }}</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">岗位</div>
            <div class="list-content fl">
                <i-select v-model="adduserlist.uldepid">
                    <i-option v-for="item in adduserlist.ldeplist" :key="item.id" :value="item.id">{{ item.name }}</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">是否主管</div>
            <div class="list-content fl">
                <i-select v-model="adduserlist.isadmin">
                    <i-option  value="1">是</i-option>
                    <i-option  value="0">否</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          
          <div class="line10"></div>
          <!--列表开始-->
          <!--div class="boxlist">
            <div class="list-title fl">排名范围</div>
            <div class="list-content fl">
                <el-input placeholder="请输入姓名..." style="width:100%;" v-model="userinfoes.area"></el-input>
            </div>
          </div-->
          <!--列表结束-->
          <div class="linecenter"></div>
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <i-button @click="adduserinformations" style="background:#6680ff; color:white; float:right;">确认添加</i-button>
          </div>
      </div>
    </div>
    <!--添加用户窗口-->


    <!--添加任务窗口-->
    <div class="comboxtagsbox unshow">
        <div class="combox-tags-box-title">
            <span class="fl"><span class="colorpar">{{task.titlename}}</span>每日常规任务设置</span><span class="fr" @click="closetaskwins" style="cursor: pointer;" >x</span>
        </div>
        <div class="combox-tags-box-content">
          <div class="tasktops">
            <el-scrollbar style="height:100%;">
            <div class="tasklist" v-for="item in task.tasklist" :key="item.id">
              <div class="tasklist-box fl">
                <div class="tasklist-box-top">{{item.name.substr(0,12)}}...</div>
                <div class="tasklist-box-under">{{item.grade}}邦分</div>
              </div>
              <div class="tasklist-action fr"><i-button @click="deletetaskswhereid(item.id)" class="fr">删除</i-button></div>
            </div>
            </el-scrollbar>
          </div>

          <div class="taskunders">
            <div style="border-bottom:1px solid #ededed; height:30px; width:100%; margin-bottom:30px;"></div>
            <div><el-input type="textarea" :maxlength="40" v-model="task.tasktext" placeholder="请输入一个任务..."></el-input></div>
            <div style="height:40px;">
              <span style="display:block; height:40px; line-height:30px; float:left;"> <el-input size="small" placeholder="请输入..." style="width: 80px;" v-model="task.taskbf"></el-input></span>
              <span style="display:block; height:40px; line-height:40px; float:right; padding:5px;"><i-button class="fr backgroundpar" @click="addtasks" type="primary">确定完成</i-button></span>
              <span style="display:block; height:40px; line-height:40px; float:right; padding:5px;"><i-button class="fr" @click="closetaskwins" style="width:80px;">取消</i-button></span>
            </div>
          </div> 
          <div></div>        
        </div>
    </div>
    <!--添加任务窗口结束-->
    <Modal
        width="300"
        v-model="modalmsg"
        class-name="vertical-center-modal">
        <p slot="header" style="color:#000;text-align:left">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>您确认要删除该任务吗！</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer" style="text-align:center;">
            <i-button style="width:80px; color:#6680ff;" @click="cancel" class="colorpar">取 消</i-button>
            <i-button type="primary" style="width:80px;" @click="ok" class="backgroundpar">确 定</i-button>
        </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    filters:{
      srctransformation:function(value){
          console.log('-------------------------------------');
          if(value.indexOf('http://thirdwx.qlogo.cn')!=-1){
            return value.replace(window.localStorage.api,"");
          }else{
            return value;
          }
          console.log('------------------------------------');
      }
    },
    data(){
      return{
        rootUrl:window.localStorage.api,
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
        userImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAADo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjR0dHW1tbb29ve3t7i4uLY2Njk5OQwtOK3AAAAI3RSTlMAC+BHIPXxdwjb7J1PFOTWx71ZArhs6dGUFqZwmJBcKahdt2kJJfYAAAJXSURBVFjDxdkJcqswDAZghTUQKNkTkjZN32/W+x/wtZlpaUIksIHpdwCNFyHbgjrE9u64SvYe3DA4rI47OyZzs+jtgJbDWzQjAxv75ILhnuyN7uDOFkTWWWeYcz9Ep9CfU09rC71Ya+rD+Yfetg51unjQ4F26Vm8BTQtxJdMltC1TYfkCGAjYhXx/gZGXd2Z8Ujw54tMxxgGMBfGT/V1igGV7rxcYZNHKZwx0edgQDwN59xuzhaAuskxlWV7K3/VdfZHCVepbJoZcN/FmFliF+i0Hz2pKrg9Wru5V4Pk/Awzl8fUdY/g9xB2/fqpNWMcd3WwsYcJtmbCKm1tAGyz1TA2WfQt4AqdUzxRgXW9b4urMWN5o92tbImgGzMCLPgO+jhnw9TNggPGmjIAoBYZvSiNlkkZOG4HNfMdiYkt8pvSLn558FKzAYIuDaEUJGFz5kiW0B4MrsLI9eWBwR4DMI3Sri6o5pLqQi3FRiFF5ZGFUezpAVpfFL2UNWSIndpln6kHH3qz4T69JmEZ39iyE4lAoVg6Oz5evXAkqvnylfDyTiClRoDdfuW4H7CGlOtXcIRWxEzaYdMQd9KqHmjno6SquoFbuXLnLEpPRnaeVzV3nMrOA1oa7cCqzgGf2Sqx6Ya/E5I8T0GeeFRpryD0raG2Q2PljHq7lp1lZ5HmVPVNVeV60S+J22scjfWCgj4kf4MNbBNM2MYa3WaZtBDWcBAYSh1ixSTMtFtt9R2g6zkkW6TUkI+rkbNHb1pm0qTu87TxlY3x46/7vfy7c//5wAXef9Pn98R+pP67D9VcSWgAAAABJRU5ErkJggg==',
        modalmsg:false,
        delid:0,
        companyname:'',//公司名称
        deplist:[],//部门
        userlist:[],//用户和岗位列表
        userinfoes:{
          userid:0,
          username:'',//姓名
          usercall:'',//电话
          userdep:'',//部门
          userldep:'',//岗位
          userimg:'',//头像
          isadmin:'',//是否是管理员
          bf:'',//邦分
          area:'',//范围
          depid:0,//部门id
          ldepid:0//岗位id
        },
        userlistinfos:Object,//获取用户的邦分之类的
        adduserlist:{
          username:'',
          usercall:'',
          udepid:0,
          uldepid:0,
          isadmin:1,
          deplist:[],
          ldeplist:[]
        },
        task:{
          tasktext:'',//任务名称
          taskbf:0,//邦分
          tasklist:'',//任务列表
          tasktype:'',//任务类型，用于区分传后台
          taskid:0,//部门，或者岗位，或者用户id
          companyid:0,//公司id
          titlename:''//标题名称
        },
        isshow:0,
      }
    },
    methods:{
      //加载顶级部门
      loadinginitdep(){
      this.deplist =[];//每次push前先清空
            let list=[];
            let url = window.localStorage.api+'/organization/getAllDepartment';

            this.$http.get(url).then(res=>{
                //console.log('公司id------------------------------------------');
                //console.log(res);
                //console.log('公司id-------------------------------------------');
                //this.deplist = res['data'].message;
                list = res['data'].message;
                this.deplist = list;
                this.task.companyid = list[0].company_id;
               //-------------------------------------------------------------------
                
               //------------------------------------------------------------------
                
            }).catch(err=>{ 
                //console.log(err);
            })
      },
      opendepartment(){
        this.$router.push({path:'/pages/company/departmentmanager'});
      },
      openjob(){
        this.$router.push({path:'/pages/company/jobmanager'});
      },
      //-------------------------------------------------------
      //-------------------------------------------------------
      getteams(_id,_name){
        $('#'+_id).slideToggle('fast',function(){
          //jquery代码实现菜单特效
          $('.comleftmenu').find("span").removeClass('selectedclass');
          $('#span'+_id).addClass('selectedclass');
          if($(this).children('ul>li').length!=0){
            if ($('#'+_id).css("display")!="none"){
              $('#img'+_id).attr({src:'data:image/png;base64,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'});
            }else{
              $('#img'+_id).attr({src:'data:image/png;base64,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'});
            }
          }else{
            //this.error('下面没有更多信息了');
          }
        });
        this.task.titlename = _name;
        this.task.tasktype = 'department';//识别添加时是添加什么
        this.task.taskid = _id;//部门id
        //加载部门相关任务
        this.gettaskswhereid(this.task.taskid,this.task.tasktype);
        this.opentaskwins();//显示任务窗口

        //console.log(_id);
        let url = window.localStorage.api+"/organization/getDepartment?="+_id;
        this.$http.get(url).then(res=>{
          //console.log(res);
          if (res['data'].message.existNext==1) {
            //console.log('存在下级部门');
          }else{
            //console.log('不存在下级部门');
            let uerurl = window.localStorage.api+'/organization/getPostAndUser?department_id='+_id;
            this.$http.get(uerurl).then(res=>{
              //console.log(res);
              this.userlist = res['data'].message;
              //console.log(this.userlist);
            }).catch(err=>{
              //console.log(err);
            })
          }
        }).catch(err=>{
          //console.log(err);
        })
      },
      companyevent(){//公司任务
        this.task.titlename = this.companyname;
        this.opentaskwins();
        this.task.tasktype = 'company';//识别添加时是添加什么
        this.task.taskid = this.task.companyid;//岗位id
        this.gettaskswhereid(this.task.taskid,this.task.tasktype);//获取岗位任务
        //console.log('公司id'+this.task.taskid);
      },
      positiones(_id,_name){
        $('#ch'+_id).slideToggle('fast',function(){
          if($(this).children('ul>li').length!=0){
            if($('#ch'+_id).css("display")!="none"){
              $('#chimg'+_id).attr({src:'data:image/png;base64,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'});
            }else{
              $('#chimg'+_id).attr({src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACzSURBVHjalNK9bQIxGAbgB7hbhiEoWCGRYAIWQDSAFClIaSIWoOanAUZImQGiFOwC4tLYKELmznyN//S8tmW3qqoS63O5gjlO2EvUZDy69Yu7tT4WOIdxMiBW+278hQ+U2OK1DheJuVlopyGgwiFn5/8B8QQ7vDyDswLqcGNAE4afcO8S3WfwABu08BaeMQtH2AnwPffOjfARHubAFO5hnQNTP+wbR/w2wRS+hGNfM57Q3wDosycbhdUaZwAAAABJRU5ErkJggg=='});
            }
          }else{
            //this.error('下面没有更多信息了！');
          }
        });
        // if(this.isshow==_id){
        //   this.isshow = 0;
        // }else{
        //   this.isshow = _id;
        // }
        this.task.titlename =_name;
        this.task.tasktype = 'post';//识别添加时是添加什么
        this.task.taskid = _id;//岗位id
        this.gettaskswhereid(this.task.taskid,this.task.tasktype);//获取岗位任务
        this.opentaskwins();
        //console.log('岗位ID'+_id);
      },
      persontask(_id,_name){
        this.task.titlename =_name;
        this.task.tasktype = 'user';//识别添加时是添加什么
        this.task.taskid = _id;//用户id
        this.gettaskswhereid(this.task.taskid,this.task.tasktype);//获取用户任务
        this.opentaskwins();
        //console.log('用户'+_id);
      },
      useres(_id,_name,_dep,_ldep,_call,_img){
        //console.log('用户ID'+_id);
        this.userinfoes.username = _name;
        this.userinfoes.userid = _id;
        this.userinfoes.usercall = _call;
        this.userinfoes.userdep = _dep;
        this.userinfoes.userldep = _ldep;
        this.userinfoes.userimg = _img;

        let url = window.localStorage.api+'/get/user/info';
        this.$http.get(url).then(res=>{
          this.userlistinfos = res['data'].message;
          //console.log(this.userlistinfos);
          this.userinfoes.isadmin = this.userlistinfos.isadmin;
          this.userinfoes.bf = this.userlistinfos.total_score;
        }).catch(err=>{

        })

        $('.userinfos').addClass('show animated fadeIn');
      },
      coloseuserinfos(){
        $('.userinfos').removeClass('show animated fadeIn');
      },
      edituserinfosbtn(){
        $('.userinfos').removeClass('show animated fadeIn');
        $('.edituserinfos').addClass('show animated fadeIn');
      },
      closeedituserinfos(){
        //console.log("关闭编辑按钮");
        $('.userinfos').addClass('show animated fadeIn');
        $('.edituserinfos').removeClass('show animated fadeIn');
      },
      saveinformations(){
        this.userinfoes.isadmin = this.userlistinfos.ismanage;

        //console.log('保存');
        let url = window.localStorage.api+"/add/user";
        let params = new URLSearchParams();      
        params.append('user_id',this.userinfoes.userid);//
        params.append('mobile_phone',this.userinfoes.usercall);//
        params.append('name',this.userinfoes.username);//
        params.append('department_id',this.adduserlist.udepid);//
        params.append('post_id',this.adduserlist.uldepid);//
        params.append('ismanage',this.userinfoes.isadmin);//
        params.append('bangfen',this.userinfoes.bf);//
        params.append('user_img',this.userinfoes.userimg);//
        this.$http.post(url,params).then(res=>{
          //console.log(res);
          if(res['data'].success){
            //重新获取
            this.success('更新成功！');
            this.getteams(this.adduserlist.udepid);//重新加载部门信息
          }
        }).catch(err=>{
          //console.log(err);
        })
      },
      adduserwins(){      
        $('.adduserwin').addClass('show animated fadeIn');
      },
      closeadduserwins(){
        $('.adduserwin').removeClass('show animated fadeIn');
      },
      //-------------------------------------------------------

      //添加任务窗口
      opentaskwins(){
        $('.comboxtagsbox').addClass('show animated fadeInRight');
      },
      closetaskwins(){
        $('.comboxtagsbox').removeClass('show animated fadeInRight');
      },
      //添加任务窗口
      //*************************** */
        photohandleBeforeUpload(file){
          this.uploadimg(file);
        },
        handleFormatError(file) {
          this.$Notice.warning({
            title: '文件格式不正确',
            desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
          })
        },
        uploadimg(_img){
          let upurl = window.localStorage.api + "/api/upload";//验证码登录
          let params = new FormData();
          params.append('file',_img,_img.name);//图片
          let config = {
            headers: {'Content-Type': 'multipart/form-data'}
          }
          //console.log(_img);
          this.$http.post(upurl,params).then((res)=>{
              //console.log(res['data'].message.fileurl);
              this.userinfoes.userimg = res['data'].message.fileurl;
          }).catch((err)=>{
            //console.log(err);
          })
        },
      //*************************** */
      adduserinformations(){
        //console.log('添加用户');
        let addurl = window.localStorage.api+'/add/user';
        let params = new URLSearchParams();
        params.append('mobile_phone',this.adduserlist.usercall);//手机号	
        params.append('name',this.adduserlist.username);//姓名
        params.append('department_id',this.adduserlist.udepid);//部门id
        params.append('post_id',this.adduserlist.uldepid);//岗位id	
        params.append('ismanage',this.adduserlist.isadmin);//是否为主管，0不是，1是
        this.$http.post(addurl,params).then(res=>{
          //console.log(res);
          if(res['data'].success){
            this.success('添加成员成功！');
            this.adduserlist.usercall="";
            this.adduserlist.username="";
            this.adduserlist.udepid="";
            this.adduserlist.uldepid="";
            this.adduserlist.isadmin="";
            this.closeadduserwins();
            //重新加载
            this.getteams(this.userinfoes.depid);//重新加载部门信息
          }else{
            this.error(res['data'].message);
          }
        }).catch(err=>{
          //console.log(err);
        })

      },
      loadinglastdep(){//获取用户上一级部门
        
        let url = window.localStorage.api+"/organization/getGroundDepartment?type=user";
        this.$http.get(url).then(res=>{
          //console.log('*******');
          //console.log(res);
          //console.log('*******');
          this.adduserlist.deplist=res['data'].message;
        }).catch(err=>{
          //console.log(err);
        })
      },
      //添加新用户事件
      selectdepevent(){
        //console.log(this.adduserlist.depid);
        let url = window.localStorage.api+"/organization/getPostAndUser?department_id="+this.adduserlist.udepid;
        this.$http.get(url).then(res=>{
            this.adduserlist.ldeplist = res['data'].message;
            //console.log(res['data'].message);
            if(res['data'].message.length==0){//如果不存在岗位
               this.adduserlist.uldepid='';
            }

        }).catch(err=>{
          //console.log(err);
        })
      },
      test(){
        //console.log(this.userinfoes.ldepid);
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
            this.$message({
              message:_str,
              type: 'error'
            });
      },
      gettaskswhereid(_id,_type){//获取任务
        let url = window.localStorage.api+'/get/admin/item/info?id='+_id+"&type="+_type;
        this.$http.get(url).then(res=>{
          //console.log(res);
          this.task.tasklist = res['data'].message;
        }).catch(err=>{
          //console.log(err);
        })
      },
      deletetaskswhereid(_id){//删除任务
        this.modalmsg = true;
        this.delid = _id;
      },
      ok(){
        let url = window.localStorage.api+'/delete/admin/item/info';
        let params = new URLSearchParams();
        params.append('id',this.delid);
        this.$http.post(url,params).then(res=>{
          //console.log(res);
          if(res['data'].success){
            this.success(res['data'].message);
            this.gettaskswhereid(this.task.taskid,this.task.tasktype);
            this.delid= 0;
            this.modalmsg = false;
          }else{
            this.error(res['data'].message);
          }
        }).catch(err=>{
          //console.log(err);
        })
      },
      cancel(){
        this.modalmsg = false;
      },
      addtasks(){
        if(this.task.tasktext==""){
          this.error('请填写任务名称再保存');
          return;
        }
        if(this.task.taskbf==0){
          this.error('请输入该任务的邦分');
          return;
        }
        let url = window.localStorage.api+'/set/admin/item/info';
        let params = new URLSearchParams();
        params.append('name',this.task.tasktext);
        params.append('type',this.task.tasktype);
        params.append('id',this.task.taskid);
        params.append('bangfen',this.task.taskbf);
        this.$http.post(url,params).then(res=>{
          console.log(res);
          if(res['data'].success){
            console.log('11111111111111111111111111111111111');
            this.gettaskswhereid(this.task.taskid,this.task.tasktype);//刷新
            console.log('0000000000000000000000000000000000');
            this.task.tasktext = '';
            this.task.taskbf = 0;
            this.success(res['data'].message);
          }else{
            this.error(res['data'].message);
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      getcompanyname(){
        let url = window.localStorage.api+'/organization/getDepartment';
        this.$http.get(url).then(res=>{
          console.log(res);
          this.companyname = res['data'].message.company;

        }).catch(err=>{
          console.log(err);
        })
      },
      
    },
    mounted(){
      //验证是否登录
      if(!window.sessionStorage.status){
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path:'/pages/login'});
        return;
      }
      //加载公司名称
      this.getcompanyname();
      //加载顶级部门
      this.loadinginitdep();
      //添加用户时获取用户的上级部门，不是顶级部门
      this.loadinglastdep();
      //页面启动动画
      $('userinfos').addClass('show');
    }
  }
</script>


<style scoped>
  .combox{
    width:100%;
    height:100%;
    border: solid 1px #ededed;
    background: #FFF;
    position: relative;
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
    padding:30px;
    overflow: hidden;
    min-height:885px;
    
  }

  .combox .comcontent .comleftmenu{
    width:30%;
    height:100%;
  }

  .combox .comcontent .comleftmenu ul{
    overflow: hidden;
    width:100%;
  }

  .combox .comcontent .comleftmenu ul li{
    overflow: hidden;
    list-style: none;
    width:100%;
  }

  .combox .comcontent .comleftmenu ul li span{
    display: block;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed #E0E0E0;
    text-indent: 20px;
    width:100%;
  }

  .combox .comcontent .comleftmenu ul li span:hover{
    display: block;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed #E0E0E0;
    background:#f5f6ff;
    color:#6680ff;
    
  }


  .combox .comcontent .comleftmenu ul li span img{
    float:right;
    line-height: 50px;
    padding:15px;
  }



  .combox .comcontent .comleftmenu ul li span button{
    font-size: 14px;
    color:#2e2f33;
  }

  /*======================================*/
  .combox .comcontent .comleftmenu ul li ul{
    overflow: hidden;
    width:100%;
  }

  .combox .comcontent .comleftmenu ul li ul li{
    overflow: hidden;
    list-style: none;
    width:100%;
  }

  .combox .comcontent .comleftmenu ul li ul li span{
    display: block;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed #E0E0E0;
    text-indent: 20px;
    padding-left:20px;
    width:100%;
  }

  .combox .comcontent .comleftmenu ul li ul li span:hover{
    display: block;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed #E0E0E0;
    background:#f5f6ff;
    color:#6680ff;
    
  }

  .combox .comcontent .comleftmenu ul li ul li span img{
    float:right;
    line-height: 50px;
    padding:15px;
  }



  .combox .comcontent .comleftmenu ul li ul li span button{
    font-size: 14px;
    color:#2e2f33;
  }
  /*======================================*/



  .combox .comcontent .comrightlist{
    width:70%;
    height: 100%;
    background: #fcfcfc;
    padding:10px;
  }

  .combox .comcontent .comrightlist .userlist-box{
    overflow: hidden;
  }

  /********************************************************/
  .combox .comcontent .comrightlist .userlist-box ul{
    overflow: hidden;
  }

  .combox .comcontent .comrightlist .userlist-box ul li{
    overflow: hidden;
  }

  .combox .comcontent .comrightlist .userlist-box ul li span{
    display:block;
    height:50px;
    line-height: 50px;
    width:100%;
    border-bottom: 1px solid #ededed;
    padding-left:10px;
    font-size: 14px;
    color: #2e2f33;
    background:#ffffff;
  }

  .combox .comcontent .comrightlist .userlist-box ul li ul{
    overflow: hidden;
    padding-left:20px;
  }

  .combox .comcontent .comrightlist .userlist-box ul li ul li{
    line-height: 50px;
    width:100%;
    border-bottom: 1px solid #ededed;
  }

  .combox .comcontent .comrightlist .userlist-box ul li ul li span{
    display:block;
    padding-top:5px;
    line-height: 40px;
    width:200px;
    border-bottom: none !important;
    text-align: center;
  }

  .combox .comcontent .comrightlist .userlist-box ul li ul li span img{
    border-radius:20px;
  }
  /********************************************************/
    .comnameclass{
      height:50px; line-height:50px; border-bottom:1px solid #E0E0E0; text-indent:20px; font-size:14px; font-weight: bold;
    }
    /*用户信息面板样式*/
    .combox .userinfos{
      width:320px;
      height:100%;
	    box-shadow: -4px 0px 20px 0px rgba(0, 0, 0, 0.1);
      position: absolute;
      right:0;
      top:0;
      bottom: 0;
      margin: auto;
      background:white;
    }

    .combox .userinfos .userinfos-title{
      width:320px;
      height:49px;
      line-height: 49px;
      padding:0 20px;
      border-bottom: 1px solid #ededed;
    }

    .combox .userinfos .userinfos-title span{
      display: block;
      height:49px;
      line-height: 49px;
      font-size: 14px;
      color:#2e2f33;
    }

    .combox .userinfos .userinfos-content{
      height:calc(100% - 50px);
      width:100%;
    }

    .combox .userinfos .userinfos-content .usercoreinfos{
      height:120px;
      border-bottom: 1px solid #ededed;
      padding:10px;
      cursor: pointer;
    }
    .combox .userinfos .userinfos-content .usercoreinfos .imgbox{
      height:100px;
      width:100px;
      padding:25px;
    }
    .combox .userinfos .userinfos-content .usercoreinfos .imgbox img{
      border-radius: 25px;
    }
    .combox .userinfos .userinfos-content .usercoreinfos .infoscenter{
      height:100px;
      padding:20px 5px;
    }

    .combox .userinfos .userinfos-content .usercoreinfos .infoscenter div{
      height:20px;
      line-height:20px;
    }

    .combox .userinfos .userinfos-content .usercoreinfos .infoscenter div .username{
      font-size: 14px;
      color:#6680ff;
    }

    .combox .userinfos .userinfos-content .usercoreinfos .infoscenter div .usercall{
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #5c5d66;
    }

    .combox .userinfos .userinfos-content .usercoreinfos .infoscenter div .dep{
      font-size: 12px;
      color: #5c5d66;
    }
    .combox .userinfos .userinfos-content .usercoreinfos .infoscenter div .admin{
      display: block;
      padding:0 5px;
      height: 16px;
      background-color: #ff8d27;
      border-radius: 2px;
      color:white;
    }
    .combox .userinfos .userinfos-content .usercoreinfos .infoscenter div .manager{
      display: block;
      padding:0 5px;
      height: 16px;
      background-color: #ff4444;
      border-radius: 2px;
      margin-left: 5px;
      color:white;
    }
    

    .combox .userinfos .userinfos-content .usercoreinfos .userrightimg{
      height:100px;
      width:60px;
      padding:42.5px 45.5px;
    }

    .combox .userinfos .userinfos-content .usercoreinfos .userrightimg img{
      transform: rotate(180deg);
    }


    .combox .userinfos .userinfos-content .tolbf{
      height:30px;
      padding:30px 30px 0px 30px;
    }

    .combox .userinfos .userinfos-content .tolbf span{
      height:30px;
      line-height:30px;
    }

    .combox .userinfos .userinfos-content .tolbf .textbf{
      font-family: PingFang-SC-Medium;
      font-size: 16px;
      color: #2e2f33;
    }

    .combox .userinfos .userinfos-content .tolbf .textbfgold{
      font-family: PingFang-SC-Bold;
      font-size: 24px;
      color: #6680ff;
    }

    .combox .userinfos .userinfos-content .totals{
      padding:30px;
      width:100%;
      margin-top:20px;
      border-bottom: 1px solid #ededed;
      overflow: hidden;
    }

    .combox .userinfos .userinfos-content .totals .totalslist{
      width:25%;
      height:100px;
      float: left;
    }

    .combox .userinfos .userinfos-content .totals .totalslist div{
      margin:5px;
    }


    .combox .userinfos .userinfos-content .totals .totalslist .a{
      width: 38px;
      height: 18px;
      background-color: #ff5959;
      border-radius: 9px 9px 9px 0px;
      text-align: center;
      line-height: 18px;
      color:white;
    }
    .combox .userinfos .userinfos-content .totals .totalslist .b{
      width: 38px;
      height: 18px;
      background-color: #ffb54c;
      border-radius: 9px 9px 9px 0px;
      text-align: center;
      line-height: 18px;
      color:white;
    }
    .combox .userinfos .userinfos-content .totals .totalslist .c{
      width: 38px;
      height: 18px;
      background-color: #4ca5ff;
      border-radius: 9px 9px 9px 0px;
      text-align: center;
      line-height: 18px;
      color:white;
    }
    .combox .userinfos .userinfos-content .totals .totalslist .d{
      width: 38px;
      height: 18px;
      background-color: #a273ff;
      border-radius: 9px 9px 9px 0px;
      text-align: center;
      line-height: 18px;
      color:white;
    }
    .combox .userinfos .userinfos-content .totals .totalslist .e{
     font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #5c5d66; 
    }
    .combox .userinfos .userinfos-content .totals .totalslist .f{
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #b8bbcc;
    }

    .combox .userinfos .userinfos-content .underlist{
      padding:30px;
      overflow: hidden;
    }

    .combox .userinfos .userinfos-content .underlist .listboxes{
      height:40px;
      width:100%;
      line-height: 40px;

    }

    .combox .userinfos .userinfos-content .underlist .listboxes span{
      line-height: 40px;
      font-size: 14px;
      color: #2e2f33;
    }



    /*用户信息面板样式*/

    /*编辑用户信息面板样式*/
    .combox .edituserinfos{
      width:320px;
      height:100%;
	    box-shadow: -4px 0px 20px 0px rgba(0, 0, 0, 0.1);
      position: absolute;
      right:0;
      top:0;
      bottom: 0;
      margin: auto;
      background:white;
    }

    .combox .edituserinfos .userinfos-title{
      width:320px;
      height:49px;
      line-height: 49px;
      padding:0 20px;
      border-bottom: 1px solid #ededed;
    }

    .combox .edituserinfos .userinfos-title span{
      display: block;
      height:49px;
      line-height: 49px;
      font-size: 14px;
      color:#2e2f33;
    }

    .combox .edituserinfos .userinfos-content{
      height:calc(100% - 50px);
      width:100%;
    }

    .combox .edituserinfos .userinfos-content .underlist{
      padding:30px;
      overflow: hidden;
    }


    .combox .edituserinfos .userinfos-content .underlist .boxlist{
      overflow: hidden;
      width:100%;
    }

    .combox .edituserinfos .userinfos-content .underlist .boxlist .list-title{
      padding-right:20px;
      width:70px;
      line-height: 30px;
      color:#2e2f33;
    }
    .combox .edituserinfos .userinfos-content .underlist .boxlist .list-content{
      width:190px;
    }
    .combox .edituserinfos .userinfos-content .underlist .boxlist .list-content .list-content-img{
      margin-right:10px;
      text-align:center;
      padding:22px 42px 0px 52px;
    }
    .combox .edituserinfos .userinfos-content .underlist .boxlist .list-content .list-content-img img{
      width:44px;
      height:44px;
      border-radius:22px;
    }
    .combox .edituserinfos .userinfos-content .underlist .boxlist .list-content-upbtn{}
    .combox .edituserinfos .userinfos-content .underlist .boxlist .list-content-upbtn span{
      text-align:center;
      display:block;
    }


    .adduserwin{
      width: 444px;
      height: 510px;
      background-color: #ffffff;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      position: absolute;
      left:0;
      top:0;
      right:0;
      bottom:0;
      margin:auto;
    }

    .adduserwin .adduserwin-title{
      width: 444px;
      height: 50px;
      background-color: #ededed;
      border-radius: 4px 4px 0px 0px;
      line-height: 50px;
      padding:0 20px;
      font-size: 14px;
    }

    .adduserwin .adduserwin-title span{
      display: block;
      height: 50px;
      font-size: 16px;
      color:#5c5d66;
    }

    .adduserwin .adduserwin-content{
      width:444px;
      height: calc(100% - 50px);
      padding:70px 70px;
    }


    /*添加用户*/
    .adduserwin .adduserwin-content .boxlist{
      overflow: hidden;
      width:100%;
    }

    .adduserwin .adduserwin-content .boxlist .list-title{
      padding-right:20px;
      width:80px;
      line-height: 30px;
      color:#2e2f33;
    }
    .adduserwin .adduserwin-content .boxlist .list-content{
      width:220px;
    }
    .adduserwin .adduserwin-content .boxlist .list-content .list-content-img{
      margin-right:10px;
      text-align:center;
      padding:22px 42px 0px 52px;
    }
    .adduserwin .adduserwin-content .boxlist .list-content .list-content-img img{
      width:44px;
      height:44px;
      border-radius:22px;
    }
    .adduserwin .adduserwin-contentt .boxlist .list-content-upbtn{}
    .adduserwin .adduserwin-content .boxlist .list-content-upbtn span{
      text-align:center;
      display:block;
    }
    /*添加用户*/
    /*编辑用户信息面板样式*/


    /*添加任务窗口*/
    .combox .comboxtagsbox{
        width:340px;
        min-height:568px;
        height:100%;
        background:white;
        right:10px;
        top:12px;
        bottom: 0;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
        position: fixed;
    }


    .combox .comboxtagsbox .combox-tags-box-title{
        height:40px;
        font-size: 16px;
        color: #5c5d66;
        border-bottom: 1px solid #ededed;
        line-height: 40px;
        padding:0 10px;
    }

    .combox .comboxtagsbox .combox-tags-box-content{
        padding:10px;
        width:100%;
        height:calc(100% - 40px);
    }

    .combox .comboxtagsbox .combox-tags-box-content .tasktops{
      height:calc(100% - 200px);
    }

    .combox .comboxtagsbox .combox-tags-box-content .taskunders{
      height:200px;
    }

    .combox .comboxtagsbox .combox-tags-box-content .tasklist{
      width:100%;
      height:80px;
      padding:10px;
      box-shadow: 0px 2px 6px 0px 
		rgba(0, 0, 0, 0.04);
      border-radius: 4px;
      border: solid 1px #ededed;
      margin-bottom:10px;
    }

    .combox .comboxtagsbox .combox-tags-box-content .tasklist .tasklist-box{
      height: 60px;
    }
    .combox .comboxtagsbox .combox-tags-box-content .tasklist .tasklist-box .tasklist-box-top{
      height: 30px;
      line-height: 20px;
      font-size: 14px;
      color: #2e2f33;
    }
    .combox .comboxtagsbox .combox-tags-box-content .tasklist .tasklist-box .tasklist-box-under{
      height: 30px;
      line-height:20px;
      font-size: 14px;
      color: #6680ff;
    }
    .combox .comboxtagsbox .combox-tags-box-content .tasklist .tasklist-des{
      height: 60px;
      line-height: 60px;
    }

    .combox .comboxtagsbox .combox-tags-box-content div{
        padding:5px;
    }
    /*任务添加窗口*/

    .unshow{
      visibility: hidden;
      z-index: -1000;
    }

    .show{
      visibility: visible;
      z-index: 1000;
    }

    .ulhid{
      display:none;
    }

    .selectedclass{
      background:#f5f6ff;
      color:#6680ff;
    }

</style>


<style>
  .colorblue{
    background:#6680ff;
  }
</style>
