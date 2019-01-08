<template style="height:100%;">
  <div class="fulibangfen-box" style="height:100%;">
    <div class="fulibangfen-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem><i class="fulibangfen-icon"></i>福利邦分</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="fulibangfen-content" :style="innerHeight">
      <p class="header-tips">福利邦分</p>
      <div class="user-info-wrap">
        <img class="user-avatar" src="../../assets/userdefault.png">
        <div class="name-and-company">
          <p class="user-name">诶索大</p>
          <p class="company-name">消汇邦信息科技有限公司</p>
        </div>
        <div class="bangfen-wrap">
          <p class="bangfen-num" style="color: #6680ff;	font-size: 30px;font-weight:bold">1236.5</p>
          <p class="bangfen-tip">福利邦分</p>
        </div>
      </div>
      <ul class="ranking-list">
        <li class="ranking-item">
          <span class="ranking-type today">今日</span>
          <span class="ranking-scores">18分</span>
          <span class="ranking-order">2名</span>
        </li>
      <li class="ranking-item">
          <span class="ranking-type yesterday">昨日</span>
          <span class="ranking-scores">18分</span>
          <span class="ranking-order">2名</span>
        </li>
        <li class="ranking-item">
          <span class="ranking-type this-week">本周</span>
          <span class="ranking-scores">18分</span>
          <span class="ranking-order">2名</span>
        </li>
        <li class="ranking-item">
          <span class="ranking-type this-month">本月</span>
          <span class="ranking-scores">18分</span>
          <span class="ranking-order">2名</span>
        </li>
      </ul>

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
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
    }
  },
  mounted() {
    this.innerHeight.height = window.innerHeight - 110 + "px";
  }
};
</script>

<style lang="scss" scoped>
.fulibangfen-box {
  .fulibangfen-title {
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

      .fulibangfen-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 20px;
        height: 20px;
        background-image: url("../../assets/iMenu/sMenu/icon_bangfeng.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  .fulibangfen-content {
    margin: 20px;
    background-color: #fff;
    border-radius: 4px;
    border: solid 1px #ededed;

    .header-tips {
      height: 60px;
      border-radius: 4px 4px 0px 0px;
      border-bottom: solid 1px #ededed;
      line-height: 60px;
      padding-left: 30px;
      font-size: 16px;
    }
    .user-info-wrap {
      display: flex;
      align-items: center;
      height: 200px;
      border-bottom: solid 1px #ededed;
      .user-avatar {
        width: 70px;
        height: 70px;
        border-radius: 35px;
        margin: 0 20px 0 100px;
      }
      .name-and-company {
        .user-name {
          font-size: 24px;
          color: #2e2f33;
          margin-bottom: 8px;
        }
        .company-name {
          color: #8a8c99;
          font-size: 18px;
        }
      }
      .bangfen-wrap {
        text-align: right;
        margin-left: 400px;
        .bangfen-num {
        }
        .bangfen-tip {
          color: #8a8c99;
          font-size: 18px;
        }
      }
    }
    .ranking-list {
      list-style: none;
      display: flex;
      .ranking-item {
        color: #8a8c99;
        width: 250px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border-right: solid 1px #ededed;
        margin-top: 60px;
        &:last-child {
          border-right: none;
        }
        .ranking-type {
          padding: 1px 8px;
          color: #fff;
          border-radius: 8px;
          &.today {
            background-color: #ff6666;
          }
          &.yesterday {
            background-color: #ffaa33;
          }
          &.this-week {
            background-color: #66b3ff;
          }
          &.this-month {
            background-color: #9966ff;
          }
        }
        .ranking-scores {
          font-size: 18px;
        }
        .ranking-order {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
