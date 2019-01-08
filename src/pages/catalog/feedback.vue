<template style="height:100%;">
  <div class="feedback-box" style="height:100%;">
    <div class="feedback-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem><i class="feedback-icon"></i>意见反馈</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="feedback-content" :style="innerHeight">
      <p class="header-tips">意见反馈</p>
      <div class="feedback-wrap">
        <p class="feedback-tips">如果您对我们有什么建议、想法和期望，请告诉我们</p>
        <textarea class="feedback-txtarea" placeholder="请输入内容..." maxlength="500"> </textarea>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" style="position: absolute;bottom: 20px;left: 50px;" list-type="picture-card" :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

      </div>

      <button class="submit-btn">提交</button>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        innerHeight: {
          height: ""
        },
        dialogImageUrl: '',
        dialogVisible: false
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    mounted() {
      this.innerHeight.height = window.innerHeight - 110 + "px";
    }
  };

</script>

<style lang="scss" scoped>
  .feedback-box {
    .feedback-title {
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

        .feedback-icon {
          margin: 0 8px;
          display: inline-block;
          transform: translateY(20%);
          width: 20px;
          height: 20px;
          background-image: url("../../assets/office/icon_gonggao_bianji.png");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      }
    }

    .feedback-content {
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

      .feedback-wrap {
        padding-left: 30px;
        margin-top: 50px;
        position: relative;

        .feedback-tips {
          margin: 0 0 20px 0;
          font-size: 16px;
          color: #5c5d66;
        }

        .feedback-txtarea {
          width: 80%;
          height: 250px;
          background-color: #ffffff;
          border-radius: 4px;
          resize: none;
          outline: none;
          font-size: 16px;
          padding: 15px;
        }
      }

      .submit-btn {
        width: 200px;
        height: 50px;
        background-color: #6680ff;
        border-radius: 4px;
        font-size: 16px;
        color: #ffffff;
        border: none;
        outline: none;
        cursor: pointer;
        margin-left: 30px;
        margin-top: 45px;
      }
    }
  }

</style>

<style lang="scss">
  .feedback-content {
    .el-upload-list--picture-card .el-upload-list__item {
      width: 50px;
      height: 50px;
      margin: 0 8px 0 0;
    }

    .el-upload--picture-card {
      width: 50px;
      height: 50px;
      line-height: 60px;
    }
  }

</style>
