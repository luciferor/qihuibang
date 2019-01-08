<template style="height:100%;">
  <div class="office-box" style="height:100%;">
    <div class="office-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/office/officenotice"><i class="notice-icon"></i>通知</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="office-content" :style="innerHeight">
      <p class="top-tip">通知</p>
      <ul class="notice-list">
        <li class="list-item" v-bind:class="{overRead:item.readStatus==0}" v-for="item in noticeList" :key="item.id" @click="openDetail()">
          <img class="item-icon" :src="item.img">
          <div class="notice-info-wrap">
            <p class="notice-header-row">
              <span class="notice-header">{{item.header}}</span>
              <span class="notice-time">{{item.time}}</span></p>
            <p class="notice-details">{{item.details}}</p>
            <p class="notice-action">{{item.action}}</p>
          </div>
        </li>
         
      </ul>
      <Page class="pagination" :total="100" show-total />
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
      innerHeight: {
        height: ""
      },
      noticeList: [
        {
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADiklEQVRYhcXZT2wUZRjH8U+nS1EEkbaghK0JlIAN1Qtt8GBCqBcTG4gxkRQ8mSioyMHERG8mevEOUYx6IIg10Zg2QRMOkJh4UKoXY2gJ1SDFxrSNIRRo2m7xMNM/uzvbnZ1tyy/Zw77v8z7Pd+adeZ/3eafmtffvSaEA7diHNuzAFjwU9d/GDVxBHy7iEmYqDZSp0D6LN3EYTYvYrUY9nsSLUdt1fImTGEoaMEho1xA5HsS7ZeBKqSkaOxj5algqwJfQjzdQlwKsUHWRr34cLGe8GGAGH+NrNC4BWKEa0R3FKPmolQJcg+9wdOm5inQ0irUmrjMOMIOv0LmMUIXqjGIW3ck4wBPYv9xEMdofxc5TIeBBHFkRnHgdQdfChoWADWKu4D7oBDbO/lkI+KEq3tYabNlEyzbq16enEy7wH8z5jVLd47iKVWk87mqm63k2bphv6/+L0z2M3UwFOYXt+Hv2Dr6eFq51O8cO58PBE1t55xXWr00FuCpiEkS/l9N4qQ041ElQE9+/4WEOdKQCFDEFs7uSbBoP27I0lHnedu+ipsQFlFEW7QFSX2PDI+VtHqhjbWyOSKR9AXanHT1+t7xNboa7E2kjaAuwM+3oq9eYmFzc5vKfTOfSRrAzwOa0oycm+f7H0v3TOXovpPUONgdYV42H8z/R90d83+kerg1X4926pDvqkrqHnpi79M8IP/9erfdwDbxVrZOb48Vtt+9U6xXcClDdJGBvW3Hb1ixNj1Xr2XAGA2hNOuLZp9nz1Pz/B1ezqb7YLlPLe68yPBIuNZDL8c15Bq8nBhzI4FfzpWFZdeyhMcECTZgKs4/mt7W3VgTYFwiL6sQqlXcTj6/stbwY4BcVFNIrqCFcygiPI84Ii+qyOnuOulQbs1Aj/yU2PYOZ2SrqJN6WoDAf+pfa2lRsSJyXJyOmuTJvCJ8JK/5F9dwz7G0Pt/iVajrH59/y2+Wypl9ETHNbfsKiaUDCM5Nl1JhwAzNGftE0hmP3g6hAx0VwFNfF3Ti1ojj5+hRnFzbErUrH0bsiOPnqxVuFjXGAk8Lq/oflJlqgc1HMou1vqXX9Dg5Ymek+hReimEVaLPFMCY/GujC69FxGcSiKMVXKKElm7EYLPhEzBSk0GflqER65LaqkqXtUWOk34yPhCX6luhGNbY58JZqVmio/Q3QIy9YdwkJ79qBjXJgJrgi3cxek/AzxP7W1uKscox5XAAAAAElFTkSuQmCC",
          header: "【审批】事假1.5天",
          time: "2018-07-16 19:30",
          details: "多种文本信息",
          action: "审批通过",
          readStatus: 1
        },
        {
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADiklEQVRYhcXZT2wUZRjH8U+nS1EEkbaghK0JlIAN1Qtt8GBCqBcTG4gxkRQ8mSioyMHERG8mevEOUYx6IIg10Zg2QRMOkJh4UKoXY2gJ1SDFxrSNIRRo2m7xMNM/uzvbnZ1tyy/Zw77v8z7Pd+adeZ/3eafmtffvSaEA7diHNuzAFjwU9d/GDVxBHy7iEmYqDZSp0D6LN3EYTYvYrUY9nsSLUdt1fImTGEoaMEho1xA5HsS7ZeBKqSkaOxj5algqwJfQjzdQlwKsUHWRr34cLGe8GGAGH+NrNC4BWKEa0R3FKPmolQJcg+9wdOm5inQ0irUmrjMOMIOv0LmMUIXqjGIW3ck4wBPYv9xEMdofxc5TIeBBHFkRnHgdQdfChoWADWKu4D7oBDbO/lkI+KEq3tYabNlEyzbq16enEy7wH8z5jVLd47iKVWk87mqm63k2bphv6/+L0z2M3UwFOYXt+Hv2Dr6eFq51O8cO58PBE1t55xXWr00FuCpiEkS/l9N4qQ041ElQE9+/4WEOdKQCFDEFs7uSbBoP27I0lHnedu+ipsQFlFEW7QFSX2PDI+VtHqhjbWyOSKR9AXanHT1+t7xNboa7E2kjaAuwM+3oq9eYmFzc5vKfTOfSRrAzwOa0oycm+f7H0v3TOXovpPUONgdYV42H8z/R90d83+kerg1X4926pDvqkrqHnpi79M8IP/9erfdwDbxVrZOb48Vtt+9U6xXcClDdJGBvW3Hb1ixNj1Xr2XAGA2hNOuLZp9nz1Pz/B1ezqb7YLlPLe68yPBIuNZDL8c15Bq8nBhzI4FfzpWFZdeyhMcECTZgKs4/mt7W3VgTYFwiL6sQqlXcTj6/stbwY4BcVFNIrqCFcygiPI84Ii+qyOnuOulQbs1Aj/yU2PYOZ2SrqJN6WoDAf+pfa2lRsSJyXJyOmuTJvCJ8JK/5F9dwz7G0Pt/iVajrH59/y2+Wypl9ETHNbfsKiaUDCM5Nl1JhwAzNGftE0hmP3g6hAx0VwFNfF3Ti1ojj5+hRnFzbErUrH0bsiOPnqxVuFjXGAk8Lq/oflJlqgc1HMou1vqXX9Dg5Ymek+hReimEVaLPFMCY/GujC69FxGcSiKMVXKKElm7EYLPhEzBSk0GflqER65LaqkqXtUWOk34yPhCX6luhGNbY58JZqVmio/Q3QIy9YdwkJ79qBjXJgJrgi3cxek/AzxP7W1uKscox5XAAAAAElFTkSuQmCC",
          header: "【审批】事假1.5天",
          time: "2018-07-16 19:30",
          details: "多种文本信息",
          action: "审批通过",
          readStatus: 1
        },
        {
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADiklEQVRYhcXZT2wUZRjH8U+nS1EEkbaghK0JlIAN1Qtt8GBCqBcTG4gxkRQ8mSioyMHERG8mevEOUYx6IIg10Zg2QRMOkJh4UKoXY2gJ1SDFxrSNIRRo2m7xMNM/uzvbnZ1tyy/Zw77v8z7Pd+adeZ/3eafmtffvSaEA7diHNuzAFjwU9d/GDVxBHy7iEmYqDZSp0D6LN3EYTYvYrUY9nsSLUdt1fImTGEoaMEho1xA5HsS7ZeBKqSkaOxj5algqwJfQjzdQlwKsUHWRr34cLGe8GGAGH+NrNC4BWKEa0R3FKPmolQJcg+9wdOm5inQ0irUmrjMOMIOv0LmMUIXqjGIW3ck4wBPYv9xEMdofxc5TIeBBHFkRnHgdQdfChoWADWKu4D7oBDbO/lkI+KEq3tYabNlEyzbq16enEy7wH8z5jVLd47iKVWk87mqm63k2bphv6/+L0z2M3UwFOYXt+Hv2Dr6eFq51O8cO58PBE1t55xXWr00FuCpiEkS/l9N4qQ041ElQE9+/4WEOdKQCFDEFs7uSbBoP27I0lHnedu+ipsQFlFEW7QFSX2PDI+VtHqhjbWyOSKR9AXanHT1+t7xNboa7E2kjaAuwM+3oq9eYmFzc5vKfTOfSRrAzwOa0oycm+f7H0v3TOXovpPUONgdYV42H8z/R90d83+kerg1X4926pDvqkrqHnpi79M8IP/9erfdwDbxVrZOb48Vtt+9U6xXcClDdJGBvW3Hb1ixNj1Xr2XAGA2hNOuLZp9nz1Pz/B1ezqb7YLlPLe68yPBIuNZDL8c15Bq8nBhzI4FfzpWFZdeyhMcECTZgKs4/mt7W3VgTYFwiL6sQqlXcTj6/stbwY4BcVFNIrqCFcygiPI84Ii+qyOnuOulQbs1Aj/yU2PYOZ2SrqJN6WoDAf+pfa2lRsSJyXJyOmuTJvCJ8JK/5F9dwz7G0Pt/iVajrH59/y2+Wypl9ETHNbfsKiaUDCM5Nl1JhwAzNGftE0hmP3g6hAx0VwFNfF3Ti1ojj5+hRnFzbErUrH0bsiOPnqxVuFjXGAk8Lq/oflJlqgc1HMou1vqXX9Dg5Ymek+hReimEVaLPFMCY/GujC69FxGcSiKMVXKKElm7EYLPhEzBSk0GflqER65LaqkqXtUWOk34yPhCX6luhGNbY58JZqVmio/Q3QIy9YdwkJ79qBjXJgJrgi3cxek/AzxP7W1uKscox5XAAAAAElFTkSuQmCC",
          header: "【审批】事假1.5天",
          time: "2018-07-16 19:30",
          details: "多种文本信息",
          action: "审批通过",
          readStatus: 0
        },
        {
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADiklEQVRYhcXZT2wUZRjH8U+nS1EEkbaghK0JlIAN1Qtt8GBCqBcTG4gxkRQ8mSioyMHERG8mevEOUYx6IIg10Zg2QRMOkJh4UKoXY2gJ1SDFxrSNIRRo2m7xMNM/uzvbnZ1tyy/Zw77v8z7Pd+adeZ/3eafmtffvSaEA7diHNuzAFjwU9d/GDVxBHy7iEmYqDZSp0D6LN3EYTYvYrUY9nsSLUdt1fImTGEoaMEho1xA5HsS7ZeBKqSkaOxj5algqwJfQjzdQlwKsUHWRr34cLGe8GGAGH+NrNC4BWKEa0R3FKPmolQJcg+9wdOm5inQ0irUmrjMOMIOv0LmMUIXqjGIW3ck4wBPYv9xEMdofxc5TIeBBHFkRnHgdQdfChoWADWKu4D7oBDbO/lkI+KEq3tYabNlEyzbq16enEy7wH8z5jVLd47iKVWk87mqm63k2bphv6/+L0z2M3UwFOYXt+Hv2Dr6eFq51O8cO58PBE1t55xXWr00FuCpiEkS/l9N4qQ041ElQE9+/4WEOdKQCFDEFs7uSbBoP27I0lHnedu+ipsQFlFEW7QFSX2PDI+VtHqhjbWyOSKR9AXanHT1+t7xNboa7E2kjaAuwM+3oq9eYmFzc5vKfTOfSRrAzwOa0oycm+f7H0v3TOXovpPUONgdYV42H8z/R90d83+kerg1X4926pDvqkrqHnpi79M8IP/9erfdwDbxVrZOb48Vtt+9U6xXcClDdJGBvW3Hb1ixNj1Xr2XAGA2hNOuLZp9nz1Pz/B1ezqb7YLlPLe68yPBIuNZDL8c15Bq8nBhzI4FfzpWFZdeyhMcECTZgKs4/mt7W3VgTYFwiL6sQqlXcTj6/stbwY4BcVFNIrqCFcygiPI84Ii+qyOnuOulQbs1Aj/yU2PYOZ2SrqJN6WoDAf+pfa2lRsSJyXJyOmuTJvCJ8JK/5F9dwz7G0Pt/iVajrH59/y2+Wypl9ETHNbfsKiaUDCM5Nl1JhwAzNGftE0hmP3g6hAx0VwFNfF3Ti1ojj5+hRnFzbErUrH0bsiOPnqxVuFjXGAk8Lq/oflJlqgc1HMou1vqXX9Dg5Ymek+hReimEVaLPFMCY/GujC69FxGcSiKMVXKKElm7EYLPhEzBSk0GflqER65LaqkqXtUWOk34yPhCX6luhGNbY58JZqVmio/Q3QIy9YdwkJ79qBjXJgJrgi3cxek/AzxP7W1uKscox5XAAAAAElFTkSuQmCC",
          header: "【审批】事假1.5天",
          time: "2018-07-16 19:30",
          details: "多种文本信息",
          action: "审批通过",
          readStatus: 0
        },
        {
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADiklEQVRYhcXZT2wUZRjH8U+nS1EEkbaghK0JlIAN1Qtt8GBCqBcTG4gxkRQ8mSioyMHERG8mevEOUYx6IIg10Zg2QRMOkJh4UKoXY2gJ1SDFxrSNIRRo2m7xMNM/uzvbnZ1tyy/Zw77v8z7Pd+adeZ/3eafmtffvSaEA7diHNuzAFjwU9d/GDVxBHy7iEmYqDZSp0D6LN3EYTYvYrUY9nsSLUdt1fImTGEoaMEho1xA5HsS7ZeBKqSkaOxj5algqwJfQjzdQlwKsUHWRr34cLGe8GGAGH+NrNC4BWKEa0R3FKPmolQJcg+9wdOm5inQ0irUmrjMOMIOv0LmMUIXqjGIW3ck4wBPYv9xEMdofxc5TIeBBHFkRnHgdQdfChoWADWKu4D7oBDbO/lkI+KEq3tYabNlEyzbq16enEy7wH8z5jVLd47iKVWk87mqm63k2bphv6/+L0z2M3UwFOYXt+Hv2Dr6eFq51O8cO58PBE1t55xXWr00FuCpiEkS/l9N4qQ041ElQE9+/4WEOdKQCFDEFs7uSbBoP27I0lHnedu+ipsQFlFEW7QFSX2PDI+VtHqhjbWyOSKR9AXanHT1+t7xNboa7E2kjaAuwM+3oq9eYmFzc5vKfTOfSRrAzwOa0oycm+f7H0v3TOXovpPUONgdYV42H8z/R90d83+kerg1X4926pDvqkrqHnpi79M8IP/9erfdwDbxVrZOb48Vtt+9U6xXcClDdJGBvW3Hb1ixNj1Xr2XAGA2hNOuLZp9nz1Pz/B1ezqb7YLlPLe68yPBIuNZDL8c15Bq8nBhzI4FfzpWFZdeyhMcECTZgKs4/mt7W3VgTYFwiL6sQqlXcTj6/stbwY4BcVFNIrqCFcygiPI84Ii+qyOnuOulQbs1Aj/yU2PYOZ2SrqJN6WoDAf+pfa2lRsSJyXJyOmuTJvCJ8JK/5F9dwz7G0Pt/iVajrH59/y2+Wypl9ETHNbfsKiaUDCM5Nl1JhwAzNGftE0hmP3g6hAx0VwFNfF3Ti1ojj5+hRnFzbErUrH0bsiOPnqxVuFjXGAk8Lq/oflJlqgc1HMou1vqXX9Dg5Ymek+hReimEVaLPFMCY/GujC69FxGcSiKMVXKKElm7EYLPhEzBSk0GflqER65LaqkqXtUWOk34yPhCX6luhGNbY58JZqVmio/Q3QIy9YdwkJ79qBjXJgJrgi3cxek/AzxP7W1uKscox5XAAAAAElFTkSuQmCC",
          header: "【审批】事假1.5天",
          time: "2018-07-16 19:30",
          details: "多种文本信息",
          action: "审批通过",
          readStatus: 0
        }
      ]
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
    openDetail(){
      this.$router.push({
         path: "/pages/office/noticeDetail"
      })
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
    }
  }

  .office-content {
    width: 1520px;
    margin: 20px 20px 0;
    background-color: #ffffff;
    border-radius: 4px 4px 0px 0px;
    border: solid 1px #ededed;
    position: relative;
    .pagination {
      text-align: center;
      padding: 30px 0;
      border-radius: 0px 0px 4px 4px;
      border-top: solid 1px #ededed;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
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
    .notice-list {
      list-style: none;
      height: 80%;
      overflow: auto;

      .list-item {
        height: 110px;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
        border-radius: 4px;
        border: solid 1px #ededed;
        margin: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        &.overRead {
          .item-icon {
            opacity: 0.4;
          }
        }
        .item-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: -35px 20px 0;
        }
        .notice-info-wrap {
          flex: 1 1 auto;
          .notice-header-row {
            display: flex;
            flex: 1 1 auto;
            justify-content: space-between;
            padding-right: 20px;
            .notice-header {
              font-size: 18px;
              color: #2e2f33;
            }
            .notice-time {
              font-size: 16px;
              color: #8a8c99;
            }
          }
          .notice-details {
            color: #b8bbcc;
          }
          .notice-action {
            margin-top: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
