<template style="height:100%;">
  <div class="office-box" style="height:100%;">
    <div class="office-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/office/officehome"><i class="officehome-icon"></i>办公应用</BreadcrumbItem>
               <BreadcrumbItem to="/pages/office/signIn"><i class="signIn-icon"></i>签到</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="office-content">
      <div class="signIn-tip-logo">


      </div>
      <p class="signIn-tip">签到打卡请到企汇邦APP</p>
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
      kaoqinNum: 15
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
    }
  },
  mounted() {
    console.log("全员排名页");
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
      .signIn-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 20px;
        height: 21px;
        background-image: url("../../assets/office/icon_qiandao_2.png");
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
        i {
          margin-right: 8px;
          height: 20px;
          display: inline-block;
          transform: translateY(20%);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          &.review-icon {
            width: 20px;
            background-image: url("../../assets/office/icon_daiwoshenpi.png");
          }

          &.attendance-icon {
            width: 20px;
            background-image: url("../../assets/office/icon_kaoqingrenshu.png");
          }
        }
        &:hover {
          color: #6680ff;
          .review-icon {
            background-image: url("../../assets/office/icon_daiwoshenpi_active.png");
          }
          .attendance-icon {
            background-image: url("../../assets/office/icon_kaoqingrenshu_active.png");
          }
        }
      }
    }
  }

  .office-content {
    padding: 30px 0;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .signIn-tip-logo {
	width: 223px;
	height: 203px;
      background-image: url("../../assets/office/img_qiandaodaka.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      margin-top: 50px;
    }
    .signIn-tip{
      	color: #2e2f33;
        	font-size: 18px;
          margin-top: 30px;
    }
  }
}
</style>
