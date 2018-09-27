<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item href="/">
              <Icon type="ios-home-outline"></Icon><router-link to="/pages/company/schedusettings">排班设置</router-link>
          </Breadcrumb-item>
          <Breadcrumb-item>
              <Icon type="ios-pricetags-outline"></Icon>编辑排班
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
    </div>
    <div class="comcontent">
        <div class="inputbox">
            <div class="inputlinebox">
                <div class="input-title fl">
                    <div class="input-left-title"><span>考勤名称</span><span style="color:#ff6666;">*</span></div>
                    <div class="input-left-title"><span>上下班时间</span><span style="color:#ff6666;">*</span></div>
                    <div class="input-left-title"><span>工作日设置</span><span style="color:#ff6666;">*</span></div>
                    <div class="input-left-title"><span>上班类型</span><span style="color:#ff6666;">*</span></div>
                </div>
                <div class="input-content fr">
                    <div class="input-content-inputbox"><i-input v-model="scheduname" placeholder="请输入考勤名称..." style="width: 300px"></i-input></div>
                    <div class="input-content-inputbox">
                        <el-time-select
                            placeholder="上班时间"
                            @change="test"
                            v-model="schedustime"
                            size="small"
                            style="width:147.5px;"
                            :picker-options="{
                            start: '00:00',
                            step: '00:05',
                            end: '23:59'
                            }">
                        </el-time-select>
                        <el-time-select
                            placeholder="下班时间"
                            @change="test"
                            v-model="scheduetime"
                            size="small"
                            style="width:147.5px;"
                            :picker-options="{
                            start: '00:00',
                            step: '00:05',
                            end: '23:59',
                            //minTime:schedustime
                            }">
                        </el-time-select>
                    </div>
                    <div class="input-content-inputbox">
                        <el-date-picker size="small" @change="selecteddate" value-format="yyyy-MM-dd" :clearable="true" type="dates" v-model="scheduworkday" placeholder="选择一个或多个日期" style="width:300px"></el-date-picker>
                    </div>
                    <div class="input-content-inputbox">
                        <i-select @change="test" style="width:300px" v-model="schedutype">
                            <i-option :value="0">白班</i-option>
                            <i-option :value="1">晚班</i-option>
                        </i-select>
                    </div>
                </div>
            </div>
            <!---------------------------------------------------------------------------------->
            <div class="inputlinebox">
                <div class="input-title fl">
                    <div class="input-left-title"><span>考勤地址</span><span style="color:#ff6666;">*</span></div>
                </div>
                <div class="input-content fr">
                    <div class="input-content-inputbox"><el-button @click="addlocation" class="colorpar" type="text">选址地址(可添加多个地址)</el-button></div>
                    <div>
                        <div style="display:block; clear:both; background:red;" v-for="(item,index) in mapdata" :key="index">
                            <div class="fl">
                                <div><span>{{item.address}}</span><span style="color:gray; margin-left:20px;"><el-button type="text" @click="clearaddress(index)" style="color:#cccccc;"><i class="iconfont icon-lajitong"></i></el-button></span></div>
                                <div><span style="color:#999999;">考勤范围：{{item.scope}}米</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!---------------------------------------------------------------------------------->
            <div class="inputlinebox">
                <div class="input-title fl">
                    <div class="input-left-title"><span>考勤对象</span><span style="color:#ff6666;">*</span></div>
                </div>
                <div class="input-content fr">
                    <div class="input-content-inputbox"><el-button class="colorpar" @click="adduseres" type="text">{{scheduserids==''?'编辑考勤用户':'已选择,点击可重新选择'}}</el-button></div>
                </div>
            </div>
            <!---------------------------------------------------------------------------------->
            <div class="inputlinebox">
                <div class="input-title fl">
                    <div class="input-left-title"><span>是否多次打卡</span><span style="color:#ff6666;">*</span></div>
                </div>
                <div class="input-content fr">
                    <div class="input-content-inputbox">
                        <i-switch @on-change="test" v-model="schedumulti">
                            <span style="color:#FFFFFF;" slot="open"><i slot="open" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-right"></i></span>
                            <span style="color:#FFFFFF;" slot="close"><i slot="close" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-error"></i></span>
                        </i-switch>
                    </div>
                </div>
            </div>
            <!---------------------------------------------------------------------------------->
            <div class="inputlinebox" style="padding-top:30px;">
                <div class="input-title fl"></div>
                <div class="input-content fr">
                    <div class="input-content-inputbox"><el-button @click="savescheduinformations" type="primary" size="medium" style="width:300px;">提 交</el-button></div>
                </div>
            </div>
        </div>
    </div>

    <div class="mapselectbox unshow">
        <div class="map-title"><span class="fl" style="text-indent:10px; padding-top:3px;">考勤地址</span><span @click="coloselocationwin" style="padding-right:10px; padding-top:5px;" class="posor fr"><img src="../../assets/delete.png" /></span></div>
        <div class="map-content">
            <iframe class="posor" style="width:100%; height:100%; border:none;" id="mapbox" src="https://m.amap.com/picker/?keywords=写字楼,小区,学校&zoom=15&center=116.470098,39.992838&radius=1000&total=20&key=1b443fa122dc68aa86c0c941620d5bd4"></iframe>
        </div>
        <div class="map-under">
            <span class="fl">考勤范围
                <i-select  style="width:200px" v-model="mapscope">
                    <i-option :value="500">500米</i-option>
                    <i-option :value="400">400米</i-option>
                    <i-option :value="300">300米</i-option>
                    <i-option :value="200">200米</i-option>
                    <i-option :value="100">100米</i-option>
                    <i-option :value="50">50米</i-option>
                </i-select>
            </span>
            <span class="fr">
                <el-button v-show="false" size="small" style="width:80px; color:#5c5d66;">复位</el-button>
                <el-button @click="selectedaddress" class="backgroundpar" size="small" type="primary" style="width:80px;">确定</el-button>
            </span>
        </div>
    </div>

    <div class="userselectbox unshow">
        <div class="user-title"><span class="fl" style="text-indent:10px; padding-top:3px;">考勤对象</span><span @click="colosusereswin" style="padding-right:10px; padding-top:5px;" class="posor fr"><img src="../../assets/delete.png" /></span></div>
        <div class="user-content">
            <div class="user-content-titlebox">考勤对象</div>
            <div class="user-content-selectbox">
                <i-select style="width:100%" @on-change="depselect" v-model="depid">
                    <i-option :value="0">全部</i-option>
                    <i-option v-for="item in deplist" :key="item.id" :value="Number(item.id)">{{item.name}}</i-option>
                </i-select>
            </div>
            <div class="user-content-useresbox">
                <el-scrollbar style="height:100%;">
                    <div class="usereslist posor fl" @click="selecteduseres(item.id)" v-for="item in alluserlist" :key="item.id">
                        <div :class="item.ischecked?'hasborder':'noborder'"><img :src="item.img==''?userImg:rootUrl+item.img|srctransformation" /></div>
                        <div class="namebox">{{item.name.substr(0,3)}}</div>
                        <div v-show="item.ischecked" class="statusbox"><img src="../../assets/icon_zhengque.png" /></div>
                    </div>
                </el-scrollbar>
            </div>
        </div>
        <div class="user-under">
            <span class="fr">
                <el-button @click="clearall" size="small" style="width:80px; color:#5c5d66;">清空</el-button>
                <el-button @click="selectall" size="small" style="width:80px; color:#5c5d66;">全选</el-button>
                <el-button @click="saveselecteduseres" class="backgroundpar" size="small" type="primary" style="width:80px;">确定</el-button>
            </span>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    filters:{
        srctransformation:function(value){
            if(value.indexOf('http://thirdwx.qlogo.cn')!=-1){
                return value.replace(window.localStorage.api,"");
            }else{
                return value;
            }
        }
    },
    data(){
      let that = this;
      return{
        rootUrl:window.localStorage.api,
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
        userImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAADo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjR0dHW1tbb29ve3t7i4uLY2Njk5OQwtOK3AAAAI3RSTlMAC+BHIPXxdwjb7J1PFOTWx71ZArhs6dGUFqZwmJBcKahdt2kJJfYAAAJXSURBVFjDxdkJcqswDAZghTUQKNkTkjZN32/W+x/wtZlpaUIksIHpdwCNFyHbgjrE9u64SvYe3DA4rI47OyZzs+jtgJbDWzQjAxv75ILhnuyN7uDOFkTWWWeYcz9Ep9CfU09rC71Ya+rD+Yfetg51unjQ4F26Vm8BTQtxJdMltC1TYfkCGAjYhXx/gZGXd2Z8Ujw54tMxxgGMBfGT/V1igGV7rxcYZNHKZwx0edgQDwN59xuzhaAuskxlWV7K3/VdfZHCVepbJoZcN/FmFliF+i0Hz2pKrg9Wru5V4Pk/Awzl8fUdY/g9xB2/fqpNWMcd3WwsYcJtmbCKm1tAGyz1TA2WfQt4AqdUzxRgXW9b4urMWN5o92tbImgGzMCLPgO+jhnw9TNggPGmjIAoBYZvSiNlkkZOG4HNfMdiYkt8pvSLn558FKzAYIuDaEUJGFz5kiW0B4MrsLI9eWBwR4DMI3Sri6o5pLqQi3FRiFF5ZGFUezpAVpfFL2UNWSIndpln6kHH3qz4T69JmEZ39iyE4lAoVg6Oz5evXAkqvnylfDyTiClRoDdfuW4H7CGlOtXcIRWxEzaYdMQd9KqHmjno6SquoFbuXLnLEpPRnaeVzV3nMrOA1oa7cCqzgGf2Sqx6Ya/E5I8T0GeeFRpryD0raG2Q2PljHq7lp1lZ5HmVPVNVeV60S+J22scjfWCgj4kf4MNbBNM2MYa3WaZtBDWcBAYSh1ixSTMtFtt9R2g6zkkW6TUkI+rkbNHb1pm0qTu87TxlY3x46/7vfy7c//5wAXef9Pn98R+pP67D9VcSWgAAAABJRU5ErkJggg==',
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        editid:this.$route.params.id,//传过来需要编辑的id
        deplist:[],//部门列表
        depid:0,//部门id，已经选择了的
        alluserlist:[],//所有用户
        userlist:[],//用户，可能只是某个部门
        selecteduserlist:[],//已选择用户
        //--提交需求字段-------------------------------------
        scheduname:'',//考勤名称
        schedustime:'',//上班时间
        scheduetime:'',//下班时间
        schedutype:0,//打卡类型、白班、夜班 
        mapscope:100,//考勤范围
        mapaddress:'选择地址',//考勤地址
        maplong:'',//经度
        maplat:'',//纬度
        mapdata:[],//地址对象，json字符串类型
        scheduserids:'',//考勤用户的id，分号分割
        scheduworkday:Date([]),//工作日，一般从多少号到多少号
        scheduworkdaystring:'',//传到服务器使用这个参数
        schedudepid:'',//部门id，选全员是不传
        schedumulti:'1',//是否需要多个次考勤，是传1，不是传0,因设计图没有，故默认可以多次
        //--提交需求字段-------------------------------------
      }
    },
    methods:{
        //清除已选地址项
        clearaddress(index){
            console.log(index);
            this.mapdata.splice(index,1);//选中了谁，就清除谁
        },
        //根据id号获取到数据
        getscheduwhereid(){
            let url = window.localStorage .api+'/get/info/check/work?id='+this.editid;
            this.$http.get(url).then(res=>{
                console.log(res);
                if(res['data'].success){
                    //--提交需求字段-------------------------------------
                    this.scheduname=res['data'].message.name;//考勤名称
                    this.schedustime=res['data'].message.start_time;//上班时间
                    this.scheduetime=res['data'].message.end_time;//下班时间
                    this.schedutype=res['data'].message.type;//打卡类型、白班、夜班 
                    for(let i = 0; i < res['data'].message.check_work_site.length; i++){//地址对象，json字符串类型
                        this.mapdata.push({'scope': res['data'].message.check_work_site[i].scope,'address': res['data'].message.check_work_site[i].address,'lon': res['data'].message.check_work_site[i].lon,'lat': res['data'].message.check_work_site[i].lat});
                    }
                    //************************************************************** */
                    let str ='';
                    for (let i = 0; i < res['data'].message.set_workday.length; i++){
                        let item = res['data'].message.set_workday;
                        str += ';'+item[i].workday_msg;
                    }
                    this.scheduworkday=str.substr(1).split(';');//工作日，一般从多少号到多少号
                    this.scheduworkdaystring = str.substr(1);
                    //************************************************************** */
                    this.schedudepid=res['data'].message.department_id;//部门id，选全员是不传
                    this.schedumulti=res['data'].message.multi_clock==1?true:false;//是否需要多个次考勤，是传1，不是传0,因设计图没有，故默认可以多次

                    //--提交需求字段-------------------------------------
                    //==================================================================
                    for (let i = 0; i < this.alluserlist.length; i++) {
                        for (let j = 0; j < res['data'].message.set_users.length; j++) {
                            if(this.alluserlist[i].id==res['data'].message.set_users[j]){
                                this.alluserlist[i].ischecked = true;
                            }
                        }
                    }
                    //this.selecteduserlist =[];
                    for (let i = 0; i < this.alluserlist.length; i++) {
                        if(this.alluserlist[i].ischecked){
                            this.selecteduserlist.push({'id':this.alluserlist[i].id,'name':this.alluserlist[i].name,'img':this.alluserlist[i].img});
                        }
                    }
                    //==================================================================
                    let strr='';
                    for (let i = 0; i < this.selecteduserlist.length; i++) {
                        strr += ";"+this.selecteduserlist[i].id;
                        console.log(this.selecteduserlist[i].id);
                    }
                    this.scheduserids = strr.substr(1);
                }else{
                    console.log('没有成功获取到数据，请重试');
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        test(){
            console.log(this.schedumulti+"是否允许多选");
            console.log(this.schedutype+"白班或晚班");
        },
        //更新考勤信息
        savescheduinformations(){
            //检测数据
            if(this.scheduname==""||this.scheduname==null||this.scheduname==undefined){
                this.success('考勤名称不能为空！');
                return;
            }
            if(this.schedustime==""||this.schedustime==null||this.schedustime==undefined){
                this.success('上班时间不能为空！');
                return;
            }
            if(this.scheduetime==""||this.scheduetime==null||this.scheduetime==undefined){
                this.success('下班时间不能为空！');
                return;
            }
            if(this.mapdata==""||this.mapdata==null||this.mapdata==undefined){
                this.success('考勤地址不能为空！');
                return;
            }
            if(this.scheduworkday==""||this.scheduworkday==null||this.scheduworkday==undefined){
                this.success('工作日不能为空！');
                return;
            }
            if(this.scheduserids==""||this.scheduserids==null||this.scheduserids==undefined){
                this.success('用户不能为空！请选择');
                return;
            }

            //提交数据更新
            let url = window.localStorage.api+"/check/saveCheckWork";
            let params = new URLSearchParams();
            params.append('name',this.scheduname);//考勤名称
            params.append('start_time',this.schedustime);//上班时间	
            params.append('end_time',this.scheduetime);//下班时间	
            params.append('type',this.schedutype);//打卡类型，0.白班；1，夜班
            params.append('scope',"");//打卡有效范围
            params.append('address',"");//考勤打卡地址
            params.append('lon',"");//经度
            params.append('lat',"");//纬度
            params.append('data',JSON.stringify(this.mapdata));//下面包括scope，address，lon，lat|||||这里要转换为json字符串
            params.append('user_ids',this.scheduserids);//用户id，用分号隔开
            params.append('rest_time',this.scheduworkdaystring);//工作日,用分号隔开
            params.append('id',this.editid);
            params.append('department_id',this.schedudepid==''?'':this.schedudepid);//部门id，选全员是不传
            params.append('multi_clock',this.schedumulti==true?1:0);//是否需要多个次考勤，是传1，不是传0

            this.$http.post(url,params).then(res=>{
                console.log(res);
                if (res['data'].success){
                    this.success(res['data'].message);
                    //清空数据
                    this.scheduname='';
                    this.schedustime='';
                    this.scheduetime='';
                    this.mapdata=[];
                    this.schedudepid='';
                    this.schedumulti=false;
                    this.scheduserids='';
                    this.scheduworkday=[];

                    //跳转到
                    this.$router.push({path:'/pages/company/schedusettings'});


                }else{
                    this.success(res['data'].message);
                }
            }).catch(err=>{
                console.log(err);
            })

        },
        //选择日期
        selecteddate(){
            let arr = String(this.scheduworkday).split(',');
            let str;
            for (let i = 0; i < arr.length; i++) {
                str += ";"+arr[i];
            }
            this.scheduworkdaystring = str.replace('undefined;','');
            console.log(this.scheduworkdaystring);
            console.log(String(this.scheduworkday));
        },
        //选中确定的用户
        saveselecteduseres(){
            let str='';
            for (let i = 0; i < this.selecteduserlist.length; i++) {
                str += ";"+this.selecteduserlist[i].id;
            }
            this.scheduserids = str.substr(1);
            console.log(this.scheduserids);
            this.colosusereswin();
        },
        //选中地址
        selectedaddress(){
            if(window.localStorage.mapaddress==""){
                console.log('请选择一个地址');
                return;
            }
            //高德地图
            // this.mapaddress=window.localStorage.mapaddress;//考勤地址
            // this.maplong=window.localStorage.maplong;//经度
            // this.maplat=window.localStorage.maplat;//纬度
            this.mapdata.push({'scope':this.mapscope,'address':window.localStorage.mapaddress,'lon':window.localStorage.maplong,'lat':window.localStorage.maplat});
            console.log(this.mapdata);

            window.localStorage['mapaddress'] = "";
            window.localStorage['maplong'] = "";
            window.localStorage['maplat'] = "";
            
            this.coloselocationwin();
        },
        //选中或者不选
        selecteduseres(_id){
            for (let i = 0; i < this.alluserlist.length; i++) {
                //处理固定的
                if(this.alluserlist[i].id==_id){
                    if(this.alluserlist[i].ischecked){
                        this.alluserlist[i].ischecked = false;
                    }else{
                        this.alluserlist[i].ischecked = true;
                    }
                }
            }
            //this.selecteduserlist.splice(_index,1);//选中了谁，就清除谁
             //处理选中的
            this.selecteduserlist =[];
            for (let i = 0; i < this.alluserlist.length; i++) {
                if(this.alluserlist[i].ischecked){
                    this.selecteduserlist.push({'id':this.alluserlist[i].id,'name':this.alluserlist[i].name,'img':this.alluserlist[i].img});
                }
            }
            console.log(this.selecteduserlist);
        },
        //全选
        selectall(){
            this.selecteduserlist = this.alluserlist;
            for (let i = 0; i < this.alluserlist.length; i++) {
                this.alluserlist[i].ischecked = true;
            }
            console.log(this.selecteduserlist);
            console.log(this.alluserlist);
        },
        //清空
        clearall(){
            this.selecteduserlist = [];
            for (let i = 0; i < this.alluserlist.length; i++) {
                this.alluserlist[i].ischecked = false;
            }
            console.log(this.selecteduserlist);
            console.log(this.alluserlist);
        },
        //部门列表改变
        depselect(){
            this.schedudepid = this.depid;
            let sta = this.depid==Number(0)||this.depid==''||this.depid==null||this.depid==undefined;
            let params = sta?'/get/department/listuser':'/get/department/listuser?depart_id='+this.depid;
            let url = window.localStorage.api+params;
            console.log(params);
            console.log(url);
            this.$http.get(url).then(res=>{
                let item = res['data'].message;
                this.userlist = [];
                this.selecteduserlist=[];//每次变更需要清空他
                for (let i = 0; i < item.length; i++) {
                    this.userlist.push({'id':item[i].id,'name':item[i].name,'img':item[i].user_img});
                }
                for (let i = 0; i < this.alluserlist.length; i++) {//将所有的选中状态设置为未选中，
                    this.alluserlist[i].ischecked = false;   
                }
                for (let i = 0; i < this.alluserlist.length; i++) {//循环所有的人员
                    for (let j = 0; j < this.userlist.length; j++) {//循环部门的人，
                        if(this.alluserlist[i].id==this.userlist[j].id){//如果部门的人存在于所有人中，设置选中
                            this.alluserlist[i].ischecked = true;
                            //将选中的人放入选中当中
                            this.selecteduserlist.push({'id':this.alluserlist[i].id,'name':this.alluserlist[i].name,'img':this.alluserlist[i].img});
                        }
                    }
                }
                console.log(this.userlist);
                console.log(this.selecteduserlist);
                console.log(this.alluserlist);
            }).catch(err=>{
                console.log(err);
            })
        },
        getalluserlist(){//获取到所有的用户
            let url = window.localStorage.api+'/get/department/listuser';
            this.$http.get(url).then(url).then(res=>{
                let item = res['data'].message;
                for (let i = 0; i < item.length; i++) {
                    this.alluserlist.push({'id':item[i].id,'name':item[i].name,'img':item[i].user_img,'ischecked':false});
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        //获取部门列表
        getdeplist(){
            let url = window.localStorage.api+'/get/user/department';
            this.$http.get(url).then(res=>{
            //console.log(res);
            this.deplist = res['data'].message;
            }).catch(err=>{
            //console.log(err);
            })
        },
        addlocation(){//选择地理位置
            $('.mapselectbox').addClass('show animated fadeInRight');
        },
        coloselocationwin(){//关闭选择地理位置窗口
            $('.mapselectbox').removeClass('show animated fadeInRight');
        },
        adduseres(){//选择用户窗口
            $('.userselectbox').addClass('show animated fadeInRight');
        },
        colosusereswin(){//关闭选择用户窗口
            $('.userselectbox').removeClass('show animated fadeInRight');
        },
        //页面提示信息
        success(_str) {
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
      //获取部门列表
      this.getdeplist();
      //现获取所有用户
      this.getalluserlist();
      //获取所有用户并处理是否选中状态
      //this.depselect();//第一次运行，默认是获取所有用户

      //编辑时获取考勤排班详情
      this.getscheduwhereid();


      //高德地图
      (function(){
        let iframe = document.getElementById('mapbox').contentWindow;
        document.getElementById('mapbox').onload = function(){
        iframe.postMessage('hello','https://m.amap.com/picker/');
        };
        window.addEventListener("message", function(e){
            //console.log('您选择了:' + e.data.name + ',' + e.data.location);
            let str = e.data.location;
            let arr = str.split(',');
            //console.log(arr);
            window.localStorage['mapaddress'] = e.data.name;
            window.localStorage['maplong'] = arr[0];
            window.localStorage['maplat'] = arr[1];
        }.bind(this), false);
      }())
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
    padding:50px;
    overflow: hidden;
    min-height:885px;
  }

  .combox .comcontent .inputbox{
    width:482px;
    overflow: hidden;
  }

  .combox .comcontent .inputbox .inputlinebox{
      display: block;
      width:100%;
      overflow: hidden;
  }
  .combox .comcontent .inputbox .inputlinebox .input-title{
      width:102px;
  }

  .combox .comcontent .inputbox .inputlinebox .input-title .input-left-title{
      height:50px;
      line-height:50px;
      width:100%;
      color: #2e2f33;
      font-size: 14px;
  }
  .combox .comcontent .inputbox .inputlinebox .input-title .input-left-title span{
      display: block;
      height:50px;
      line-height: 50px;
      float: left;
  }

  .combox .comcontent .inputbox .input-content{
      width:calc(100% - 102px);
  }
  .combox .comcontent .inputbox .input-content .input-content-inputbox{
      display:block;
      height:50px;
      line-height:50px;
      width:100%;
      color: #2e2f33;
      font-size: 14px;
   }

   .combox .mapselectbox{
        width:40%;
        box-shadow: -4px 0px 20px 0px rgba(0, 0, 0, 0.1);
        position: fixed;
        right:0;
        top:12px;
        bottom: 0;
        margin: auto;
        background:white;
   }
   .combox .mapselectbox .map-title{
       height:50px;
       padding:10px;
       border-bottom:1px solid #ededed;
   }

   .combox .mapselectbox .map-title span{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #2e2f33;
   }
   .combox .mapselectbox .map-content{
       height:calc(100% - 140px);
   }
   .combox .mapselectbox .map-under{
       height:90px;
       box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.04);
       padding:30px;
   }
   .combox .mapselectbox .map-under span{
       color: #2e2f33;
       font-size: 14px;
   }


   .combox .userselectbox{
      width:340px;
	  box-shadow: -4px 0px 20px 0px rgba(0, 0, 0, 0.1);
      position: fixed;
      right:0;
      top:12px;
      bottom: 0;
      margin: auto;
      background:white;
   }

   .combox .userselectbox .user-title{
       height:50px;
       padding:10px;
       border-bottom:1px solid #ededed;
   }

   .combox .userselectbox .user-title span{
        font-size: 16px;
        color: #2e2f33;
   }
   .combox .userselectbox .user-content{
       height:calc(100% - 140px);
       padding:30px;
   }

   .combox .userselectbox .user-content .user-content-titlebox{
       height:40px;
       line-height: 40px;
       color:#2e2f33;
       font-size:14px;
   }
   .combox .userselectbox .user-content .user-content-selectbox{
       height: 40px;
       line-height: 40px;
   }
   .combox .userselectbox .user-content .user-content-useresbox{
       height:calc(100% - 80px);
       padding:20px;
   }
    /*用户头像样式开始*/
    .combox .userselectbox .user-content .user-content-useresbox .usereslist{
        width:47px;
        height:70px;
        padding:5px;
        position: relative;
    }

    .combox .userselectbox .user-content .user-content-useresbox .usereslist .hasborder{
        width:33px;
        height:33px;
        border-radius: 16.5px;
        text-align: center;
        line-height: 33px;
        border:2px solid #6680ff;
        position: relative;
    }
    .combox .userselectbox .user-content .user-content-useresbox .usereslist .noborder{
        width:33px;
        height:33px;
        border-radius: 16.5px;
        text-align: center;
        line-height: 33px;
        border:2px solid #ffffff;
        position: relative;
    }

    .combox .userselectbox .user-content .user-content-useresbox .usereslist .hasborder  img{
        width:29px;
        height:29px;
        text-align: center;
        line-height: 29px;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin: auto;
        border-radius:14.5px;
    }

    .combox .userselectbox .user-content .user-content-useresbox .usereslist .noborder  img{
        width:29px;
        height:29px;
        text-align: center;
        line-height: 29px;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin: auto;
        border-radius:14.5px;
    }
    
    .combox .userselectbox .user-content .user-content-useresbox .usereslist .namebox{
        height:23px;
        line-height: 23px;
        text-align: center;
    }
    .combox .userselectbox .user-content .user-content-useresbox .usereslist .statusbox{
        width:15px;
        height:15px;
        text-align: center;
        line-height: 15px;
        color:white;
        border-radius: 7.5px;
        position: absolute;
        right:5px;
        top: 5px;
    }


    /*用户头像样式结束*/
   
   .combox .userselectbox .user-under{
       height:90px;
       box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.04);
       padding:30px;
   }
   .combox .userselectbox .user-under span{
       color: #2e2f33;
       font-size: 14px;
   }

    .unshow{
      visibility: hidden;
      z-index:-1000;
    }

    .show{
      visibility: visible;
      z-index:1000;
    }

</style>
<style>
.ivu-date-picker-cells-cell-range:before{
    background:#2d8cf0;
    color:white;
}

</style>

