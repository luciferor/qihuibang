<template style="height:100%;">
    <div  class="combox"  style="height:100%;"> 
        <div class="comtitle">
        <span class="fl">
            <Breadcrumb>
            <Breadcrumb-item>
                <Icon type="ios-pricetags-outline"></Icon>运营部排名
            </Breadcrumb-item>
            </Breadcrumb>
        </span>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        rootUrl:window.localStorage.api,
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
        showed:false,//显示状态
        comname:'',//公司名称
      }
    },
    methods:{
      openFullScreen() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 1500);
      },
    },
    mounted(){
       console.log("全员排名页")
    }
  }
</script>

<style scoped>
  
  .combox{
    width:100%;
    height:100%;
    border: solid 1px #ededed;
    background: #FFF;
  }

  .combox .comtitle{
    height:69px;
    line-height: 69px;
    padding-left:10px;
    font-size: 16px;
    color: #2e2f33;
    border-bottom: 1px solid #ededed;
  }

  .combox .comcontent{
    background:#FFF;
    padding:50px;
    overflow: hidden;
    min-height:885px;
  }

  .combox .comcontent .comcontent-top{
    height:50px;
    width:100%;
  }

  .combox .comcontent .comcontent-top .comcontent-top-title{
    font-family: MicrosoftYaHei-Bold;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
  }

  .combox .comcontent .comcontent-top .comcontent-top-type{
    font-family: MicrosoftYaHei-Bold;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #2e2f33;
  }

  .combox .comcontent .comcontent-top .comcontent-top-edit{

  }

  .combox .comcontent .comcontent-top-infos span{
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #5c5d66;
    line-height: 40px;
  }

  .combox .comcontent .comcontent-top-img{
    padding-top:50px;
    overflow: hidden;
  }

  .combox .comcontent .comcontent-top-img .comcontent-top-img-box{
    position: relative;
    width: 150px;
    height: 110px;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #ededed;
    margin-right: 30px;
  }

  .combox .comcontent .comcontent-top-img .comcontent-top-img-box img{
    border:none;
  }

  .combox .comcontent .comcontent-top-img .comcontent-top-img-box .imgtext{
    position:absolute;
    bottom:0;
    background: #1414149c;
    color:white;
    font-size: 14px;
    width:100%;
    height: 24px;
    text-align: center;
    line-height: 24px;
  }

  .combox .comcontent .companytitle{
    height:40px;
    width:100%;
    line-height: 40px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
    margin-top:50px;
  }

  .combox .comcontent .companydescription{
    text-indent: 20px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #5c5d66;
    padding: 30px;
    background:#fcfcfc;
  }

    
</style>