<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
        <span class="fl">
            <Breadcrumb>
                <Breadcrumb-item href="/components/breadcrumb">
                    <Icon type="ios-pricetags-outline"></Icon><el-button @click="returennext" style="color:gray;" type="text">组织架构</el-button>
                </Breadcrumb-item>
                <Breadcrumb-item>
                    <Icon type="ios-pricetags-outline"></Icon> 部门管理
                </Breadcrumb-item>
            </Breadcrumb>
        </span>
        <span class="fr">
            <i-button @click="adddepartments" type="primary" icon="ios-add" class="colorblue fr"  style="margin-top:15px; margin-right:20px;">添加部门</i-button>
        </span>
    </div>
    <div class="comcontent">
        <div class="comcontent-list">
            <ul>
               <li v-for="item in deplist" :key="item.id" v-if="item.pid==0&&item.level==0">
                   <span :id="'span'+item.id" class="fl"><img class="fl" :id="'img'+item.id" src="../../assets/right.png" /><el-input class="fl" @blur="saveedit(item.id,item.name)" v-show="item.id==isid?true:false" v-model="item.name" placeholder="请输入..." style="width:200px;"></el-input><label class="posor" @click="thescale(item.id)" v-show="item.id==isid?false:true">{{item.name}}</label><el-button @click="deletedep(item.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(item.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                   <ul class="ulhid" :id="item.id">
                       <li v-for="items in deplist" :key="items.id" v-if="items.pid==item.id&&items.level==1">
                           <span :id="'span'+items.id" class="fl"><img class="fl" :id="'img'+items.id" src="../../assets/right.png" /><el-input class="fl" @blur="saveedit(items.id,items.name)" v-show="items.id==isid?true:false" v-model="items.name" placeholder="请输入..." style="width:200px;"></el-input><label class="posor" @click="thescale(items.id)" v-show="items.id==isid?false:true">{{items.name}}</label><el-button @click="deletedep(items.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(items.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                            <ul class="ulhid" :id="items.id">
                                <li v-for="itemss in deplist" :key="itemss.id" v-if="itemss.pid===items.id&&itemss.level===2">
                                    <span :id="'span'+itemss.id" class="fl"><img class="fl" :id="'img'+itemss.id" src="../../assets/right.png" /><el-input class="fl" @blur="saveedit(itemss.id,itemss.name)" v-show="itemss.id==isid?true:false" v-model="itemss.name" placeholder="请输入..." style="width:200px;"></el-input><label class="posor" @click="thescale(itemss.id)" v-show="itemss.id==isid?false:true">{{itemss.name}}</label><el-button @click="deletedep(itemss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                    <ul class="ulhid" :id="itemss.id">
                                        <li v-for="itemsss in deplist" :key="itemsss.id" v-if="itemsss.pid==itemss.id&&itemsss.level==3">
                                            <span :id="'span'+itemsss.id" class="fl"><img class="fl" :id="'img'+itemsss.id" src="../../assets/right.png" /><el-input class="fl" @blur="saveedit(itemsss.id,itemsss.name)" v-show="itemsss.id==isid?true:false" v-model="itemsss.name" placeholder="请输入..." style="width:200px;"></el-input><label class="posor" @click="thescale(itemsss.id)" v-show="itemsss.id==isid?false:true">{{itemsss.name}}</label><el-button @click="deletedep(itemsss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemsss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                            <ul class="ulhid" :id="itemsss.id">
                                                <li v-for="itemssss in deplist" :key="itemssss.id" v-if="itemssss.pid==itemsss.id&&itemssss.level==4">
                                                    <span :id="'span'+itemssss.id" class="fl"><img class="fl" :id="'img'+itemssss.id" src="../../assets/right.png" /><el-input class="fl" @blur="saveedit(itemssss.id,itemssss.name)" v-show="itemssss.id==isid?true:false" v-model="itemssss.name" placeholder="请输入..." style="width:200px;"></el-input><label class="posor" @click="thescale(itemssss.id)" v-show="itemssss.id==isid?false:true">{{itemssss.name}}</label><el-button @click="deletedep(itemssss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemssss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                                    <ul class="ulhid" :id="itemssss.id">
                                                        <li v-for="itemsssss in deplist" :key="itemsssss.id" v-if="itemsssss.pid==itemssss.id&&itemsssss.level==5">
                                                            <span :id="'span'+itemsssss.id" class="fl"><img class="fl" :id="'img'+itemsssss.id" src="../../assets/right.png" /><el-input class="fl" @blur="saveedit(itemsssss.id,itemsssss.name)" v-show="itemsssss.id==isid?true:false" v-model="itemsssss.name" placeholder="请输入..." style="width:200px;"></el-input><label class="posor" @click="thescale(itemsssss.id)" v-show="itemsssss.id==isid?false:true">{{itemsssss.name}}</label><el-button @click="deletedep(itemsssss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemsssss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                                            <ul class="ulhid" :id="itemsssss.id">
                                                                <li v-for="itemssssss in deplist" :key="itemssssss.id" v-if="itemssssss.pid==itemsssss.id&&itemssssss.level==6">
                                                                    <span :id="'span'+itemssssss.id" class="fl"><img class="fl" :id="'img'+itemssssss.id" src="../../assets/right.png" /><el-input class="fl" @blur="saveedit(itemssssss.id,itemssssss.name)" v-show="itemssssss.id==isid?true:false" v-model="itemssssss.name" placeholder="请输入..." style="width:200px;"></el-input><label class="posor" @click="thescale(itemssssss.id)" v-show="itemssssss.id==isid?false:true">{{itemssssss.name}}</label><el-button @click="deletedep(itemssssss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemssssss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                                                    <ul class="ulhid" :id="itemssssss.id">
                                                                        <li v-for="itemsssssss in deplist" :key="itemsssssss.id" v-if="itemsssssss.pid==itemssssss.id&&itemsssssss.level==7">
                                                                            <span :id="'span'+itemsssssss.id" class="fl"><img class="fl" :id="'img'+itemsssssss.id" src="../../assets/right.png" /><el-input class="fl" @blur="saveedit(itemsssssss.id,itemsssssss.name)" v-show="itemsssssss.id==isid?true:false" v-model="itemsssssss.name" placeholder="请输入..." style="width:200px;"></el-input><label class="posor" @click="thescale(itemsssssss.id)" v-show="itemsssssss.id==isid?false:true">{{itemsssssss.name}}</label><el-button @click="deletedep(itemsssssss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemsssssss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                                                            <ul class="ulhid" :id="itemsssssss.id">
                                                                                <li v-for="itemssssssss in deplist" :key="itemssssssss.id" v-if="itemssssssss.pid==itemsssssss.id&&itemssssssss.level==8">
                                                                                    <span :id="'span'+itemssssssss.id" class="fl"><img class="fl" :id="'img'+itemssssssss.id" src="../../assets/right.png" /><el-input class="fl" @blur="saveedit(itemssssssss.id,itemssssssss.name)" v-show="itemssssssss.id==isid?true:false" v-model="itemssssssss.name" placeholder="请输入..." style="width:200px;"></el-input><label class="posor" @click="thescale(itemssssssss.id)" v-show="itemssssssss.id==isid?false:true">{{itemssssssss.name}}</label><el-button @click="deletedep(itemssssssss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemssssssss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                       </li>
                   </ul>
               </li>
            </ul>
            
        </div>
    </div>


    <!--添加部门-->
    <div class="adddepclassbox unshow">
      <div class="adddepclassbox-title"><span class="fl">添加部门</span><span @click="closeadduserwins" class="posor fr"><img src="../../assets/delete.png" /></span></div>
      <div class="adddepclassbox-content">
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">顶级部门</div>
            <div class="list-content fl" style="padding-top:5px;">
                 <el-radio @change="test" v-model="isfather" :label="true">是</el-radio>
                 <el-radio @change="test" v-model="isfather" :label="false">否</el-radio>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">部门</div>
            <div class="list-content fl">
                <i-select :disabled="isfather" @on-change="changedep" v-model="bigdepid">
                    <i-option v-for="item in adddepinglist" :key="item.id" :value="item.id">{{item.name}}</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">部门名称</div>
            <div class="list-content fl">
                <el-input size="small" v-model="littledep" placeholder="请输入部门名称..." style="width:100%;"></el-input>
            </div>
          </div>
          <!--列表结束-->          
          <div class="line10"></div>

          <!--列表结束-->
          <div class="linecenter"></div>
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <i-button @click="adddepinfoes" style="background:#6680ff; color:white; float:right; width:120px;">确认添加</i-button>
          </div>
      </div>
    </div>
    <!--添加部门-->
    <Modal
        width="300"
        v-model="modalmsg"
        class-name="vertical-center-modal">
        <p slot="header" style="color:#000;text-align:left">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>您确认要删除该部门吗！</p>
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
        modalmsg:false,
        delid:0,
        deplist:[],//所有部门
        adddepinglist:[],//添加时的所有部门
        bigdepid:'',//上一级部门，需要选择
        littledep:'',//添加的部门，需要输入
        isfather:false,
        isedit:false,//是否是编辑状态
        isid:0,//编辑的id
        render: function (createElement) {
            //console.log("OK");
            return createElement('span', 'hello'),'world'
        }
      }
    },
    methods:{
        thescale(_id){
            $('#'+_id).slideToggle('fast',function(){
            $('.comcontent-list').find("span").removeClass('selectedclass');
            $('#span'+_id).addClass('selectedclass');
            if($(this).children('ul>li').length!=0){
                if ($('#'+_id).css("display")!="none"){
                    $('#img'+_id).attr({src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACfSURBVHja1NI9DgFBGIDhZ9eexiEULoGrIJEQlbiA2k/DESgdQBTusmI0I9nI7tpQmfbL837JzCQhBN+e1A/nJ5wtlivo4tTQdHDGPcUYR8wbwH5cskWa4oYcww+BHtZo4YpHhn0cbmMARiVwE+EEU8jisC5QCov4FQjYFQKXKviO4YBBIRCQlMGqd34F8jpYtvk90Mas6vqT//zbzwEALU0qprrBzUgAAAAASUVORK5CYII='});
                }else{
                    $('#img'+_id).attr({src:'data:image/png;base64,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'});
                }
            }else{
                //this.error('下面没有更多信息了');
            }
            });
        },
        //跳转到上一页
        returennext(){
            this.$router.push({path:'/pages/company/organizationsettings'});
        },
        //加载所有部门
        loadalldeparments(){
            this.deplist =[];//每次push前先清空
            let list=[];
            let url = window.localStorage.api+'/organization/getAllDepartment';

            this.$http.get(url).then(res=>{
                //console.log(res);
                //this.deplist = res['data'].message;
                list = res['data'].message;
                this.deplist = list;
               //-------------------------------------------------------------------
                
               //------------------------------------------------------------------
                
            }).catch(err=>{ 
                //console.log(err);
            })
        },
        //添加部门时的所有部门
        loadeping(){
            let url = window.localStorage.api+'/organization/getGroundDepartment?type=department';
            this.$http.get(url).then(res=>{
                //console.log(res);
                this.adddepinglist = res['data'].message;
            }).catch(err=>{ 
                //console.log(err);
            })
        },
        //添加部门
        adddepartments(){
            //console.log('添加部门');
            $('.adddepclassbox').addClass('show animated fadeIn');
        },
        closeadduserwins(){
            $('.adddepclassbox').removeClass('show animated fadeIn');
        },
        adddepinfoes(){
            if(this.littledep==""||this.littledep==null||this.littledep==undefined){
                this.error('部门名称不能为空');
                return;
            }
            let url=window.localStorage.api+'/organization/addDepartment';
            let params = new URLSearchParams();
            if(this.isfather){
                //console.log('顶级部门');
                //不用传上级id，为顶级部门
                params.append('name',this.littledep);
                this.$http.post(url,params).then(res=>{
                    //console.log(res);
                    if(res['data'].success){
                        this.success(res['data'].message);
                        this.loadalldeparments();
                        this.loadeping();
                        this.littledep = "";
                        this.closeadduserwins();
                    }else{
                        this.error(res['data'].message);
                    }
                }).catch(err=>{
                    //console.log(err);
                });                
            }else{
                //console.log('下级部门');
                params.append('name',this.littledep);
                params.append('pid',this.bigdepid);
                this.$http.post(url,params).then(res=>{
                    //console.log(res);
                    if(res['data'].success){
                        this.success(res['data'].message);
                        this.loadalldeparments();
                        this.loadeping();
                        this.littledep = '';
                        this.bigdepid = '';
                        this.closeadduserwins();
                    }else{
                        this.error(res['data'].message);
                    }
                }).catch(err=>{
                    //console.log(err);
                });
            }
        },
        changedep(){
            //console.log(this.bigdepid);
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
            this.$message({
              message:_str,
              type: 'error'
            });
        },
        test(){
            //console.log(this.isfather);
        },
        editdep(_id){
            this.isid = _id;
            //console.log('编辑'+_id);
        },
        saveedit(_id,_name){
            this.isid = 0;
            //console.log('编辑'+_id+"名称"+_name);
            let url = window.localStorage.api+'/organization/addDepartment';
            let params = new URLSearchParams();
            params.append('name',_name);
            params.append('id',_id);
            this.$http.post(url,params).then(res=>{
                if(res['data'].success){
                    this.success(res['data'].message);
                    //this.loadalldeparments();//重新加载部门
                }else{
                    this.error(res['data'].message);
                }
            }).catch(err=>{

            })
        },
        deletedep(_id){
            this.modalmsg = true;
            this.delid = _id;
        },
        ok(){
            //console.log('删除');
            let url = window.localStorage.api+'/deleteOrganization';
            let params = new URLSearchParams();
            params.append('type','department');
            params.append('id',this.delid);
            this.$http.post(url,params).then(res=>{
                //console.log(res);
                if(res['data'].success){
                    this.success(res['data'].message);
                    //重新刷新部门列表
                    this.loadalldeparments();
                    this.delid = 0;
                    this.modalmsg = false;
                }else{
                    this.error(res['data'].message);
                }
            }).catch(err=>{
                //console.log(err);
            })
        },
        cancel(){
            this.modalmsg = false;
        }
    },
    mounted(){
      //验证是否登录
      if(!window.sessionStorage.status){
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path:'/pages/login'});
        return;
      }
      //加载所有部门
      this.loadalldeparments();
      this.loadeping();//编辑部门时使用
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
    font-size: 16px;
    color: #2e2f33;
    border-bottom: 1px solid #ededed;
    padding-left:10px;
  }

  .combox .comcontent{
    background:#FFF;
    padding:50px;
    overflow: hidden;
    min-height:885px;
  }

  .combox .comcontent .comcontent-list{
      overflow: hidden;
  }
  .combox .comcontent .comcontent-list ul{
      overflow: hidden;
  }
  .combox .comcontent .comcontent-list ul li{
      list-style: none;
      width:100%;
      overflow: hidden;
  }

  .combox .comcontent .comcontent-list ul li span img{
     
  }

  .combox .comcontent .comcontent-list ul li span{
      display:block;
      height:50px;
      line-height: 50px;
      
      border-bottom: 1px solid #E0E0E0;
      width:100%;
      font-size: 14px;
      cursor: pointer;
  }

  .combox .comcontent .comcontent-list ul li span img{
     height:50px;
     width:35px;
     padding:17.5px 10px;
  }

  .combox .comcontent .comcontent-list ul li ul{
      width:100%;
      overflow: hidden;
  }
  .combox .comcontent .comcontent-list ul li ul li{
      list-style: none;
      width:100%;
      overflow: hidden;
      padding-left:20px;
  }


  .combox .comcontent .comcontent-list ul li ul li span{
      display:block;
      height:50px;
      line-height: 50px;
      border-bottom: 1px solid #E0E0E0;
      width:100%;
      font-size: 14px;
      cursor: pointer;
  }
  .combox .comcontent .comcontent-list ul li ul li ul li span{
      display:block;
      height:50px;
      line-height: 50px;
      border-bottom: 1px solid #E0E0E0;
      width:100%;
      font-size: 14px;
      cursor: pointer;
  }
  .combox .comcontent .comcontent-list ul li ul li ul li ul li span{
      display:block;
      height:50px;
      line-height: 50px;
      border-bottom: 1px solid #E0E0E0;
      width:100%;
      font-size: 14px;
      cursor: pointer;
  }
  .combox .comcontent .comcontent-list ul li ul li ul li ul li ul li span{
      display:block;
      height:50px;
      line-height: 50px;
      border-bottom: 1px solid #E0E0E0;
      width:100%;
      font-size: 14px;
      cursor: pointer;
  }
  .combox .comcontent .comcontent-list ul li ul li ul li ul li ul li ul li span{
      display:block;
      height:50px;
      line-height: 50px;
      border-bottom: 1px solid #E0E0E0;
      width:100%;
      font-size: 14px;
      cursor: pointer;
  }
  .combox .comcontent .comcontent-list ul li ul li ul li ul li ul li ul li ul li span{
      display:block;
      height:50px;
      line-height: 50px;
      border-bottom: 1px solid #E0E0E0;
      width:100%;
      font-size: 14px;
      cursor: pointer;
  }
  .combox .comcontent .comcontent-list ul li ul li ul li ul li ul li ul li ul li ul li span{
      display:block;
      height:50px;
      line-height: 50px;
      border-bottom: 1px solid #E0E0E0;
      width:100%;
      font-size: 14px;
      cursor: pointer;
  }
  .combox .comcontent .comcontent-list ul li ul li ul li ul li ul li ul li ul li ul li ul li span{
      display:block;
      height:50px;
      line-height: 50px;
      border-bottom: 1px solid #E0E0E0;
      width:100%;
      font-size: 14px;
      cursor: pointer;
  }

  


    /*添加部门*/
    .combox .adddepclassbox{
      width: 374px;
      height: 320px;
      background-color: #ffffff;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      position: absolute;
      left:0;
      top:0;
      right:0;
      bottom:0;
      margin:auto;
    }

    .combox .adddepclassbox .adddepclassbox-title{
      width: 374px;
      height: 50px;
      background-color: #ededed;
      border-radius: 4px 4px 0px 0px;
      line-height: 50px;
      padding:0 20px;
      font-size: 14px;
    }

    .combox .adddepclassbox .adddepclassbox-title span{
      display: block;
      height: 50px;
      font-size: 16px;
      color:#5c5d66;
    }

    .combox .adddepclassbox .adddepclassbox-content{
      width:374px;
      height: calc(100% - 50px);
      padding:20px 30px;
    }


    /*添加用户*/
    .combox .adddepclassbox .adddepclassbox-content .boxlist{
      overflow: hidden;
      width:100%;
    }

    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-title{
      padding-right:20px;
      width:80px;
      line-height: 30px;
      color:#2e2f33;
    }
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content{
      width:220px;
    }
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content .list-content-img{
      margin-right:10px;
      text-align:center;
      padding:22px 42px 0px 52px;
    }
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content .list-content-img img{
      width:44px;
      height:44px;
      border-radius:22px;
    }
    .combox .adddepclassbox .adddepclassbox-contentt .boxlist .list-content-upbtn{}
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content-upbtn span{
      text-align:center;
      display:block;
    }
    /*添加用户*/
    /*添加部门*/

    .unshow{
      visibility: hidden;
      z-index: -1000;
    }

    .show{
      visibility: visible;
      z-index: 1000;
    }

    .selectedclass{
      background:#f5f6ff;
      color:#6680ff;
    }
    .ulhid{
        display: none;
    }

    label{
        height: 50px;
        width:calc(100% - 150px);
        float: left;
        display: block;
    }
</style>
<style>
.comcontent-list .ivu-input-wrapper .ivu-input-wrapper-default .ivu-input-type input{
    border:none !important;
    float:left !important;
}
</style>
