<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <span><img src="../../assets/iMenu/sMenu/icon_fuli.png" /></span><span class="posor" @click="goback">福利设置</span>
              <span>&nbsp;>&nbsp;</span>
              <span><img src="../../assets/iMenu/sMenu/icon_tianjia_active.png" /></span>
              <span>赞赏设置</span>
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
    </div>
    <div class="comcontent">
      <div class="welfarecontent">
        <div class="reciates-setting-class">赞赏设置</div>
        <div class="reciates-form-class">
          <div class="reciates-form-title-class">
            <span class="colorpar">分配邦分</span>
            <span>（可分配</span>
            <span>1000</span>
            <span>邦分）</span>
            <span><img src="../../assets/iMenu/sMenu/icon_bangzhu.png" /></span>
            <span>
              <!-- <el-alert
                title="您当前的邦分成功分配给部门成员，全体成员人数80人，分配邦分总计80000分"
                type="success">
              </el-alert> -->
            </span>
          </div>
          <div class="reciates-from-input-class">
            <el-row>
              <el-col :span="12" :xs="24">
                <div>
                  <div class="reciates-from-des-class">
                    <span class="spanleft">分配数量</span>
                    <span class="spanright">
                      <el-input placeholder="请输入要分配的邦分数量" v-model="input4" size="small">
                        <template slot="append">邦分/人</template>
                      </el-input>
                    </span>
                  </div>
                  <div class="reciates-from-des-class">
                    <span class="spanleft">分配部门</span>
                    <span class="spanright">
                      <i-select placeholder="选择成员">
                        <i-option>全部成员</i-option>
                        <i-option>a</i-option>
                        <i-option>b</i-option>
                        <i-option>c</i-option>
                      </i-select>
                    </span>
                  </div>
                  <div class="reciates-from-des-class">
                    <span class="spanleft">&nbsp;</span>
                    <span class="spanright">
                      <i-switch class="backgroundpar fl">
                          <span style="color:#FFFFFF;" slot="open"><i slot="open" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-right"></i></span>
                          <span style="color:#FFFFFF;" slot="close"><i slot="close" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-error"></i></span>
                      </i-switch>
                      <span class="fl" style="font-size: 14px; color: #2e2f33; padding-left:10px; line-height:22px;">赞赏邦分是否参与排名</span>
                    </span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12" :xs="24">
                <div>
                  <div class="reciates-from-des-class">
                    <span class="spanleftone">邦分互赠范围</span>
                    <span class="spanrightone">
                      <el-input class="fl" style="width:80px;" placeholder="开始" size="small" />
                      <span class="fl" style="line-height:30px; font-size:14px; padding:0 10px;"> 至 </span>
                      <el-input class="fl" style="width:80px;" placeholder="结束" size="small" />
                      <span class="fl" style="line-height:30px; font-size:14px; padding-left:10px;">邦分</span>
                    </span>
                  </div>
                  <div class="reciates-from-des-class">
                    <span class="spanleftone">邦分适用时间</span>
                    <span class="spanrightone">
                      <DatePicker type="month" placeholder="请选择月份" style="width: 195px"></DatePicker>
                    </span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div></div>
        </div>
        <div class="reciates-tags-class">
          <div class="reciates-tags-title-class">
            <span class="colorpar fl">设置赞赏类型</span>
            <span class="fl" style="padding-left:7px;"><img class="posor" src="../../assets/iMenu/sMenu/icon_bangzhu.png" /></span>
          </div>
          <div class="reciates-tags-list-class">
            <div class="reciates-tages-list-title-class fl">
              <span style="display:block; width:70px; height:30px; line-height:30px; border-right:1px solid #ededed;">赞赏标签</span>
            </div>
            <div class="reciates-tags-list-des-class fl">
              <el-tag @close="deltags(index)" v-for="(item,index) in tagslist" :key="index" class="colorpar" style="background:#f5f6ff; margin-right:5px;" closable :disable-transitions="false" >
                {{item.tages}}
              </el-tag>
              <el-button @click="openaddtagswin" class="button-new-tag" size="small" >+ 添加标签</el-button>
            </div>
          </div>
        </div>
        <div class="reciates-button-class">
          <el-button type="primary" style="width:150px;" class="backgroundpar">保存</el-button>
        </div>
      </div>
    </div>

    <div class="addtagswin unshow">
      <div class="addtagswintitle">
        <span class="fl">添加赞赏标签</span>
        <span @click="closeaddtagswin" class="fr posor">x</span>
      </div>
      <div class="addtags-content-form">
        <div style="color:#5c5d66; line-height:40px; font-size:16px; font-family: MicrosoftYaHei;">赞赏类型</div>
        <div>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请填写词汇，空格为一个"
            :maxlength="9"
            v-model="tagsvalue">
          </el-input>
        </div>
        <div style="color:#ff6666; font-size:14px; line-height:30px;">注：每个标签最多为9个字，最多不超过10个标签</div>
        <div style="padding-top:30px;"><el-button @click="savetags" class="fr backgroundpar" style="width:150px;" type="primary">确定完成</el-button></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        viewid:this.$route.params.id,
        rootUrl:window.localStorage.api,
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
        tagslist:[],//标签数组
        tagsvalue:'',//标签输入框
      }
    },
    methods:{
      goback(){//返回赞赏设置
        this.$router.push({path:'/pages/company/reciatesettings'});
      },
      openaddtagswin(){//打开添加标签窗口
        if(this.tagslist.length<10){
          $('.addtagswin').addClass('animated zoomInLeft show');
        }else{
          this.noticemsg('够了够了，满出来了！');
        }
      },
      closeaddtagswin(){//关闭添加标签窗口
        $('.addtagswin').removeClass('animated zoomInLeft show');
      },
      savetags(){//保存标签
        //检测是否存在相同的值，存在就不需要添加了
        for(let i=0;i<this.tagslist.length;i++){
          if(this.tagslist[i].tages==this.tagsvalue){
            this.noticemsg('请不要重复输入相同的标签！');
            return;
          }
        }
        this.tagslist.push({'tages':this.tagsvalue});
        this.tagsvalue='';
        this.closeaddtagswin();
      },
      deltags(_index){//删除标签
        this.tagslist.splice(_index,1);
      },
      noticemsg(_str){
          this.$alert(_str, '系统提示', {
            confirmButtonText: '确定',
          });
      }
      
    },
    mounted(){
        console.log(this.viewid);
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

  .combox .comtitle span{
      display: block;
      height: 69px;
      line-height: 72px;
      float: left;
      padding-right:5px;
  }

    .combox .comtitle span img{
        height: 69px;
        padding:27px 0;
        width:16px;
    }

  .combox .comcontent{
    background:#FFF;
    /* padding:50px; */
    overflow: hidden;
    min-height:885px;
    margin:10px;
  }


  .combox .comcontent .welfarecontent{
    width:100%;
    height:100%;
    overflow: hidden;
  }

  .combox .comcontent .welfarecontent .reciates-setting-class{
    height: 60px;
    line-height: 60px;
    border-bottom: solid 1px #ededed;
    font-size: 14px;
    color: #2e2f33;
    padding-left:30px;
  }
  .combox .comcontent .welfarecontent .reciates-form-class{
    padding:30px;
    border-bottom: 1px solid #ededed;
  }

  .combox .comcontent .welfarecontent .reciates-form-class .reciates-form-title-class{
    height: 70px;
    padding:10px 0;
    overflow: hidden;
    line-height: 50px;
  }

  .combox .comcontent .welfarecontent .reciates-form-class .reciates-form-title-class span{
    display:block;
    float: left;
    line-height:50px;
    font-size: 16px;
  }
  .combox .comcontent .welfarecontent .reciates-form-class .reciates-form-title-class span img{
    height:50px;
    width:30px;
    padding:15px 5px;
    cursor: pointer;
  }

  .reciates-from-input-class{
    
  }

  .reciates-from-input-class .reciates-from-des-class{
    width:100%;
    padding:10px 0;
    overflow: hidden;
  }

  .reciates-from-input-class .reciates-from-des-class span{
    display: block;
  }

  .reciates-from-input-class .reciates-from-des-class .spanleft{
    width:70px;
    float: left;
    font-size: 14px;
    line-height: 30px;
  }

  .reciates-from-input-class .reciates-from-des-class .spanright{
    width:calc(100% - 70px);
    float: left;
    padding-right:10%;
  }

  .reciates-from-input-class .reciates-from-des-class .spanleftone{
    float: left;
    width:100px;
    font-size: 14px;
    line-height: 30px;
  }

  .reciates-from-input-class .reciates-from-des-class .spanrightone{
    float: left;
    width:calc(100% - 100px) !important;
  }

  .combox .comcontent .welfarecontent .reciates-tags-class{
    padding:30px;
  }


  .combox .comcontent .welfarecontent .reciates-tags-class .reciates-tags-title-class{
    font-size:16px;
    overflow: hidden;
  }

  .combox .comcontent .welfarecontent .reciates-tags-class .reciates-tags-title-class span{
    display: block;
  }

  .combox .comcontent .welfarecontent .reciates-tags-class .reciates-tags-list-class{
    padding:30px 0;
  }
  .combox .comcontent .welfarecontent .reciates-tags-class .reciates-tags-list-class .reciates-tages-list-title-class{
    width:70px;
    font-size: 14px;
    color:#2e2f33;
  }
  .combox .comcontent .welfarecontent .reciates-tags-class .reciates-tags-list-class .reciates-tags-list-des-class{
    width:calc(100% - 70px);
    padding:0 10px;
    overflow: hidden;
    line-height: 30px;
  }

  .combox .comcontent .welfarecontent .reciates-button-class{
    padding:30px 100px;
    width:100%;
    border-top: 1px solid #ededed;
    position:fixed;
    bottom: 0;
  }

  .combox .addtagswin{
    width: 420px;
    height: 350px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px 
      rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin: auto;
  }

  .combox .addtagswin .addtagswintitle{
    width: 420px;
    height: 60px;
    background-color: #f7f7f7;
    border-radius: 4px 4px 0px 0px;
    padding:20px;
    font-size: 16px;
    color: #5c5d66;
  }

  .combox .addtagswin .addtags-content-form{
    padding:40px;
  }
         
  .unshow{
    visibility: hidden;
    z-index: -1000;
  }

  .show{
    visibility: visible;
    z-index:1000;
  }
  </style>
  
