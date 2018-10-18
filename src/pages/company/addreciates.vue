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
            <span class="posor" @click="openshelpwin"><img src="../../assets/iMenu/sMenu/icon_bangzhu.png" /></span>
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
                      <el-input placeholder="请输入要分配的邦分数量" v-model="subdata.score_num" size="small">
                        <template slot="append">邦分/人</template>
                      </el-input>
                    </span>
                  </div>
                  <div class="reciates-from-des-class">
                    <span class="spanleft">分配部门</span>
                    <span class="spanright">
                      <i-select @on-change="test" placeholder="选择成员" v-model="subdata.department">
                        <i-option :value="0">全部成员</i-option>
                        <i-option v-for="item in deplist" :key="item.id" :value="item.id">{{item.name}}</i-option>
                      </i-select>
                    </span>
                  </div>
                  <div class="reciates-from-des-class">
                    <span class="spanleft">&nbsp;</span>
                    <span class="spanright">
                      <i-switch class="fl" v-model="subdata.isrank">
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
                      <el-input class="fl" v-model="subdata.min_range" style="width:80px;" placeholder="开始" size="small" />
                      <span class="fl" style="line-height:30px; font-size:14px; padding:0 10px;"> 至 </span>
                      <el-input class="fl" v-model="subdata.max_range" style="width:80px;" placeholder="结束" size="small" />
                      <span class="fl" style="line-height:30px; font-size:14px; padding-left:10px;">邦分</span>
                    </span>
                  </div>
                  <div class="reciates-from-des-class">
                    <span class="spanleftone">邦分适用时间</span>
                    <span class="spanrightone">
                      <DatePicker v-model="subdata.effective_time" type="month" placeholder="请选择月份" style="width: 195px"></DatePicker>
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
            <span @click="openbfzswin" class="fl" style="padding-left:7px;"><img class="posor" src="../../assets/iMenu/sMenu/icon_bangzhu.png" /></span>
          </div>
          <div class="reciates-tags-list-class">
            <div class="reciates-tages-list-title-class fl">
              <span style="display:block; width:70px; height:30px; line-height:30px; border-right:1px solid #ededed;">赞赏标签</span>
            </div>
            <div class="reciates-tags-list-des-class fl">
              <el-tag @close="deltags(index)" v-for="(item,index) in tagslist" :key="index" class="colorpar" style="background:#f5f6ff; margin-right:5px;" closable :disable-transitions="false" >
                {{item.content}}
              </el-tag>
              <el-button @click="openaddtagswin" class="button-new-tag" size="small" >+ 添加标签</el-button>
            </div>
          </div>
        </div>
        <div class="reciates-button-class">
          <el-button @click="savereciatesing" type="primary" style="width:150px;" class="backgroundpar">保存</el-button>
        </div>
      </div>
    </div>

    <div class="addtagswin unshow">
      <div class="addtagswintitle">
        <span class="fl">添加赞赏标签</span>
        <span @click="closeaddtagswin" class="fr posor"><img src="../../assets/delete.png" /></span>
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


    <div class="bfhelp unshow" v-drag @mousedown="clearmargin">
      <div class="helptitle pomove">
        <span class="fl">分配邦分帮助</span>
        <span @click="closehelpwin" class="fr posor"><img src="../../assets/delete.png" /></span>
      </div>
      <div class="helpcontent">
        <el-scrollbar style="height:100%;">
          <div>
            <div style="color:#6680ff;">1.可分配邦分来源</div>
            <div>分配邦分功能为付费功能，用户向消汇邦购买该服务，相应的邦分会有相应的价格。</div>
            <div style="height:30px; overflow:hidden;"></div>
            <div style="color:#6680ff;">2.选项设置</div>
            <div>A.分配数量：分配给每一个人的可赠送邦分</div>
            <div>B.分配部门：管理员分配到想分配的部门</div>
            <div>C.邦分互赠范围：APP中赠送邦分的阀值</div>
            <div>D.适用时间：当前设置的适用时间段（以月为单位）</div>
            <div>E.赞颂邦分是否参与排名：APP中自我管理和每日任务得到的邦分会有一个排行榜，此开关管控制赞赏的邦分是否参与前面说的排行榜（即总排行榜）。</div>
            <div></div>
            <div></div>
          </div>
        </el-scrollbar>
      </div>
      <div class="helpunder">
        <el-button @click="closehelpwin" size="small" type="primary" class="backgroundpar" style="width:150px; heigh:40px;">好的</el-button>
      </div>
    </div>

    <div class="bfzshelp unshow" v-drag>
      <div class="bfzstitle pomove">
        <span>设置赞赏类型</span>
        <span @click="closebfzswin" class="fr posor"><img src="../../assets/delete.png" /></span>
      </div>
      <div class="bfzscontent">
          <el-scrollbar style="height:100%;">
            <div>
              <div>1.赞赏类型即企业价值观，可根据企业文化来做相应的标签说明。</div>
              <div style="height:25px;"></div>
              <div>2.赞赏类型最多可以添加10个，最少添加一个，初始状态显示一个，提供给管理者参考。</div>
              <div style="height:25px;"></div>
              <div>3.赞赏类型框内文字主要以体现企业价值为主，主要输入符号，表情等。最多文字不可超过8个，最少不可小于1个</div>
            </div>
          </el-scrollbar>
      </div>
      <div class="bfzsunder">
          <el-button @click="closebfzswin" size="small" type="primary" class="backgroundpar" style="width:150px; heigh:40px;">好的</el-button>
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
        deplist:[],//获取的部门
        subdata:{
          score_num:0,//分配数量
          department:'',//部门
          min_range:0,//互赠范围最小值
          max_range:0,//互赠范围最大值
          effective_time:'',//适用时间
          praise_type:Object,//赞赏类型json对象
          isrank:true,//是否参与排名
        }
      }
    },
    methods:{
      test(){
        console.log(this.subdata.department);
      },
      openbfzswin(){
        $('.bfzshelp').addClass('animated zoomInLeft show addmargin');
      },
      closebfzswin(){
        $('.bfzshelp').removeClass('animated zoomInLeft show addmargin');
      },
      clearmargin(){
        $('.bfhelp').removeClass('addmargin');
      },
      openshelpwin(){
        $('.bfhelp').addClass('animated zoomInLeft show addmargin');
      },
      closehelpwin(){
        $('.bfhelp').removeClass('animated zoomInLeft show addmargin');
      },
      savereciatesing(){//保存
        let url = window.localStorage.api+'/allocation/appreciate';
        let params = new URLSearchParams();
        params.append('isrank',this.subdata.isrank==true?1:0);//是否参与排名(0:不参与1:参与)
        params.append('score',this.subdata.score_num);//分配数量
        params.append('department_id',this.subdata.department);//部门id(所有部门0)
        params.append('range_min',this.subdata.min_range);//邦分互赠范围(最小数)
        params.append('range_max',this.subdata.max_range);//邦分互赠范围(最大数)
        params.append('effective_time',Math.round(Date.parse(this.subdata.effective_time)/1000));//适用时间(适用月的时间戳)
        params.append('praise',JSON.stringify(this.tagslist));//赞赏类型(类型名称1-20字之间),类型标识:content
        this.$http.post(url,params).then(res=>{
          this.noticemsg(res['data'].message);
        }).catch(err=>{
          this.noticemsg('网络错误,请稍后重试!')
        })
        console.log("保存");
      },
      goback(){//返回赞赏设置
        this.$router.push({path:'/pages/company/reciatesettings'});
      },
      openaddtagswin(){//打开添加标签窗口
        if(this.tagslist.length<10){
          $('.addtagswin').addClass('animated zoomInLeft show');
        }else{
          this.noticemsg('够了够了，别闹！');
        }
      },
      closeaddtagswin(){//关闭添加标签窗口
        $('.addtagswin').removeClass('animated zoomInLeft show');
      },
      savetags(){//保存标签
        if(this.tagsvalue==""){
          this.noticemsg('您需要输入一个文字才能作为标签')
          return;
        }
        //检测是否存在相同的值，存在就不需要添加了
        for(let i=0;i<this.tagslist.length;i++){
          if(this.tagslist[i].content==this.tagsvalue){
            this.noticemsg('请不要重复输入相同的标签！');
            return;
          }
        }
        this.tagslist.push({'content':this.tagsvalue});
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
      },
      getdepartment(){//获取部门
        let url = window.localStorage.api+"/organization/getDepartment";
        this.$http.get(url).then(res=>{
          this.deplist = res['data'].message.department;
          //console.log(this.deplist);
        }).catch(err=>{
          //console.log(err);
        })
      },
      gettagsing(){//获取默认标签
        let url = window.localStorage.api+'/get/template/appreciate';
        this.$http.get(url).then(res=>{
          let item = res['data'].message;
          for (let i = 0; i < item.length; i++) {
            this.tagslist.push({'content':item[i].title});
            
          }
          console.log(this.tagslist)
        }).catch(err=>{
          this.noticemsg('网络错误,请稍后重试！');
        })
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

      this.getdepartment();//获取部门
      this.gettagsing();//获取默认标签
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


  .combox   .bfhelp{
    width: 555px;
    height: 482px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px 
      rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    position: absolute;
    left:-281px;
    top:0;
    right:0;
    bottom: 0;
    margin:auto;
    z-index: 1000; 
  }

  .combox .bfhelp .helptitle{
    width: 555px;
    height: 61px;
    background-color: #f7f7f7;
    border-radius: 4px 4px 0px 0px;
    line-height: 61px;
    font-size: 18px;
    color: #5c5d66;
    padding:0 20px;

  }

  .combox .bfhelp .helpcontent{
    width:555px;
    height: calc(100% - 141px);
    padding:40px;
  }

  .combox .bfhelp .helpcontent div{
    font-size:14px;
    color:#5c5d66;
  }

  .combox .bfhelp .helpunder{
    height: 80px;
    text-align: center;
    line-height: 40px;
  }

  /*-=====================================*/
    .combox   .bfzshelp{
    width: 555px;
    height: 378px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px 
      rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    position: absolute;
    left:-281px;
    top:0;
    right:0;
    bottom: 0;
    margin:auto;
    z-index: 1000; 
  }

  .combox .bfzshelp .bfzstitle{
    width: 555px;
    height: 61px;
    background-color: #f7f7f7;
    border-radius: 4px 4px 0px 0px;
    line-height: 61px;
    font-size: 18px;
    color: #5c5d66;
    padding:0 20px;

  }

  .combox .bfzshelp .bfzscontent{
    width:555px;
    height: calc(100% - 141px);
    padding:40px;
  }

  .combox .bfzshelp .bfzscontent div{
    font-size:14px;
    color:#5c5d66;
  }

  .combox .bfzshelp .bfzsunder{
    height: 80px;
    text-align: center;
    line-height: 40px;
  }


         
  .unshow{
    visibility: hidden;
    z-index: -1000;
  }

  .show{
    visibility: visible;
    z-index:1000;
  }

  .addmargin{
    margin: auto;
  }

  </style>
  
<style>
.ivu-switch-checked {
  border-color: #6680ff !important;
  background-color: #6680ff !important;
}
</style>
  