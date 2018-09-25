<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <Icon type="ios-pricetags-outline"></Icon>排班设置
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
      <span>
        <i-button @click="addschedu" type="primary" icon="ios-add" class="colorblue fr" style="margin-top:15px; margin-right:20px;">添加排班</i-button>
      </span>
    </div>
    <div class="comcontent">
      <div style="padding-bottom:10px;" v-for="item in schedulist" :key="item.id">
        <div class="listbox">
          <Row>
            <i-col span="6">
              <div class="spantitle">{{item.name}}</div>
              <div class="spandes">{{item.type==0?'白班':'夜班'}} {{item.start_time}}-{{item.end_time}}</div>
            </i-col>
            <i-col span="6">
              <div class="spantitle">考勤地址</div>
              <div class="spandes">
                <Poptip placement="bottom">
                    <div class="posor">{{item.check_work_site[0].address}}</div>
                    <div class="api" slot="content">
                      <div style="color:gray; line-height:30px;" v-for="i in item.check_work_site" :key="i.id">{{i.address}}</div>
                  </div>
                </Poptip>
              </div>
            </i-col>
            <i-col span="6">
              <div class="spantitle">考勤范围</div>
              <div class="spandes">有效范围{{item.check_work_site[0].scope}}米</div>
            </i-col>
            <i-col span="6" style="padding:20px;">
              <i-button @click="deleteschedues(item.id)" class="fr" style="color:red;">删除</i-button>
              <i-button @click="editschedues(item.id)" class="fr" style="color:#6680ff; margin-right:10px;">编辑</i-button>
            </i-col>
          </Row>
        </div>
      </div>
    </div>

    <Modal
        width="300"
        v-model="modalmsg"
        class-name="vertical-center-modal">
        <p slot="header" style="color:#000;text-align:left">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>您确认要删除该考勤吗！</p>
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
    data(){
      return{
        rootUrl:window.localStorage.api,
        schedulist:[],//考勤列表
        modalmsg:false,
        delid:"",//删除时需要的id号
      }
    },
    methods:{
      editschedues(_id){
        this.$router.push({name:'Editschedu',params:{id:_id}});
      },
      deleteschedues(_id){
        this.delid = _id;
        this.modalmsg = true;
      },
      ok(){
        let url = window.localStorage.api+'/check/deleteCheckWork';
        let params = new URLSearchParams();
        params.append('id',this.delid);
        this.$http.post(url,params).then(res=>{
          console.log(res);
          if(res['data'].success){
            this.success(res['data'].message);
            this.modalmsg = false;
            //重新加载数据
            this.getschedulist();
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      cancel(){
        this.modalmsg = false;
      },
      addschedu(){//添加排班
        this.$router.push({path:'/pages/company/addschedu',query:{ comid:"qqq"}});
      },
      //获取考勤列表
      getschedulist(){
        let url = window.localStorage.api+"/get/check/work";
        this.$http.get(url).then(res=>{
          console.log(res);
          this.schedulist = res['data'].message.data;
        }).catch(err=>{
          console.log(err);
        })
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
      //获取考勤列表
      this.getschedulist();
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

  .combox .comcontent .listbox{
    background-color: #ffffff;
    box-shadow: 0px 2px 6px 0px
      rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    border: solid 1px #ededed;
    padding:10px;
  }

  .combox .comcontent .listbox .spantitle{
    font-family: MicrosoftYaHei;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
    line-height: 40px;
  }

  .combox .comcontent .listbox .spandes{
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #8a8c99;
    line-height: 30px;
  }
</style>
