<template style="height:100%;">
  <div class="award-box" style="height:100%;">
    <div class="award-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/ranking/allpeople"><i class="allpeople-icon"></i>全员排名</BreadcrumbItem>
        <BreadcrumbItem to="/pages/ranking/fuli"><i class="fuli-icon"></i>邦分福利</BreadcrumbItem>
        <BreadcrumbItem><i class="award-icon"></i>立即颁奖</BreadcrumbItem>
      </Breadcrumb>
      <div class="right-btns">
        <button type="button" @click="glorywall()"><i class="glory-icon"></i><span>荣誉墙</span></button>
      </div>
    </div>
    <div class="award-content">
      <p class="award-header">立即颁奖</p>
      <el-form class="form-content-wrap">
        <el-form-item label="颁奖类型">
          <el-select v-model="form.prizetype" placeholder="请选择颁奖类型">
            <el-option v-bind:value="item.name" v-for="item in prizetypeArr" :key="item.key"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="获奖人员">
          <el-select v-model="form.winner" placeholder="请选择获奖人">
            <el-option v-bind:value="item.name"  v-for="item in winnerArr" :key="item.key"></el-option>
          </el-select>
        </el-form-item>
        <div class="blessing-wrap form-content-item">
          <span class="left-tip">祝福话语</span>
          <textarea class="blessing-area" v-bind:class="{overnum:blessingtxt.length>50}" placeholder="请输入祝福的话" @input="blessing()" v-model="blessingtxt"></textarea>
          <p class="length-count"><span class="now-num" v-bind:class="{overnum:blessingtxt.length>50}">0</span>/50</p>
        </div>
        <div class="award-picture form-content-item">
          <span class="left-tip">颁奖图片</span>
          
           <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :limit="9"   :on-exceed="handleExceed"
              :on-remove="handleRemove" :file-list="imagesArr" list-type="picture">
              <el-button size="small" type="primary">添加图片</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb(最多选择9张)</div>
            </el-upload>
        </div>
        <el-form-item label="通知全员">
          <el-radio-group v-model="form.inform">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-button type="primary" @click="onSubmit" style="font-size: 18px;width: 200px;height: 50px;background-color: #6680ff;border-radius: 4px;margin-left: 68px;">立即发布</el-button>
      </el-form>

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
      prizetypeArr: [
        { name: "每日奖励" },
        { name: "每周奖励" },
        { name: "每月奖励" }
      ],
      winnerArr: [
        { name: "李磊" },
        { name: "张明" },
        { name: "韩梅" },
        { name: "宋叶" }
      ],
      form: {
        inform: "",
        prizetype: "",
        winner: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        desc: ""
      },
      blessingtxt: "",
      addedimg: "",
      imagesArr:[]
      
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
    glorywall() {
      this.$router.push({
        path: "/pages/ranking/glorywall"
      });
    },
    onSubmit() {
      this.$message({
        message: "已提交成功！",
        type: "success"
      });
    },
    blessing() {
      $(".now-num").text(this.blessingtxt.length);
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
  },
  mounted() {
    $(".el-textarea__inner")
      .css({
        height: "80px",
        resize: "none"
      })
      .attr("maxlength", "50");
  }
};
</script>

<style>
.el-select-dropdown__list {
  padding: 0 0 15px 0 !important;
}

.el-select {
  width: 470px;
}
</style>

<style lang="scss" scoped>
.award-box {
  .award-title {
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

      .allpeople-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 17px;
        height: 20px;
        background-image: url("../../assets/ranking/icon_quanyuan_active.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }

      .fuli-icon {
        width: 18px;
        margin-right: 8px;
        height: 20px;
        display: inline-block;
        transform: translateY(20%);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("../../assets/ranking/icon_fuli_active.png");
      }

      .award-icon {
        width: 21px;
        margin-right: 8px;
        height: 20px;
        display: inline-block;
        transform: translateY(20%);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("../../assets/ranking/icon_lijibangjiang__active.png");
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

          .glory-icon {
            background-image: url("../../assets/ranking/icon_ronyuqiang__active.png");
          }
        }

        span {
        }

        i {
          margin-right: 8px;
          height: 20px;
          display: inline-block;
          transform: translateY(20%);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;

          &.glory-icon {
            width: 20px;
            background-image: url("../../assets/ranking/icon_ronyuqiang.png");
          }
        }
      }
    }
  }

  .award-content {
    margin: 20px 0 0 20px;
    width: 1520px;
    height: 960px;
    background-color: #ffffff;
    border-radius: 4px 4px 0px 0px;
    border: solid 1px #ededed;

    .award-header {
      height: 70px;
      line-height: 70px;
      border-radius: 4px 4px 0px 0px;
      border-bottom: solid 1px #ededed;
      padding-left: 30px;
      font-size: 18px;
      color: #2e2f33;
    }

    .form-content-wrap {
      margin: 40px 0 0 100px;

      .form-content-item {
        display: flex;
        margin-bottom: 22px;
        font-size: 14px;

        &.blessing-wrap {
          position: relative;
          .left-tip {
            color: #606266;
            padding-right: 12px;
            padding-top: 10px;
          }
          .blessing-area {
            width: 470px;
            height: 80px;
            border-radius: 4px;
            resize: none;
            border: solid 1px #dedede;
            padding: 8px 15px;
            color: #606266;
            font-size: 14px;
            &::-webkit-input-placeholder {
              color: #b8bbcc;
            }
            &.overnum {
              outline: 1px solid #ff6666;
            }
          }
          .length-count {
            position: absolute;
            bottom: 10px;
            left: 490px;
            font-size: 14px;
            color: #2e2f33;
            .now-num {
              color: #b8bbcc;
              &.overnum {
                color: #ff6666;
              }
            }
          }
        }
        .left-tip {
          color: #606266;
          padding-right: 12px;
        }
        &.award-picture {
          .upload-area {
            color: #6680ff;
            cursor: pointer;
            .upload-tip {
              color: #b8bbcc;
            }
          }
         
        }
      }
    }
  }
}
</style>
<style lang="scss">
.award-content {
  .el-upload-list {
    display: flex !important;
    width:50px;
  }
  .el-upload-list--picture .el-upload-list__item {
    margin-right: 10px !important;
  }

.el-upload-list--picture .el-upload-list__item-status-label{
      background: #6680ff !important;
}
  .el-upload-list--picture
    .el-upload-list__item.is-success
    .el-upload-list__item-name {
    display: none !important;
  }
}
</style>
