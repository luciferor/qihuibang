<template style="height:100%;">
  <div class="office-box" style="height:100%;">
    <div class="office-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/office/officenotice"><i class="notice-icon"></i>通知</BreadcrumbItem>
         <BreadcrumbItem to="/pages/office/noticeDetail"><i class="notice-detail-icon"></i>通知详情</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="office-content" :style="innerHeight" >
      <p class="top-tip">通知详情</p>
      <div class="detail-wrap approved" v-bind:class="{overRead:noticeDetail.readStatus==0}">
        <img class="item-icon" :src="noticeDetail.img">
        <div class="notice-info-wrap">
            <p class="notice-header">{{noticeDetail.header}}</p>
            <p class="notice-time">{{noticeDetail.time}}</p>
        </div>
      </div>
      <p class="notice-details">{{noticeDetail.details}}</p>
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
      noticeDetail: {
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADiklEQVRYhcXZT2wUZRjH8U+nS1EEkbaghK0JlIAN1Qtt8GBCqBcTG4gxkRQ8mSioyMHERG8mevEOUYx6IIg10Zg2QRMOkJh4UKoXY2gJ1SDFxrSNIRRo2m7xMNM/uzvbnZ1tyy/Zw77v8z7Pd+adeZ/3eafmtffvSaEA7diHNuzAFjwU9d/GDVxBHy7iEmYqDZSp0D6LN3EYTYvYrUY9nsSLUdt1fImTGEoaMEho1xA5HsS7ZeBKqSkaOxj5algqwJfQjzdQlwKsUHWRr34cLGe8GGAGH+NrNC4BWKEa0R3FKPmolQJcg+9wdOm5inQ0irUmrjMOMIOv0LmMUIXqjGIW3ck4wBPYv9xEMdofxc5TIeBBHFkRnHgdQdfChoWADWKu4D7oBDbO/lkI+KEq3tYabNlEyzbq16enEy7wH8z5jVLd47iKVWk87mqm63k2bphv6/+L0z2M3UwFOYXt+Hv2Dr6eFq51O8cO58PBE1t55xXWr00FuCpiEkS/l9N4qQ041ElQE9+/4WEOdKQCFDEFs7uSbBoP27I0lHnedu+ipsQFlFEW7QFSX2PDI+VtHqhjbWyOSKR9AXanHT1+t7xNboa7E2kjaAuwM+3oq9eYmFzc5vKfTOfSRrAzwOa0oycm+f7H0v3TOXovpPUONgdYV42H8z/R90d83+kerg1X4926pDvqkrqHnpi79M8IP/9erfdwDbxVrZOb48Vtt+9U6xXcClDdJGBvW3Hb1ixNj1Xr2XAGA2hNOuLZp9nz1Pz/B1ezqb7YLlPLe68yPBIuNZDL8c15Bq8nBhzI4FfzpWFZdeyhMcECTZgKs4/mt7W3VgTYFwiL6sQqlXcTj6/stbwY4BcVFNIrqCFcygiPI84Ii+qyOnuOulQbs1Aj/yU2PYOZ2SrqJN6WoDAf+pfa2lRsSJyXJyOmuTJvCJ8JK/5F9dwz7G0Pt/iVajrH59/y2+Wypl9ETHNbfsKiaUDCM5Nl1JhwAzNGftE0hmP3g6hAx0VwFNfF3Ti1ojj5+hRnFzbErUrH0bsiOPnqxVuFjXGAk8Lq/oflJlqgc1HMou1vqXX9Dg5Ymek+hReimEVaLPFMCY/GujC69FxGcSiKMVXKKElm7EYLPhEzBSk0GflqER65LaqkqXtUWOk34yPhCX6luhGNbY58JZqVmio/Q3QIy9YdwkJ79qBjXJgJrgi3cxek/AzxP7W1uKscox5XAAAAAElFTkSuQmCC",
        header: "【审批】事假1.5天",
        time: "2018-07-16 19:30",
        details: "请假时间：2018-07-16 09:00 至 2018-07-16 18:30 让信任更值钱",
        action: "审批通过",
        readStatus: 0
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
    this.innerHeight.height = window.innerHeight - 90 + "px";
  }
};
</script>

<style lang="scss" scoped>
.office-box {
  .office-title {
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

      .notice-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 20px;
        height: 20px;
        background-image: url("../../assets/office/icon_tonzhi_active.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      .notice-detail-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 20px;
        height: 20px;
        background-image: url("../../assets/office/icon_tongzhixianqing.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  .office-content {
    width: 1520px;
    margin: 20px 20px 0;
    background-color: #ffffff;
    border-radius: 4px 4px 0px 0px;
    border: solid 1px #ededed;
    position: relative;
    .top-tip {
      height: 70px;
      line-height: 70px;
      background-color: #ffffff;
      border-radius: 4px 4px 0px 0px;
      border-bottom: solid 1px #ededed;
      color: #2e2f33;
      font-size: 18px;
      padding-left: 20px;
    }

    .detail-wrap {
      height: 110px;
      border-radius: 4px;
      border-bottom: solid 1px #ededed;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      &.overRead {
        .item-icon {
          opacity: 0.4;
        }
      }
      &.approved {
        &::after {
          content: "";
          width: 102px;
          height: 102px;
          background-image: url("../../assets/office/icon_tongguo.png");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          position: absolute;
          bottom: -15px;
          right: 35px;
        }
      }
      .item-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: -15px 20px 0 30px;
      }
      .notice-info-wrap {
        flex: 1 1 auto;

        .notice-header {
          font-size: 18px;
          color: #2e2f33;
          margin-bottom: 10px;
        }
        .notice-time {
          font-size: 16px;
          color: #8a8c99;
        }
      }
    }
    .notice-details {
      color: #2e2f33;
      font-size: 16px;
      margin: 20px 0 0 89px;
    }
  }
}
</style>
