<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <img style="padding-right:10px;" src="../../assets/iMenu/sMenu/icon_fuli.png" /><span>赞赏设置</span>
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
    </div>
    <div class="comcontent">
      <div class="welfaretop">
        <Row>
          <i-col span="12">
            <div @click="welfareevents" class="imgbox fl posor"><img src="../../assets/iMenu/contents/banner_01.png"/></div>
          </i-col>
          <i-col span="12">
            <div @click="reciateevents" class="imgbox fr posor"><img src="../../assets/iMenu/contents/banner_02.png" /></div>
          </i-col>
        </Row>
      </div>
      
      <div class="welfaretitle" style="border-bottom:1px solid #ededed; padding-bottom:10px;">
        <div class="fl" style="font-size:14px;">赞赏设置</div><i-button @click="addreciate"><i class="iconfont icon-icon--"></i>赞赏设置</i-button>
      </div>

      <div class="welfarecontent">
        <div>
          <div class="reciatelist">
              <el-row>
                <el-col :span="6" :xs="24">
                  <div class="oneclass">
                    <div class="dateclass fl">
                      <div class="yearclass">2018</div>
                      <div class="monthclass">十月</div>
                    </div>
                    <div class="titledesclass">
                      <div class="titleclass">已经分配的邦分：2000邦分</div>
                      <div class="desclass">分配的人数：10人</div>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6" :xs="24">
                  <div class="twoclass">
                    <div class="titleclass">已经分配的邦分：2000邦分</div>
                    <div class="desclass">分配的人数：10人</div>
                  </div>
                </el-col>
                <el-col :span="6" :xs="24">
                  <div class="threeclass"><span>已回收邦分：</span><span style="color:#ff6666;">200邦分</span></div>
                </el-col>
                <el-col :span="6" :xs="24">
                  <div class="fourclass fr">
                    <el-button @click="editreciatesevents(1)" class="colorpar fr" size="small" type="primary" plain>编辑</el-button>
                    <el-button @click="viewdescriptons(1)" class="fr" size="small" plain style="margin-right:10px;">查看详情</el-button>
                  </div>
                </el-col>
              </el-row>
          </div>
          <div style="height:10px; overflow:hidden;"></div>
        </div>
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
      }
    },
    methods:{
      welfareevents(){
        this.$router.push({path:'/pages/company/welfaresettings'});
      },//福利设置
      reciateevents(){  
        this.$router.push({path:'/pages/company/reciatesettings'})
      },//赞赏设置
      addreciate(){
        this.$router.push({path:'/pages/company/addreciates'});
      },//赞赏设置、、添加
      viewdescriptons(_id){
        this.$router.push({name:'Reciatesdescriptions',params:{id:_id}});
      },//查看详情
      editreciatesevents(_id){
        this.$router.push({name:'Eidtreciates',params:{id:_id}});
      }//编辑赞赏
    },
    mounted(){
      //验证是否登录
      if(!window.sessionStorage.status){
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path:'/pages/login'});
        return;
      }
    },
    
  }
</script>


<style scoped>
  .combox{
    width:100%;
    height:100%;
    border: solid 1px #ededed;
    position: relative;
  }

  .combox .comtitle{
    height:69px;
    line-height: 69px;
    padding-left:10px;
    font-size: 16px;
    color: #2e2f33;
    border-bottom: 1px solid #ededed;
    background:white;
  }

  .combox .comcontent{
    background:#FFF;
    /* padding:50px; */
    overflow: hidden;
    min-height:885px;
    margin:10px;
  }

  .combox .comcontent .welfaretitle{
    text-align: right;
    padding-top:30px;
    padding-left:10px;
    padding-right: 10px;
  }
  .combox .comcontent .welfaretop{
    overflow: hidden;
    padding:10px;
  }

  .combox .comcontent .welfaretop .imgbox{
    width:98%;
    height:100%;
  }

  .combox .comcontent .welfaretop .imgbox img{
    width:100%;
    height:100%;
  }

  .combox .comcontent .welfarecontent{
    width:100%;
    height:100%;
    overflow: hidden;
    padding:10px;
  }

  .combox .comcontent .welfarecontent .welfare-listbox{
    height: 100px;
    padding:10px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    border: solid 1px #ededed;
    margin-bottom: 10px;
  }

  .combox .comcontent .welfarecontent .welfare-listbox .imgbox{
    width:80px;
    height: 80px;
  }
  .combox .comcontent .welfarecontent .welfare-listbox .imgbox img{
    border:none;
  }


  .combox .welfarecontent .reciatelist{
    box-shadow: 0px 2px 6px 0px 
		rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    border: solid 1px #ededed;
    padding:10px;
  }

  .combox .welfarecontent .reciatelist .oneclass{
    width:100%;
    height: 100%;
  }

  .combox .welfarecontent .reciatelist .oneclass .dateclass{
    width:80px;
    height:80px;
    background:#f7f7f7;
  }
  .combox .welfarecontent .reciatelist .oneclass .dateclass .yearclass{
    color:#8a8c99;
    text-align: center;
    height: 40px;
    line-height: 50px;
    font-size: 12px;
  }
  .combox .welfarecontent .reciatelist .oneclass .dateclass .monthclass{
    color:#6680ff;
    text-align: center;
    height: 40px;
    line-height: 30px;
    font-size: 16px;
  }
  .combox .welfarecontent .reciatelist .oneclass .titledesclass{
    height: 80px;
    width:calc(100% - 80px);
    padding-left:20px;
    overflow: hidden;
  }
  .combox .welfarecontent .reciatelist .oneclass .titledesclass .titleclass{
    width:100%;
    height: 40px;
    line-height: 45px;
    color:#2e2f33;
    font-size: 16px;
  }
  .combox .welfarecontent .reciatelist .oneclass .titledesclass .desclass{
    width:100%;
    height: 40px;
    line-height: 35px;
    color:#8a8c99;
    font-size: 16px;
  }

  .combox .welfarecontent .reciatelist .twoclass{
    width:100%;
    height:100%;
    padding-left:20px;
  }
  .combox .welfarecontent .reciatelist .twoclass .titleclass{
    width:100%;
    height: 40px;
    line-height: 45px;
    color:#2e2f33;
    font-size: 16px;
  }
  .combox .welfarecontent .reciatelist .twoclass .desclass{
    width:100%;
    height: 40px;
    line-height: 35px;
    color:#8a8c99;
    font-size: 16px;
  }

  .combox .welfarecontent .reciatelist .threeclass{
    width:100%;
    height:80px;
    padding:20px;
    line-height: 40px;
    font-size: 16px;
    color: #2e2f33;
  }

  .combox .welfarecontent .reciatelist .fourclass{
    width:100%;
    height:80px;
    padding:20px;
    line-height: 40px;
  }




  .unshow{
    visibility: hidden;
  }

  .show{
    visibility: visible;
  }
  </style>
  
