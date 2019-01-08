<template style="height:100%;">
<div  class="ranking-box"> 
    <div class="ranking-title">
      <Breadcrumb class="left-header" separator="＞">
          <BreadcrumbItem to="/pages/ranking/departments"><i class="departments-icon"></i>部门排名</BreadcrumbItem>
         <BreadcrumbItem><i class="history-icon"></i>历史排名</BreadcrumbItem>
      </Breadcrumb>
      <div class="right-btns">
       <button type="button" @click="fuli()"><i class="fuli-icon"></i>邦分福利</button>
      </div>
    </div>
   <div class="ranking-content">
      <div class="ranking-wrap  yesterday-ranking">
        <div class="ranking-header">
          <span class="ranking-type">昨日排名</span>
          <div class="join-info">
            <p class="join-num">8</p>
            <span>已参与部门</span>
          </div>
        </div>
        <ul class="ranking-lists">
           <li class="ranking-item" v-for="(item,index) in yesterdayRanking">
              <span class="order-number">{{item.key}}</span>
              <img v-if="index<=2" class="ueser-avatar" src='../../assets/ranking/icon_bumengxin.png'/>
              <span class="user-department">{{item.department}}</span>
               <p class="score-statistics"><span class="score-num">{{item.score}}</span>平均邦分</p>
          </li>
        </ul>
        <div class="bottom-content">
          <div class="line-through"></div>
          <p class="load-more">加载更多</p>
        </div>
      </div>
      
       <div class="ranking-wrap last-week-ranking">
        <div class="ranking-header">
          <span class="ranking-type">上周排名</span>
          <div class="join-info">
            <p class="join-num">8</p>
            <span>已参与部门</span>
          </div>
        </div>
          <ul class="ranking-lists">
           <li class="ranking-item" v-for="(item,index) in lastWeekRanking">
              <span class="order-number">{{item.key}}</span>
              <img v-if="index<=2" class="ueser-avatar" src='../../assets/ranking/icon_bumengxin.png'/>
              <span class="user-department">{{item.department}}</span>
               <p class="score-statistics"><span class="score-num">{{item.score}}</span>平均邦分</p>
          </li>
        </ul>
        <div class="bottom-content">
          <div class="line-through"></div>
          <p class="load-more">加载更多</p>
        </div>
      </div>
      
       <div class="ranking-wrap last-month-ranking">
        <div class="ranking-header">
          <span class="ranking-type">上月排名</span>
          <div class="join-info">
            <p class="join-num">7</p>
            <span>已参与部门</span>
          </div>
        </div>
         <ul class="ranking-lists">
           <li class="ranking-item" v-for="(item,index) in lastMonthRanking">
              <span class="order-number">{{item.key}}</span>
              <img v-if="index<=2" class="ueser-avatar" src='../../assets/ranking/icon_bumengxin.png'/>
              <span class="user-department">{{item.department}}</span>
               <p class="score-statistics"><span class="score-num">{{item.score}}</span>平均邦分</p>
          </li>
        </ul>
        <div class="bottom-content">
          <div class="line-through"></div>
          <p class="load-more">加载更多</p>
        </div>
      </div>
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
      yesterdayRanking: [
        { key: "01", name: "测试1", score: "3", department: "测试1部" },
        { key: "02", name: "测试2", score: "4", department: "测试1部" },
        { key: "03", name: "测试3", score: "5", department: "测试1部" },
        { key: "04", name: "测试4", score: "6", department: "测试1部" },
        { key: "05", name: "测试5", score: "7", department: "测试1部" },
        { key: "06", name: "测试6", score: "8", department: "测试1部" },
        { key: "07", name: "测试7", score: "9", department: "测试1部" },
        { key: "08", name: "测试6", score: "10", department: "测试1部" },
        { key: "08", name: "测试7", score: "11", department: "测试1部" }
      ],
      lastWeekRanking: [
        { key: "01", name: "测试1", score: "3", department: "测试2部" },
        { key: "02", name: "测试2", score: "4", department: "测试2部" },
        { key: "03", name: "测试3", score: "5", department: "测试2部" },
        { key: "04", name: "测试4", score: "6", department: "测试2部" },
        { key: "05", name: "测试5", score: "7", department: "测试2部" },
        { key: "06", name: "测试6", score: "8", department: "测试2部" },
        { key: "07", name: "测试7", score: "9", department: "测试2部" }
      ],
      lastMonthRanking: [
        { key: "01", name: "测试1", score: "3", department: "测试3部" },
        { key: "02", name: "测试2", score: "4", department: "测试3部" },
        { key: "03", name: "测试3", score: "5", department: "测试3部" },
        { key: "04", name: "测试4", score: "6", department: "测试3部" },
        { key: "05", name: "测试5", score: "7", department: "测试3部" },
        { key: "06", name: "测试6", score: "8", department: "测试3部" },
        { key: "07", name: "测试7", score: "9", department: "测试3部" }
      ]
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
    fuli() {
      this.$router.push({ path: "/pages/ranking/fuli" });
    }
  },
  mounted() {
    console.log("全员排名页");
  }
};
</script>

<style lang="scss" scoped>
.ranking-box {
  width: 100%;
  height: 100%;
  position: relative;
  .ranking-title {
    height: 69px;
    line-height: 69px;
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
      .departments-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 17px;
        height: 20px;
        background-image: url("../../assets/ranking/icon_bumen_active.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
       .history-icon {
        width: 21px;
        margin-right: 8px;
        height: 20px;
        display: inline-block;
        transform: translateY(20%);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("../../assets/ranking/icon_lishi_active.png");
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
         &:hover {
          color: #6680ff;
          .fuli-icon {
            background-image: url("../../assets/ranking/icon_fuli_active.png");
          }
        }
         i {
          margin-right: 8px;
          height: 20px;
          display: inline-block;
          transform: translateY(20%);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          &.fuli-icon {
            width: 18px;
            background-image: url("../../assets/ranking/icon_fuli.png");
          }
        }
      }
    }
  }
  .ranking-content {
    padding: 22px 0 0 22px;
    display: flex;
    width: 1350px;
    flex-wrap: wrap;
    .ranking-wrap {
      background: #fff;
      margin: 0 22px 22px 0;
      border: solid 1px #ededed;
      .ranking-header {
        height: 70px;
        background-color: #5c5d66;
        border-radius: 4px;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
        .ranking-type {
          font-size: 24px;
          font-family: BDZYJT--GB1-0;
        }
        .join-info {
          text-align: center;
          font-size: 14px;
          .join-num {
            font-size: 18px;
          }
        }
      }

       .ranking-lists {
        list-style: none;
        width: 410px;
        overflow: auto;
        height: 685px;
        border-radius: 4px 4px 0px 0px;
        .ranking-item {
          height: 80px;
          width: 380px;
          margin: 15px auto 0;
          border: solid 1px #ededed;
          border-radius: 4px;
          font-size: 18px;
          display: flex;
          align-items: center;
          padding: 0 18px;
          .order-number {
            padding-right: 15px;
          }

          .ueser-avatar {
            width: 44px;
            height: 44px;
            border-radius: 100%;
          }
          .user-department {
            font-size: 14px;
            padding-left: 15px;
          }

          .score-statistics {
            font-family: "MicrosoftYaHei-Bold";
            flex: 1 1 auto;
            text-align: right;
            font-size: 14px;
            .score-num {
              color: #6680ff;
              margin-right: 3px;
            }
          }
        }
       }
    }
    .bottom-content {
      text-align: center;
      height: 70px;
      line-height: 70px;
      width: 400px;
      position: relative;
      .line-through {
        position: absolute;
        width: 380px;
        height: 1px;
        background-color: #ededed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
      }
      .load-more {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        width: 100px;
        color: #8a8d99;
        font-size: 16px;
        cursor: pointer;
        background: #ffffff;
        z-index: 1;
        &:hover{
          color: #6680ff;
        }
      }
    }
  }
}
</style>

