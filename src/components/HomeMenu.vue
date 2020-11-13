<template lang="pug">
  #homemenu
    a(v-b-toggle href="#example1"  @click.prevent rounded)
      b-icon.rounded-circle.p-2(v-if="icondrop" icon="caret-down-fill" variant="warning" font-scale="3" @click="iconselect()")
      b-icon.rounded-circle.bg-warning.p-2(v-else icon="person" variant="dark" font-scale="3" @click="iconselect()")
    b-collapse(id="example1" visible)
      router-link(to="/search")
        b-icon.my-1.p-1.bg-danger(icon="search" variant="dark" font-scale="2")
      br
      router-link(to="/member/membercenter")
        b-icon.my-1.p-1.bg-info(icon="heart" variant="dark" font-scale="2")
      br
      router-link.position-relative(to="/cart")
        b-icon.my-1.p-1.bg-warning(icon="cart" variant="dark" font-scale="2")
        span.absoluteCart(v-if="cart.length!==0") {{cart.length}}
      br
      #login(v-if="account.length===0")
        router-link(to="/login")
          b-icon.my-1.p-1.bg-success(icon="person" variant="dark" font-scale="2")
      #admin(v-else-if="account==='admin1234'")
        router-link(to="/admin/adminsort")
          b-icon.my-1.p-1.bg-success(icon="person-check" variant="dark" font-scale="2")
        br
        b-icon.logouticon.my-.p-1.bg-primary(icon="box-arrow-up-right" variant="dark" font-scale="2" @click="logout")
      #member(v-else)
        router-link(to="/member/membercenter")
          b-icon.my-1.p-1.bg-success(icon="person-check" variant="dark" font-scale="2")
        br
        b-icon.logouticon.my-1.p-1.bg-primary(icon="box-arrow-up-right" variant="dark" font-scale="2" @click="logout")
</template>

<script>
export default {
  data () {
    return {
      icondrop: true
    }
  },
  computed: {
    account () {
      return this.$store.getters.account
    },
    cart () {
      return this.$store.getters.cart
    }
  },
  methods: {
    iconselect () {
      this.icondrop = !this.icondrop
    },
    logout () {
      // this.axios.delete(process.env.VUE_APP_APIURL + '/logout')
      //   .then(response => {
      //     const data = response.data
      //     // 如果回來的資料 success 是 true
      //     if (data.success) {
      //       alert('登出成功')
      //       // 呼叫 vuex 的登出
      //       this.$store.commit('logout')
      //       // 如果現在不是在首頁，跳到登出後的首頁
      //       if (this.$route.path !== '/') {
      //         this.$router.push('/')
      //       }
      //     } else {
      //       // 不是就顯示回來的 message
      //       alert(data.message)
      //     }
      //   })
      //   .catch(error => {
      //     // 如果回來的狀態不是 200，顯示回來的 message
      //     alert(error.response.data.message)
      //   })
    }
  }
}
</script>

<style lang="scss">
#homemenu{
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 100;
  .logouticon{
    cursor: pointer;
  }
  .absoluteCart{
    width: 1.2rem;
    height: 1.2rem;
    color: orange;
    font-size: 0.6rem;
    position: absolute;
    text-shadow:  0 0 1px #fff;
    bottom: -0.2rem;
    left: -0.6rem;
    background: #333;
    border-radius: 50% 50%;
  }
}
</style>
