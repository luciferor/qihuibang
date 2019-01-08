<template style="height:100%;">
  <div class="buka-box" style="height:100%;">
    <div class="buka-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/office/officehome"><i class="officehome-icon"></i>办公应用</BreadcrumbItem>
          <BreadcrumbItem to="/pages/office/shenpi"><i class="shenpi-icon"></i>审批</BreadcrumbItem>
           <BreadcrumbItem to="/pages/office/shenpiBuka"><i class="buka-icon"></i>补卡</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="buka-content"  :style="innerHeight">
      <p class="header-tips">补卡</p>
      <ul class="form-list-wrap">
        <li class="list-item">
          <span class="left-tip">补卡时间点</span>
          <div class="right-content">
            <span class="pick-date-btn" @click="openDate()">请选择时间点</span>
          </div>
        </li>
        <li class="list-item">
          <span class="left-tip" style="line-height:40px">缺卡原因</span>
          <div class="right-content">
            <textarea class="reason" placeholder="请填写事由" maxlength="80"></textarea>
          </div>
        </li>
        <li class="list-item">
          <span class="left-tip">图片</span>
          <div class="right-content" style="width:470px;	font-size: 16px;">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :limit="9"   :on-exceed="handleExceed"
              :on-remove="handleRemove" :file-list="imagesArr" list-type="picture">
              <el-button size="small" type="primary">添加图片</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb(最多选择9张)</div>
            </el-upload>
          </div>
        </li>
        <li class="list-item">
          <span class="left-tip">审批人</span>
          <div class="right-content shenpi-info">
            <p class="shenpi-tip">审批人已由管理员预置</p>
            <div class="name-wrap">
              <img class="shenpi-avatar" src="../../assets/ranking/demo2.png" />
              <p class="shenpi-name">王太伟</p>
            </div>

          </div>
        </li>
        <li class="list-item">
          <span class="left-tip">抄送人</span>
          <div class="right-content shenpi-info">
            <p class="shenpi-tip">审批通过后，通知抄送人</p>
            <div class="name-wrap">
              <img class="shenpi-avatar" src="../../assets/ranking/demo2.png" />
              <p class="shenpi-name">刘某</p>
            </div>
          </div>
        </li>
        <li class="list-item">
          <span class="left-tip"></span>
          <div class="right-content">
            <button class="submit-btn">提交</button>
          </div>
        </li>


      </ul>
    </div>
    <div class="buka-date-area">
        <p class="top-tips">考勤月历<i @click="closeDate();" class="el-icon-close"></i></p>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      innerHeight: { height: "" },
      imagesArr: []
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
    dateChange() {
      var start = this.periodValue[0];
      var end = this.periodValue[1];
      this.durationValue =
        Math.round(((end - start) / (60 * 60 * 1000 * 24)) * 10) / 10;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`最多只能选择${fileList.length}张图片`);
    },
    openDate() {
      $(".buka-date-area").animate(
        {
          right: "0"
        },
        500
      );
    },
    closeDate() {
      $(".buka-date-area").animate(
        {
          right: "-440"
        },
        500
      );
    }
  },
  mounted() {
    this.innerHeight.height = window.innerHeight - 90 + "px";
  }
};
</script>

<style lang="scss" scoped>
.buka-box {
  .buka-title {
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
      .shenpi-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 17px;
        height: 20px;
        background-image: url("../../assets/office/icon_shenpi1_active.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      .buka-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 20px;
        height: 20px;
        background-image: url("../../assets/office/icon_buka_nav.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  .buka-content {
    margin: 20px 20px 0;
    background-color: #fff;
border-radius: 4px 4px 0px 0px;
	border: solid 1px #ededed;
    .header-tips {
      height: 70px;
      border-radius: 4px 4px 0px 0px;
      border-bottom: solid 1px #ededed;
      padding-left: 30px;
      font-size: 18px;
      color: #2e2f33;
      line-height: 70px;
    }

    .form-list-wrap {
      list-style: none;
      padding-top: 30px;

      .list-item {
        display: flex;
        margin: 15px 0;

        .left-tip {
          width: 85px;
          text-align: left;
          font-size: 16px;
          color: #2e2f33;
          margin: 0 10px 0 60px;
        }

        .right-content {
          &.shenpi-info {
            margin-bottom: 25px;

            .shenpi-tip {
              font-size: 14px;
              color: #b8bbcc;
            }

            .name-wrap {
              width: 80px;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: -10px;

              .shenpi-avatar {
                width: 44px;
                height: 44px;
                border-radius: 50%;
                margin: 5px;
              }

              .shenpi-name {
                color: #2e2f33;
                font-size: 16px;
              }
            }
          }
          .pick-date-btn {
            color: #6680ff;
            font-size: 16px;
            cursor: pointer;
          }
          .reason {
            width: 470px;
            height: 80px;
            resize: none;
            border-radius: 4px;
            border: solid 1px #dedede;
            padding: 10px;
            outline: none;
          }

          .submit-btn {
            width: 200px;
            height: 50px;
            line-height: 50px;
            background-color: #6680ff;
            border-radius: 4px;
            color: #ffffff;
            font-size: 18px;
            text-align: center;
            border: none;
            outline: none;
            cursor: pointer;
          }
        }
      }
    }
  }

  .buka-date-area {
    position: fixed;
    right: -440px;
    top: 0;
    width: 440px;
    height: 100%;
    box-shadow: -4px 0px 20px 0px rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    .top-tips {
      height: 70px;
      line-height: 70px;
      border-bottom: 1px solid #efefef;
      font-size: 18px;
      color: #2e2f33;
      padding: 0 30px;

      .el-icon-close {
        float: right;
        line-height: 70px;
        font-size: 25px;
        cursor: pointer;
      }
    }
  }
}
</style>

<style lang="scss">
.buka-content {
  .el-upload-list {
    display: flex !important;
    width: 50px;
  }

  .el-upload-list--picture .el-upload-list__item {
    margin-right: 10px !important;
    padding: 10px 0px 10px 90px !important;
  }

  .el-upload-list--picture .el-upload-list__item-status-label {
    background: #6680ff !important;
  }

  .el-upload-list--picture
    .el-upload-list__item.is-success
    .el-upload-list__item-name {
    display: none !important;
  }
}
</style>
