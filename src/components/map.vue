<template>
  <div style="height:100%;">
    <!-- <button @click="startSearch">搜索</button> -->
    <!-- <p>{{address}}</p> -->
    <div class="amap-page-container">
      <div class="searchbox">
        <input type="text" class="search-input" id="search" placeholder="请输入考勤地址">
        <button @click="startSearch" class="search-button">搜 索</button>
      </div>
      <el-amap 
        vid="amap" 
        :zoom="zoom" 
        class="amap-demo" 
        :center="center"
        :amapManager="amapManager"
        :events="events"
        >
        <el-amap-circle 
          vid="circle"
          :center="center" 
          :radius="radius" 
          fill-opacity="0.2"
          strokeColor="#38f"
          strokeOpacity="0.8"
          strokeWeight="1"
          fillColor="#38f"
          >
        </el-amap-circle>
      </el-amap>
    </div>
    <div class="amap-addr-list">
      <el-scrollbar style="height:100%;">
        <ul>
          <li v-for="item in result" :key="item.id">
            <div class="address-list-box" @click="selectedaddrevents(item.id,item.name,item.location.lat,item.location.lng)">
              <div class="address-img"><i class="iconfont icon-dizhi" style="color:#6680ff; height:20px; width:15px;"></i></div>
              <div class="address-center-box">
                <div class="address-center-name">{{item.name}}</div>
                <div class="address-center-addressdes">{{item.address}}</div>
              </div>
              <div v-show="item.id==selectedid?true:false" class="address-right-seleced"></div>
            </div>
          </li>
        </ul>
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped>
  .amap-page-container {
    height: 400px;
    position: relative;
  }

  .amap-addr-list{
    height:calc(100% - 400px);
    padding:20px;
  }

  .searchbox{
    position: absolute;
    z-index: 5;
    left: 10px;
    top:10px;
  }
  .search-input{
    width:300px;
    height: 40px;
    border:none;
    padding: 5px;
    background-color: #ffffff;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12);
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    color: #b8bbcc;
    margin:0;
  }

  .search-button{
    border:none;
    width: 60px;
    height: 40px;
    background-color: #6680ff;
    box-shadow: 0px 0px 2px 0px 
		rgba(0, 0, 0, 0.12);
    color:white;
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    margin:0;
    cursor: pointer;
  }
  .toolbar{
    margin-top: 15px;
  }
  .address-list-box{
    height: 80px;
    width:100%;
    cursor: pointer;
    border-bottom: 1px solid #ededed;
  }

  .address-list-box .address-img{
    width:15px;
    height: 80px;
    float: left;
    padding-top:5px;
  }

  .address-list-box .address-center-box{
    width:calc(100% - 45px);
    height: 80px;
    float: left;
    padding:0 10px;
  }
  .address-list-box .address-center-box .address-center-name{
    color:#2e2f33;
    height:40px;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
  }
  .address-list-box .address-center-box .address-center-addressdes{
    color:#b8bbcc;
    height:40px;
    overflow: hidden;
  }
  .address-list-box .address-right-seleced{
    width:20px;
    height: 80px;
    float: left;
    background:rebeccapurple;
    background:url(../assets/icon_zhengque.png) no-repeat 0px 30px;
  }
</style>

<script>
  import {AMapManager} from "vue-amap"
  let amapManager=new AMapManager();
  export default {
    name:'map',
    props:['option'],//传入的每一个值
    data() {
      let vm = this;
      return {
        dead:'',
        zoom:16,
        center: [113.851466,22.570453],
        result:[],
        address:"",
        radius:100,
        amapManager,
        map:null,
        events:{
          init(o){
            vm.map=o;
            //方法一
            // AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {
            //   var positionPicker = new PositionPicker({
            //       mode: 'dragMap',
            //       map: o
            //   });
            //   positionPicker.on('success', function(positionResult){
            //     vm.result=positionResult.regeocode.pois;
            //     vm.address=positionResult.regeocode.formattedAddress;
            //     vm.center=[positionResult.position.lng,positionResult.position.lat]
            //   })
            //   positionPicker.start();
            // })
          }
        },
        //选中时需要的id
        selectedid:'',
        selectedaddr:'',
        selectedlat:'',
        selectedlng:''
      };
    },
    watch:{
      map:function(){
        if(this.map!=null){
          this.startDrag();
        }
      }
    },
    mounted(){
      this.startSearch();
    },
    methods:{
      //选中地址
      selectedaddrevents(_id,_addr,_lat,_lng){
        this.selectedid = _id;
        this.selectedaddr = _addr;
        this.selectedlat = _lat;
        this.selectedlng = _lng;
        //将信息传到父组件
        window.localStorage['mapaddress'] = this.selectedaddr;
        window.localStorage['maplong'] = this.selectedlng;
        window.localStorage['maplat'] = this.selectedlat;
      },
      startDrag(){//方法二
        let vm=this;
        let map=this.amapManager.getMap();
        AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {
          var positionPicker = new PositionPicker({
              mode:'dragMarker',//设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
              map: map
          });
          //定位
          let geolocation;
          map.plugin('AMap.Geolocation', function () {
            geolocation=new AMap.Geolocation({
              showButton: false,        //显示定位按钮，默认：true
              showMarker: false,        //定位成功后在定位到的位置显示点标记，默认：true
              extensions:'all'
            })
            map.addControl(geolocation);
            geolocation.getCurrentPosition();
            
            AMap.event.addListener(geolocation, 'complete', function(data){
                positionPicker.start();
            });//返回定位信息
          })
          positionPicker.on('success', function(positionResult){
            vm.result=positionResult.regeocode.pois;
            vm.address=positionResult.regeocode.formattedAddress;
            vm.center=[positionResult.position.lng,positionResult.position.lat]
            //console.log(vm.result);
            //positionPicker.stop();
          })
          positionPicker.on('fail', function(failResult){
            console.log(failResult)
          })
          //positionPicker.start();
        })
      },
      startSearch(){
        let vm=this;
        let map=this.amapManager.getMap();
        AMapUI.loadUI(['misc/PoiPicker'], function(PoiPicker){
          var poiPicker = new PoiPicker({
              input: 'search', //输入框id
          });
          //监听poi选中信息
          poiPicker.on('poiPicked', function(poiResult){
            //用户选中的poi点信息
            vm.center=[poiResult.item.location.lng,poiResult.item.location.lat]
          });
        });
      },
    }
  };
</script>