<template style="height:100%;">
  <div class="news-box">
    <div class="news-title">
      <Breadcrumb class="left-header" separator="＞">
     <BreadcrumbItem to="/pages/ranking/allpeople"><i class="allpeople-icon"></i>全员排名</BreadcrumbItem>
        <BreadcrumbItem  to="/pages/ranking/recentnews">
          <i class="recentnews-icon"></i>最新动态
        </BreadcrumbItem>
         <BreadcrumbItem>
          <i class="personnews-icon"></i>赵定昌的动态
        </BreadcrumbItem>
      </Breadcrumb>
      <div class="right-btns">
        <button type="button" @click="historyRanking()"><i class="history-icon"></i>历史排名</button>
        <button type="button"  @click="fuli()"><i class="fuli-icon"></i>邦分福利</button>
      </div>
    </div>
    <div class="news-content">
      <div class="news-wrap">
        <p class="header-tip">最新动态</p>
        <ul class="news-list">
          <li v-for="item in newsList" class="list-item">
            <div class="left-content">
              <img class="user-avatar" src="../../assets/userdefault.png">
              <div class="info-wrap">
                <p class="user-name" @click="personalnews()">{{item.name}}</p>
                <span class="user-punch">{{item.punchtime}}</span>
              </div>
            </div>
            <div class="right-content">
             <p class="user-score"><span class="score-num" v-bind:class="{negative:item.score<0}"><span v-if="item.score>0">+</span>{{item.score}}</span>邦分</p>
              <span class="item-date">{{item.date}}</span>
              <button class="report-btn" @click="report()">举报</button>
            </div>
          </li>
        </ul>
        <Page class="pagination" :total="100" show-total />
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
      newsList: [
        {
          key: "01",
          name: "赵定昌",
          score: "3",
          punchtime: "8:00-9:00",
          date: "2018-3-12 15:21"
        },
        {
          key: "02",
          name: "赵定昌",
          score: "3",
          punchtime: "8:00-9:00",
          date: "2018-3-12 15:21"
        },
        {
          key: "03",
          name: "赵定昌",
          score: "3",
          punchtime: "8:00-9:00",
          date: "2018-3-12 15:21"
        },
        {
          key: "04",
          name: "赵定昌",
          score: "3",
          punchtime: "8:00-9:00",
          date: "2018-3-12 15:21"
        },
        {
          key: "05",
          name: "赵定昌",
          score: "3",
          punchtime: "8:00-9:00",
          date: "2018-3-12 15:21"
        },
        {
          key: "06",
          name: "赵定昌",
          score: "3",
          punchtime: "8:00-9:00",
          date: "2018-3-12 15:21"
        },
        {
          key: "07",
          name: "赵定昌",
          score: "3",
          punchtime: "8:00-9:00",
          date: "2018-3-12 15:21"
        },
        {
          key: "08",
          name: "赵定昌",
          score: "3",
          punchtime: "8:00-9:00",
          date: "2018-3-12 15:21"
        }
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
    historyRanking() {
      this.$router.push({
        path: "/pages/ranking/allpeoplehistory"
      });
    },
    personalnews() {
      this.$router.push({
        path: "/pages/ranking/personalnews"
      });
    },
    fuli() {
      this.$router.push({ path: "/pages/ranking/fuli" });
    },
    report() {
      this.$prompt("核对当日排班", "请填写举报理由", {
        confirmButtonText: "举报",
        cancelButtonText: "取消",
        inputPlaceholder: "举报理由"
      })
        .then(({ value }) => {
          this.reportsuccess();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
      $(".report-tip").remove();
      $(".el-input__inner").after(
        "<span class='report-tip'>注：请根据实际情况进行举报，如举报属实您会获得双倍的邦分奖励，如举报不属实你将会被扣取双倍的邦分奖励。所有举报皆为匿名举报。</span>"
      );
    },
    reportsuccess() {
      this.$alert(
        "<span>您的匿名举报已发送给管理员，请耐心等待评审</span>",
        "举报成功",
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: "好的"
        }
      );
    }
  },
  mounted() {
    console.log("个人动态页");
  }
};
</script>
 
 <style>
.report-tip {
  color: #ff6666;
  font-size: 14px;
  margin-top: 5px;
  display: inline-block;
}
</style>
 
<style lang="scss" scoped>
.news-box {
  width: 100%;
  height: 100%;
  position: relative;

  .news-title {
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
      .allpeople-icon {
        margin: 0 10px 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 17px;
        height: 20px;
        background-image: url("../../assets/ranking/icon_quanyuan_active.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      .recentnews-icon {
        margin-right: 8px;
        height: 20px;
        display: inline-block;
        transform: translateY(20%);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 20px;
        background-image: url("../../assets/ranking/icon_dongtai_active.png");
      }
      .personnews-icon {
        margin-right: 8px;
        height: 20px;
        display: inline-block;
        transform: translateY(20%);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 20px;
        background-image: url("../../assets/ranking/icon_geren_dongtai_active.png");
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
          .history-icon {
            margin-right: 7px;
            width: 21px;
            background-image: url("../../assets/ranking/icon_lishi_active.png");
          }
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
          &.history-icon {
            width: 20px;
            background-image: url("../../assets/ranking/icon_lishi.png");
          }
          &.fuli-icon {
            width: 18px;
            background-image: url("../../assets/ranking/icon_fuli.png");
          }
        }
      }
    }
  }

  .news-content {
    .news-wrap {
      background-color: #fff;
      margin: 20px 20px 0 20px;

      .header-tip {
        height: 70px;
        line-height: 70px;
        border-radius: 4px 4px 0px 0px;
        border: solid 1px #ededed;
        font-size: 18px;
        color: #2e2f33;
        padding-left: 30px;
      }

      .news-list {
        list-style: none;
        .list-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: solid 1px #ededed;
          height: 80px;
          margin: 12px;
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
          .left-content {
            display: flex;
            align-items: center;
            .user-avatar {
              width: 44px;
              height: 44px;
              margin: 0 20px;
              border-radius: 100%;
            }
            .info-wrap {
              .user-name {
                font-size: 18px;
                color: #2e2f33;
                cursor: pointer;
              }

              .user-punch {
                font-size: 14px;
                color: #b8bbcc;
              }
            }
          }

          .right-content {
            display: flex;
            align-items: center;

            .user-score {
              color: #2e2f33;
              font-size: 16px;

              .score-num {
                color: #6680ff;
                margin-right: 5px;
                &.negative {
                  color: #ff6666;
                }
              }

              margin-right: 40px;
            }

            .item-date {
              font-size: 16px;
              color: #8a8c99;
              margin-right: 45px;
            }

            .report-btn {
              width: 60px;
              height: 32px;
              background-color: #fff;
              border-radius: 4px;
              border: solid 1px #667fff;
              color: #6680ff;
              font-size: 14px;
              margin-right: 20px;
              cursor: pointer;
            }
          }
        }
      }
      .pagination {
        text-align: center;
        padding: 10px 0 20px 0;
      }
    }
  }
}
</style>
