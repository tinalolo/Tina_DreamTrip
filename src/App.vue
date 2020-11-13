<template lang="pug">
#app
  #homeanimation(v-if="isShow")
    .containerHomeAnimation(onclick)
      .top1
      .bottom1
      .center1
        h2 Welcome
        h3 To
        h2 ZUzu Creation
        b-img.logoimg(src="../public/img/logo.png", width="100px")
        //-TODO 換logo
        br
        b-icon.my-1.toHome(
          icon="arrow-right-circle-fill",
          variant="warning",
          font-scale="3",
          @click="toggleWelcome"
        )
        //- toggleWelcome切換
  #appMain(v-else)
    b-navbar.row.flex-wrap.mb-2
      .logobackground.col-12
        router-link(to="/")
          b-img#logo(src="../public/img/logo.png")
      #menu02.row.no-gutters.justify-content-center.col-12
        router-link.menu-left(to="/announcement")
          .row.no-gutters
            span.col-12.col-md-6 活動
            //- 熱門
            span.col-12.col-md-6 公告
            //- 景點
        router-link(to="/shop")
          .row.no-gutters
            span.col-12.col-md-6 原創
            //- 熱門
            span.col-12.col-md-6 商品
            //- 禮品
        router-link(to="/collection")
          .row.no-gutters
            span.col-12.col-md-6 作品
            //- 夢想
            span.col-12.col-md-6 展示
            //- 清單
        router-link(to="/notice")
          .row.no-gutters
            span.col-12.col-md-6 購物
            //- 清單
            span.col-12.col-md-6 說明
            //- 說明
    HomeMenu
    vue-page-transition(name="fade-in-down")
      router-view(:screenWidth="screenWidth")
    #footer
      h5 © 2020 Tina Dream Trip. All Rights Reserved.
      .footer-contact
        h4 Contact us
        b-link(href="http://line.me/ti/p/@TinaDreamTrip", target="_blank")
          img(src="../public/img/line-messenger.svg", width="50px")
      .footer-connect
        h4 Follow us
        b-link(
          href="https://www.instagram.com/accounts/login/?next=/TinaDreamTrip/",
          target="_blank"
        )
          img(src="../public/img/instagram-2-1.svg", width="50px")
      img.wavefooter(:src="require('./assets/image/wave (1).svg')")
</template>

<script>
import HomeMenu from '../src/components/HomeMenu'
// import HomeAnimation from '../src/components/HomeAnimation'
export default {
  components: {
    HomeMenu
  },
  data () {
    return {
      screenWidth: document.body.clientWidth,
      isShow: true
    }
  },
  computed: {
    account () {
      return this.$store.getters.account
    }
  },
  methods: {
    toggleWelcome () {
      this.isShow = !this.isShow
    },
    heartbeat () {
      // this.axios
      //   .get(process.env.VUE_APP_APIURL + '/heartbeat')// 要給環境參數VUE_APP_APIURL
      //   .then((response) => {
      //     const data = response.data
      //     // 如果是登入中
      //     if (this.account.length > 0) {
      //       // 如果後端登入時間過期
      //       if (!data) {
      //         alert('登入時效已過')
      //         // 前端登出
      //         this.$store.commit('logout')
      //         // 如果現在不是在首頁，跳到登出後的首頁
      //         if (this.$route.path !== '/') {
      //           this.$router.push('/')// 不太懂
      //         }
      //       }
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //     alert('發生錯誤')
      //     this.$store.commit('logout')
      //     // 如果現在不是在首頁，跳到登出後的首頁
      //     if (this.$route.path !== '/') {
      //       this.$router.push('/')
      //     }
      //   })
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 1000 * 5)
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) { // 會顯示undefinded?
        this.screenWidth = val
        this.timer = true
        const that = this
        setTimeout(function () {
          // that.screenWidth = that.$store.state.canvasWidth
          console.log(that.screenWidth)
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c1111;
  // background: #cfc1c4;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

#homeanimation {
  // *,*:before,*:after{box-sizing:border-box}

  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 101;

  .containerHomeAnimation {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:hover,
    &:active {
      .top1,
      .bottom1 {
        &:before,
        &:after {
          margin-left: 200px;
          transform-origin: -200px 50%;
          transition-delay: 0s;
        }
      }

      .center1 {
        opacity: 1;
        transition-delay: 0.2s;
      }
    }
  }

  .top1,
  .bottom1 {
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 200vmax;
      height: 200vmax;
      top: 50%;
      left: 50%;
      margin-top: -100vmax;
      transform-origin: 0 50%;
      transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
      z-index: 10;
      opacity: 0.65;
      transition-delay: 0.2s;
    }
  }

  .top1 {
    &:before {
      transform: rotate(45deg);
      background: #ff6600;
    }
    &:after {
      transform: rotate(135deg);
      background: #fffb00;
    }
  }
  .bottom1 {
    &:before {
      transform: rotate(-45deg);
      background: #8d8d8d;
    }
    &:after {
      transform: rotate(-135deg);
      background: #000000;
    }
  }

  .center1 {
    position: absolute;
    width: 400px;
    height: 400px;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    transition-delay: 0s;
    color: #333;

    .toHome {
      cursor: pointer;
    }
  }
}

#logo {
  width: 100px;
  margin-bottom: 0.5rem;
}

#appMain {
  background-image: url("../src/assets/image/wave.svg");
}

#footer {
  position: relative;
  color: orange;
  h5 {
    position: absolute;
    font-size: 1.5rem;
    bottom: 10%;
    right: 10%;
  }
  .footer-contact {
    position: absolute;
    bottom: 10%;
    left: 20%;
  }
  .footer-connect {
    position: absolute;
    bottom: 10%;
    left: 10%;
  }
}

.logout-point {
  cursor: pointer;
}

@media (max-width: 767px) {
  #appMain {
    background-size: 380%;
    background-position: 22% 0;
  }
}

#menu02 {
  // background: #000000;
  a {
    color: #4e342e;
    font-size: 1.5rem;
    // background: orange;
    padding: 0 1rem;
    font-weight: bolder;
    // text-shadow: 0 0 1px  rgb(31, 173, 230),0 0 2px  rgb(31, 173, 230),0 0 3px  rgb(31, 173, 230),0 0 4px rgb(31, 173, 230);
  }
}

@media (min-width: 767.1px) {
  #menu02 {
    a {
      position: relative;
      padding-bottom: 0.2rem;
      transition: color 0.35s ease;
      &::before {
        content: "";
        width: 0%;
        height: 0;
        position: absolute;
        left: 10%;
        bottom: 0;
        transition: width 1s ease;
        border-bottom: 0;
      }
      &:hover::before {
        left: 10%;
        width: 80%;
        border-bottom: 0.3rem dotted orange;
      }
      &::after {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        right: 10%;
        bottom: 0;
        transition: width 1s ease;
        border-bottom: 0.3rem dotted orange;
      }
      &:hover::after {
        width: 80%;
        right: 10%;
        border-bottom: 0;
      }
    }
  }
}

@media (max-width: 767px) {
  .logobackground {
    padding: 0;
  }

  #logo {
    width: 75px;
  }
  #menu02 {
    padding-top: 0;
    padding-bottom: 0;
    a {
      font-size: 1rem;
      padding: 0 0.1rem;
    }
  }
  #footer {
    h4 {
      display: none;
    }
    h5 {
      position: absolute;
      font-size: 0.5rem;
      bottom: 10%;
      right: 10%;
    }
    .footer-contact {
      position: absolute;
      bottom: 15%;
      left: 20%;
      img {
        width: 20px;
      }
    }
    .footer-connect {
      position: absolute;
      bottom: 15%;
      left: 10%;
      img {
        width: 20px;
      }
    }
  }
}
</style>
