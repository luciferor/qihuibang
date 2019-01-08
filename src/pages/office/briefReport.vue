<template style="height:100%;">
<div  class="report-box"> 
    <div class="report-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/office/officehome"><i class="officehome-icon"></i>办公应用</BreadcrumbItem>
          <BreadcrumbItem ><i class="briefReport-icon"></i>简报</BreadcrumbItem>
      </Breadcrumb>
      <div class="right-btns">
        <button type="button" @click="waitJudge()"><i class="wait-judge-icon"></i>待我评审<span class="right-corner">{{judgeNum}}</span></button>
      </div>
    </div>
    <div class="report-content" :style="innerHeight">
      <div class="report-wrap  today-report">
        <div class="report-header">
          <span class="report-type">日报</span>
        </div>
        <ul class="report-lists">
           <li class="report-item" @click="reportDetail(item)" v-bind:class="{notSubmit:item.status==1,judged:item.status==3}" v-for="item in dailyReport" :key="item.id"> 
              <span class="report-date" v>{{item.dateTime}}</span>
               <p class="score-statistics"><span class="report-status" v-if="item.status==1">未提交</span><span class="report-status" v-if="item.status==2">编辑</span><span class="report-status" v-if="item.status==3">{{item.judgeMan}}已评审</span></p>
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
           <li class="report-item" @click="reportDetail(item)" v-bind:class="{notSubmit:item.status==1,judged:item.status==3}" v-for="item in weekReport" :key="item.id">
              <span class="report-date">{{item.dateTime}}</span>
  <p class="score-statistics"><span class="report-status" v-if="item.status==1">未提交</span><span class="report-status" v-if="item.status==2">编辑</span><span class="report-status" v-if="item.status==3">{{item.judgeMan}}已评审</span></p>
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
           <li class="report-item" @click="reportDetail(item)" v-bind:class="{notSubmit:item.status==1,judged:item.status==3}" v-for="item in monthReport" :key="item.id">
              <span class="report-date">{{item.dateTime}}</span>
      <p class="score-statistics"><span class="report-status" v-if="item.status==1">未提交</span><span class="report-status" v-if="item.status==2">编辑</span><span class="report-status" v-if="item.status==3">{{item.judgeMan}}已评审</span></p>
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
      judgeNum:11,
      dailyReport: [
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "1"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "1"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "1"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "1"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "1"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "1"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "1"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "1"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "1"
        }
      ],
      weekReport: [
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "2"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "2"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "2"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "2"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "2"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "2"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "2"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "2"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "2"
        }
      ],
      monthReport: [
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "1",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "2",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "3"
        },
        {
          dateTime: "2018-08-09 20:03",
          judgeMan: "李潇",
          status: "3",
          type: "3"
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
    waitJudge() {
      this.$router.push({ path: "/pages/office/waitMeJudge" });
    
    },
    reportDetail(item) {
      item.from="list"
      this.$router.push({
        path: "/pages/office/reportDetail",
        query:item,
      });
    },
  },
  mounted() {
    console.log("全员排名页");
    this.innerHeight.height =window.innerHeight-90+'px';
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
          justify-content: space-between;
          font-size: 16px;
          color: #2e2f33;
          cursor: pointer;
          &.notSubmit {
            color: #ffa200;
          }
          &.judged {
            color: #6680ff;
          }
          .report-date {
            padding-right: 15px;
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

