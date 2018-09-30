<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <Icon type="ios-pricetags-outline"></Icon>福利设置
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
    </div>
    <div class="comcontent">
      <div class="welfaretop">
        <Row>
          <i-col span="12">
            <div class="imgbox fl"><img src="../../assets/iMenu/contents/banner_01.png"/></div>
          </i-col>
          <i-col span="12">
            <div class="imgbox fr"><img src="../../assets/iMenu/contents/banner_02.png" /></div>
          </i-col>
        </Row>
      </div>
      
      <div class="welfaretitle">
        <i-button @click="addwalfare"><i class="iconfont icon-icon--"></i>添加奖品</i-button>
      </div>

      <div class="welfarecontent">
        <Tabs active-key="key1" size="small" v-model="selectedkey" @on-click="selectedclick">
          <Tab-pane label="日奖品" key="key1">
            <div class="welfare-listbox" v-show="item.type=='day'" v-for="item in listdata" :key="item.index">
              <div class="imgbox fl">
                <img :src="item.img==''?rootImg:rootUrl+item.img" width="80" height="80" />
              </div>
              <div class="titlebox fl">
                <div class="titlebox-top">{{item.prize_obj}}</div>
                <div class="titlebox-under">价值：￥{{item.price}}</div>
              </div>
              <div class="btnbox fr">
                <i-button style="color:#6680ff;" @click="addwalfaredit(item.id,item.name,item.price,item.prize_obj,item.img)">编辑</i-button>
                <i-button @click="deletewelfare(item.id)" style="color:#ff6666;">删除</i-button>
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="周奖品" key="key2">
            <div class="welfare-listbox" v-show="item1.type=='week'" v-for="item1 in listdata" :key="item1.index">
              <div class="imgbox fl">
                <img :src="item1.img==''?rootImg:rootUrl+item1.img" width="80" height="80" />
              </div>
              <div class="titlebox fl">
                <div class="titlebox-top">{{item1.prize_obj}}</div>
                <div class="titlebox-under">价值：￥{{item1.price}}</div>
              </div>
              <div class="btnbox fr">
                <i-button style="color:#6680ff;" @click="addwalfaredit(item1.id,item1.name,item1.price,item1.prize_obj,item1.img)">编辑</i-button>
                <i-button @click="deletewelfare(item1.id)" style="color:#ff6666;">删除</i-button>
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="月奖品" key="key3">
            <div class="welfare-listbox" v-show="item2.type=='month'" v-for="item2 in listdata" :key="item2.index">
              <div class="imgbox fl">
                <img :src="item2.img==''?rootImg:rootUrl+item2.img" width="80" height="80" />
              </div>
              <div class="titlebox fl">
                <div class="titlebox-top">{{item2.prize_obj}}</div>
                <div class="titlebox-under">价值：￥{{item2.price}}</div>
              </div>
              <div class="btnbox fr">
                <i-button style="color:#6680ff;" @click="addwalfaredit(item2.id,item2.name,item2.price,item2.prize_obj,item2.img)">编辑</i-button>
                <i-button @click="deletewelfare(item2.id)" style="color:#ff6666;">删除</i-button>
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="邦分权益" key="key4" icon="social-tux">
            <div class="welfare-listbox" v-show="item3.type=='rights'" v-for="item3 in listdata" :key="item3.index">
              <div class="imgbox fl">
                <img :src="item3.img==''?rootImg:rootUrl+item3.img" width="80" height="80" />
              </div>
              <div class="titlebox fl">
                <div class="titlebox-top">{{item3.prize_obj}}</div>
                <div class="titlebox-under">价值：￥{{item3.price}}</div>
              </div>
              <div class="btnbox fr">
                <i-button style="color:#6680ff;" @click="addwalfaredit(item3.id,item3.name,item3.price,item3.prize_obj,item3.img)">编辑</i-button>
                <i-button @click="deletewelfare(item3.id)" style="color:#ff6666;">删除</i-button>
              </div>
            </div>
          </Tab-pane>
        </Tabs>
      </div>
    </div>
    <div class="addwelfare unshow" >
      <div class="addwelfare-title">
        <span class="fl">&nbsp;&nbsp;&nbsp;&nbsp;添加奖品</span>
        <span class="fr" style="padding-right:10px;"><el-button @click="coloseaddwalfare" type="text"><img src="../../assets/delete.png" /></el-button></span>
      </div>
      <div class="addwelfare-content">
        <div>

          <div class="boxlist">
            <div class="list-content fl">
              <div class="list-content-img fl"><img :src="addlist.daywelf==''||addlist.daywelf=='暂无上传图片'?rootImg:rootUrl+addlist.daywelf" /></div>
              <div class="list-content-upbtn fl">
                <span style="font-weight:bold; display:block;">上传奖品图</span>
                <div style="height:10px"></div>
                <span style="color:gray; display:block;">{{addlist.daywelf}}</span>
                <div style="height:10px"></div>
                <span style="display:block;">
                  <Upload ref="upload" :show-upload-list="false" :format="['jpg','jpeg','png']" :before-upload="addhandleBeforeUpload"  action="/" :on-format-error="handleFormatError">
                      <i-button style="background:#6680ff; color:white;" icon="ios-cloud-upload-outline">选择文件</i-button>
                  </Upload>
                </span>
              </div>
            </div>
          </div>

          <div class="linecenter"></div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-content">
              <span class="spanlist fl">奖品</span>
              <span class="spanlist fl"><i-input style="width:195px;" placeholder="请输入奖品名称..." v-model="addlist.walfname"></i-input></span>
            </div>
          </div>
          <!--列表结束-->
          <div class="boxlist">
            <div class="list-content">
              <span class="spanlist fl">价值</span>
              <span class="spanlist fl"><Input-number v-model="addlist.pricest"></Input-number></span>
              <span class="spanlist fl">至</span>
              <span class="spanlist fl"><Input-number v-model="addlist.priceed"></Input-number></span>
            </div>
          </div>
          <!--列表结束-->
          <div class="linecenter"></div>
          <!--列表结束-->
          <div class="boxlist">
            <div class="list-content fr">
              <span class="spanlist fr"><i-button  class="backgroundpar" @click="addwalfareinfos">保 存</i-button></span>
              <span class="spanlist fr"><i-button @click="coloseaddwalfare" style="color:gray;">取 消</i-button></span>
            </div>
          </div>
          <!--列表结束-->

        </div>
      </div>
    </div>

    <div class="addwelfaredit unshow" >
      <div class="addwelfare-title">
        <span class="fl">&nbsp;&nbsp;&nbsp;&nbsp;编辑奖品</span>
        <span class="fr" style="padding-right:10px;"><el-button @click="coloseaddwalfaredit" type="text"><img src="../../assets/delete.png" /></el-button></span>
      </div>
      <div class="addwelfare-content">
        <div>

          <div class="boxlist">
            <div class="list-content fl">
              <div class="list-content-img fl"><img :src="editlist.edaywelf==''||editlist.edaywelf=='暂无上传图片'?rootImg:rootUrl+editlist.edaywelf" /></div>
              <div class="list-content-upbtn fl">
                <span style="font-weight:bold; display:block;">上传奖品图</span>
                <div style="height:10px"></div>
                <span style="color:gray; display:block;">{{editlist.edaywelf}}</span>
                <div style="height:10px"></div>
                <span style="display:block;">
                  <Upload ref="upload" :show-upload-list="false" :format="['jpg','jpeg','png']" :before-upload="edithandleBeforeUpload"  action="/" :on-format-error="handleFormatError">
                      <i-button style="background:#6680ff; color:white;" icon="ios-cloud-upload-outline">选择文件</i-button>
                  </Upload>
                </span>
              </div>
            </div>
          </div>

          <div class="linecenter"></div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-content">
              <span class="spanlist fl">奖品</span>
              <span class="spanlist fl"><el-input size="small" style="width:195px;" placeholder="请输入奖品名称..." v-model="editlist.ewalfname"></el-input></span>
            </div>
          </div>
          <!--列表结束-->
          <div class="boxlist">
            <div class="list-content">
              <span class="spanlist fl">价值</span>
              <span class="spanlist fl"><Input-number v-model="editlist.epricest"></Input-number></span>
              <span class="spanlist fl">至</span>
              <span class="spanlist fl"><Input-number v-model="editlist.epriceed"></Input-number></span>
            </div>
          </div>
          <!--列表结束-->
          <div class="linecenter"></div>
          <!--列表结束-->
          <div class="boxlist">
            <div class="list-content fr">
              <span class="spanlist fr"><i-button @click="saveeditinformations"  class="backgroundpar">保 存</i-button></span>
              <span class="spanlist fr"><i-button @click="coloseaddwalfaredit" style="color:gray;">取 消</i-button></span>
            </div>
          </div>
          <!--列表结束-->

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
            <p>您确认要删除该奖品吗！</p>
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
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
        delid:0,//删除时需要的标识
        modalmsg:false,//显示是否删除框
        listdata:Object,//数据
        selectedkey:'key1',
        addlist:{
          daywelf:'',//奖品图片
          walfname:'',//奖品名称
          pricest:0,//奖品低价
          priceed:0//奖品高价
        },
        editlist:{
          edaywelf:'',//奖品图片
          ewalfname:'',//奖品名称
          epricest:0,//奖品低价
          epriceed:0,//奖品高价
          eid:0//id
        }
      }
    },
    methods:{
      ok(){
        let url = window.localStorage.api+'/delete/prize';
          let params = new URLSearchParams();
          params.append('id',this.delid);
          this.$http.post(url,params).then(res=>{
            console.log(res);
            if(res['data'].success){
              this.success(res['data'].message);
              //刷新数据
              this.loadinginfosforall();
              //将id清空，
              this.delid = 0;
              this.modalmsg = false;
            }else{
              this.error(res['data'].message);
            }
          }).catch(err=>{
            console.log(err);
            this.error('网络错误，请稍后重试!'+err);
          })
      },
      cancel(){
        this.modalmsg = false;
      },
      deletewelfare(_id){//删除福利
          this.modalmsg = true;
          this.delid = _id;
      },
      addwalfare(){//显示添加窗口
        $('.addwelfare').addClass('show animated fadeIn');
        $('.addwelfaredit').removeClass('show animated fadeIn');
      },
      coloseaddwalfare(){//关闭添加窗口 
        $('.addwelfare').removeClass('show animated fadeIn');
      },
      addwalfaredit(_id,_name,_price,_des,_img){//显示编辑窗口
        let arr = _price.split('-');
        this.editlist.eid = Number(_id);
        this.editlist.edaywelf = _img;
        this.editlist.ewalfname = _des;
        this.editlist.epricest = Number(arr[0]);
        this.editlist.epriceed = Number(arr[1]);
        $('.addwelfaredit').addClass('show animated fadeIn');
        $('.addwelfare').removeClass('show animated fadeIn');
      },
      saveeditinformations(){
          if(this.selectedkey=="key1"||this.selectedkey==0){//编辑日奖品
            //console.log('编辑日奖品');
            this.addpost("day","日奖品",this.editlist.ewalfname,this.editlist.edaywelf,this.editlist.epricest+"-"+this.editlist.epriceed,this.editlist.eid);
            $('.addwelfaredit').removeClass('show animated fadeIn');
          }
          if(this.selectedkey==1){//编辑周奖品
            //console.log('编辑周奖品');
            this.addpost("week","周奖品",this.editlist.ewalfname,this.editlist.edaywelf,this.editlist.epricest+"-"+this.editlist.epriceed,this.editlist.eid);
            $('.addwelfaredit').removeClass('show animated fadeIn');
          }
          if(this.selectedkey==2){//编辑月奖品
            //console.log("编辑月奖品");
            this.addpost("month","月奖品",this.editlist.ewalfname,this.editlist.edaywelf,this.editlist.epricest+"-"+this.editlist.epriceed,this.editlist.eid);
            $('.addwelfaredit').removeClass('show animated fadeIn');
          }
          if(this.selectedkey==3){//编辑权益
            //console.log("编辑权益");
            this.addpost("rigths",this.editlist.ewalfname,this.editlist.ewalfname,this.editlist.edaywelf,this.editlist.epricest+"-"+this.editlist.epriceed,this.editlist.eid);
            $('.addwelfaredit').removeClass('show animated fadeIn');
          }
      },
      coloseaddwalfaredit(){//关闭编辑窗口
        $('.addwelfaredit').removeClass('show animated fadeIn');
      },
      selectedclick(){
        //console.log(this.selectedkey);
      },
        //--上传图片--------------------------------------------
        addhandleBeforeUpload(file) {//logo
          this.uploadimg(file,'add');
        },
        edithandleBeforeUpload(file) {//logo
          this.uploadimg(file,'edit');
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
            if(_type=="add"){
              this.addlist.daywelf = res['data'].message.fileurl;
            }else{
              this.editlist.edaywelf=res['data'].message.fileurl;
            }
            //console.log(res['data'].message.fileurl);
            
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
        addwalfareinfos(){//添加奖品
          let atype = '';
          if(this.selectedkey=="key1"||this.selectedkey==0){//添加日奖品
            this.addpost('day',"日奖品",this.addlist.walfname,this.addlist.daywelf,this.addlist.pricest+"-"+this.addlist.priceed,"");

          }
          if(this.selectedkey==1){//添加周奖品
            this.addpost('week',"周奖品",this.addlist.walfname,this.addlist.daywelf,this.addlist.pricest+"-"+this.addlist.priceed,"");
            
          }
          if(this.selectedkey==2){//添加月奖品
            this.addpost('month',"月奖品",this.addlist.walfname,this.addlist.daywelf,this.addlist.pricest+"-"+this.addlist.priceed,"");
            
          }
          if(this.selectedkey==3){//福利权益
            this.addpost('rights',this.addlist.walfname,this.addlist.walfname,this.addlist.daywelf,this.addlist.pricest+"-"+this.addlist.priceed,"");
            
          }
        },
        addpost(_type,_name,_des,_img,_price,_id){
          let addurl = window.localStorage.api+'/update/prize';
          let params = new URLSearchParams();
          params.append('id',_id);//奖品id，添加时传空
          params.append('type',_type);//类型，day；week；month；rights（权益
          params.append('name',_name);//奖品名称
          params.append('prize_obj',_des);//奖品描述
          params.append('img',_img);//奖品图片
          params.append('price',_price);//奖品价值
          this.$http.post(addurl,params).then(res=>{
            //console.log(res);
            if(res['data'].success){
              this.success('操作成功！');
              //清空填写的数据
              this.addlist.daywelf='暂无图片'//奖品图片
              this.addlist.walfname="";//奖品名称
              this.addlist.pricest=0;//奖品低价
              this.addlist.priceed=0//奖品高价
              this.coloseaddwalfare();//关闭弹出框
              //重新加载数据
              this.loadinginfosforall();
            }
          }).catch(err=>{
            //console.log(err);
          })
        },
        loadinginfosforall(){
          let geturl = window.localStorage.api+"/prize/query";
          this.$http.get(geturl).then(res=>{
            //console.log(res);
            this.listdata=res['data'].message;
            //console.log(this.listdata);
          }).catch(err=>{
            //console.log(err);
          })  
        }
    },
    mounted(){
      //验证是否登录
      if(!window.sessionStorage.status){
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path:'/pages/login'});
        return;
      }
      //页面启动动画
      $('combox').addClass('animated lightSpeedIn');
      //console.log(this.selectedkey);
      this.loadinginfosforall();//加载所有数据
    },
    
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

  .combox .comcontent .welfaretitle{
    text-align: right;
    padding-top:30px;
  }
  .combox .comcontent .welfaretop{
    overflow: hidden;
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
    padding-top:10px;
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
  .combox .comcontent .welfarecontent .welfare-listbox .titlebox{
    heigth:80px;
    padding-left:10px;
  }

  .combox .comcontent .welfarecontent .welfare-listbox .titlebox .titlebox-top{
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
    line-height: 40px;
  }

  .combox .comcontent .welfarecontent .welfare-listbox .titlebox .titlebox-under{
    height: 40px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #8a8c99;
    line-height: 40px;
  }
  .combox .comcontent .welfarecontent .welfare-listbox .btnbox{
    height: 80px;
    width:160px;
    text-align: center;
    line-height: 80px;
  }

  .combox .addwelfare{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin:auto;
    width: 400px;
    height: 459px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px 
      rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    z-index:1000;
  }

  .combox .addwelfare .addwelfare-title{
    height: 50px;
    width:100%;
    line-height: 50px;
    background-color: #ededed;
    border-radius: 5px 5px 0px 0px;
  }

  .combox .addwelfare .addwelfare-title span{
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #5c5d66;
  }


  .combox .addwelfare .addwelfare-content{
    height:calc(100% - 50px);
    width:100%;
    padding:30px;
  }



   .combox .addwelfare .addwelfare-content .boxlist{
    padding:10px;
    overflow: hidden;
    width:100%;
  }


  .combox .addwelfare .addwelfare-content .boxlist .list-content{
    overflow: hidden;
    width:100%;
  }

   .combox .addwelfare .addwelfare-content .boxlist .list-content .spanlist{
    display: block;
    line-height: 40px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
    padding-right:10px;
    
  }

   .combox .addwelfare .addwelfare-content .boxlist .list-content .list-content-img{
    margin-right:10px;
  }
   .combox .addwelfare .addwelfare-content .boxlist .list-content .list-content-img img{
    width:88px;
    height:88px;
  }

   .combox .addwelfare .addwelfare-content .boxlist .list-content-upbtn span{
    text-align: center;
  }


  .combox .addwelfaredit{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin:auto;
    width: 400px;
    height: 459px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px 
      rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    z-index:1000;
  }

  .combox .addwelfaredit .addwelfare-title{
    height: 50px;
    width:100%;
    line-height: 50px;
    background-color: #ededed;
    border-radius: 5px 5px 0px 0px;
  }

  .combox .addwelfaredit .addwelfare-title span{
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #5c5d66;
  }


  .combox .addwelfaredit .addwelfare-content{
    height:calc(100% - 50px);
    width:100%;
    padding:30px;
  }



   .combox .addwelfaredit .addwelfare-content .boxlist{
    padding:10px;
    overflow: hidden;
    width:100%;
  }


  .combox .addwelfaredit .addwelfare-content .boxlist .list-content{
    overflow: hidden;
    width:100%;
  }

   .combox .addwelfaredit .addwelfare-content .boxlist .list-content .spanlist{
    display: block;
    line-height: 40px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
    padding-right:10px;
    
  }

   .combox .addwelfaredit .addwelfare-content .boxlist .list-content .list-content-img{
    margin-right:10px;
  }
   .combox .addwelfaredit .addwelfare-content .boxlist .list-content .list-content-img img{
    width:88px;
    height:88px;
  }

   .combox .addwelfaredit .addwelfare-content .boxlist .list-content-upbtn span{
    text-align: center;
  }


  .unshow{
    visibility: hidden;
  }

  .show{
    visibility: visible;
  }
  </style>

  <style lang="scss">
    //设置提示框垂直居中
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
          top: 0;
        }
    }
  </style>
  
