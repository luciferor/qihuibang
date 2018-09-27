<template>
  <div class="layout" @click="addMsg">
    <div class="top">
      <span class="contacts">小燕子</span>
    </div>
    <div class="content">
      <div v-for="message in messageList" class="msg-container">
        <div :class="message.isReceived ? 'receive-msg' : 'send-msg'">
          <img src="../images/head_default_icon.png">
          <p :class="message.isReceived ? 'receive-bubble receive-bubble-left' : 'send-bubble send-bubble-right'">
            {{message.msg}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "chat",
    methods: {
      addMsg() {
        this.index = this.index + 1;
        console.log("index==========" + this.index);
        if (this.index < this.allMessage.length) {
          let message = this.allMessage[this.index];
          this.messageList.push({
            msg: message.msg,
            isReceived: message.isReceived
          });
        }
      }
    },
    data() {
      return {
        index: -1,
        allMessage: [
          {
            msg: '这是第一条消息嘻嘻',
            isReceived: true
          },
          {
            msg: '这是第二条消息嘻嘻',
            isReceived: false
          },
          {
            msg: '这是第三条消息嘻嘻,它特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别长',
            isReceived: false
          },
          {
            msg: '这是第四条消息嘻嘻,它也是特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别长',
            isReceived: true
          },
          {
            msg: '这是第五条消息嘻嘻',
            isReceived: true
          },
          {
            msg: '这是第六条消息嘻嘻',
            isReceived: false
          },
          {
            msg: '这是第七条消息嘻嘻,它特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别长',
            isReceived: false
          },
          {
            msg: '这是第八条消息嘻嘻,它也是特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别长',
            isReceived: true
          },
        ],
        messageList: []
      }
    }
  }
</script>

<style scoped lang="scss">

  body {
    margin: 0 auto;
  }

  /*适配各种尺寸-手机端*/
  @media only screen and (max-width: 767px) and (min-width: 320px) {
    body{
      background-color: #ebebeb;
    }
    .layout {
      width:100%;
      min-height: 700px;
      margin: 0 auto;
      background-color: #ebebeb;
      padding-bottom: 10px;
    }
    .top {
      background-color: #303030;
      height: 60px;
      line-height: 60px
    }
    .contacts {
      color: white;
      font-size: 20px;
      margin-left: 20px;
    }
    .send-bubble {
      position: relative;
      padding: 15px;
      border: 1px solid #81d047;
      border-radius: 10px;
      background-color: #a0e75a;
      display: inline-block;
      max-width: 80%;
      line-height: 30px; /* 垂直居中   */
    }
    .receive-bubble {
      position: relative;
      padding: 15px;
      border: 1px solid #d9d9d9;
      border-radius: 10px;
      background-color: white;
      display: inline-block;
      max-width: 80%;
      line-height: 30px; /* 垂直居中   */
    }
    p {
      font-size: 16px;
      color: #333;
    }
    img {
      height:60px;
      width:60px;
    }
    .content {
      margin: 10px;
    }

    .msg-container {
      padding-top: 10px;
    }

    .send-bubble-right {
    }

    .send-bubble-right:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: 17px;
      right: -20px;
      border: 10px solid;
      border-color: transparent transparent transparent #81d047;
    }

    .send-bubble-right:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      right: -18px;
      top: 18px;
      border: 9px solid;
      border-color: transparent transparent transparent #a0e75a;
    }

    .receive-bubble-left {
    }

    .receive-bubble-left:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: 17px;
      border: 10px solid;
      left: -20px;
      border-color: transparent #d9d9d9 transparent transparent;
    }

    .receive-bubble-left:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      left: -18px;
      top: 18px;
      border: 9px solid;
      border-color: transparent white transparent transparent;
    }

    .receive-msg {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      vertical-align: top;
      padding-top: 15px;

    }

    .send-msg {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 15px;
      vertical-align: top;

    }
  }

  /*适配各种尺寸-平板电脑*/
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    body{
      background-color: #ebebeb;
    }
    .layout {
      width:100%;
      min-height: 100%;
      margin: 0 auto;
      background-color: #ebebeb;
      padding-bottom: 10px;
    }
    .top {
      background-color: #303030;
      height: 80px;
      line-height: 80px
    }
    .contacts {
      color: white;
      font-size: 24px;
      margin-left: 30px;
    }
    .send-bubble {
      position: relative;
      padding: 15px;
      border: 1px solid #81d047;
      border-radius: 10px;
      background-color: #a0e75a;
      display: inline-block;
      max-width: 85%;
      line-height: 40px; /* 垂直居中   */
    }
    .receive-bubble {
      position: relative;
      padding: 15px;
      border: 1px solid #d9d9d9;
      border-radius: 10px;
      background-color: white;
      display: inline-block;
      max-width: 85%;
      line-height: 40px; /* 垂直居中   */
    }
    p {
      font-size: 24px;
      color: #333;
    }
    img {
      height:80px;
      width: 80px;
    }
    .content {
      margin: 10px;
    }

    .msg-container {
      padding-top: 10px;
    }

    .send-bubble-right {
    }

    .send-bubble-right:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: 17px;
      right: -25px;
      border: 13px solid;
      border-color: transparent transparent transparent #81d047;
    }

    .send-bubble-right:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      right: -23px;
      top: 18px;
      border: 12px solid;
      border-color: transparent transparent transparent #a0e75a;
    }

    .receive-bubble-left {
    }

    .receive-bubble-left:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: 17px;
      border: 13px solid;
      left: -25px;
      border-color: transparent #d9d9d9 transparent transparent;
    }

    .receive-bubble-left:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      left: -23px;
      top: 18px;
      border: 12px solid;
      border-color: transparent white transparent transparent;
    }

    .receive-msg {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      vertical-align: top;
      padding-top: 15px;

    }

    .send-msg {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 15px;
      vertical-align: top;

    }
  }

  /*适配各种尺寸-PC端小屏幕*/
  @media only screen and (max-width: 2560px) and (min-width: 1024px) {
    .body{
      background-color: #ebebeb;
    }
    .layout {
      width: 100%;
      min-height: 100%;
      margin: 0 auto;
      background-color: #ebebeb;
      padding-bottom: 20px;
    }
    .top {
      background-color: #303030;
      height: 120px;
      line-height: 120px
    }
    .contacts {
      color: white;
      font-size: 36px;
      margin-left: 45px;
    }
    .send-bubble {
      position: relative;
      padding: 30px;
      border: 1px solid #81d047;
      border-radius: 10px;
      background-color: #a0e75a;
      display: inline-block;
      max-width: 85%;
      line-height: 50px; /* 垂直居中   */
    }
    .receive-bubble {
      position: relative;
      padding: 30px;
      border: 1px solid #d9d9d9;
      border-radius: 10px;
      background-color: white;
      display: inline-block;
      max-width: 85%;
      line-height: 50px; /* 垂直居中   */
    }
    p {
      font-size: 34px;
      color: #333;
    }
    img {
      height:120px;
      width: 120px;
    }
    .content {
      margin: 10px;
    }

    .msg-container {
      padding-top: 10px;
    }

    .send-bubble-right {
    }

    .send-bubble-right:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: 17px;
      right: -40px;
      border: 20px solid;
      border-color: transparent transparent transparent #81d047;
    }

    .send-bubble-right:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      right: -38px;
      top: 18px;
      border: 19px solid;
      border-color: transparent transparent transparent #a0e75a;
    }

    .receive-bubble-left {
    }

    .receive-bubble-left:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: 17px;
      border: 20px solid;
      left: -40px;
      border-color: transparent #d9d9d9 transparent transparent;
    }

    .receive-bubble-left:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      left: -38px;
      top: 18px;
      border: 19px solid;
      border-color: transparent white transparent transparent;
    }

    .receive-msg {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      vertical-align: top;
      padding-top: 25px;

    }

    .send-msg {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 25px;
      vertical-align: top;

    }
  }


</style>
