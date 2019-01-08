<template style="height:100%;">
  <div class="fuli-box" style="height:100%;">
    <div class="fuli-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/ranking/allpeople"><i class="allpeople-icon"></i>全员排名</BreadcrumbItem>
        <BreadcrumbItem><i class="fuli-icon"></i>邦分福利</BreadcrumbItem>
      </Breadcrumb>
      <div class="right-btns">
        <button type="button" @click="glorywall()"><i class="glory-icon"></i>荣誉墙</button>
        <button type="button" @click="awardnow()"><i class="award-icon"></i>立即颁奖</button>
      </div>
    </div>
    <div class="fuli-content">
      <div class="fuli-info today-fuli">
        <p class="fuli-type">今日福利</p>
        <ul class="award-list">
          <li class="list-item">
            <img class="award-img" src="../../assets/ranking/award_demo.png">
            <div class="award-info">
              <p class="award-tip">第一名可获得奖品</p>
              <p class="award-price">价值30-50元</p>
            </div>
          </li>
          <li class="list-item">
            <img class="award-img" src="../../assets/ranking/award_demo.png">
            <div class="award-info">
              <p class="award-tip">第一名可获得奖品</p>
              <p class="award-price">价值30-50元</p>
            </div>
          </li>
        </ul>
        <div class="bottom-content-wrap">
          <!-- <span class="no-winner">暂无获奖</span> -->
          <div class="user-info">
            <p><span class="left-tip">昨日获奖者：</span>小江</p>
            <p><span class="left-tip">所属部门：</span>测试部</p>
          </div>
          <img class="user-avatar" src="../../assets/userdefault.png">
        </div>
      </div>
      <div class="fuli-info thisweek-fuli">
        <p class="fuli-type">本周福利</p>
        <ul class="award-list">
          <li class="list-item">
            <img class="award-img" src="../../assets/ranking/award_demo.png">
            <div class="award-info">
              <p class="award-tip">第一名可获得奖品</p>
              <p class="award-price">价值30-50元</p>
            </div>
          </li>
          <li class="list-item">
            <img class="award-img" src="../../assets/ranking/award_demo.png">
            <div class="award-info">
              <p class="award-tip">第一名可获得奖品</p>
              <p class="award-price">价值30-50元</p>
            </div>
          </li>
        </ul>
        <div class="bottom-content-wrap">
          <span class="no-winner">暂无获奖</span>
          <!-- <div class="user-info">
            <p><span class="left-tip">昨日获奖者：</span>小江</p>
            <p><span class="left-tip">所属部门：</span>测试部</p>
          </div> -->
          <img class="user-avatar" src="../../assets/userdefault.png">
        </div>
      </div>

      <div class="fuli-info thismonth-fuli">
        <p class="fuli-type">本月福利</p>
        <ul class="award-list">
          <li class="list-item">
            <img class="award-img" src="../../assets/ranking/award_demo.png">
            <div class="award-info">
              <p class="award-tip">第一名可获得奖品</p>
              <p class="award-price">价值30-50元</p>
            </div>
          </li>
          <li class="list-item">
            <img class="award-img" src="../../assets/ranking/award_demo.png">
            <div class="award-info">
              <p class="award-tip">第一名可获得奖品</p>
              <p class="award-price">价值30-50元</p>
            </div>
          </li>
        </ul>
        <div class="bottom-content-wrap">
          <span class="no-winner">暂无获奖</span>
          <!-- <div class="user-info">
            <p><span class="left-tip">昨日获奖者：</span>小江</p>
            <p><span class="left-tip">所属部门：</span>测试部</p>
          </div> -->
          <img class="user-avatar" src="../../assets/userdefault.png">
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
      comname: "" //公司名称
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
    glorywall() {
      this.$router.push({
        path: "/pages/ranking/glorywall"
      });
    },
    awardnow() {
      this.$router.push({
        path: "/pages/ranking/awardnow"
      });
    }
  },
  mounted() {
    console.log("全员排名页");
  }
};
</script>

<style lang="scss" scoped>
.fuli-box {
  .fuli-title {
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

      .allpeople-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 17px;
        height: 20px;
        background-image: url("../../assets/ranking/icon_quanyuan_active.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }

      .fuli-icon {
        width: 18px;
        margin-right: 8px;
        height: 20px;
        display: inline-block;
        transform: translateY(20%);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("../../assets/ranking/icon_fuli_active.png");
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
          .award-icon {
            margin-right: 7px;
            width: 21px;
            background-image: url("../../assets/ranking/icon_lijibangjiang__active.png");
          }
          .glory-icon {
            background-image: url("../../assets/ranking/icon_ronyuqiang__active.png");
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

          &.glory-icon {
            width: 20px;
            background-image: url("../../assets/ranking/icon_ronyuqiang.png");
          }

          &.award-icon {
            width: 20px;
            background-image: url("../../assets/ranking/icon_lijibangjiang.png");
          }
        }
      }
    }
  }

  .fuli-content {
    width: 1520px;
    min-height: 418px;
    padding: 30px 0;
    background-color: #5c73e6;
    margin: 20px;
    background-image: url("../../assets/ranking/img_bangfenfuli.png");
    background-size: 280px 385px;
    background-position: 44px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .fuli-info {
      width: 352px;
      height: auto;
      background-image: linear-gradient(135deg, #ff4c4c 0%, #ffc34c 100%);
      border-radius: 4px;
      margin-right: 51px;

      .fuli-type {
        font-family: MicrosoftYaHei-Bold;
        font-size: 24px;
        padding: 25px 0 25px 20px;
        color: #ffffff;
      }

      .award-list {
        padding: 0 20px;
        list-style: none;

        .list-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          &:last-child {
            margin-bottom: 20px;
          }
          .award-img {
            width: 88px;
            height: 88px;
          }
          .award-info {
            color: #ffffff;
            margin-left: 15px;
            margin-bottom: 12px;
            .award-tip {
              font-size: 18px;
              margin-bottom: 18px;
            }
            .award-price {
              font-size: 14px;
            }
          }
        }
      }

      .bottom-content-wrap {
        display: flex;
        align-items: center;
        height: 80px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        justify-content: space-between;
        padding: 0 20px;
        background-color: #ffffff;
        font-size: 16px;
        .no-winner {
          font-size: 16px;
          color: #5c5e66;
        }
        .user-info {
          color: #5c5e66;
          .left-tip {
            color: #b8bccc;
            width: 96px;
            display: inline-block;
            text-align: right;
          }
        }
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 100%;
        }
      }
      &:last-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
