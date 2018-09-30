<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item href="/">
              <Icon type="ios-home-outline"></Icon><router-link to="/pages/company/informations">公司信息</router-link>
          </Breadcrumb-item>
          <Breadcrumb-item>
              <Icon type="ios-pricetags-outline"></Icon>编辑公司信息
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
    </div>
    <div class="comcontent">
      <el-scrollbar style="height:100%;">
        <div style="height:100%; padding:10px;">

          <div class="boxlist">
            <div class="list-title fl">公司logo</div>
            <div class="list-content fl">
              <div class="list-content-img fl"><img :src="comlogo==''?rootImg:rootUrl+comlogo" /></div>
              <div class="list-content-upbtn fl">
                <span style="font-weight:bold; display:block;">上传公司logo</span>
                <div style="height:10px"></div>
                <span style="color:gray; display:block;">{{comlogo}}</span>
                <div style="height:10px"></div>
                <span style="display:block;">
                  <Upload ref="upload" :show-upload-list="false" :format="['jpg','jpeg','png']" :before-upload="logohandleBeforeUpload"  action="/" :on-format-error="handleFormatError" type="drag">
                      <i-button style="background:#6680ff; width:100%; color:white;" icon="ios-cloud-upload-outline">选择文件</i-button>
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
                <el-input size="small" placeholder="请输入公司名称..." style="width:100%;"  v-model="comname"></el-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">所在地</div>
            <div class="list-content fl">
                <span>
                  <i-select  style="width:33%" v-model="comprovince" @on-change="choseProvince" placeholder="省级地区">
                      <i-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id"></i-option>
                  </i-select>
                </span>
                <span>
                  <i-select  style="width:32%" v-model="comcounty" @on-change="choseCity" placeholder="市级地区">
                      <i-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id"></i-option>
                  </i-select>
                </span>
                <span>
                  <i-select  style="width:32%" v-model="comarea" @on-change="choseBlock" placeholder="区级地区">
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
                <el-input size="small" type="textarea" placeholder="请输入..." v-model="comaddr"></el-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">人员规模</div>
            <div class="list-content fl">
                <i-select style="width:100%" v-model="comscale">
                  <i-option value="1-35人">1-35人</i-option>
                  <i-option value="35-99人">35-99人</i-option>
                  <i-option value="100-500人">100-500人</i-option>
                  <i-option value="500-1000人">500-1000人</i-option>
                  <i-option value="1000+人">1000+人</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->

          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">营业执照</div>
            <div class="list-content fl">
              <div class="list-content-img fl"><img :src="comlicense==''?rootImg:rootUrl+comlicense" /></div>
              <div class="list-content-upbtn fl">
                <span style="font-weight:bold; display:block;">上传营业执照</span>
                <div style="height:10px"></div>
                <span style="color:gray; display:block;">{{comlicense}}</span>
                <div style="height:10px"></div>
                <span style="display:block;">
                  <Upload :show-upload-list="false" :format="['jpg','jpeg','png']" :before-upload="licensehandleBeforeUpload" :on-format-error="handleFormatError" action="/" type="drag">
                      <i-button style="background:#6680ff; width:100%; color:white;" icon="ios-cloud-upload-outline">选择文件</i-button>
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
                <el-input size="small" type="textarea" placeholder="请输入简介内容..." v-model="comdes"></el-input>
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
                <el-input size="small" placeholder="请输入姓名..." style="width:100%;" v-model="comconuser"></el-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">联系电话</div>
            <div class="list-content fl">
                <el-input size="small" placeholder="请输入电话..." style="width:100%;" v-model="comphone"></el-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <!--列表结束-->
          <div class="linecenter"></div>
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <i-button style="background:#6680ff; color:white;" @click="saveeditinfos">保存</i-button>
          </div>

        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        rootUrl:window.localStorage.api,
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
      comid:this.$route.query.comid,//用户id
      comlogo:'',//公司logo
      comname:'',//公司名称
      comprovince:'',//省份
      comcounty:'',//市
      comarea:'',//区
      comaddr:'',//详细地址
      comscale:'',//人员规模
      comlicense:'',//营业执照
      comdes:'',//公司简介
      comconuser:'',//联系人
      comphone:'',//联系电话
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
    };
  },
  methods: {
        saveeditinfos(){
          let apiurl = window.localStorage.api+'/save/company';
          //console.log("---------------------------------------------------------");
          let params = new URLSearchParams();
          params.append('name',this.comname);//公司名称
          params.append('mobile',this.comphone);//公司电话
          params.append('province_id',this.comprovince);//省份id
          params.append('city_id',this.comcounty);//市id
          params.append('scale',this.comscale);//规模
          params.append('uname',this.comconuser);//联系人姓名
          params.append('site',this.comaddr);//详细地址
          params.append('company_info',this.comdes);//公司简介
          params.append('logo',this.comlogo);//公司logo
          params.append('url',this.comlicense);//营业执照
          params.append('mobile',this.comphone);//联系人电话
          params.append('county_id',this.comarea);//区id
          params.append('id',this.id);//id
          this.$http.post(apiurl,params).then((res)=>{
            //console.log(res);
            if (res['data'].success) {
              this.success('修改成功！');
              this.$router.push({path:'/pages/company/informations'});
            }else{
              this.error("修改失败！"+res['data'].message);
            }
          }).catch((err)=>{
            //console.log(err);
          })
          //console.log("---------------------------------------------------------");
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
          let upurl = window.localStorage.api + "/api/upload";//上传图片
          let params = new FormData();
          params.append('file',_img,_img.name);//图片
          let config = {
            headers: {'Content-Type': 'multipart/form-data'}
          }
          //console.log(_img);
          this.$http.post(upurl,params).then((res)=>{
            if(_type=="logo"){
              //console.log(res['data'].message.fileurl);
              this.comlogo = res['data'].message.fileurl;
            }else{
              this.comlicense = res['data'].message.fileurl;
            }
          }).catch((err)=>{
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
      //--上传图片--------------------------------------------
        openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      //加载china地点数据，三级
      getCityData(){
        let that = this
        this.$http.get(this.mapJson).then(function(response){
          if (response.status==200){
            let data = response.data
            //console.log(data);
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
            //console.log(response.status)

          }
        }).catch(function(error){
          //console.log(typeof+ error)
          })
      },
      // 选省
      choseProvince(e,_type){
        let a = e.substr(0,2);
        let b = String(this.comcounty).substr(0,2);
        let c = String(this.comarea).substr(0,2);
        //console.log(e.substr(0,2));
        //console.log(String(this.comcounty).substr(0,2));
        //console.log(String(this.comarea).substr(0,2));
        if(a!=b||a!=c){
          this.comcounty='';
          this.comarea='';
        }
        //console.log(e);
        this.comprovince = e;
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
        //console.log(e);
        this.comcounty=e;
        for (let index3 in this.city) {
          if (e === this.city[index3].id) {
            this.qu1 = this.city[index3].children
            this.qu = this.city[index3].children[0].value
            this.E = this.qu1[0].id
            //console.log(this.E)
          }
        }
      },
      // 选区
      choseBlock(e) {
        this.comarea = String(e);
      },
  },
  mounted(){
      //验证是否登录
      if(!window.sessionStorage.status){
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path:'/pages/login'});
        return;
      }
    //console.log(this.$route.query.comid);
    this.id = this.$route.query.comid;
    let url = window.localStorage.api + '/get/company';//接口地址
    this.$http.get(url).then(res=>{
            //console.log(res);
            //this.comid=res['data'].message.id;//用户id
            this.comlogo=res['data'].message.logo;//公司logo
            this.comname=res['data'].message.name;//公司名称
            this.comprovince=res['data'].message.province_id;//省份
            this.sheng = res['data'].message.province_id;//省份
            this.comcounty=res['data'].message.city_id;//市
            this.shi = res['data'].message.city_id;//市
            this.comarea=res['data'].message.county_id;//区
            this.qu = res['data'].message.county_id;//区
            this.comaddr=res['data'].message.site;//详细地址
            this.comscale=res['data'].message.scale;//人员规模
            this.comlicense=res['data'].message.url;//营业执照
            this.comdes=res['data'].message.info;//公司简介
            this.comconuser=res['data'].message.uname;//联系人
            this.comphone=res['data'].message.phone;//联系电话

            this.cityes = res['data'].message.city_id;
            this.countes = res['data'].message.county_id;
            

            this.choseProvince(res['data'].message.province_id);
            this.choseCity(res['data'].message.city_id);
            this.choseBlock(res['data'].message.county_id);
    }).catch(err=>{

    })
    //页面启动动画
    $('combox').addClass('animated lightSpeedIn');
    this.getCityData();
  },
  watch:{
    '$route':'getParams'
  },
};
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
    width:500px;
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

  .el-input__inner{
      border:1px solid #ededed !important;
  }
</style>

<style>
  input{
      border:1px solid #ededed !important;
  }
</style>
