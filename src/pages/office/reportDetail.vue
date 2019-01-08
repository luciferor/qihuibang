<template style="height:100%;">
  <div class="report-box" style="height:100%;">
    <div class="report-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/office/officehome"><i class="officehome-icon"></i>办公应用</BreadcrumbItem>
        <BreadcrumbItem to="/pages/office/briefReport"><i class="briefReport-icon"></i>简报</BreadcrumbItem>
        <BreadcrumbItem v-if="this.$route.query.from=='list'"><span v-if="this.$route.query.type==1">日报</span><span
            v-if="this.$route.query.type==2">周报</span><span v-if="this.$route.query.type==3">月报</span></BreadcrumbItem>
        <BreadcrumbItem to="/pages/office/waitMeJudge" v-if="this.$route.query.from=='wait'"><i class="waitMe-icon"></i>待我评审</BreadcrumbItem>
        <BreadcrumbItem to="/pages/office/briefReport" v-if="this.$route.query.from=='wait'">简报评审</BreadcrumbItem>
      </Breadcrumb>
      <div class="right-btns">
        <button type="button" @click="waitJudge()"><i class="wait-judge-icon"></i>待我评审<span class="right-corner">{{judgeNum}}</span></button>
      </div>
    </div>
    <div class="report-content">
      <p class="header-tips">
        <span>{{detailDate}}</span>
        <span style="color: #ffa200;" v-if="detailStatus==1">未提交</span>
        <span style="color: #5c5d66;" v-if="detailStatus==2">已提交</span>
        <span style="color: #6680ff;" v-if="detailStatus==3">已评审</span>
        <span style="color: #ffa200;" v-if="detailStatus==4">未评审</span>
      </p>
      <div class="report-txt-wrap" :class="{gray:isDisable}">
        <p class="report-question">1.你今天完成了哪些工作？最有成就的是什么？</p>
        <textarea class="report-txt"  :disabled="isDisable" autoHeight="true" style="min-height:150px" maxlength="600"></textarea>
        <p class="report-question" >2.明天你计划做什么？要完成什么目标？</p>
        <textarea class="report-txt" :disabled="isDisable"  autoHeight="true"  maxlength="400"></textarea>
        <p class="report-question">3.今天工作你遇到的困难是什么？需要得到哪些帮助？</p>
        <textarea class="report-txt" :disabled="isDisable"  autoHeight="true"  maxlength="400"></textarea>
        <p class="report-question">4.今天工作中，有什么想要跟团队分享的？</p>
        <textarea class="report-txt" :disabled="isDisable"  autoHeight="true" maxlength="400"></textarea>

        <button class="bottom-btn" v-if="detailStatus==4">审批通过</button>
        <button class="bottom-btn" v-if="detailStatus==1||detailStatus==2">提交</button>
      </div>


    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      judgeNum: 11,
      detailDate: this.$route.query.dateTime,
      detailStatus: this.$route.query.status,
      isDisable: false,
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
    }
  },
  mounted() {
    console.log(this.$route.query);
    if(this.$route.query.status==3||this.$route.query.status==4){
      this.isDisable=true
    }
    $.fn.autoHeight = function() {
      function autoHeight(elem) {
        elem.style.height = "auto";
        elem.scrollTop = 0; //防抖动
        elem.style.height = elem.scrollHeight + "px";
      }
      this.each(function() {
        autoHeight(this);
        $(this).on("keyup", function() {
          autoHeight(this);
        });
      });
    };
    $("textarea[autoHeight]").autoHeight();
  }
};
</script>

<style lang="scss" scoped>
.report-box {
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
    margin: 20px 20px 0;
    background-color: #fff;
    border-radius: 4px 4px 0px 0px;
    border: solid 1px #ededed;

    .header-tips {
      height: 70px;
      border-radius: 4px 4px 0px 0px;
      border-bottom: solid 1px #ededed;
      padding: 0 30px;
      font-size: 18px;
      color: #2e2f33;
      line-height: 70px;
      display: flex;
      justify-content: space-between;
    }

    .report-txt-wrap {
      padding: 30px;
      &.gray {
        .report-txt {
          background-color: #f7f7f7;
        }
      }
      .report-question {
        font-size: 16px;
        color: #5c5d66;
        margin-bottom: 15px;
      }

      .report-txt {
        resize: none;
        width: 90%;
        margin-bottom: 15px;
        background-color: #ffffff;
        border-radius: 4px;
        border: solid 1px #dedede;
        padding: 10px;
        font-size: 16px;
      }

      .bottom-btn {
        display: block;
        width: 150px;
        height: 40px;
        background-color: #6680ff;
        border-radius: 4px;
        margin-top: 50px;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: #ffffff;
      }
    }
  }
}
</style>
