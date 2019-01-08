<template style="height:100%;">
  <div class="fuli-box" style="height:100%;" @click="closecomment();closePicArea()">
    <div class="fuli-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/ranking/allpeople"><i class="allpeople-icon"></i>全员排名</BreadcrumbItem>
        <BreadcrumbItem to="/pages/ranking/fuli"><i class="fuli-icon"></i>邦分福利</BreadcrumbItem>
        <BreadcrumbItem><i class="glory-icon"></i>荣誉墙</BreadcrumbItem>
      </Breadcrumb>
      <div class="right-btns">
        <button type="button" @click="awardnow()"><i class="award-icon"></i>立即颁奖</button>
      </div>
    </div>
    <div class="fuli-content">
      <ul class="glory-list">
        <li class="list-item" v-for="item in gloryArr" :key="item.id">
          <img class="glory-cover-img" src="../../assets/ranking/img_bangfenfuli.png" />
          <div class="interaction-area">
            <img class="user-avatar" @click="opencomment(item)" src="../../assets/userdefault.png">
            <div class="comment-wrap">
              <i class="to-comment" @click="opencomment(item)"></i><span class="comment-count">2</span>
            </div>
            <div class="dianzan-wrap">
              <i class="to-dianzan" :dianzan-btn="item.key" @click="dianzan(item)"></i><span class="dianzan-count">{{item.dianzannum}}</span>
            </div>
          </div>
          <div class="bottom-words">
            <p class="blessing-wrap" @click="opencomment(item)">
              <span class="blessing">祝福的话</span><span>恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜</span>
            </p>

            <p class="prize-speech-wrap" @click="opencomment(item)">
              <span class="prize-speech">获奖感言</span><span>开心开心开心开心开心开心开心开心开心开心开心开心开心开心开心开心</span>
            </p>

          </div>
          <div class="comment-content" :item-comment="item.key" @click="contentclick()">
            <p class="top-tips">查看评论<i @click="closecomment();closePicArea()" class="el-icon-close"></i></p>
            <div class="comment-interaction-area">
              <img class="comment-user-avatar" src="../../assets/userdefault.png">
              <div class="comment-wrap">
                <i class="to-comment"></i><span class="comment-count">2</span>
              </div>
              <div class="dianzan-wrap">
                <i class="to-dianzan" :dianzan-btn="item.key" @click="dianzan(item)"></i><span class="dianzan-count">{{item.dianzannum}}</span>
              </div>
            </div>
            <div class="comment-bottom-words">
              <p class="comment-blessing-wrap">
                <span class="blessing">祝福的话</span><span>恭喜XXX或者周排名第一名恭喜XXX或者周排名第一名恭喜XXX或者周排名第一名</span>
              </p>

              <div class="comment-prize-speech-wrap">
                <span class="prize-speech">获奖感言</span>
                <p>开心开心开心开心开心开心开心开心开心开心开心开心开心开心开心开心</p>
              </div>
            </div>

            <div class="glory-img-wrap only-one more-than-one">
              <img v-bind:src='item.src' v-for="(item,index) in pictures" :key="index" @click="openPicArea(index)">
            </div>
            <ul class="comment-list has-picture">
              <li class="comment-list-item" v-for="x in commentArr" :key="x.key">
                <span class="comment-user-name">{{x.name}}：</span><span>{{x.commenttxt}}</span>
              </li>
            </ul>
            <div class="deliver-area">
              <textarea class="comment-area" v-bind:class="{overnum:commenttxt.length>30}" placeholder="请发表评论" @input="commenting()"
                v-model="commenttxt"> </textarea>
              <el-button type="primary" @click="onSubmit" style="font-size: 16px;width: 110px;height: 40px;background-color: #6680ff;border-radius: 4px;margin-right: 30px;float:right">发表评论</el-button>
              <p class="length-count"><span class="now-num" v-bind:class="{overnum:commenttxt.length>30}">0</span>/30</p>
            </div>
          </div>
        </li>
      </ul>
      <Page class="pagination" :total="100" show-total />
    </div>

    <div class="mid-pictures-area" @click="midArea()">
      <div class="to-left-arrow" @click="toleft()"></div>
      <div class="to-right-arrow" @click="toright()"></div>
      <div class="big-pic-wrap">
        <img :src="bigpic">
      </div>
      <div class="small-pic-wrap">
        <img v-bind:src='item.src' v-for="(item,index) in pictures" :key="item.key" @click="thispic(item,index)">
      </div>
      <div class="close-pic-area" @click="closePicArea()"></div>
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
      gloryArr: [
        {
          key: 1,
          name: "测试字",
          dianzannum: 1
        },
        {
          key: 2,
          name: "测试字",
          dianzannum: 12
        },
        {
          key: 3,
          name: "测试字",
          dianzannum: 3
        },
        {
          key: 4,
          name: "测试字",
          dianzannum: 4
        },
        {
          key: 5,
          name: "测试字",
          dianzannum: 5
        },
        {
          key: 6,
          name: "测试字",
          dianzannum: 11
        },
        {
          key: 7,
          name: "测试字",
          dianzannum: 13
        },
        {
          key: 8,
          name: "测试字",
          dianzannum: 14
        },
        {
          key: 9,
          name: "测试字",
          dianzannum: 15
        },
        {
          key: 10,
          name: "测试字",
          dianzannum: 12
        },
        {
          key: 11,
          name: "测试字",
          dianzannum: 1
        }
      ],
      commenttxt: "",
      commentArr: [
        {
          name: "小黑",
          commenttxt: "真是太棒了！"
        },
        {
          name: "小白",
          commenttxt: "哇！"
        },
        {
          name: "小黄",
          commenttxt: "怎么可以这么优秀！怎么可以这么优秀！怎么可以这么优秀！"
        },
        {
          name: "小红",
          commenttxt: "你做的真是太好了！"
        },
        {
          name: "小蓝",
          commenttxt: "你是我们的榜样！"
        },
        {
          name: "小橙",
          commenttxt: "向你学习！"
        },
        {
          name: "小红",
          commenttxt: "你做的真是太好了！"
        },
        {
          name: "小蓝",
          commenttxt: "你是我们的榜样！"
        },
        {
          name: "小橙",
          commenttxt: "向你学习！"
        },
        {
          name: "小红",
          commenttxt: "你做的真是太好了！"
        },
        {
          name: "小蓝",
          commenttxt: "你是我们的榜样！"
        },
        {
          name: "小橙",
          commenttxt: "向你学习！"
        }
      ],
      pictures: [
        {
          key: 1,
          src: "/static/img/demo1.7cd2c83.png"
        },
        {
          key: 2,
          src: "/static/img/demo1.7cd2c83.png"
        },
        {
          key: 3,
          src: "/static/img/demo1.7cd2c83.png"
        },
        {
          key: 4,
          src: "/static/img/demo1.7cd2c83.png"
        },
        {
          key: 5,
          src: "/static/img/demo1.7cd2c83.png"
        },
        {
          key: 6,
          src: "/static/img/demo1.7cd2c83.png"
        },
        {
          key: 7,
          src: "/static/img/demo1.7cd2c83.png"
        },
        {
          key: 8,
          src: "/static/img/demo1.7cd2c83.png"
        },
        {
          key: 9,
          src: "/static/img/demo1.7cd2c83.png"
        }
      ],
      bigpic: "",
      thispickey: 0
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
    awardnow() {
      //跳转至 ‘立即颁奖’
      this.$router.push({
        path: "/pages/ranking/awardnow"
      });
    },
    opencomment(item) {
      //打开侧边栏
      event.stopPropagation();
      $(".comment-content").css("right", "-440px"); //全部隐藏
      $("[item-comment=" + item.key + "]").animate(
        {
          right: "0"
        },
        500
      );
    },
    closecomment() {
      //收起侧边栏
      $(".comment-content").animate(
        {
          right: "-440"
        },
        500
      );
    },
    contentclick() {
      //阻止冒泡
      event.stopPropagation();
    },
    commenting() {
      //输入评论
      $(".now-num").text(this.commenttxt.length);
    },
    onSubmit() {
      //提交评论
    },
    dianzan(item) {
      event.stopPropagation();
      //荣誉墙点赞
      var _this = $(event.target);
      if (!_this.hasClass("done")) {
        //如果未点过赞
        item.dianzannum++;
        _this.addClass("done");
        $("[dianzan-btn=" + item.key + "]").addClass("done");
      } else {
        //如果已点过赞
        item.dianzannum--;
        _this.removeClass("done");
        $("[dianzan-btn=" + item.key + "]").removeClass("done");
      }
    },
    toleft() {
      if (this.thispickey <= 0) {
        this.thispickey = this.pictures.length - 1;
      } else {
        this.thispickey--;
      }
      console.log(this.thispickey);
      $(".small-pic-wrap img").removeClass("active");
      $(".small-pic-wrap img")
        .eq(this.thispickey)
        .addClass("active");
      this.bigpic = this.pictures[this.thispickey].src;
    },
    toright() {
      if (this.thispickey >= this.pictures.length - 1) {
        this.thispickey = 0;
      } else {
        this.thispickey++;
      }
      console.log(this.thispickey);
      $(".small-pic-wrap img").removeClass("active");
      $(".small-pic-wrap img")
        .eq(this.thispickey)
        .addClass("active");
      this.bigpic = this.pictures[this.thispickey].src;
    },
    thispic(item, index) {
      this.thispickey = index;
      $(".small-pic-wrap img").removeClass("active");
      $(".small-pic-wrap img")
        .eq(index)
        .addClass("active");
      this.bigpic = item.src;
    },
    closePicArea() {
      event.stopPropagation();
      $(".mid-pictures-area").hide();
    },
    openPicArea(index) {
      $(".mid-pictures-area").show();
      $(".small-pic-wrap img")
        .eq(index)
        .click();
      this.thispickey = index;
    },
    midArea() {
      event.stopPropagation();
    }
  },
  mounted() {
    console.log("全员排名页");
  }
};
</script>

<style lang="scss" scoped>
.fuli-box {
  .fuli-title {
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

      .glory-icon {
        width: 21px;
        margin-right: 8px;
        height: 20px;
        display: inline-block;
        transform: translateY(20%);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("../../assets/ranking/icon_ronyuqiang__active.png");
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

          .award-icon {
            margin-right: 7px;
            width: 21px;
            background-image: url("../../assets/ranking/icon_lijibangjiang__active.png");
          }
        }

        i {
          margin-right: 8px;
          height: 20px;
          display: inline-block;
          transform: translateY(20%);
          background-size: contain;
          background-position: right;
          background-repeat: no-repeat;

          &.award-icon {
            width: 20px;
            background-image: url("../../assets/ranking/icon_lijibangjiang.png");
          }
        }
      }
    }
  }

  .fuli-content {
    padding: 20px 0 0 20px;

    .glory-list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;

      .list-item {
        height: 514px;
        width: 288px;
        background-color: #ffffff;
        margin: 0 20px 20px 0;

        .glory-cover-img {
          width: 288px;
          height: 384px;
        }

        .interaction-area {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 50px;

          .user-avatar {
            position: absolute;
            cursor: pointer;
            left: 20px;
            top: 0;
            transform: translateY(-40%);
            border-radius: 100%;
            border: 2px solid #ffffff;
            width: 48px;
            height: 48px;
          }

          .comment-wrap {
            margin-right: 25px;
            display: flex;
            align-items: center;

            .to-comment {
              width: 17px;
              height: 16px;
              background-image: url("../../assets/ranking/icon_pinglun.png");
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              cursor: pointer;
            }

            .comment-count {
              margin-left: 3px;
              font-size: 14px;
              color: #b8bbcc;
            }
          }

          .dianzan-wrap {
            margin-right: 25px;
            display: flex;
            align-items: center;

            .to-dianzan {
              width: 16px;
              height: 16px;
              background-image: url("../../assets/ranking/icon_dianzhan.png");
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              cursor: pointer;

              &.done {
                background-image: url("../../assets/ranking/icon_dianzhang_active.png");
              }
            }

            .dianzan-count {
              margin-left: 3px;
              font-size: 14px;
              color: #b8bbcc;
            }
          }
        }
        .comment-content {
          position: fixed;
          width: 440px;
          height: 100%;
          background: #fff;
          top: 0;
          z-index: 1;
          right: -440px;
          box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.04);

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

          .comment-interaction-area {
            position: relative;
            display: flex;
            align-items: center;
            height: 88px;
            padding: 0 30px;

            .comment-user-avatar {
              cursor: pointer;
              border-radius: 100%;
              width: 48px;
              height: 48px;
            }

            .comment-wrap {
              margin-left: 30px;
              display: flex;
              align-items: center;

              .to-comment {
                width: 17px;
                height: 16px;
                background-image: url("../../assets/ranking/icon_pinglun.png");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                cursor: pointer;
              }

              .comment-count {
                margin-left: 3px;
                font-size: 14px;
                color: #b8bbcc;
              }
            }

            .dianzan-wrap {
              margin-left: 30px;
              display: flex;
              align-items: center;

              .to-dianzan {
                width: 16px;
                height: 16px;
                background-image: url("../../assets/ranking/icon_dianzhan.png");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                cursor: pointer;

                &.done {
                  background-image: url("../../assets/ranking/icon_dianzhang_active.png");
                }
              }

              .dianzan-count {
                margin-left: 3px;
                font-size: 14px;
                color: #b8bbcc;
              }
            }
          }

          .comment-bottom-words {
            width: 100%;
            font-size: 14px;
            padding: 0 30px;

            .comment-blessing-wrap {
              color: #2e2f33;
              overflow: hidden;
              white-space: nowrap; // 单行溢出部分转为 ...
              text-overflow: ellipsis;
              margin-bottom: 10px;
              cursor: pointer;

              &:hover {
                color: #6680ff;
              }

              .blessing {
                margin-right: 5px;
                font-size: 12px;
                color: #6680ff;
                border: 1px solid #6680ff;
                padding: 1px;
              }
            }

            .comment-prize-speech-wrap {
              cursor: pointer;
              color: #8a8c99;
              display: flex;

              &:hover {
                color: #ffaa33;
              }

              .prize-speech {
                flex: 0 0 auto;
                height: 20px;
                font-size: 12px;
                color: #ffaa33;
                margin-right: 5px;
                padding: 1px;
                border: 1px solid #ffaa33;
              }
            }
          }

          .glory-img-wrap {
            margin: 25px auto;
            width: 280px;
            height: 280px;

            img {
              cursor: pointer;
            }

            &.only-one {
              img {
                width: 100%;
                height: 100%;
              }
            }

            &.more-than-one {
              img {
                margin: 1px 1px -4px 1px;
                width: 91px;
                height: 91px;
              }
            }
          }

          .comment-list {
            list-style: none;
            width: 380px;
            max-height: 475px;
            background-color: #f7f7f7;
            border-radius: 4px;
            margin: 28px auto 0;
            padding: 10px 20px;
            overflow: auto;

            &.has-picture {
              max-height: 190px;
            }

            .comment-list-item {
              font-size: 16px;
              color: #5c5d66;
              line-height: 25px;
              padding: 5px 0;
              display: flex;

              .comment-user-name {
                flex: 0 0 auto;
                color: #6680ff;
                margin-right: 5px;
              }
            }
          }

          .deliver-area {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 180px;
            box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.04);

            .comment-area {
              width: 380px;
              height: 80px;
              background-color: #f7f7f7;
              resize: none;
              border: none;
              margin: 20px 30px;
              padding: 8px 15px;
              color: #606266;
              font-size: 16px;

              &::-webkit-input-placeholder {
                color: #b8bbcc;
              }

              &.overnum {
                outline: 1px solid #ff6666;
              }
            }

            .length-count {
              float: right;
              margin-right: 20px;
              font-size: 14px;
              color: #2e2f33;
              line-height: 40px;

              .now-num {
                color: #b8bbcc;

                &.overnum {
                  color: #ff6666;
                }
              }
            }
          }
        }

        .bottom-words {
          width: 100%;
          font-size: 14px;
          padding: 0 20px;

          .blessing-wrap {
            color: #2e2f33;
            overflow: hidden;
            white-space: nowrap; // 单行溢出部分转为 ...
            text-overflow: ellipsis;
            margin-bottom: 10px;
            cursor: pointer;

            &:hover {
              color: #6680ff;
            }

            .blessing {
              margin-right: 5px;
              font-size: 12px;
              color: #6680ff;
              border: 1px solid #6680ff;
              padding: 1px;
            }
          }

          .prize-speech-wrap {
            cursor: pointer;
            color: #8a8c99;
            overflow: hidden;
            white-space: nowrap; // 单行溢出部分转为 ...
            text-overflow: ellipsis;

            &:hover {
              color: #ffaa33;
            }

            .prize-speech {
              font-size: 12px;
              color: #ffaa33;
              margin-right: 5px;
              padding: 1px;
              border: 1px solid #ffaa33;
            }
          }
        }
      }
    }

    .pagination {
      text-align: center;
      line-height: 90px;
      width: 1520px;
      height: 90px;
      background-color: #ffffff;
      border-radius: 0px 0px 4px 4px;
      border: solid 1px #ededed;
    }
  }

  .mid-pictures-area {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 776px;
    background-color: #000000;
    display: none;
    z-index: 2;
    .close-pic-area {
      position: absolute;
      cursor: pointer;
      top: 0;
      right: 0;
      width: 45px;
      height: 45px;
      background-color: #666;
      background-image: url("../../assets/ranking/icon_delete_bai.png");
      background-position: 75% 30%;
      background-size: 16px 16px;
      background-repeat: no-repeat;
      border-radius: 0% 0 0% 100%;
    }

    .to-left-arrow {
      position: absolute;
      cursor: pointer;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
      width: 20px;
      height: 41px;
      background-image: url("../../assets/ranking/icon_zuo.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      &:hover {
        background-image: url("../../assets/ranking/icon_zuo_hover.png");
      }
    }

    .to-right-arrow {
      position: absolute;
      cursor: pointer;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      width: 20px;
      height: 41px;
      background-image: url("../../assets/ranking/icon_you.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      &:hover {
        background-image: url("../../assets/ranking/icon_you_hover.png");
      }
    }

    .big-pic-wrap {
      width: 525px;
      height: 700px;
      margin: 20px auto 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: 100%;
        height: auto;
        min-width: 450px;
      }
    }

    .small-pic-wrap {
      text-align: center;

      img {
        width: 48px;
        height: 48px;
        margin: 0 3px;
        cursor: pointer;

        &:hover {
          border: solid 4px #667fff;
        }

        &.active {
          border: solid 4px #667fff;
        }
      }
    }
  }
}
</style>
