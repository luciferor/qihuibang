<template style="height:100%;">
  <div class="attendance-box" style="height:100%;">
    <div class="attendance-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/office/officehome"><i class="officehome-icon"></i>办公应用</BreadcrumbItem>
        <BreadcrumbItem to="/pages/office/attendanceRecord"><i class="attendanceRecord-icon"></i>考勤人数</BreadcrumbItem>
        <BreadcrumbItem to="/pages/office/attendanceDetail"><i class="attendanceDetail-icon"></i>考勤详情</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="attendance-content" :style="innerHeight">
      <div class="top-content">
        <img class="user-avatar" src="../../assets/iMenu/user.jpg" />
        <div class="user-info-wrap">
          <p class="user-name">艾晓晓</p>
          <p class="user-department">技术部</p>
        </div>
        <div class="block date-picker">
          <el-date-picker v-model="dateValue" align="right" @change="pickMonth" type="month" value-format="yyyy-MM"
            placeholder="选择月">
          </el-date-picker>
        </div>
      </div>
      <ul class="kaoqin-list">
        <li class="list-item" v-for="item in kaoqinArr" :key="item.key">
          <p class="count-num">{{item.num}}</p>
          <span class="count-tip">{{item.txt}}</span>
        </li>
      </ul>
      <div class="kaoqin-calendar-wrap">
        <div class="calendar-area">

        </div>
        <div class="daily-work-detail">
          <div class="work-info-wrap">
            <p class="work-time">
              <i class="clock-logo"></i>今日打卡<span class="clock-num">{{punchDetail.today_clock.clock_num}}</span>次，工时共计{{punchDetail.today_clock.work_time}}分钟
            </p>
            <p class="work-period">班次：<span v-if="punchDetail.basic.type==0">白班</span><span v-if="punchDetail.basic.type==1">夜班</span>
              {{punchDetail.basic.start_time}}-{{punchDetail.basic.end_time}}</p>
          </div>

          <div class="start-punch punch-info">
            <span class="punch-time">上班打卡时间  {{punchDetail.today_clock.start_time}}  </span>
            <span v-if="punchDetail.today_clock.start_status==1" class="normal-punch punch-status">正常</span>
            <span v-if="punchDetail.today_clock.start_status==2" class="late-punch punch-status">迟到</span>
            <span v-if="punchDetail.today_clock.start_status==3" class="absent-punch punch-status">缺卡</span>
            <p class="locate-wrap"><i class="location-logo"></i>{{punchDetail.today_clock.address}}</p>
          </div>

          <div class="end-punch punch-info">
            <span class="punch-time">下班打卡时间  {{punchDetail.today_clock.end_time}}  </span>
            <span v-if="punchDetail.today_clock.end_status==1" class="normal-punch punch-status">正常</span>
            <span v-if="punchDetail.today_clock.end_status==2" class="late-punch punch-status">早退</span>
            <span v-if="punchDetail.today_clock.end_status==3" class="absent-punch punch-status">缺卡</span>
             <p class="locate-wrap"> <i class="location-logo"></i>{{punchDetail.today_clock.address}}</p>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      kaoqinArr: [
        {
          num: 24,
          txt: "出勤天数"
        },
        {
          num: 6,
          txt: "休息天数"
        },
        {
          num: 0,
          txt: "迟到次数"
        },
        {
          num: 14,
          txt: "缺卡天数"
        },
        {
          num: 0,
          txt: "请假天数"
        },
        {
          num: 24,
          txt: "应出勤天数"
        }
      ],
      dateValue: "",
      innerHeight: {
        height: ""
      },
      punchDetail: {
        basic: {
          company_name: "消汇邦",
          type: 0,
          start_time: "09:00:00",
          end_time: "18:00:00"
        },
        today_clock: {
          week_data: "3",
          start_time: "08:50:00",
          end_time: "18:05:00",
          address: "西乡商会大厦消汇邦",
          start_status: 1,
          end_status: 3,
          work_time: 420,
          clock_num: 2,
          is_leave: 0,
          date_time: "2018-07-18"
        },
        attend_arr: [
          {
            start_time: "16",
            is_abnormal: 1
          }
        ],
        rest_arr: ["01", "07", "08", "14", "15", "21", "22", "28", "29"],
        absent_arr: [
          "02",
          "03",
          "04",
          "05",
          "06",
          "09",
          "10",
          "11",
          "12",
          "13",
          "17",
          "18"
        ],
        holiday_arr: []
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
    pickMonth() {
      console.log(this.dateValue);
    }
  },
  mounted() {
    console.log("全员排名页");
    this.innerHeight.height = window.innerHeight - 110 + "px";
  }
};
</script>

<style lang="scss" scoped>
.attendance-box {
  .attendance-title {
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

      .attendanceRecord-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 21px;
        height: 20px;
        background-image: url("../../assets/office/icon_kaoqingrenshu_active.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }

      .attendanceDetail-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 21px;
        height: 20px;
        background-image: url("../../assets/office/icon_kaoqing_active.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  .attendance-content {
    margin: 20px 20px 0;
    background-color: #fff;
    width: 1520px;
    box-shadow: 0px 0px 6px 0px rgba(108, 108, 108, 0.07);

    .top-content {
      display: flex;
      padding: 30px;
      align-items: center;

      .user-avatar {
        width: 70px;
        height: 70px;
        border-radius: 35px;
        margin-right: 15px;
      }

      .user-info-wrap {
        .user-name {
          font-size: 24px;
          color: #2e2f33;
        }

        .user-department {
          font-size: 18px;
          color: #8a8c99;
          margin-top: 5px;
        }
      }

      .date-picker {
        flex: 1 1 auto;
        text-align: right;
      }
    }

    .kaoqin-list {
      list-style: none;
      display: flex;
      width: 80%;
      padding: 30px 0;

      .list-item {
        flex: 1 1 auto;
        text-align: center;
        border-right: 1px solid #ededed;

        &:last-child {
          border-right: none;
        }

        .count-num {
          font-size: 30px;
          color: #6680ff;
        }

        .count-tip {
          font-size: 14px;
          color: #2e2f33;
          padding: 0 15px;
        }
      }
    }

    .kaoqin-calendar-wrap {
      width: 1100px;
      height: 460px;
      background-color: #fafafa;
      border-radius: 4px;
      position: relative;
      margin: 60px 60px 0;

      .calendar-area {
        width: 550px;
        height: 460px;
        background-color: #ffffff;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
        border-radius: 4px;
        border: solid 1px #ededed;
        position: absolute;
        left: -35px;
        top: -35px;
      }

      .daily-work-detail {
        position: absolute;
        right: 0;
        top: 0;
        width: 50%;
        height: 100%;
        padding: 30px 0;
        .work-info-wrap {
          .work-time {
            font-size: 18px;
            color: #2e2f33;
            display: flex;
            align-items: center;
            .clock-logo {
              width: 20px;
              height: 20px;
              margin-right: 5px;
              background-image: url("../../assets/office/icon_shijiang.png");
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
            }
            .clock-num {
              color: #6680ff;
            }
          }
          .work-period {
            color: #b8bbcc;
            font-size: 14px;
          }
        }
        .punch-info {
          margin-top: 75px;
          &.start-punch{
             margin-top: 35px;
          }
          .punch-time {
            font-size: 18px;
            color: #2e2f33;
          }
          .punch-status {
            display: inline-block;
            margin-left: 15px;
            width: 40px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            border-radius: 2px;
            color: #fff;
            &.normal-punch {
              background-color: #6680ff;
            }
            &.late-punch {
              background-color: #ffa200;
            }
            &.absent-punch {
              background-color: #ff6666;
            }
          }
          .locate-wrap {
            display: flex;
            align-items: center;
            color: #8a8c99;
            font-size: 16px;
            .location-logo {
              width: 12px;
              height: 16px;
              margin-right: 5px;
              background-image: url("../../assets/office/icon_kaoqing_dingwei.png");
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
            }
          }
        }
      }
    }
  }
}
</style>
