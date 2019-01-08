<template style="height:100%;">
  <div class="report-box">
    <div class="report-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/office/officehome"><i class="officehome-icon"></i>办公应用</BreadcrumbItem>
        <BreadcrumbItem to="/pages/office/briefReport"><i class="briefReport-icon"></i>简报</BreadcrumbItem>
        <BreadcrumbItem><i class="waitMe-icon"></i>待我评审</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="report-content" :style="innerHeight">
      <div class="report-wrap  today-report">
        <div class="report-header">
          <span class="report-type">日报</span>
        </div>
        <ul class="report-lists">
          <li class="report-item" @click="reportDetail(item)" v-bind:class="{judged:item.status==3}" v-for="item in dailyReport"
            :key="item.id">
            <img class="reporter-avatar" src="../../assets/userdefault.png">
            <div class="reporter-info">
              <p class="reporter-name">{{item.submitMan}}</p>
              <span class="report-date">{{item.dateTime}}</span>
            </div>

            <span class="report-status" v-if="item.status==4">未评审</span><span class="report-status" v-if="item.status==3">已评审</span>
          </li>
        </ul>
        <div class="bottom-content">
          <div class="line-through"></div>
          <p class="load-more">加载更多</p>
        </div>
      </div>

      <div class="report-wrap this-week-report">
        <div class="report-header">
          <span class="report-type">周报</span>
        </div>
        <ul class="report-lists">
          <li class="report-item" @click="reportDetail(item)" v-bind:class="{judged:item.status==3}" v-for="item in weekReport"
            :key="item.id">
            <img class="reporter-avatar" src="../../assets/userdefault.png">
            <div class="reporter-info">
              <p class="reporter-name">{{item.submitMan}}</p>
              <span class="report-date">{{item.dateTime}}</span>
            </div>

            <span class="report-status" v-if="item.status==4">未评审</span><span class="report-status" v-if="item.status==3">已评审</span>
          </li>
        </ul>
        <div class="bottom-content">
          <div class="line-through"></div>
          <p class="load-more">加载更多</p>
        </div>
      </div>

      <div class="report-wrap this-month-report">
        <div class="report-header">
          <span class="report-type">月报</span>
        </div>
        <ul class="report-lists">
          <li class="report-item" @click="reportDetail(item)" v-bind:class="{judged:item.status==3}" v-for="item in monthReport"
            :key="item.id">
             <img class="reporter-avatar" src="../../assets/userdefault.png">
            <div class="reporter-info">
              <p class="reporter-name">{{item.submitMan}}</p>
              <span class="report-date">{{item.dateTime}}</span>
            </div>

            <span class="report-status" v-if="item.status==4">未评审</span><span class="report-status" v-if="item.status==3">已评审</span>
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
        dailyReport: [{
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "4"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "4"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "4"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          }
        ],
        weekReport: [{
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "4"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          }
        ],
        monthReport: [{
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "4"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "4"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "4"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "4"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          },
          {
            dateTime: "2018-08-09 20:03",
            submitMan: "李潇",
            status: "3"
          }
        ],
        innerHeight: {
          height: ""
        }
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
      waitJudge() {
        this.$router.push({
          path: "/pages/office/waitMeJudge"
        });
      },
      reportDetail(item) {
          item.from="wait"
        this.$router.push({
          path: "/pages/office/reportDetail",
          query: item,
        });
      }
    },
    mounted() {
      console.log("全员排名页");
      this.innerHeight.height = window.innerHeight - 90 + "px";
    }
  };

</script>

<style lang="scss" scoped>
  .report-box {
    width: 100%;
    height: 100%;
    position: relative;

    .report-title {
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

        .briefReport-icon {
          margin: 0 8px;
          display: inline-block;
          transform: translateY(20%);
          width: 20px;
          height: 20px;
          background-image: url("../../assets/office/icon_jiangbaonormal_active.png");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        .waitMe-icon {
          margin: 0 8px;
          display: inline-block;
          transform: translateY(20%);
          width: 20px;
          height: 20px;
          background-image: url("../../assets/office/icon_daiwo_active.png");
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

          &:hover {
            color: #6680ff;

            .wait-judge-icon {
              background-image: url("../../assets/office/icon_daiwo_active.png");
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

            &.wait-judge-icon {
              width: 20px;
              background-image: url("../../assets/office/icon_daiwo.png");
            }
          }
        }
      }
    }

    .report-content {
      padding: 20px 0 0 20px;
      display: flex;
      flex-wrap: wrap;

      .report-wrap {
        background: #fff;
        margin: 0 22px 0 0;
        border: solid 1px #ededed;

        .report-header {
          height: 70px;
          border-radius: 4px 4px 0px 0px;
          color: #2e2f33;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 25px;
          border-bottom: solid 1px #ededed;

          .report-type {
            font-size: 18px;
            font-weight: bold;
          }
        }

        .report-lists {
          list-style: none;
          width: 490px;
          overflow: auto;
          height: 685px;
          border-radius: 4px 4px 0px 0px;

          .report-item {
            height: 70px;
            margin: 10px;
            border: solid 1px #ededed;
            border-radius: 4px;
            display: flex;
            align-items: center;
            padding: 0 18px;
            font-size: 16px;
            color: #2e2f33;
            cursor: pointer;

            &.judged {
              color: #6680ff;
            }

            .reporter-avatar {
              width: 40px;
              height: 40px;
            }

            .reporter-info {
              margin-left: 15px;
              .report-name {
                font-size: 18px;
              }

              .report-date {
                font-size: 14px;
              }
            }

            .report-status {
              flex: 1 1 auto;
              text-align: right;
              margin-right: 3px;
            }
          }
        }
      }

      .bottom-content {
        text-align: center;
        height: 70px;
        line-height: 70px;
        width: 100%;
        position: relative;

        .line-through {
          position: absolute;
          width: 90%;
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

          &:hover {
            color: #6680ff;
          }
        }
      }
    }
  }

</style>
