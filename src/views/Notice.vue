<template lang="pug">
  #notice
    #container
      b-card(no-body)
        b-tabs(pills card :vertical="tabsRWD()" v-model="tabIndex" style="min-height:60vh")
          b-tab(v-for="(tab,index) in tabs" :title="tab.title" :title-link-class="linkClass(index)")
            b-card-text(v-for="(content,i) in tab.contents")
              b-button.text-left(block v-b-toggle="'accordion-'+index+i" variant="dark") Q{{i+1}}.{{content.question}}
              b-collapse(:id="'accordion-'+index+i")
                b-card-text.text-left.p-2(v-html="content.answer")
</template>

<script>
export default {
  data () {
    return {
      tabIndex: 0,
      vertical: false,
      tabs: [
        {
          title: '會員問題',
          contents: [
            {
              question: '該如何加入會員呢？',
              answer: '<p>請您點選右上角「登入/註冊」，可選擇「手機號碼驗證註冊」或「使用Facebook快速註冊」。</p>'
            },
            {
              question: '忘記密碼怎麼辦？',
              answer: '若您忘記密碼，請您先「會員登入」後，點選「忘記密碼」 再輸入註冊的電子郵件/手機號碼，系統會自動發送密碼重設通知給您，再請您依照通知步驟重新設定密碼即可。'
            },
            {
              question: '忘記登入的會員帳號？',
              answer: '煩請直接與客服中心聯繫。'
            }
          ]
        },
        {
          title: '購物問題',
          contents: [
            {
              question: '目前提供哪些付款方式？',
              answer: '目前提供付款方式有：<br>1.『超商取貨付款』，提供取貨付款的超商通路包括：7-11、全家、萊爾富、OK <br>2.宅配貨到付款（限台灣本島）'
            },
            {
              question: '如何查詢目前訂單的處理情況？',
              answer: '請您先「會員登入」後至「訂單查詢」，即可查詢該訂單的處理狀態。'
            }
          ]
        },
        {
          title: '配送取貨',
          contents: [
            {
              question: '可以選擇的配送方式有哪些？',
              answer: '貨到付款'
            },
            {
              question: '請問運費如何計算？',
              answer: '<p>以下結帳方式之免運費標準，請依網站不定期公告之行銷活動為依據（唯訂單金額恕無法合併計算）。<br>1. 7-11、全家、萊爾富、OK超商取貨付款訂單，單筆購物滿1000元，即享有免運費優惠。純商品金額購物未滿1000元(999元以下)，單筆訂單將酌收50元物流費。<br>2. 宅配訂單(付款方式：信用卡、貨到付款、LINE Pay及 Apple Pay)，單筆訂單將酌收60元物流費。</p>'
            },
            {
              question: '台灣外島地區可以寄送嗎？',
              answer: '您可以選擇『超商取貨付款』或『信用卡/LINE Pay/Apple Pay付款』；若您採信用卡方式付款，將以郵局海運配送，預計3-7日內配達，而送達時間會因天氣狀況、船隻班次而有變動的可能性。'
            },
            {
              question: '訂購商品後需幾天的時間才可以收到商品呢？',
              answer: '常態的出貨時間為：今天下單，明天取貨。'
            }
          ]
        }
      ]
    }
  },
  props: {
    screenWidth: Number
  },
  methods: {
    linkClass (index) {
      if (this.tabIndex === index) {
        return ['bg-warning', 'text-dark']
      } else {
        return ['text-warning']
      }
    },
    tabsRWD () {
      return (this.screenWidth < 768) ? this.vertical : ''
    }
  }
}
</script>

<style lang="scss">
#notice{
  .tabs{
    background: rgba($color: #ff8800, $alpha: 0.75);
  }
  .tab-pane{
    background: rgba($color: #fff, $alpha: 0);
  }

  .card-text{
    color: #000000;
  }

  .card-header{
    background: #000000;
  }
}

</style>
