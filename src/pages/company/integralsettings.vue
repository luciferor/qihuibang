<template>
<div class="combox" style="height:100%;">
  <!-- <div class="combox" style="height:100%;">
    <div class="comcontent" v-show="false">
      <div class="comcontent-top">
        <Row>
          <i-col span="12">
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title">15</div><div class="comcontent-top-con">单日最高分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title">15</div><div class="comcontent-top-con">单周最高分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title">15</div><div class="comcontent-top-con">单月最高分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title">15</div><div class="comcontent-top-con">单季最高分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title">15</div><div class="comcontent-top-con">单年最高分</div>
            </div>
            <div class="hline1"></div>
          </i-col>
          <i-col span="12">
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title fcolorred">-15</div><div class="comcontent-top-con">单日最高减分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title fcolorred">-15</div><div class="comcontent-top-con">单周最高减分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title fcolorred">-15</div><div class="comcontent-top-con">单月最高减分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title fcolorred">-15</div><div class="comcontent-top-con">单季最高减分</div>
            </div>
            <div class="hline1"></div>
            <div class="comcontent-top-list">
              <div class="comcontent-top-list-title fcolorred">-15</div><div class="comcontent-top-con">单年最高减分</div>
            </div>
          </i-col>
        </Row>
      </div>
    </div>
  </div> -->
  <div class="comboxunder">
      <div class="comboxbtnbox">
        <i-button @click="openqq" type="primary" class="backgroundpar">联系QQ：2271645593</i-button>
        <i-button v-show="false" type="primary" class="backgroundpar">使用默认模版</i-button>
        <i-button v-show="false" type="primary" class="backgroundpar">申请修改权限</i-button>
      </div>
      <div class="comboxnuminput">
        <Tabs active-key="key1">
            <Tab-pane label="自我管理邦分" key="key1">
              <div class="comboxnuminputbox">
                <div class="comboxnuminputbox-title">
                  <div style="width:90%; float:left;">
                    <span class="tt">打卡邦分</span><span class="td">时间管理尊用时间平等原则，每个小时1邦分，如需特别设置请联系我们开放个性化设置</span>
                  </div>
                  <div style="width:10%; float:right;"><span class="fr"><i-button v-show="false" type="primary" class="backgroundpar">打卡价值观</i-button></span></div>
                </div>
                <div class="comboxnuminputbox-content">
                  <div class="fl" style="width:50%;">
                    <div>工作日：</div>
                    <Row>
                      <i-col span="8">
                        <span>按时打上班卡额外奖励</span>
                        <span><Input-number  v-model="setintegralses.timeset" @on-change="setintegrals(setintegralses.timeset,11)"></Input-number></span><span>邦分</span>
                      </i-col>
                      
                      <i-col span="16">
                        <span>每天工作满</span>
                        <span><Input-number v-model="setintegralses.hourse" @on-change="setintegrals(setintegralses.hourse,16)"></Input-number></span><span>小时，</span>
                        <span>额外奖励</span>
                        <span><Input-number v-model="setintegralses.reward" @on-change="setintegrals(setintegralses.reward,17)"></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <Row>
                      <i-col span="8">
                        <span>按时打下班卡额外奖励</span>
                        <span><Input-number v-model="setintegralses.gooff" @on-change="setintegrals(setintegralses.gooff,15)"></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <Row>
                      <i-col span="8">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每工作半小时</span>
                        <span><Input-number  v-model="setintegralses.workset" @on-change="setintegrals(setintegralses.workset,12)" ></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                  </div>
                  <div class="fr" style="width:50%;">
                    <div style="color:#ff6666;">非工作日：</div>
                    <!---------------------------------------------------------------------------------------->
                    <Row>
                      <i-col span="8">
                        <span>按时打上班卡额外奖励</span>
                        <span><Input-number  v-model="unsetintegralses.timeset" @on-change="setintegrals(unsetintegralses.timeset,18)"></Input-number></span><span>邦分</span>
                      </i-col>
                      
                      <i-col span="16">
                        <span>每天工作满</span>
                        <span><Input-number v-model="unsetintegralses.hourse" @on-change="setintegrals(unsetintegralses.hourse,21)"></Input-number></span><span>小时，</span>
                        <span>额外奖励</span>
                        <span><Input-number v-model="unsetintegralses.reward" @on-change="setintegrals(unsetintegralses.reward,22)"></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <Row>
                      <i-col span="8">
                        <span>按时打下班卡额外奖励</span>
                        <span><Input-number v-model="unsetintegralses.gooff" @on-change="setintegrals(unsetintegralses.gooff,19)"></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <Row>
                      <i-col span="8">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每工作半小时</span>
                        <span><Input-number  v-model="unsetintegralses.workset" @on-change="setintegrals(unsetintegralses.workset,20)" ></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <!---------------------------------------------------------------------------------------->
                  </div>
                </div>
              </div>
              <div class="comboxnuminputbox">
                <div class="comboxnuminputbox-title">
                  <div style="width:90%; float:left;">
                    <span class="tt">目标邦分</span><span class="td">目标管理遵循计划原则，让每个人都能为自己定计划，按照计划来办事，定了计划就给分，计划不在多而在重点，目标计划根据333原则设定</span>
                  </div>
                  <div style="width:10%; float:right;"><span class="fr"><i-button v-show="false" type="primary" class="backgroundpar">目标价值观</i-button></span></div>
                </div>
                <div class="comboxnuminputbox-content">
                  <div class="fl" style="width:50%;">
                  <div>工作日：</div>
                  <Row>
                    <i-col span="12">
                      <span>单次日目标最高分</span>
                      <span><Input-number  v-model="settargetintegrals.daytar" @on-change="setintegrals(settargetintegrals.daytar,2)" ></Input-number></span><span>邦分</span>
                    </i-col>
                    <i-col span="12">
                      <span>日目标总分</span>
                      <span><Input-number  v-model="settargetintegrals.daytol"  @on-change="setintegrals(settargetintegrals.daytol,1)"></Input-number></span><span>邦分</span>
                    </i-col>
                  </Row>
                  <Row>
                    <i-col span="12">
                      <span>单次周目标最高分</span>
                      <span><Input-number  v-model="settargetintegrals.weektar"   @on-change="setintegrals(settargetintegrals.weektar,4)"></Input-number></span><span>邦分</span>
                    </i-col>
                    <i-col span="12">
                      <span>周目标总分</span>
                      <span><Input-number  v-model="settargetintegrals.weektol"  @on-change="setintegrals(settargetintegrals.weektol,3)"></Input-number></span><span>邦分</span>
                    </i-col>
                  </Row>
                  <Row>
                    <i-col span="12">
                      <span>单次月目标最高分</span>
                      <span><Input-number  v-model="settargetintegrals.mothtar"  @on-change="setintegrals(settargetintegrals.mothtar,6)"></Input-number></span><span>邦分</span>
                    </i-col>
                    <i-col span="12">
                      <span>月目标总分</span>
                      <span><Input-number  v-model="settargetintegrals.mothtol"  @on-change="setintegrals(settargetintegrals.mothtol,5)"></Input-number></span><span>邦分</span>
                    </i-col>
                  </Row>
                  </div>
                  <div class="fr" style="width:50%;">
                    <div style="color:#ff6666;">非工作日：</div>
                    <!------------------------------------------------------------------------------------------>
                    <Row>
                      <i-col span="12">
                        <span>单次日目标最高分</span>
                        <span><Input-number v-model="unsettargetintegrals.daytar" @on-change="setintegrals(unsettargetintegrals.daytar,23)" ></Input-number></span><span>邦分</span>
                      </i-col>
                      <i-col span="12">
                        <span>日目标总分</span>
                        <span><Input-number v-model="unsettargetintegrals.daytol" @on-change="setintegrals(unsettargetintegrals.daytol,24)"></Input-number></span><span>邦分</span>
                      </i-col>
                    </Row>
                    <!------------------------------------------------------------------------------------------>                    
                  </div>
                </div>
              </div>
              <div class="comboxnuminputbox">
                <div class="comboxnuminputbox-title">
                  <div style="width:90%; float:left;">
                    <span class="tt">自我加减邦分</span><span class="td">自我加减邦分自我行为管理的表现，基于信任原则，诚信为自己加分，据实自己减分</span>
                  </div>
                  <div style="width:10%; float:right;"><span class="fr"><i-button v-show="false" type="primary" class="backgroundpar" @click="gotoowner">自我价值观</i-button></span></div>
                </div>
                <div class="comboxnuminputbox-content">
                  <div class="fl" style="width:50%;">
                    <div>工作日</div>
                    <Row>
                      <i-col span="12">
                        <span>每次最高加分</span>
                        <span><Input-number  v-model="plussubtegrals.sbestplus"  @on-change="setintegrals(plussubtegrals.sbestplus,7)"></Input-number></span><span>邦分</span>
                      </i-col>
                      <i-col span="12">
                        <span>每日最多可加邦分</span>
                        <span><Input-number  v-model="plussubtegrals.sbestps"  @on-change="setintegrals(plussubtegrals.sbestps,8)"></Input-number></span>
                        <span>邦分</span>
                      </i-col>
                    </Row>
                    <Row>
                      <i-col span="12">
                        <span>每次最高减分</span>
                        <span><Input-number  v-model="plussubtegrals.sbestsub"  @on-change="setintegrals(plussubtegrals.sbestsub,9)"></Input-number></span><span>邦分</span>
                      </i-col>
                      <i-col span="12">
                        <span>每日最多可减邦分</span>
                        <span><Input-number v-model="plussubtegrals.sbestsp"  @on-change="setintegrals(plussubtegrals.sbestsp,10)"></Input-number></span>
                        <span>邦分</span>
                      </i-col>
                    </Row>
                  </div>
                  <div class="fr" style="width:50%;">
                    <div style="color:#ff6666;">非工作日</div>
                    <div style="padding:30px 0;">
                      <span class="fl">非工作日是否可加分</span>
                      <span class="fr">
                        <i-switch v-model="isplustrue" @on-change="isplusedevent">
                            <span style="color:#FFFFFF;" slot="open"><i slot="open" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-right"></i></span>
                            <span style="color:#FFFFFF;" slot="close"><i slot="close" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-error"></i></span>
                        </i-switch>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Tab-pane>
            <!-- <Tab-pane v-show="true" label="相互管理邦分" key="key2">
            </Tab-pane>
            <Tab-pane v-show="true" label="额外邦分" key="key3">
            </Tab-pane> -->
            <Tab-pane label="惩罚邦分" key="key4">
              <div class="comboxnuminputbox">
                <div v-show="false" class="comboxnuminputbox-title">
                  <span class="tt" style="margin-left:17px; color:#ff6666;"></span><span class="td"></span>
                </div>
                <div class="comboxnuminputbox-content">
                  <Row>
                    <i-col span="24">
                      <span style="font-size:14px;font-weight:bold; padding-bottom:50px;">排名基准线及要求</span><br /><br />
                      <span>
                        <el-input style="width:850px;" class="main-text" type="textarea" autosize  v-model="punishments.ranking" @blur="setintegrals(punishments.ranking,26)" placeholder="请输入排名基准线及要求..."></el-input>
                      </span>
                    </i-col>
                  </Row>
                </div>
                <div class="comboxnuminputbox-content">
                  <Row>
                    <i-col span="12">
                      <span>迟到时长</span>
                      <span><Input-number  v-model="punishments.tlate" @on-change="setintegrals(punishments.tlate,13)"></Input-number></span><span>分钟,算旷工</span>
                    </i-col>
                    <i-col span="12">
                      <span>早退时长</span>
                      <span><Input-number  v-model="punishments.tearly" @on-change="setintegrals(punishments.tearly,14)" ></Input-number></span><span>分钟,算旷工</span>
                    </i-col>
                  </Row>
                </div>
              </div>
            </Tab-pane>
            <Tab-pane label="打卡价值观" key="key5">
              <div class="comcontent-topa" style="padding:10px;">
                  <span class="comcontent-topa-title">自我价值观</span>
                  <span class="comcontent-topa-des">自我加减分是自我行为管理的表现，基于信任原则，诚信为自己加分，据实为自己加分，据实为自己减分</span>
              </div>
              <div class="comcontent-content">
                  <div class="content-listbox" style="padding:20px;">
                      <div class="content-listbox-left fl">自我加分</div>
                      <div class="content-listbox-right fl">
                          <el-tag @close="deletetags(item.id)" style="margin:5px;" size="small" v-for="item in brefenlistadd" :key="item.index" closable>{{item.text}}(+{{item.bangfen}}邦分)</el-tag>
                          <el-button @click="showwin('add')" size="mini" icon="el-icon-plus">添加标签</el-button>
                      </div>
                  </div>
                  <div class="content-listbox" style="padding:20px;">
                      <div class="content-listbox-left fl">自我减分</div>
                      <div class="content-listbox-right fl">
                          <el-tag  @close="deletetags(item.id)" style="margin:5px;" size="small" v-for="item in brefenlistred" :key="item.index" closable>{{item.text}}(-{{item.bangfen}}邦分)</el-tag>
                          <el-button @click="showwin('reduce')" size="mini" icon="el-icon-plus">添加标签</el-button>
                      </div>
                  </div>
              </div>
              <div class="plusrebox-title" style="padding-left:20px;">加减分历史</div>
              <div class="plusrebox-content" style="padding:20px;">
                  <el-scrollbar style="height:100%;">
                    <div style="padding-right:20px;">
                      <!------------------>
                      <div style="height:10px; overflow:hidden; width:100%;"></div>
                      <div class="plusrebox-list" v-for="(itemes,index) in dynamiclist" :key="index">
                          <div class="plusrebox-left-img fl"><img :src="itemes.user_img==''?userImg:rootUrl+itemes.user_img|srctransformation" width="40" height="40" /></div>
                          <div class="plusrebox-left-text fl">
                              <span style="display:block;font-family: MicrosoftYaHei; font-size: 14px; color: #2e2f33;">{{itemes.name}}</span>
                              <span style="display:block;font-family: MicrosoftYaHei; font-size: 12px; color: #b8bbcc;">{{itemes.content}}</span>
                          </div>
                          <div class="plusrebox-left-time fr">{{itemes.updated_at}}</div>
                      </div>
                      <!------------------>
                    </div>
                  </el-scrollbar>
              </div>
              <div class="underpages">
                  <Page :total="pageTotal" :current="pageNum" v-model="pageNum" :show-total="true" @on-change="getpagescontents"></Page>
              </div>
            </Tab-pane>
        </Tabs>
      </div>
  </div>

  <!--打卡价值观---------------------------------------------------------------------------------------------------->
    <div class="comboxtagsbox unshow">
        <div class="combox-tags-box-title">
            <span class="fl">添加价值标签</span><span class="fr" @click="closewin" style="cursor: pointer;" >x</span>
        </div>
        <div class="combox-tags-box-content">
            <div>自我价值观</div>
            <div><i-input type="textarea" :maxlength="15" v-model="ownnerprice" :value="ownnerprice" placeholder="请输入一个词汇..."></i-input></div>
            <div style="color:#ff6666;">注：每个标签最多为15个字，单项最多不能超过15个标签</div>
            <div>

                <span>
                    <i-select v-show="isshowselected" v-model="brefens" placeholder="请选择分值">
                        <i-option :value="0.5">+0.5邦分</i-option>
                        <i-option :value="1">+1邦分</i-option>
                        <i-option :value="1.5">+1.5邦分</i-option>
                        <i-option :value="2">+2邦分</i-option>
                        <i-option :value="2.5">+2.5邦分</i-option>
                        <i-option :value="3">+3邦分</i-option>
                        <i-option :value="3.5">+3.5邦分</i-option>
                        <i-option :value="4">+4邦分</i-option>
                        <i-option :value="4.5">+4.5邦分</i-option>
                        <i-option :value="5">+5邦分</i-option>
                        <i-option :value="5.5">+5.5邦分</i-option>
                        <i-option :value="6">+6邦分</i-option>
                        <i-option :value="6.5">+6.5邦分</i-option>
                        <i-option :value="7">+7邦分</i-option>
                        <i-option :value="7.5">+7.5邦分</i-option>
                        <i-option :value="8">+8邦分</i-option>
                        <i-option :value="8.5">+8.5邦分</i-option>
                        <i-option :value="8">+9邦分</i-option>
                        <i-option :value="9.5">+9.5邦分</i-option>
                        <i-option :value="10">+10邦分</i-option>
                        <i-option :value="15">+15邦分</i-option>
                    </i-select>
                    <i-select v-show="!isshowselected" v-model="brefens" placeholder="请选择分值">
                        <i-option :value="0.5">-0.5邦分</i-option>
                        <i-option :value="1">-1邦分</i-option>
                        <i-option :value="1.5">-1.5邦分</i-option>
                        <i-option :value="2">-2邦分</i-option>
                        <i-option :value="2.5">-2.5邦分</i-option>
                        <i-option :value="3">-3邦分</i-option>
                        <i-option :value="3.5">-3.5邦分</i-option>
                        <i-option :value="4">-4邦分</i-option>
                        <i-option :value="4.5">-4.5邦分</i-option>
                        <i-option :value="5">-5邦分</i-option>
                        <i-option :value="5.5">-5.5邦分</i-option>
                        <i-option :value="6">-6邦分</i-option>
                        <i-option :value="6.5">-6.5邦分</i-option>
                        <i-option :value="7">-7邦分</i-option>
                        <i-option :value="7.5">-7.5邦分</i-option>
                        <i-option :value="8">-8邦分</i-option>
                        <i-option :value="8.5">-8.5邦分</i-option>
                        <i-option :value="8">-9邦分</i-option>
                        <i-option :value="9.5">-9.5邦分</i-option>
                        <i-option :value="10">-10邦分</i-option>
                        <i-option :value="15">-15邦分</i-option>
                    </i-select>
                </span>
            </div>
            <div>
                <i-select v-model="zp"  placeholder="自评">
                    <i-option value="自评">自评</i-option>
                </i-select>
            </div>
            <div>
                <div>图片</div>
                <div>
                    <div class="demo-upload-list" v-for="(item,index) in imglist" :key="index">
                        <template>
                            <img :src="rootUrl+item.url">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-trash-outline" @click="imgclear(index)"></Icon>
                            </div>
                        </template>
                    </div>
                    <Upload :show-upload-list="false" :format="['jpg','jpeg','png']" :before-upload="imghandleBeforeUpload" :on-format-error="handleFormatError" action="/" type="drag" style="display: inline-block; border:none;">
                        <div class="colorpar">添加模范图片</div>
                    </Upload>
                </div> 
            </div>
            <div>
                <el-radio @change="ischange"  v-model="isstatus" label="1">标签说明</el-radio>
                <el-radio @change="ischange"  v-model="isstatus" label="2">文字说明</el-radio>
            </div>



            <div v-show="!isshow">标签</div>
            <div v-show="!isshow">
                <el-tag @close="tagsclear(index)" size="small" style="background:white; color:gray; margin-right:5px;" v-for="(item,index) in tagslist" :key="index" closable>{{item.tagsname}}</el-tag>
                <el-button @click="showaddtags" size="mini" icon="el-icon-plus">添加标签</el-button>
            </div>

            <div v-show="isshow">文字说明</div>
            <div v-show="isshow">
                <i-input v-model="info" :maxlength="40" type="textarea" placeholder="请输入描述..."></i-input>
            </div>


            <div style="height:30px; width:100%;"></div>
            <div>
                <span>是否需要理由</span>
                <span class="fr">
                    <i-switch @on-change="isopen" v-model="is_reason">
                        <span style="color:#FFFFFF;" slot="open"><i slot="open" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-right"></i></span>
                        <span style="color:#FFFFFF;" slot="close"><i slot="close" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-error"></i></span>
                    </i-switch>
                </span>
            </div>

            <div style="height:30px; width:100%;"></div>
            <div>
                <span>是否需要上传图片</span>
                <span class="fr">
                    <i-switch @on-change="ispic" v-model="is_img">
                        <span style="color:#FFFFFF;" slot="open"><i slot="open" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-right"></i></span>
                        <span style="color:#FFFFFF;" slot="close"><i slot="close" style="color:#FFF; width:15px; height:15px;" class="iconfont icon-error"></i></span>
                    </i-switch>
                </span>
            </div>


            <div style="border-bottom:1px solid #ededed; height:30px; width:100%; margin-bottom:30px;"></div>
            <div><i-button class="fr backgroundpar" @click="subsaveinfos" type="primary">确定完成</i-button></div>
        </div>
    </div>

    <div style="margin-top:100px;" class="addtags unshow">
        <div class="addtags-title"><span>添加标签</span><span class="fr" @click="closeaddtags" style="cursor: pointer;">x</span></div>
        <div class="addtagscontents">
            <div style="color:#5c5d66; font-size:14px;">符合价值</div>
            <div><i-input :maxlength="6" v-model="tags" type="textarea" :value="tags" placeholder="请输入..."></i-input></div>
            <div style="color:#ff6666;">注：每个标签最多6个字符，单项最多不能超过6个标签</div>
            <div style="text-align:right;"><i-button @click="savetags" >确认完成</i-button></div>
        </div>
    </div>
  <!--打卡价值观---------------------------------------------------------------------------------------------------->
</div>
</template>

<script>
  export default {
    filters:{
        srctransformation:function(value){
            if(value.indexOf('http://thirdwx.qlogo.cn')!=-1){
              return value.replace(window.localStorage.api,"");
            }else{
              return value;
            }
        }
    },
    data(){
      return{
        //打卡价值观---------------------------------------------------------------------------------------------------
          //添加标签
          tags:'',
          //初始化邦分数组
          brefenlistadd:Object,//加邦分
          brefenlistred:Object,//减邦分
          //添加自我价值观
          ownnerprice:'',//自我价值观
          brefens:'',//邦分
          zp:'',//自评
          imglist:[],//图片列表
          tagslist:[],//标签列表
          thetype:'',//增加或者减少类型增加邦分传add，减少邦分传reduce
          pluslist:[],
          isstatus:'1',//1代表标签，2代表介绍
          info:'',//介绍，status为1时传空
          is_reason:false,//是否需要理由，1需要，0不需要
          is_img:false,//是否需要上传图片，1需要，0不需要
          isshow:false,//显示标签或者描述
          isshowselected:false,//显示减法
          //------------------------------------------
          dynamiclist:[],//动态
          pageTotal: 0,
          pageNum: 1,
          pageSize: 10,
        //打卡价值观---------------------------------------------------------------------------------------------------
        rootUrl:window.localStorage.api,
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
        userImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAADo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjR0dHW1tbb29ve3t7i4uLY2Njk5OQwtOK3AAAAI3RSTlMAC+BHIPXxdwjb7J1PFOTWx71ZArhs6dGUFqZwmJBcKahdt2kJJfYAAAJXSURBVFjDxdkJcqswDAZghTUQKNkTkjZN32/W+x/wtZlpaUIksIHpdwCNFyHbgjrE9u64SvYe3DA4rI47OyZzs+jtgJbDWzQjAxv75ILhnuyN7uDOFkTWWWeYcz9Ep9CfU09rC71Ya+rD+Yfetg51unjQ4F26Vm8BTQtxJdMltC1TYfkCGAjYhXx/gZGXd2Z8Ujw54tMxxgGMBfGT/V1igGV7rxcYZNHKZwx0edgQDwN59xuzhaAuskxlWV7K3/VdfZHCVepbJoZcN/FmFliF+i0Hz2pKrg9Wru5V4Pk/Awzl8fUdY/g9xB2/fqpNWMcd3WwsYcJtmbCKm1tAGyz1TA2WfQt4AqdUzxRgXW9b4urMWN5o92tbImgGzMCLPgO+jhnw9TNggPGmjIAoBYZvSiNlkkZOG4HNfMdiYkt8pvSLn558FKzAYIuDaEUJGFz5kiW0B4MrsLI9eWBwR4DMI3Sri6o5pLqQi3FRiFF5ZGFUezpAVpfFL2UNWSIndpln6kHH3qz4T69JmEZ39iyE4lAoVg6Oz5evXAkqvnylfDyTiClRoDdfuW4H7CGlOtXcIRWxEzaYdMQd9KqHmjno6SquoFbuXLnLEpPRnaeVzV3nMrOA1oa7cCqzgGf2Sqx6Ya/E5I8T0GeeFRpryD0raG2Q2PljHq7lp1lZ5HmVPVNVeV60S+J22scjfWCgj4kf4MNbBNM2MYa3WaZtBDWcBAYSh1ixSTMtFtt9R2g6zkkW6TUkI+rkbNHb1pm0qTu87TxlY3x46/7vfy7c//5wAXef9Pn98R+pP67D9VcSWgAAAABJRU5ErkJggg==',
        setintegralses:{//打卡邦分
          timeset:0,//打卡额外奖励
          workset:0,//工作办小时
          gooff:0,//按时打卡奖励
          hourse:0,//工作满多少小时奖励
          reward:0//额外奖励
        },
        //非工作日
        unsetintegralses:{//打卡邦分
          timeset:0,//打卡额外奖励
          workset:0,//工作办小时
          gooff:0,//按时打卡奖励
          hourse:0,//工作满多少小时奖励
          reward:0//额外奖励
        },
        settargetintegrals:{//目标邦分
          daytar:0,//日最高目标分
          weektar:0,//周最高目标分
          mothtar:0,//月最高目标分
          daytol:0,//日目标总分
          weektol:0,//周目标总分
          mothtol:0//月目标总分
        },
        //非工作日
        unsettargetintegrals:{
          daytar:0,//日最高目标分
          daytol:0,//周最高目标分
        },
        //非工作日是否可加分
        isplustrue:false,
        plussubtegrals:{//自我加减邦分
          sbestplus:0,//每次最高加分
          sbestsub:0,//每次最高减分
          sbestps:0,//每次最多可加减次数
          sbestsp:0//每次最多可加减次数
        },
        punishments:{//惩罚
          ranking:'',//排名基准线及要求
          tlate:0,//迟到
          tearly:0//早退
        },
        count:0,
      }
    },
    methods:{
      //打卡价值观------------------------------------------------------------------------------------------------------
        savetags(){//保存标签
            if(this.tags==""){
                this.error('您输入的标签为空');
                return;
            }
            if(this.tagslist.length>=6){
                this.error('标签不能超过6个！');
                return;
            }
            for (let i = 0; i < this.tagslist.length; i++) {
                const element = this.tagslist[i];
                if(this.tagslist[i].tagsname==this.tags){
                    this.error('标签名称不能重复！');
                    return;
                }
            }
            this.tagscount ++;
            this.tagslist.push({'id':this.tagscount,'tagsname':this.tags});
            this.tags = '';
        },
        subsaveinfos(){//保存添加价值标签
          if (this.ownnerprice==''||this.brefens=='') {
            this.success('自我价值观或邦分必须填写或选择');
            return;
          }
            let tags='';
            let img = '';
            for (let i = 0; i < this.imglist.length; i++) {
                const element1 = this.imglist[i].url;
                img += ";"+element1;
            }
            for (let j = 0; j < this.tagslist.length; j++) {
                const element2 = this.tagslist[j].tagsname;
                tags += ";"+element2;
            }
            let url = window.localStorage.api+'/set/admin/self/managed'
            let params = new URLSearchParams();
            if(this.isstatus==1){
                params.append('imgs',img.substr(1));//图片地址，多张用分号隔开
                params.append('labels',tags.substr(1));//标签名称，多个用分号隔开
                params.append('bangfen',this.brefens);//邦分
                params.append('type',this.thetype);//增加邦分传add，减少邦分传reduce
                params.append('text',this.ownnerprice);//自我管理名称
                params.append('status',this.isstatus);//1代表标签，2代表介绍
                params.append('info',"");//介绍，status为1时传空
                params.append('is_reason',this.is_reason?1:0);//是否需要理由，1需要，0不需要
                params.append('is_img',this.is_img?1:0);//是否需要上传图片，1需要，0不需要
            }else{
                params.append('imgs',img.substr(1));//图片地址，多张用分号隔开
                params.append('labels',"");//标签名称，多个用分号隔开
                params.append('bangfen',this.brefens);//邦分
                params.append('type',this.thetype);//增加邦分传add，减少邦分传reduce
                params.append('text',this.ownnerprice);//自我管理名称
                params.append('status',this.isstatus);//1代表标签，2代表介绍
                params.append('info',this.info);//介绍，status为1时传空
                params.append('is_reason',this.is_reason?1:0);//是否需要理由，1需要，0不需要
                params.append('is_img',this.is_img?1:0);//是否需要上传图片，1需要，0不需要
            }
  
            this.$http.post(url,params).then(res=>{
                //console.log(res);
                if(res['data'].success){
                    this.success(res['data'].message);
                    //重新获取邦分
                    this.getbrefen();
                    this.closewin();
                    this.closeaddtags();
                    //清空数据
                    this.ownnerprice='';//自我价值观
                    this.brefens='';//邦分
                    this.zp='';//自评
                    this.imglist=[];//图片列表
                    this.tagslist=[];//标签列表
                    this.thetype='';//增加或者减少类型增加邦分传add，减少邦分传reduce
                    this.pluslist=[];
                    this.info='';//介绍，status为1时传空
                }
            }).catch(err=>{
                //console.log(err);
            })
        },
        showwin(_type){
            this.thetype = _type;
            if(_type=="add"){
                this.isshowselected = true;
            }else{
                this.isshowselected = false;
            }
            $('.comboxtagsbox').removeClass('animated fadeIn unshow');
            $('.comboxtagsbox').addClass('animated fadeIn show');
        },
        closewin(){
            $('.comboxtagsbox').removeClass('animated fadeIn show');
            $('.comboxtagsbox').addClass('animated fadeIn unshow');
        },
        showaddtags(){
            $('.addtags').removeClass('animated fadeIn unshow');
            $('.addtags').addClass('animated fadeIn show');
        },
        closeaddtags(){
            $('.addtags').removeClass('animated fadeIn show');
            $('.addtags').addClass('animated fadeIn unshow');
        },
        //获取加减邦分
        getbrefen(){
            let url = window.localStorage.api+'/get/admin/self/managed';
            this.$http.get(url).then(res=>{
                //console.log(res);
                this.brefenlistadd = res['data'].message.addItem;
                this.brefenlistred = res['data'].message.reduceItem;
            }).catch(err=>{
                //console.log(err);
            })
        },
        imghandleBeforeUpload(file) {//logo
            this.uploadimg(file,'logo');
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
            //console.log(_img);
            this.$http.post(upurl,params).then((res)=>{
                //console.log(res['data'].message.fileurl);
                this.imglist.push({'url':res['data'].message.fileurl});
            }).catch((err)=>{
                //console.log(err);
            })
        },
        tagsclear(_index){//清除小标签
            this.tagslist.splice(_index,1);
            //this.selecteduser.splice(_index,1);//选中了谁，就清除谁
        },
        imgclear(_index){//清除不要的图片
            this.imglist.splice(_index,1);
        },
        ischange(){
            //console.log(this.isstatus);
            if(this.isstatus==1){
                this.isshow = false;
            }else{
                this.isshow = true;
            }
        },
        isopen(){
            //console.log(this.is_reason);
        },
        ispic(){
            //console.log(this.is_img);
        },
        deletetags(_id){
            let url = window.localStorage.api+'/delete/admin/self/managed';
            let params = new URLSearchParams();
            params.append('id',_id);
            this.$http.post(url,params).then(res=>{
                if(res['data'].success){
                    this.success(res['data'].message);
                    //删除成功后重新加载
                    this.getbrefen();
                }else{
                    this.error(res['data'].message)
                }
            }).catch(err=>{

            })
        },
        //上传图片--------------------
        //获取动态信息
        getdynamiclist(){
            let url = window.localStorage.api+'/get/task/notice';
            this.$http.get(url).then(res=>{
                //console.log(res['data'].message);
                this.pageTotal = res['data'].message.total,


                this.dynamiclist = res['data'].message.data;
            }).catch(err=>{
                //console.log(err);
            })
        },
        getpagescontents(page){//获取分页数据
            //console.log('切换了'+page);
            let url = window.localStorage.api+'/get/task/notice?page='+page;
            this.$http.get(url).then(res=>{
                this.pageTotal = res['data'].message.total,
                this.dynamiclist = res['data'].message.data;
            }).catch(err=>{
                //console.log(err);
            })
        },
        handlePageSize(){
            //console.log(this.pageSize);
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
      //打卡价值观------------------------------------------------------------------------------------------------------
      openqq(){
        window.open('http://wpa.qq.com/msgrd?v=3&uin=2271645593&site=qq&menu=yes','_brank');
      },
      isplusedevent(){
        //console.log(this.isplustrue);
        if(this.isplustrue){
          this.setintegrals(1,25);
        }else{
          this.setintegrals(0,25);
        }
      },
      setintegrals(_gold,_type){
        //console.log(_gold+"|||||||"+_type);
        //return;
        let url = window.localStorage.api+"/set/target/bangfen";//接口地址
        //console.log("---------------------------------------------------------");
        let params = new URLSearchParams();
        params.append('bangfen',_gold);//邦分
        params.append('type',_type);//类型日任务总分传1，日任务单次最高分传2，周总分传3，周单次传4，月总分传5，月单次传6，每日自我单次最高加分传7，每日自我加分总分传8，每日自我单次最高减分传9，每日自我减分总分传10，正常打上班卡奖励传11，每半小时邦分传12	
        this.$http.post(url,params).then((res)=>{
          //console.log(res);
          if(res['data'].success){
            this.count++;
            // if(this.count>1){
            //   return;//如果提示过了。就不提示了
            // }
            this.success(res['data'].message);
          }else{
            this.error(res['data'].message);
          }
        }).catch((err)=>{
          //console.log(err);
           this.error("网络错误请稍候重试！"+err);
        })
        //console.log("---------------------------------------------------------");
      },
      loadingintegrals(){
          let loadurl = window.localStorage.api+"/get/target/bangfen";
          this.$http.get(loadurl).then(res=>{
            //console.log(res);
            this.setintegralses.timeset = Number(res['data'].message.work_up_bangfen);//打卡额外奖励
            this.setintegralses.workset = Number(res['data'].message.dimidia_bangfen);//工作办小时
            this.setintegralses.gooff = Number(res['data'].message.work_down_bangfen);//按时打卡奖励
            this.setintegralses.hourse = Number(res['data'].message.working_time);//工作满多少小时奖励
            this.setintegralses.reward = Number(res['data'].message.working_time_bangfen);//额外奖励

            this.unsetintegralses.timeset = Number(res['data'].message.not_work_up_bangfen);//非工作日打卡额外奖励
            this.unsetintegralses.workset = Number(res['data'].message.not_dimidia_bangfen);//非工作日工作办小时
            this.unsetintegralses.gooff = Number(res['data'].message.not_work_down_bangfen);//非工作日按时打卡奖励
            this.unsetintegralses.hourse = Number(res['data'].message.not_working_time);//非工作日工作满多少小时奖励
            this.unsetintegralses.reward = Number(res['data'].message.not_working_time_bangfen);//非工作日额外奖励

            this.settargetintegrals.daytar=Number(res['data'].message.once_daily_task_bangfen);//日最高目标分
            this.settargetintegrals.weektar=Number(res['data'].message.once_week_task_bangfen);//周最高目标分
            this.settargetintegrals.mothtar=Number(res['data'].message.month_task_bangfen);//月最高目标分
            this.settargetintegrals.daytol=Number(res['data'].message.daily_task_bangfen);//日目标总分
            this.settargetintegrals.weektol=Number(res['data'].message.week_task_bangfen);//周目标总分
            this.settargetintegrals.mothtol=Number(res['data'].message.month_task_bangfen);//月目标总分

            this.unsettargetintegrals.daytar=Number(res['data'].message.not_once_daily_task_bangfen);//日最高目标分
            this.unsettargetintegrals.daytol=Number(res['data'].message.not_daily_task_bangfen);//日最高目标分

            this.plussubtegrals.sbestplus=Number(res['data'].message.once_add_bangfen);//每次最高加分
            this.plussubtegrals.sbestsub=Number(res['data'].message.once_reduce_bangfen);//每次最高减分
            this.plussubtegrals.sbestps=Number(res['data'].message.add_bangfen_all);//每次最多可加减次数
            this.plussubtegrals.sbestsp=Number(res['data'].message.reduce_bangfen_all);//每次最多可加减次数

            this.punishments.ranking = res['data'].message.ranking;//排名基准线及要求
            this.punishments.tlate=Number(res['data'].message.late_time);//迟到
            this.punishments.tearly=Number(res['data'].message.leave_time);//早退

            //非工作日是否可加分
            if (Number(res['data'].message.not_work_bangfen)==1) {
              this.isplustrue = true;
            }else{
              this.isplustrue = false;
            }
          }).catch(err=>{
            //console.log('网络错误,请稍候重试！'+err);
          })
        },
        gotoowner(){
          //移动到顶部
          this.$router.push({path:"/pages/company/Ownersense"});
        },
        //页面提示信息
        success(_str) {
            this.$message({
              message:_str,
              type: 'success'
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

      },
      mounted(){
      //验证是否登录
        if(!window.sessionStorage.status){
          this.$Message.error('您没有登录，请您先登录');
          this.$router.push({path:'/pages/login'});
          return;
        }
        this.loadingintegrals();
        //打卡价值观-----------------------------------------------------------------------
        //获取加载邦分
        this.getbrefen();
        //获取动态信息
        this.getdynamiclist();
        //打卡价值观-----------------------------------------------------------------------
      }
    
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
  }

  .combox .comcontent .comcontent-top{
    overflow: hidden;
    height:100%;
  }

  .combox .comcontent .comcontent-top .comcontent-top-list{
    float:left;
    width:calc(20% - 1px);
  }

  .combox .comcontent .comcontent-top .hline1{
    width:1px;
    height:70px;
    background:rgb(219, 219, 219);
    overflow: hidden;
    float: left;
  }

  .combox .comcontent .comcontent-top .comcontent-top-list .comcontent-top-list-title{
    width:100%;
    height:50%;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #6680ff;
    text-align: center;
  }

  .combox .comcontent .comcontent-top .comcontent-top-list .comcontent-top-con{
    width:100%;
    height:50%;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
    text-align: center;
  }
  
  .fcolorred{
    color:#ff6666 !important;
  }
  .comboxunder{
    /* margin-top:10px; */
    background:white;
    padding:10px;
    min-height:949px;
    height:100%;
  }

  .comboxunder .comboxbtnbox{
    overflow: hidden;
    padding:10px;
    text-align: right;
  }

  .comboxunder .comboxnuminput{
    overflow: hidden;
  }

  .comboxunder .comboxnuminput ul{
  }
  .comboxunder .comboxnuminput ul li{
    height:40px;
    line-height: 40px;
  }

  .comboxnuminputbox{
    padding:10px;
    overflow: hidden;
    width:100%;
    border-bottom: 1px solid #E0E0E0;
  }

    .comboxnuminputbox .comboxnuminputbox-title{
      height:60px;
      width:100%;
    }

    .comboxnuminputbox .comboxnuminputbox-title .tt{
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #6680ff;
    }

    .comboxnuminputbox .comboxnuminputbox-title .td{
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #b8bbcc;
    }


    .comboxnuminputbox .comboxnuminputbox-title span{
      display: block;
      float: left;
      height:60px;
      line-height:60px;
    }

    .comboxnuminputbox .comboxnuminputbox-content{
      padding:20px;
    }

    .comboxnuminputbox .comboxnuminputbox-content .ivu-row{
      padding:10px 0;
    }

    /* =====打开价值观============================================================================= */
      .combox .comboxtagsbox{
          width:340px;
          min-height:568px;
          height:100%;
          background:white;
          position: absolute;
          right:0;
          top:0;
          bottom: 0;
          box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
          
      }


      .combox .comboxtagsbox .combox-tags-box-title{
          height:40px;
          font-size: 16px;
          color: #5c5d66;
          border-bottom: 1px solid #ededed;
          line-height: 40px;
          padding:0 10px;
      }

      .combox .comboxtagsbox .combox-tags-box-content{
          padding:20px;
          width:100%;
          height:calc(100% - 40px);
      }

      .combox .comboxtagsbox .combox-tags-box-content div{
          padding:5px;
      }

      .combox .addtags{
          width:420px;
          height:350px;
          background:white;
          box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          position: absolute;
          left:0;
          right:0;
          top:0;
          bottom: 0;
          margin: auto;
      }

      .combox .addtags .addtags-title{
          width:420px;
          height:60px;
          background: #ededed;
          border-radius: 4px 4px 0px 0px;
          font-size: 16px;
          line-height: 60px;
          padding:0 10px;
          color:#5c5d66;
      }

      .combox .addtags .addtagscontents{
            height: 290px;
            width:420px;
            padding:10px;
      }
      .combox .addtags .addtagscontents div{
        padding:5px; 
      }


    .show{
        visibility: visible;
        -webkit-z-index: 1000;
        -moz-z-index: 1000;
        -ms-z-index: 1000;
        -o-z-index: 1000;
        z-index: 1000;
    }

    .unshow{
        visibility: hidden;
        -webkit-z-index: -1000;
        -moz-z-index: -1000;
        -ms-z-index: -1000;
        -o-z-index: -1000;
        z-index: -1000;
    }
    /* =====打开价值观============================================================================= */

      .comboxnuminput .comcontent-topa{
          height:50px;
          line-height: 50px;
      }

      .comboxnuminput .comcontent-topa .comcontent-topa-title{
          color:#6680ff;
          font-size: 18px;
      }

      .comboxnuminput .comcontent-topa .comcontent-topa-des{
          color:#b8bbcc;
          font-size: 14px;
      }

        .comboxnuminput .comcontent-content{
            overflow: hidden;
            width:100%;
        }

        .comboxnuminput .comcontent-content .content-listbox{
            padding:10px 0;
        }
        .comboxnuminput .comcontent-content .content-listbox .content-listbox-left{
          width:100px;
          font-size: 16px;
        color: #2e2f33;
          padding:10px 0;

        }
        .comboxnuminput .comcontent-content .content-listbox .content-listbox-right{
          width:calc(100% - 100px);
          padding:10px 0;
        }

        .comboxnuminput .plusrebox-title{
            height:60px;
            line-height: 60px;
            font-family: MicrosoftYaHei;
            font-size: 16px;
            color: #2e2f33;
            border-top:1px solid #ededed;
            border-bottom:1px solid #ededed;
            margin-top:50px;
        }

        .comboxnuminput .plusrebox-content{
            padding:10px;
            height: 450px;
        }

        .comboxnuminput .plusrebox-content .plusrebox-list{
            height:80px;
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
            border-radius: 4px;
            border: solid 1px #ededed;
            margin-bottom: 10px;
        }

          .comboxnuminput .plusrebox-content .plusrebox-list .plusrebox-left-img{
              height:80px;
              width:80px;
              padding:20px;
              border-radius: 40px;
          }

          .comboxnuminput .plusrebox-content .plusrebox-list .plusrebox-left-img img{
              border-radius: 40px;
          }

          .comboxnuminput .plusrebox-content .plusrebox-list .plusrebox-left-text{
              height: 80px;
              width:calc(100% - 230px);
              padding:20px 20px 20px 0px;
          }

          .comboxnuminput .plusrebox-content .plusrebox-list .plusrebox-left-time{
              height:80px;
              width:150px;
              line-height: 80px;
              font-size: 14px;
              color: #8a8c99;
          }

          .comboxnuminput .underpages{
            height: 90px;
            border-top:1px solid #ededed;
            text-align: center;
            line-height: 90px;
          }

</style>
