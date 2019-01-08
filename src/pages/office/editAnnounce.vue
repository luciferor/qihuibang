<template style="height:100%;">
  <div class="announce-box" style="height:100%;">
    <div class="announce-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/office/officehome"><i class="officehome-icon"></i>办公应用</BreadcrumbItem>
        <BreadcrumbItem to="/pages/office/announcement"><i class="announcement-icon"></i>公告</BreadcrumbItem>
        <BreadcrumbItem to="/pages/office/editAnnounce"><i class="edit-icon"></i>编辑公告</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="announce-content">
      <p class="deliver-header">发布公告</p>
      <el-form ref="form" :model="form" label-width="80px" class="form-content-wrap">
        <el-form-item label="公告标题">
          <el-input v-model="form.name" placeholder="请输入公告标题"></el-input>
        </el-form-item>
        <el-form-item label="公告部门">
          <el-select v-model="form.region" placeholder="请选择公告部门">
            <el-option v-bind:value="option.name" v-for="option in options" :key="option.key"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公告时间">
          <el-col :span="11">
            <el-date-picker type="datetime" placeholder="不设置则立即发布" v-model="form.date" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <div class="content-wrap">
          <span class="left-tip">公告内容</span>
          <textarea class="content-area" placeholder="请填写公告内容" v-model="contenttxt"></textarea>
        </div>
        <div class="appendix-wrap">
          <div class="left-tip">
            <p>上传附件</p>
            <p class="gray-tip">(非必传)</p>
          </div>
          <div class="right-appendix">
            <span class="upload-appendix" @click="uploadAppendix">点击上传附件</span>
            <ul class="appendix-list">
              <li class="appendix-item" v-for="item in appendixArr" :key="item.key"><i class="delete-icon" @click="removeAppendix"></i><span>{{item.name}}</span></li>
            </ul>

          </div>

        </div>
        <el-form-item>
          <el-button type="primary" class="deliver-btn" @click="onSubmit">发布</el-button>
        </el-form-item>
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
      pingshenNum: 2,
      kaoqinNum: 15,
      form: {
        name: "",
        region: "",
        date: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      options: [
        {
          name: "技术部"
        },
        {
          name: "设计部"
        },
        {
          name: "运营部"
        },
        {
          name: "技术部"
        },
        {
          name: "设计部"
        },
        {
          name: "运营部"
        }
      ],
      appendixArr: [{ name: "中秋放假公告.doxc" }, { name: "游玩攻略.doxc" }],
      contenttxt: ""
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
    onSubmit() {
      console.log("submit!");
    },
    uploadAppendix() {
      alert("请选择附件");
      this.appendixArr.push({
          name: "中秋放假公告.doxc"
        })
    },
    removeAppendix() {
      alert("删除该附件");
    }
  },
  mounted() {
    console.log("全员排名页");
  }
};
</script>

<style lang="scss" scoped>
.announce-box {
  .announce-title {
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

      .announcement-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 20px;
        height: 20px;
        background-image: url("../../assets/office/icon_gonggao.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }

      .edit-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 19px;
        height: 20px;
        background-image: url("../../assets/office/icon_gonggao_bianji.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  .announce-content {
    width: 1520px;
    height: 80%;
    margin: 20px;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #ededed;

    .deliver-header {
      height: 70px;
      background-color: #ffffff;
      border-bottom: solid 1px #ededed;
      font-size: 18px;
      color: #333333;
      line-height: 70px;
      padding-left: 30px;
    }

    .form-content-wrap {
      font-size: 14px;
      margin: 40px 0 0 100px;
      width: 500px;

      .content-wrap {
        display: flex;
        margin-bottom: 30px;

        .left-tip {
          text-align: right;
          width: 80px;
          margin-right: 13px;
          color: #2e2f33;
        }

        .content-area {
          width: 500px;
          height: 100px;
          border-radius: 4px;
          border: solid 1px #dedede;
          padding: 10px;
          resize: none;

          &::placeholder {
            color: #b8bbcc;
          }
        }
      }

      .appendix-wrap {
        display: flex;
        margin-bottom: 30px;

        .left-tip {
          width: 67px;
          margin-right: 13px;
          text-align: right;

          .gray-tip {
            color: #b8bbcc;
          }
        }
        .right-appendix {
          .upload-appendix {
            color: #6680ff;
            cursor: pointer;
            height: 20px;
          }
          .appendix-list {
            list-style: none;
            .appendix-item {
              display: flex;
              margin-top: 8px;
              color: #5c5d66;
              .delete-icon {
                width: 18px;
                height: 18px;
                background-image: url("../../assets/office/icon_delete_default.png");
                background-repeat: none;
                background-position: center;
                background-size: contain;
                margin-right: 10px;
                cursor: pointer;
              }
            }
          }
        }
      }

      .el-select {
        width: 100% !important;
      }

      .el-col {
        width: 100% !important;
      }

      .deliver-btn {
        width: 200px;
        height: 50px;
        background-color: #6680ff;
        border-radius: 4px;
      }
    }
  }
}
</style>

