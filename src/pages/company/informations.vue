<template style="height:100%;">
  <div class="combox"  style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <Icon type="ios-pricetags-outline"></Icon>公司信息
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
    </div>
    <div class="comcontent">
      <div class="comcontent-top" v-show="showed">
        <span class="comcontent-top-title">{{comname}}</span>
        <span class="comcontent-top-type">({{comscale}})</span>
        <span class="comcontent-top-edit fr">
          <el-button @click="editinfos" class="backgroundpar" type="primary" icon="el-icon-edit">编辑</el-button>
        </span>
      </div>

      <div class="comcontent-top-infos" v-show="showed">
        <span><i style="color:#b8bbcc; width:18px; height:18px;" class="iconfont icon-dizhi"></i>&nbsp;&nbsp;&nbsp;地址：{{sheng}}{{shi}}{{qu}}{{comaddr}}</span><br />
        <span><i style="color:#b8bbcc; width:18px; height:18px;" class="iconfont icon-yonghu"></i>&nbsp;&nbsp;&nbsp;{{comuser}}   &nbsp;&nbsp;&nbsp;<i style="color:#b8bbcc; width:18px; height:18px;" class="iconfont icon-dianhua"></i>&nbsp;&nbsp;&nbsp;{{comcall}}</span>
      </div>

      <div class="comcontent-top-img" v-show="showed">
        <div class="comcontent-top-img-box  fl">
          <img :src="comlogo==''?rootImg:rootUrl+comlogo" width="110" height="110" />
          <div class="imgtext">LOGO</div>
        </div>

        <div class="comcontent-top-img-box  fl">
          <img :src="comlisense==''?rootImg:rootUrl+comlisense" width="148" height="110" />
          <div class="imgtext">营业执照</div>
        </div>
      </div>

      <div class="companytitle"  v-show="showed">公司简介</div>

      <div class="companydescription" v-show="showed">
        {{comdes}}
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
        showed:false,//显示状态
        comid:'',//id.通过id获取需要编辑的数据
        comname:'',//公司名称
        comscale:'',//规模
        comaddr:'',//地址
        comuser:'',//联系人
        comcall:'',//电话
        comlogo:'',//公司logo
        comlisense:'',//营业执照
        comdes:'',//公司简介
        sheng:'',//省
        shi:'',//市
        qu:'',//区
        infoslist:[],//公司信息组合
      }
    },
    methods:{
      editinfos(){
        this.$router.push({path:'/pages/company/editinfos',query:{ comid:this.comid}});
      },
      getcompanyinfos(){
        let geturl = window.localStorage.api+'/get/company';
        this.$http.get(geturl).then(res=>{
          if(res['data'].success){
            this.getaddress();
            //console.log(res['data'].message);
            this.comid = res['data'].message.id
            this.comname = res['data'].message.name;
            this.comscale = res['data'].message.scale;
            this.comaddr = res['data'].message.site;
            this.comname = res['data'].message.name;
            this.comuser = res['data'].message.uname;
            this.comcall = res['data'].message.phone;
            this.comlogo = res['data'].message.logo;
            this.comlisense = res['data'].message.url;
            this.comdes = res['data'].message.info;
            this.infoslist = res['data'].message;
          }
        }).catch(err=>{
          //console.log(err);
        })
       
      },
      openFullScreen() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 1500);
      },
      //获取地址
      getaddress(){
        this.$http.get('../static/json/map.json').then(res=>{
            if (res.status==200){
              let data = res.data
              //('---------------------------1');
              this.sheng = data[this.infoslist.province_id];
              this.shi = data[this.infoslist.city_id];
              this.qu = data[this.infoslist.county_id];
              // console.log(this.sheng);
              // console.log(this.shi);
              // console.log(this.qu);
              // console.log('---------------------------2');
            }
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
      this.openFullScreen();
      setTimeout(() => {
        this.getcompanyinfos();
        this.showed = true;
      }, 1200);
      //页面启动动画
      $('combox').addClass('animated lightSpeedIn');
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
    height:69px;
    line-height: 69px;
    padding-left:10px;
    font-size: 16px;
    color: #2e2f33;
    border-bottom: 1px solid #ededed;
  }

  .combox .comcontent{
    background:#FFF;
    padding:10px;
    overflow: hidden;
    min-height:885px;
  }

  .combox .comcontent .comcontent-top{
    height:50px;
    width:100%;
  }

  .combox .comcontent .comcontent-top .comcontent-top-title{
    font-family: MicrosoftYaHei-Bold;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
  }

  .combox .comcontent .comcontent-top .comcontent-top-type{
    font-family: MicrosoftYaHei-Bold;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #2e2f33;
  }

  .combox .comcontent .comcontent-top .comcontent-top-edit{

  }

  .combox .comcontent .comcontent-top-infos span{
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #5c5d66;
    line-height: 40px;
  }

  .combox .comcontent .comcontent-top-img{
    padding-top:50px;
    overflow: hidden;
  }

  .combox .comcontent .comcontent-top-img .comcontent-top-img-box{
    position: relative;
    width: 150px;
    height: 110px;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #ededed;
    margin-right: 30px;
    text-align: center;
  }

  .combox .comcontent .comcontent-top-img .comcontent-top-img-box img{
    border:none;
  }

  .combox .comcontent .comcontent-top-img .comcontent-top-img-box .imgtext{
    position:absolute;
    bottom:0;
    background: #1414149c;
    color:white;
    font-size: 14px;
    width:100%;
    height: 24px;
    text-align: center;
    line-height: 24px;
  }

  .combox .comcontent .companytitle{
    height:40px;
    width:100%;
    line-height: 40px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
    margin-top:50px;
  }

  .combox .comcontent .companydescription{
    text-indent: 20px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #5c5d66;
    padding: 30px;
    background:#fcfcfc;
  }

    
</style>
