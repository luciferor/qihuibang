<template style="height:100%;">
  <div class="office-box" style="height:100%;">
    <div class="office-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/office/officehome"><i class="officehome-icon"></i>办公应用</BreadcrumbItem>
         <BreadcrumbItem to="/pages/office/announcement"><i class="announcement-icon"></i>公告</BreadcrumbItem>
      </Breadcrumb>
      <div class="right-btns" >
        <button type="button" @click="toDeliver()"><i class="deliver-icon"></i>发布公告</button>
      </div>
    </div>
    <div class="office-content" :style="innerHeight">
      <ul class="annouce-list">
        <li class="list-item" v-for="item  in annouceArr" :key="item.id">
          <button class="edit-btn" v-if="item.status.code==false" @click="editItem(item)">编辑</button>
          <button class="delete-btn" @click="deleteItem(item)" >删除</button>
          <header class="item-header">{{item.header}}</header>
          <span  class="item-department">{{item.department}}</span>
          <div>
                <span class="item-company">{{item.company}}</span>
                <span class="item-date">{{item.date}}</span>
          </div>
      
          <span class="item-content">{{item.content}}</span>
          <ul class="appendix-wrap">
              <li v-for="dix in item.appendix" :key="dix.id" class="item-appendix" @click="openAppendix">{{dix.name}}</li>
          </ul>
         
          <div class="bottom-area">
              <span class="item-countNum">{{item.readNum}}已读/{{item.allNum}}人</span>
             <span class="item-status" v-bind:class="{delivered:item.status.code==true}">{{item.status.txt}}</span>
          </div>
         
          </li>
      </ul>

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      rootUrl: window.localStorage.api,
      rootImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=",
      showed: false, //显示状态
      comname: "", //公司名称
      pingshenNum: 2,
      kaoqinNum: 15,
      annouceArr: [
        {
          id:1,
          header: "元旦节放假公告",
          department: "技术部",
          company: "消汇邦集团",
          date: "2018/09/27 19:00",
          content:
            "因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。放假期间大家外出注意安全，因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，中秋节快乐！因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。放假期间大家外出注意安全，因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，中秋节快乐！因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。放假期间大家外出注意安全，因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，中秋节快乐！",
          appendix: [
            { name: "中秋放假公告.doxc" },
            { name: "游戏攻略.doxc" },
            { name: "游戏攻略.doxc" },
            { name: "游戏攻略.doxc" },
            { name: "游戏攻略.doxc" },
            { name: "游戏攻略.doxc" }
          ],
          readNum: 320,
          allNum: 1500,
          status: { code: true, txt: "已发布" }
        },
        {
          id:2,
          header: "元旦节放假公告",
          department: "技术部",
          company: "消汇邦集团",
          date: "2018/09/27 19:00",
          content:
            "因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。放假期间大家外出注意安全，因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，中秋节快乐！",
          appendix: [{ name: "元宵放假公告.doxc" }, { name: "游戏攻略.doxc" }],
          readNum: 340,
          allNum: 1500,
          status: { code: false, txt: "未发布" }
        },
        {
             id:3,
          header: "元旦节放假公告",
          department: "技术部",
          company: "消汇邦集团",
          date: "2018/09/27 19:00",
          content:
            "因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。放假期间大家外出注意安全，因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，中秋节快乐！",
          appendix: [{ name: "元旦放假公告.doxc" }, { name: "游戏攻略.doxc" }],
          readNum: 200,
          allNum: 1500,
          status: { code: false, txt: "未发布" }
        },
        {
             id:4,
          header: "元旦节放假公告",
          department: "技术部",
          company: "消汇邦集团",
          date: "2018/09/27 19:00",
          content:
            "因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。放假期间大家外出注意安全，因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间是22、23、24日，放假期间大家外出注意安全，因为中秋节假日到了，放假三天，时间22、23、24日。因为中秋节假日到了放假三天，时间22、23、24日，放假期间大家外出注意安全，中秋节快乐！",
          appendix: [{ name: "中秋放假公告.doxc" }, { name: "游戏攻略.doxc" }],
          readNum: 560,
          allNum: 1500,
          status: { code: true, txt: "已发布" }
        }
      ],
      innerHeight: { height: "" }
    };
  },
  methods: {
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 1500);
    },
    toDeliver() {
      this.$router.push({
        path: "/pages/office/deliverAnnounce"
      });
    },
    openAppendix() {
      alert("求你别点了，还在制作中~");
    },
    editItem(){
       this.$router.push({
        path: "/pages/office/editAnnounce"
      });
    },
    deleteItem(item){
      if(confirm('你确定要删除吗？')){
        for(var i=0;i< this.annouceArr.length;i++){
          if( this.annouceArr[i].id==item.id){
              this.annouceArr.splice(i,1)
          }
        }
      }
    }
  },
  mounted() {
    console.log("全员排名页");
    console.log(window.innerHeight);
    this.innerHeight.height = window.innerHeight - 70 + "px";
  }
};
</script>

<style lang="scss" scoped>
.office-box {
  .office-title {
    height: 70px;
    line-height: 70px;
    padding-left: 10px;
    font-size: 16px;
    color: #2e2f33;
    border-bottom: 1px solid #ededed;
    display: flex;
    justify-content: space-between;
    background: #fff;

    .left-header {
      font-size: 16px;
      cursor: pointer;

      .officehome-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 20px;
        height: 20px;
        background-image: url("../../assets/office/icon_office_active.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      .announcement-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 20px;
        height: 20px;
        background-image: url("../../assets/office/icon_gonggao.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .right-btns {
      button {
        border: none;
        background: none;
        color: #8a8d99;
        outline: none;
        cursor: pointer;
        margin-right: 30px;
        position: relative;
        .right-corner {
          position: absolute;
          background-color: #f74a4a;
          color: #ffffff;
          font-size: 12px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          top: 19%;
          right: -10%;
          line-height: 1.7;
          text-align: center;
        }
        .deliver-icon {
          margin-right: 8px;
          width: 20px;
          height: 20px;
          display: inline-block;
          transform: translateY(20%);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url("../../assets/office/icon_fabu.png");
        }
        &:hover {
          color: #6680ff;
          .deliver-icon {
            background-image: url("../../assets/office/icon_fabu_selected.png");
          }
        }
      }
    }
  }

  .office-content {
    width: 100%;
    padding: 20px;
    display: flex;
    .annouce-list {
      display: flex;
      overflow-x: auto;
      list-style: none;
      .list-item {
        position: relative;
        width: 490px;
            min-width: 490px;
        max-height: 90%;
        margin-right: 20px;
        border: 1px solid #ededed;
        background-color: #ffffff;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        padding: 20px;
        font-size: 14px;
        color: #666666;
        display: flex;
        flex-direction: column;
        padding-bottom: 70px;
        .edit-btn {
          width: 60px;
          height: 32px;
          background-color: #eff2ff;
          border-radius: 2px;
          color: #6680ff;
          font-size: 14px;
          position: absolute;
          right: 85px;
          top: 0;
          border: none;
          cursor: pointer;
           outline: none;
        }
        .delete-btn {
          width: 60px;
          height: 32px;
          background-color: #ffefef;
          border-radius: 2px;
          color: #ff6666;
          font-size: 14px;
          position: absolute;
          right: 20px;
          top: 0;
          border: none;
          cursor: pointer;
          outline: none;
        }
        .item-header {
          font-size: 20px;
          color: #333333;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          margin: 10px 0 10px 0;
        }
        .item-department {
        }
        .item-company {
        }
        .item-date {
        }
        .item-content {
          font-size: 16px;
          margin: 15px;
          line-height: 24px;
          color: #333333;
          overflow: auto;
          max-height: 70%;
        }
        .appendix-wrap {
          list-style: none;
          margin: 0 15px;
          flex: 0 0 auto;
          .item-appendix {
            color: #6680ff;
            cursor: pointer;
          }
        }

        .bottom-area {
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 20px;
          width: 90%;
          .item-countNum {
            color: #666666;
          }
          .item-status {
            font-size: 16px;
            color: #ffa200;
            &.delivered {
              color: #29cc7a;
            }
            &.waiting {
              color: #ffa200;
            }
          }
        }
      }
    }
  }
}
</style>
