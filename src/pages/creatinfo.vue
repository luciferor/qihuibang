<template>
  <div class="thebox">
    <!--loginbox start-->
    <div class="loginbox">
      <div class="login-select fl">
        <!--输入框 start-->
          <Tabs style="width:400; height:680px;" active-key="key1">
            <Tab-pane label="创建企业" key="key1">
                <el-scrollbar style="height:100%;">
                  <div style="height:620px; padding:10px;">

                    <div class="boxlist">
                      <div class="list-title fl">公司logo</div>
                      <div class="list-content fl">
                        <div class="list-content-img fl"><img :src="companylogo==''?rootImg:rootUrl+companylogo" /></div>
                        <div class="list-content-upbtn fl">
                          <span style="font-weight:bold; display:block;">上传公司logo</span>
                          <div style="height:10px"></div>
                          <span style="color:gray; display:block;">{{companylogo}}</span>
                          <div style="height:10px"></div>
                          <span style="display:block;">
                            <Upload ref="upload" :show-upload-list="false" :format="['jpg','jpeg','png']" :before-upload="logohandleBeforeUpload"  action="/" :on-format-error="handleFormatError" type="drag">
                                <i-button style="background:#6680ff; color:white; width:100%;" icon="ios-cloud-upload-outline">选择文件</i-button>
                            </Upload>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="line10"></div>
                    <!--列表开始-->
                    <div class="boxlist">
                      <div class="list-title fl">公司名称</div>
                      <div class="list-content fl">
                         <el-input size="small" placeholder="请输入公司名称..." style="width:100%;" v-model="companyname"></el-input>
                      </div>
                    </div>
                    <!--列表结束-->
                    <div class="line10"></div>
                    <!--列表开始-->
                    <div class="boxlist">
                      <div class="list-title fl">所在地</div>
                      <div class="list-content fl">
                          <span>
                            <i-select  style="width:33%" v-model="sheng" @on-change="choseProvince" placeholder="省级地区">
                                <i-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id"></i-option>
                            </i-select>
                          </span>
                          <span>
                            <i-select  style="width:32%" v-model="shi" @on-change="choseCity" placeholder="市级地区">
                                <i-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id"></i-option>
                            </i-select>
                          </span>
                          <span>
                            <i-select  style="width:32%" @on-change="choseBlock" v-model="qu" placeholder="区级地区">
                                <i-option v-for="item in qu1" :key="item.id" :label="item.value" :value="item.id"></i-option>
                            </i-select>
                          </span>
                      </div>
                    </div>
                    <!--列表结束-->
                    <div class="line10"></div>
                    <!--列表开始-->
                    <div class="boxlist">
                      <div class="list-title fl">详细地址</div>
                      <div class="list-content fl">
                          <el-input type="textarea" placeholder="请输入..." v-model="companyaddr"></el-input>
                      </div>
                    </div>
                    <!--列表结束-->
                    <div class="line10"></div>
                    <!--列表开始-->
                    <div class="boxlist">
                      <div class="list-title fl">人员规模</div>
                      <div class="list-content fl">
                          <i-select style="width:100%" v-model="companynum">
                            <i-option value="1-35">1-35人</i-option>
                            <i-option value="35-99">35-99人</i-option>
                            <i-option value="100-500">100-500人</i-option>
                            <i-option value="500-1000">500-1000人</i-option>
                            <i-option value="1000+">1000+人</i-option>
                          </i-select>
                      </div>
                    </div>
                    <!--列表结束-->

                    <div class="line10"></div>
                    <!--列表开始-->
                    <div class="boxlist">
                      <div class="list-title fl">营业执照</div>
                      <div class="list-content fl">
                        <div class="list-content-img fl"><img :src="companylicense==''?rootImg:rootUrl+companylicense" /></div>
                        <div class="list-content-upbtn fl">
                          <span style="font-weight:bold; display:block;">上传营业执照</span>
                          <div style="height:10px"></div>
                          <span style="color:gray; display:block;">{{companylicense}}</span>
                          <div style="height:10px"></div>
                          <span style="display:block;">
                            <Upload :show-upload-list="false" :format="['jpg','jpeg','png']" :before-upload="licensehandleBeforeUpload" :on-format-error="handleFormatError" action="/" type="drag">
                                <i-button style="background:#6680ff; color:white; width:100%;" icon="ios-cloud-upload-outline">选择文件</i-button>
                            </Upload>
                          </span>
                        </div>
                      </div>
                    </div>
                    <!--列表结束-->
                    <div class="line10"></div>
                    <!--列表开始-->
                    <div class="boxlist">
                      <div class="list-title fl">公司简介</div>
                      <div class="list-content fl">
                        <div style="width:100%" class="list-content-upbtn fl">
                          <el-input type="textarea" placeholder="请输入简介内容..." v-model="companydescription"></el-input>
                        </div>
                      </div>
                    </div>
                    <div class="line10"></div>

                    <div class="linecenter"></div>
                    <!--列表结束-->
                    <div class="line10"></div>
                    <!--列表开始-->
                    <div class="boxlist">
                      <div class="list-title fl">联系人姓名</div>
                      <div class="list-content fl">
                          <el-input placeholder="请输入姓名..." style="width:100%;" v-model="companyconname"></el-input>
                      </div>
                    </div>
                    <!--列表结束-->
                    <div class="line10"></div>
                    <!--列表开始-->
                    <div class="boxlist">
                      <div class="list-title fl">电话</div>
                      <div class="list-content fl">
                          <el-input placeholder="请输入电话..." style="width:100%;" v-model="companyconcall"></el-input>
                      </div>
                    </div>
                    <!--列表结束-->
                    <div class="line10"></div>
                    <!--列表开始-->
                    <div class="boxlist">
                      <div class="list-title fl">登录密码</div>
                      <div class="list-content fl">
                          <el-input type="password" placeholder="请输入密码..." style="width:100%;" v-model="loginpassword"></el-input>
                      </div>
                    </div>
                    <!--列表结束-->
                    <div class="linecenter"></div>
                    <div class="line10"></div>
                    <!--列表开始-->
                    <div class="boxlist">
                      <i-button @click="saveinformations" style="background:#6680ff; color:white;">确认创建</i-button>
                    </div>
                  </div>
                </el-scrollbar>
            </Tab-pane>
          </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'forget',
  data(){
    return{
      rootUrl:window.localStorage.api,
      rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
      userImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAADo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjR0dHW1tbb29ve3t7i4uLY2Njk5OQwtOK3AAAAI3RSTlMAC+BHIPXxdwjb7J1PFOTWx71ZArhs6dGUFqZwmJBcKahdt2kJJfYAAAJXSURBVFjDxdkJcqswDAZghTUQKNkTkjZN32/W+x/wtZlpaUIksIHpdwCNFyHbgjrE9u64SvYe3DA4rI47OyZzs+jtgJbDWzQjAxv75ILhnuyN7uDOFkTWWWeYcz9Ep9CfU09rC71Ya+rD+Yfetg51unjQ4F26Vm8BTQtxJdMltC1TYfkCGAjYhXx/gZGXd2Z8Ujw54tMxxgGMBfGT/V1igGV7rxcYZNHKZwx0edgQDwN59xuzhaAuskxlWV7K3/VdfZHCVepbJoZcN/FmFliF+i0Hz2pKrg9Wru5V4Pk/Awzl8fUdY/g9xB2/fqpNWMcd3WwsYcJtmbCKm1tAGyz1TA2WfQt4AqdUzxRgXW9b4urMWN5o92tbImgGzMCLPgO+jhnw9TNggPGmjIAoBYZvSiNlkkZOG4HNfMdiYkt8pvSLn558FKzAYIuDaEUJGFz5kiW0B4MrsLI9eWBwR4DMI3Sri6o5pLqQi3FRiFF5ZGFUezpAVpfFL2UNWSIndpln6kHH3qz4T69JmEZ39iyE4lAoVg6Oz5evXAkqvnylfDyTiClRoDdfuW4H7CGlOtXcIRWxEzaYdMQd9KqHmjno6SquoFbuXLnLEpPRnaeVzV3nMrOA1oa7cCqzgGf2Sqx6Ya/E5I8T0GeeFRpryD0raG2Q2PljHq7lp1lZ5HmVPVNVeV60S+J22scjfWCgj4kf4MNbBNM2MYa3WaZtBDWcBAYSh1ixSTMtFtt9R2g6zkkW6TUkI+rkbNHb1pm0qTu87TxlY3x46/7vfy7c//5wAXef9Pn98R+pP67D9VcSWgAAAABJRU5ErkJggg==',
      cityList:[{
        'label':"北京",
      },{
        'label':"上海",
      },{
        'label':"南京",
      }
      ],
      adminphone:'',//手机号
      admincode:'',//验证码
      companylogo:'',//公司logo
      companyname:'',//公司名称
      companyprovince:'',//省份
      companycity:'',//市区
      companyarea:'',//区域
      companyaddr:'',//详细地址
      companynum:'',//规模
      companylicense:'',//营业执照
      companydescription:'',//公司简介
      companyconname:'',//联系人姓名
      companyconcall:'',//联系人电话
      loginpassword:'',//登录密码
      //--------------------------------------
      //这段是三级联动城市----------------------
      //--------------------------------------
      mapJson:'../static/json/map.json',
      province:'',
      sheng:'',
      shi:'',
      shi1:[],
      qu:'',
      qu1:[],
      city:'',
      block:'',
      //----------------------------------------
      //三级联动城市结束-------------------------
      //----------------------------------------
    }
  },
  methods:{
    gotoback(){//返回登录
      this.$router.push({path:"/pages/login"});
    },
    saveinformations(){//确认修改密码
      ///company/register
      //this.$router.push({path:"/pages/susscess"});
      console.log(this.adminphone);
      console.log(this.admincode);


      //console.log("---------------------------------------------------------");
      let regurl = window.localStorage.api + "/company/register";//验证码登录
      let params = new URLSearchParams();
      params.append('name',this.companyname);//公司名称
      params.append('phone',this.companyconcall);//公司电话	
      params.append('pwd',this.loginpassword);//密码
      params.append('province_id',this.companyprovince);//省id	
      params.append('city_id',this.companycity);//市id
      params.append('county_id',this.companyarea);//区id
      params.append('scale',this.companynum);//规模
      params.append('uname',this.companyconname);//联系人姓名	
      params.append('code',this.admincode);//验证码	
      params.append('site',this.companyaddr);//详细地址	
      params.append('company_info',this.companydescription);//公司简介	
      params.append('logo',this.companylogo);//logo地址
      params.append('url',this.companylicense);//营业执照图片地址
      params.append('mobile',this.adminphone);//联系人电话
 
      this.$http.post(regurl,params).then((res)=>{
        console.log(res);
        if(res['data'].success){
            this.success('注册成功！现在可以去登录了！');
            this.$router.push({ path:"/pages/susscess" });//跳转到主页
        }else{
          this.success(res['data'].message);
        }
      }).catch((err)=>{
        console.log(err);
      })
      //console.log("---------------------------------------------------------");

    },
    getParams(){
      this.adminphone = this.$route.query.adminphones;
      this.admincode = this.$route.query.admincodes;
    },
    //--上传图片--------------------------------------------
    logohandleBeforeUpload(file) {//logo
      this.uploadimg(file,'logo');
    },
    licensehandleBeforeUpload(file){
      this.uploadimg(file,'license');
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: '文件格式不正确',
        desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
      })
    },
    uploadimg(_img,_type){
      let upurl = window.localStorage.api + "/api/upload";//验证码登录
      let params = new FormData();
      params.append('file',_img,_img.name);//图片
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      console.log(_img);
      this.$http.post(upurl,params).then((res)=>{
        if(_type=="logo"){
          console.log(res['data'].message.fileurl);
          this.companylogo = res['data'].message.fileurl;
        }else{
          this.companylicense = res['data'].message.fileurl;
        }
      }).catch((err)=>{
        console.log(err);
      })
    },
    //页面提示信息
    success(_str) {
            this.$alert(_str, '系统提示', {
          confirmButtonText: '确定',
      });

    },
    warning(_str) {
            this.$alert(_str, '严重警告', {
          confirmButtonText: '确定',
      });

    },
    error(_str) {
            this.$alert(_str, '错误信息', {
          confirmButtonText: '确定',
      });

    },
      //--上传图片--------------------------------------------
      //加载china地点数据，三级
      getCityData(){
        let that = this
        this.$http.get(this.mapJson).then(function(response){
          if (response.status==200){
            let data = response.data
            console.log(data);
            that.province = []
            that.city = []
            that.block = []
            // 省市区数据分类
            for (let item in data) {
              if (item.match(/0000$/)) {//省
                that.province.push({id: item, value: data[item], children: []})
              } else if (item.match(/00$/)) {//市
                that.city.push({id: item, value: data[item], children: []})
              } else {//区
                that.block.push({id: item, value: data[item]})
              }
            }
            // 分类市级
            for (let index in that.province) {
              for (let index1 in that.city) {
                if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                  that.province[index].children.push(that.city[index1])
                }
              }
            }
            // 分类区级
            for(let item1 in that.city) {
              for(let item2 in that.block) {
                if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                  that.city[item1].children.push(that.block[item2])
                }
              }
            }
          }
          else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },
      // 选省
      choseProvince(e){
        this.companyprovince = e;
        for (let index2 in this.province) {
          if (e === this.province[index2].id) {
            this.shi1 = this.province[index2].children
            this.shi = this.province[index2].children[0].value
            this.qu1 =this.province[index2].children[0].children
            this.qu = this.province[index2].children[0].children[0].value
            this.E = this.qu1[0].id
          }
        }
      },
      // 选市
      choseCity(e){
        this.companycity=e;
        for (let index3 in this.city) {
          if (e === this.city[index3].id) {
            this.qu1 = this.city[index3].children
            this.qu = this.city[index3].children[0].value
            this.E = this.qu1[0].id
            // console.log(this.E)
          }
        }
      },
      // 选区
      choseBlock:function(e) {
        this.companyarea = e;
      },
  },
  mounted(){
    this.getParams();
    //console.log(this.$route.query);
    this.getCityData();
  },
  watch:{
    '$route':'getParams'
  },
}
</script>

<style scoped>
  .thebox{
    background: url(../assets/login_bg.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:100vh;
    /*兼容低版本*/
   filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../assets/logo.png', sizingMethod='scale');
    -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../assets/logo.png', sizingMethod='scale')";
  }

  /*登录框样式*/
  .loginbox{
    width:640px;
    height:720px;
    padding:20px;
    background: white;
    position: absolute;
    border-radius: 5px;
    left:0;
    right:0;
    top: 0;
    bottom: 0;
    margin: auto;
    /*50%为自身尺寸的一半*/
    -webkit-box-shadow: 2px 2px 5px #333;
    box-shadow: 2px 2px 5px #333;
  }

  /*右部分盒子样式*/
  .loginbox .login-select{
    width:600px;
    height: 680px;
  }


  .boxlist{
    padding:10px;
    overflow: hidden;
    width:100%;
  }

  .boxlist .list-title{
    padding-right:20px;
    font-weight:bold;
    width:100px;
  }
  .boxlist .list-content{
    width:300px;
  }
  .boxlist .list-content .list-content-img{
    margin-right:10px;
  }
  .boxlist .list-content .list-content-img img{
    width:88px;
    height:88px;
  }
  .boxlist .list-content-upbtn{}
  .boxlist .list-content-upbtn span{
    text-align: center;
  }

  /*适配各种尺寸-手机端*/
  @media only screen and (max-width: 768px) and (min-width: 320px)
  {

  }

  /*适配各种尺寸-平板电脑*/
  @media only screen and (max-width: 1024px) and (min-width: 768px)
  {

  }

  /*适配各种尺寸-PC端小屏幕*/
  @media only screen and (max-width: 1920px) and (min-width: 1024px)
  {

  }


    /*适配各种尺寸-PC端高分辨率屏幕*/
  @media only screen and (max-width: 1920px) and (min-width: 2560px)
  {

  }
</style>
