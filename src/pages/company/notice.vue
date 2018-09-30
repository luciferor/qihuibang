<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <Icon type="ios-pricetags-outline"></Icon>通知管理
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
    </div>
    <div class="comcontent">
        <div class="contents">
            <div class="listbox" v-for="(item,index) in noticelist" :key="index">
                <el-row>
                    <el-col :span="18">
                        <div class="list-left-title">【{{index+1}}】<span class="colorpar" style="padding-right:10px;">{{item.name}}</span>{{item.title}}......<span class="posor" style="color:#5c5d66; padding-left:10px;">点击跳转该通知详情界面</span></div>
                        <div class="list-left-content">{{item.info}} </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="list-right-box">
                            <i-switch v-model="item.status" @on-change="editstatus(item.id,item.status)">
                                <span style="color:#FFFFFF;" slot="open"><i slot="open" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-right"></i></span>
                                <span style="color:#FFFFFF;" slot="close"><i slot="close" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-error"></i></span>
                            </i-switch>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="pagelist">
            <Page :total="pageTotal" :current="pageNum" v-model="pageNum" :show-total="true" @on-change="getpagescontents" />
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        rootUrl:window.localStorage.api,
        noticelist:[],//通知列表
        pageTotal: 0,
        pageNum: 1,
      }
    },
    methods:{
        //分页事件
        getpagescontents(){
            let url = window.localStorage.api+'/get/admin/getNoticeList?page='+page;
            this.$http.get(url).then(res=>{
                this.pageTotal = res['data'].message.total,
                this.dynamiclist = res['data'].message.data;
            }).catch(err=>{
                //console.log(err);
            })
        },
        //编辑通知状态
        editstatus(_id,_status){
            console.log(_status);
            let url = window.localStorage.api+'/admin/saveNoticeLisetStatus';
            let params = new URLSearchParams();
            params.append('id',_id);
            params.append('value',_status?1:0);
            this.$http.post(url,params).then(res=>{
                //console.log(res);
                if(res['data'].success){
                    this.success(res['data'].message);
                }
            }).catch(err=>{
                //console.log(err);
            })
        },
        //获取通知列表
        getnoticelist(){
            let url = window.localStorage.api+'/get/admin/getNoticeList';
            this.$http.get(url).then(res=>{
                //console.log(res);
                this.noticelist = res['data'].message.data;
                this.pageTotal= res['data'].message.total;
            }).catch(err=>{
                //console.log(err);
            })
        },
        success(_str){
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

      //获取通知列表
      this.getnoticelist();
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
    height:calc(100% - 62px);
  }

  .combox .comcontent .contents{
      height:calc(100% - 80px);
  }

  .combox .comcontent .contents  .listbox{
      width:100%;
      overflow: hidden;
      background-color: #ffffff;
	  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
	  border-radius: 4px;
	  border:solid 1px #ededed;
      padding: 10px;
  }


  .combox .comcontent .contents .listbox  .list-left-title{
      line-height: 40px;
      font-size: 16px;
      color:#2e2f33;
      overflow: hidden;
  }

  .combox .comcontent .contents .listbox .list-left-content{
      overflow: hidden;
      line-height: 30px;
      padding-left: 40px;
      color:#b8bbcc;
  }

  .combox .comcontent .contents .listbox .list-right-box{
      height:100px;
      padding:37.5px 10px;
      text-align: right;
  }

  .combox .comcontent .pagelist{
      text-align: center;
      padding:20px;
  }
</style>
