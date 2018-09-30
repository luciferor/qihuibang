<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
            <Breadcrumb>
                <Breadcrumb-item href="/components/breadcrumb">
                    <Icon type="ios-pricetags-outline"></Icon><el-button @click="returennext" style="color:gray;" type="text">组织架构</el-button>
                </Breadcrumb-item>
                <Breadcrumb-item>
                    <Icon type="ios-pricetags-outline"></Icon>岗位管理
                </Breadcrumb-item>
            </Breadcrumb>
        </span>
        <span class="fr">
            <i-button type="primary" @click="adduserwins" icon="ios-add" class="colorblue fr"  style="margin-top:15px; margin-right:20px;">添加用户</i-button>
            <i-button type="primary" @click="adddepartments" icon="ios-add" class="colorblue fr"  style="margin-top:15px; margin-right:20px;">添加岗位</i-button>
        </span>
    </div>
    <div class="comcontent">
      <ul class="menuses">
        <li v-for="item in joblist" :key="item.id">
          <div :id="item.id">
            <span @click="showhidden(item.id)" class="posor fl"><img class="posor" :id="'img'+item.id" src="../../assets/right.png" style="padding-top:15px; padding-right:10px;" /><i-input @on-blur="saveedit(item.id,item.name)" v-show="item.id==isid?true:false" v-model="item.name" placeholder="请输入..." style="width:200px;"></i-input><label class="posor" v-show="item.id==isid?false:true">{{item.name}}</label><el-button @click="deletedep(item.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(item.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
          </div>
          <ul class="undis">
            <li v-for="i in item.userList" :key="i.id">
              <span style="width:50px;" class="fl"><img :src="i.user_img==''?userImg:rootUrl+i.user_img|srctransformation" width="40" height="40" /></span>
              <span style="width:60px;" class="fl">{{i.name}}</span>
              <span class="fl">{{i.mobile_phone}}</span>
              <span class="fr"><el-button @click="deleteuser(i.id)" style="color:#8a8c99;" type="text">删除</el-button></span>
            </li>
          </ul>
        </li>
      </ul>
    </div>


    <!--新增岗位-->
    <div class="adddepclassbox unshow">
      <div class="adddepclassbox-title"><span class="fl">添加岗位</span><span @click="closeaddpostwins" class="posor fr"><img src="../../assets/delete.png" /></span></div>
      <div class="adddepclassbox-content">
          <div class="line10"></div>
          <!--列表开始-->
          
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">部门</div>
            <div class="list-content fl">
                <i-select v-model="addpostlist.pid">
                    <i-option v-for="item in addpostlist.deplist" :key="item.id" :value="item.id">{{item.name}}</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">岗位名称</div>
            <div class="list-content fl">
                <i-input v-model="addpostlist.postname" placeholder="请输入部门名称..." style="width:100%;"></i-input>
            </div>
          </div>
          <!--列表结束-->          
          <div class="line10"></div>

          <!--列表结束-->
          <div class="linecenter"></div>
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <i-button @click="addpostaction" style="background:#6680ff; color:white; float:right;">确认添加</i-button>
          </div>
      </div>
    </div>
    <!--新增岗位结束-->

    <!--新增用户-->
    <!--添加用户窗口-->
    <div class="adduserwin unshow">
      <div class="adduserwin-title"><span class="fl">添加成员</span><span class="posor fr" @click="closeadduserwins"><img src="../../assets/delete.png" /></span></div>
      <div class="adduserwin-content">
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">姓名</div>
            <div class="list-content fl">
                <i-input placeholder="请输入姓名..." style="width:100%;" v-model="adduserlist.username"></i-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">电话</div>
            <div class="list-content fl">
                <i-input :maxlength="11" placeholder="请输入手机号..." style="width:100%;" v-model="adduserlist.usercall"></i-input>
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
                <i-input placeholder="请输入姓名..." style="width:100%;" v-model="userinfoes.area"></i-input>
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
  <!--新增用户结束-->

    <Modal
        width="300"
        v-model="modalo"
        class-name="vertical-center-modal">
        <p slot="header" style="color:#000;text-align:left">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>您确认要删除该用户吗！</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer" style="text-align:center;">
            <i-button type="ghost"   style="width:80px; color:#6680ff;" @click="cancel" class="colorpar">取 消</i-button>
            <i-button type="primary" style="width:80px;"  @click="ok" class="backgroundpar">确 定</i-button>
        </div>
    </Modal>

    <Modal
        width="300"
        v-model="modalmsg"
        class-name="vertical-center-modal">
        <p slot="header" style="color:#000;text-align:left">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>您确认要删除该岗位吗！</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer" style="text-align:center;">
            <i-button type="ghost" style="width:80px; color:#6680ff;"  @click="cancel2" class="colorpar">取 消</i-button>
            <i-button type="primary" style="width:80px;"  @click="ok2" class="backgroundpar">确 定</i-button>
        </div>
    </Modal>

  </div>
</template>

<script>
  export default {
    filters:{
      srctransformation:function(value){
          //console.log('-------------------------------------');
          if(value.indexOf('http://thirdwx.qlogo.cn')!=-1){
            return value.replace(window.localStorage.api,"");
          }else{
            return value;
          }
          //console.log('------------------------------------');
      }
    },
    data(){
      return{
        rootUrl:window.localStorage.api,
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
        userImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAADo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjR0dHW1tbb29ve3t7i4uLY2Njk5OQwtOK3AAAAI3RSTlMAC+BHIPXxdwjb7J1PFOTWx71ZArhs6dGUFqZwmJBcKahdt2kJJfYAAAJXSURBVFjDxdkJcqswDAZghTUQKNkTkjZN32/W+x/wtZlpaUIksIHpdwCNFyHbgjrE9u64SvYe3DA4rI47OyZzs+jtgJbDWzQjAxv75ILhnuyN7uDOFkTWWWeYcz9Ep9CfU09rC71Ya+rD+Yfetg51unjQ4F26Vm8BTQtxJdMltC1TYfkCGAjYhXx/gZGXd2Z8Ujw54tMxxgGMBfGT/V1igGV7rxcYZNHKZwx0edgQDwN59xuzhaAuskxlWV7K3/VdfZHCVepbJoZcN/FmFliF+i0Hz2pKrg9Wru5V4Pk/Awzl8fUdY/g9xB2/fqpNWMcd3WwsYcJtmbCKm1tAGyz1TA2WfQt4AqdUzxRgXW9b4urMWN5o92tbImgGzMCLPgO+jhnw9TNggPGmjIAoBYZvSiNlkkZOG4HNfMdiYkt8pvSLn558FKzAYIuDaEUJGFz5kiW0B4MrsLI9eWBwR4DMI3Sri6o5pLqQi3FRiFF5ZGFUezpAVpfFL2UNWSIndpln6kHH3qz4T69JmEZ39iyE4lAoVg6Oz5evXAkqvnylfDyTiClRoDdfuW4H7CGlOtXcIRWxEzaYdMQd9KqHmjno6SquoFbuXLnLEpPRnaeVzV3nMrOA1oa7cCqzgGf2Sqx6Ya/E5I8T0GeeFRpryD0raG2Q2PljHq7lp1lZ5HmVPVNVeV60S+J22scjfWCgj4kf4MNbBNM2MYa3WaZtBDWcBAYSh1ixSTMtFtt9R2g6zkkW6TUkI+rkbNHb1pm0qTu87TxlY3x46/7vfy7c//5wAXef9Pn98R+pP67D9VcSWgAAAABJRU5ErkJggg==',
        joblist:[],//岗位和岗位下面的用户
        modalo:false,//模态删除提示框属性
        modalmsg:false,
        delid:0,
        userid:0,//用户id，用于保存需要删除和操作的用户标识
        adduserlist:{
          username:'',
          usercall:'',
          udepid:0,
          uldepid:0,
          isadmin:1,
          deplist:[],
          ldeplist:[]
        },
        addpostlist:{
          postname:'',//岗位名称
          pid:0,//部门id
          deplist:[]//部门列表，用来选择使用
        },
        isid:0,//当前选中的id
      }
    },
    methods:{
      showhidden(_id){
        $('#'+_id).siblings().slideToggle('fast',function(){
          if ($('#'+_id).siblings().css("display")!="none"){
            $('#img'+_id).attr({src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTE1VDEyOjI4OjUyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0xNVQxMjo1NjozNSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wOS0xNVQxMjo1NjozNSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MWYyZjBiMi1lY2VkLTdjNDgtYmEyNy0wMjY5YmE5NjRlZmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzFmMmYwYjItZWNlZC03YzQ4LWJhMjctMDI2OWJhOTY0ZWZiIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzFmMmYwYjItZWNlZC03YzQ4LWJhMjctMDI2OWJhOTY0ZWZiIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MWYyZjBiMi1lY2VkLTdjNDgtYmEyNy0wMjY5YmE5NjRlZmIiIHN0RXZ0OndoZW49IjIwMTgtMDktMTVUMTI6Mjg6NTIrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6eE95dAAAAjElEQVQokY3NQQ7BQBSA4a+jp3EIC5fAVZBIiI24gD214QgsHUAs3KWiNiOZNC2d5bz3/S/bbHcwxFW3N8ANr4A5Llh3gON4pEAIeKLE9E9ghD16eOCd4xSHRQzArAEeIlxgCXkc/go0whR/AxWOSeDeBusYzpgkgQpZE4RQ/0gC5S/YdLke6GPVsuMDFeMknKAeIqcAAAAASUVORK5CYII='});
          }else{
            $('#img'+_id).attr({src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAPCAYAAAA2yOUNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTE1VDEyOjI4OjUyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0xNVQxMjo1NTo1NyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wOS0xNVQxMjo1NTo1NyswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMDY1ZDMyMS1iMDA5LTkyNDItOWFiOC02NTNiZTRhNDQ0MTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTA2NWQzMjEtYjAwOS05MjQyLTlhYjgtNjUzYmU0YTQ0NDE2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTA2NWQzMjEtYjAwOS05MjQyLTlhYjgtNjUzYmU0YTQ0NDE2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMDY1ZDMyMS1iMDA5LTkyNDItOWFiOC02NTNiZTRhNDQ0MTYiIHN0RXZ0OndoZW49IjIwMTgtMDktMTVUMTI6Mjg6NTIrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6CgICOAAAAk0lEQVQokXXQzQ0BYRAG4GexzSjCQQsk1IJEYhMH0YC7nwtKcFSAOOiF4ODbZLNm5zLJ5Mk7k8lW6w3M8MBRUB30UeCZZn+whQuWyLHHMEqCaeqTBD84VZNUYJl4wCBCjbCOQhghuKW7cnQjNMIOGeYo6qgE7QQW9ZtCUEXjJlCiHrZNgN/HrzjjHoESvdK6dwTgC/tfIs2okvCUAAAAAElFTkSuQmCC'});
          }

        });
      },
      //返回上一页
      returennext(){
        this.$router.push({path:'/pages/company/organizationsettings'});
      },
      //获取岗位和用户列表
      getjobusers(){
        let url = window.localStorage.api+'/organization/getPostAndUser';
        this.$http.get(url).then(res=>{
          //console.log(res);
          this.joblist=res['data'].message;
        }).catch(err=>{
          //console.log(err);
        })
      },
      deleteuser(_id){
        this.modalo = true;
        this.userid = _id;
      },
      ok() {
        //根据用户id执行删除
        let url = window.localStorage.api+'/deleteOrganization';
        let params = new URLSearchParams();
        params.append('type','user');
        params.append('id',this.userid);
        this.$http.post(url,params).then(res=>{
          //console.log(res);
          if(res['data'].success){
            //如果重新加载数据
            this.success(res['data'].message);
            this.getjobusers();
          }else{
            this.error('删除失败'+res['data'].message);
          }
          this.modalo = false;
        }).catch(err=>{
          //console.log(err);
        })
      },
      cancel(){
        //取消不执行操作
        this.modalo = false;
      },
      adduserwins(){      
        $('.adduserwin').addClass('show animated fadeIn');
      },
      closeadduserwins(){
        $('.adduserwin').removeClass('show animated fadeIn');
      },
      //添加用户时获取岗位上级部门
      getorgdepinfos(){
        let url = window.localStorage.api+'/organization/getGroundDepartment?type=user';
        this.$http.get(url).then(res=>{
          this.adduserlist.deplist = res['data'].message;
        }).catch(err=>{
          //console.log(err);
        })
      },
      selectdepevent(){//根据部门查询岗位
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
      adduserinformations(){//添加用户
        
        //验证
        if(this.adduserlist.usercall==""||this.adduserlist.usercall==null||this.adduserlist.usercall==undefined){
          this.error('电话号码不能为空');
          return;
        }
        if(this.adduserlist.username==""||this.adduserlist.username==null||this.adduserlist.username==undefined){
          this.error('手机号不能为空');
          return;
        }
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
            this.getjobusers();//重新加载岗位和用户数据
          }else{
            this.error(res['data'].message);
          }
        }).catch(err=>{
          //console.log(err);
        })

      },
      getteams(_id){
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
      //添加岗位
      adddepartments(){
          console.log('添加岗位');
          $('.adddepclassbox').addClass('show animated fadeIn');
      },
      closeaddpostwins(){
          $('.adddepclassbox').removeClass('show animated fadeIn');
      },
      //获取岗位上级部门，添加时使用
      getpostdepinfos(){
        let url = window.localStorage.api+'/organization/getGroundDepartment?type=post';
        this.$http.get(url).then(res=>{
          //console.log(res);
          this.addpostlist.deplist = res['data'].message;
        }).catch(err=>{
          //console.log(err);
        })
      },
      //添加岗位
      addpostaction(){
        //验证数据
        if (this.addpostlist.pid==0){
          this.error('请选择部门');
          return;
        }
        if(this.addpostlist.postname==""||this.addpostlist.postname==null||this.addpostlist.postname==undefined){
          this.error('请填写岗位名称！');
          return;
        }
        let addurl = window.localStorage.api+'/admin/add/post';
        let params = new URLSearchParams();
        params.append('name',this.addpostlist.postname);
        params.append('department_id',this.addpostlist.pid);
        this.$http.post(addurl,params).then(res=>{
          //console.log(res);
          if(res['data'].success){
            this.success(res['data'].message);
            this.getjobusers();//重新加载岗位和用户数据
            //关闭窗口
            this.closeaddpostwins();
            this.addpostlist.postname="";
          }
        }).catch(err=>{
          //console.log(err);
        })
      },
      showandhidden(){
        //console.log("12311213231");
      },
      editdep(_id){//编辑岗位
        this.isid = _id;
      },
      deletedep(_id){//删除岗位
        this.modalmsg = true;
        this.delid = _id;
      },
      ok2(){
        let url = window.localStorage.api+"/deleteOrganization";
        let params = new URLSearchParams();
        params.append('type','post');
        params.append('id',this.delid);
        this.$http.post(url,params).then(res=>{
          if(res['data'].success){
            this.success(res['data'].message);
            //删除成功更新数据
            this.getjobusers();
          }else{
            this.error(res['data'].message);
          }
          this.modalmsg = false;
        }).catch(err=>{
          //console.log(err);
        })
      },
      cancel2(){
        this.modalmsg = false;
      },
      saveedit(_id,_name){//保存更改后的岗位名称
        let url = window.localStorage.api+"/admin/add/post";
        let params = new URLSearchParams();
        params.append('name',_name);
        params.append('id',_id);
        this.$http.post(url,params).then(res=>{
          if(res['data'].success){
            this.success(res['data'].message);
            this.isid = 0;
          }else{
            this.error(res['data'].message);
          }
        }).catch(err=>{
          //console.log(err);
        })
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
      //加载岗位和用户
      this.getjobusers();
      //加载添加用户时的部门
      this.getorgdepinfos();
      //加载添加岗位是时的部门
      this.getpostdepinfos();
    }
  }

  $(function(){
    // $('.menuses').on('click','li',function(){
    //   alert('OK');
    // })
    // $('.post').click(function(){
    //   console.log('点击');  
    //     if($(this).siblings("li").hasClass('on')){  
    //       $(this).siblings("li").slideUp(500).removeClass("on");  
    //     }else{  
    //       // 首先要清除其他li标签的on类名
    //       $(this).parent().siblings().children("li").removeClass("on");
    //       // on类名是随便起的，也可是active什么的都行
    //       $(this).siblings("li").slideDown(500).addClass("on").parent().siblings().children("li").slideUp(500); 
    //     }  
    // }); 
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
    border-bottom: 1px solid #ededed;
  }

  .combox .comcontent{
    background:#FFF;
    padding:50px;
    overflow: hidden;
    min-height:885px;
  }


  .combox .comcontent ul{
    overflow: hidden;
  }

  .combox .comcontent ul li{
    overflow: hidden;
  }

  .combox .comcontent ul li:hover{
    background:#f5f6ff;
  }

  .combox .comcontent ul li span{
    display: block;
    width:100%;
    height:50px;
    line-height: 50px;
    border-bottom: 1px solid #ededed;
    padding-left:10px;
    font-size: 14px;
    color: #2e2f33;
  }


  .combox .comcontent ul li ul{
    overflow: hidden;
    padding-left:20px;
    background:#fcfcfc;
  }

  .combox .comcontent ul li ul li{
    line-height: 50px;
    background:#fcfcfc;
    width:100%;
    border-bottom: 1px solid #ededed;
  }

  .combox .comcontent ul li ul li span{
    display:block;
    padding-top:5px;
    line-height: 40px;
    width:200px;
    border-bottom: none !important;
    text-align: center;
  }

  .combox .comcontent ul li ul li span img{
    border-radius:20px;
  }
  .combox .comcontent  .userlist-box{
    overflow: hidden;
  }

  .combox .comcontent  .userlist-box .userlist{
    overflow: hidden;
    cursor: pointer;
  }

  .combox .comcontent  .userlist-box .userlist .userlist-title{
    height:70px;
    width:100%;
    line-height: 70px;
    text-indent: 55px;
    background: white;
    border-bottom:1px solid rgb(230, 230, 230);
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
  }

    .combox .comcontent  .userlist-box .userlist .userlist-content{

    }

    .combox .comcontent  .userlist-box .userlist .userlist-content .userlist-content-list{
      text-indent: 52px;
      height: 80px;
      line-height: 80px;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #5c5d66;
      cursor: pointer;
    }

    /*****************************************/
    .adduserwin{
      width: 444px;
      height: 450px;
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

    /*添加岗位*/
    .combox .adddepclassbox{
      width: 444px;
      height: 360px;
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

    .combox .adddepclassbox .adddepclassbox-title{
      width: 444px;
      height: 50px;
      background-color: #ededed;
      border-radius: 4px 4px 0px 0px;
      line-height: 50px;
      padding:0 20px;
      font-size: 14px;
    }

    .combox .adddepclassbox .adddepclassbox-title span{
      display: block;
      height: 50px;
      font-size: 16px;
      color:#5c5d66;
    }

    .combox .adddepclassbox .adddepclassbox-content{
      width:444px;
      height: calc(100% - 50px);
      padding:70px 70px;
    }


    /*添加用户*/
    .combox .adddepclassbox .adddepclassbox-content .boxlist{
      overflow: hidden;
      width:100%;
    }

    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-title{
      padding-right:20px;
      width:80px;
      line-height: 30px;
      color:#2e2f33;
    }
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content{
      width:220px;
    }
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content .list-content-img{
      margin-right:10px;
      text-align:center;
      padding:22px 42px 0px 52px;
    }
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content .list-content-img img{
      width:44px;
      height:44px;
      border-radius:22px;
    }
    .combox .adddepclassbox .adddepclassbox-contentt .boxlist .list-content-upbtn{}
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content-upbtn span{
      text-align:center;
      display:block;
    }
    /*添加岗位*/

    .unshow{
      visibility: hidden;
      z-index: -1000;
    }

    .show{
      visibility: visible;
      z-index: 1000;
    }

    .undis{
      display: none;
    }

</style>
