<template style="height:100%;">
  <div class="selfinfo-box" style="height:100%;">
    <div class="selfinfo-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem><i class="selfinfo-icon"></i>个人信息</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="selfinfo-content" :style="innerHeight">
      <p class="header-tips">个人信息 </p>
      <ul class="form-list-wrap">


        <li class="list-item">
          <span class="left-tip">个人头像</span>
          <div class="right-content" style="width:470px;	font-size: 16px;">
            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :limit="1"
              :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </div>
        </li>
        <li class="list-item">
          <span class="left-tip">个人姓名</span>
          <div class="right-content ">
            <el-input style="width: 500px;height: 40px;" placeholder="请输入内容" v-model="input10" clearable>
            </el-input>
          </div>
        </li>
        <li class="list-item">
          <span class="left-tip">个人电话</span>
          <div class="right-content ">
            <el-input style="width: 500px;height: 40px;" placeholder="请输入内容" v-model="input10" clearable>
            </el-input>
          </div>
        </li>
         <li class="list-item">
          <span class="left-tip">绑定微信</span>
          <div class="right-content ">
            <p class="bind-wechat">未绑定 ></p>
          </div>
        </li>
                <li class="list-item">
          <span class="left-tip">岗位</span>
          <div class="right-content ">
            <el-input style="width: 500px;height: 40px;" placeholder="请输入内容" v-model="input10" clearable>
            </el-input>
          </div>
        </li>
                <li class="list-item">
          <span class="left-tip">部门</span>
          <div class="right-content ">
            <el-input style="width: 500px;height: 40px;" placeholder="请输入内容" v-model="input10" clearable>
            </el-input>
          </div>
        </li>
                <li class="list-item">
          <span class="left-tip">企业</span>
          <div class="right-content ">
            <el-input style="width: 500px;height: 40px;" placeholder="请输入内容" v-model="input10" clearable>
            </el-input>
          </div>
        </li>
        <li class="list-item">
          <span class="left-tip"></span>
          <div class="right-content">
            <button class="submit-btn">保存</button>
          </div>
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
  .selfinfo-box {
    .selfinfo-title {
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

        .selfinfo-icon {
          margin: 0 8px;
          display: inline-block;
          transform: translateY(20%);
          width: 20px;
          height: 20px;
          background-image: url("../../assets/office/icon_kaoqing_active.png");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      }
    }

    .selfinfo-content {
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
            line-height: 40px;
          }

          .right-content {
            .bind-wechat{
              	font-size: 16px;
                	color: #b8bbcc;
                  width: 500px;
                  text-align: right;
                  cursor: pointer;
                  line-height: 40px;
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
  }

</style>


<style lang="scss">
  .selfinfo-content {
    .el-upload-list--picture-card .el-upload-list__item {
      width: 90px;
      height: 90px;
      margin: 0 8px 0 0;
    }

    .el-upload--picture-card {
      width: 90px;
      height: 90px;
      line-height: 100px;
    }
  }

</style>
