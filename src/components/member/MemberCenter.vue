<template lang="pug">
  #membercenter
    h4 我的檔案
    h6 管理你的檔案以保護你的帳戶
    hr
    #memberform
      b-form(@submit="onSubmit")
        //- #memberavatar.col-md-4.order-md-2
          b-avatar(src="https://randomuser.me/api/portraits/men/85.jpg" size="6rem")
          b-form-file(class="mt-3" plain)
        #memberlabel
          b-form-group(label-for="input-1" label="使用者帳號" label-cols-md="4")
            b-form-input(id="input-1" v-model="account" disabled)
          b-form-group(label-for="input-2" label="姓名" label-cols-md="4")
            b-form-input(id="input-2" v-model="form.name" required)
          b-form-group(label-for="input-3" label="Email" label-cols-md="4")
            b-form-input(id="input-3" v-model="form.email" type="email" required)
          b-form-group(label-for="input-4" label="手機號碼" label-cols-md="4")
            b-form-input(id="input-4" v-model="form.phone" required)
          b-form-group(label-for="input-5" label="地址" label-cols-md="4")
            b-form-input(id="input-5" v-model="form.address" required)
          b-form-group(label-for="input-6" label="生日" label-cols-md="4")
            b-form-input(id="input-6" v-model="form.birth" type="date" required)
          b-button(type="submit") 儲存
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        address: '',
        birth: ''
      }
    }
  },
  computed: {
    id () {
      return this.$store.getters.id
    },
    account () {
      return this.$store.getters.account
    },
    name () {
      return this.$store.getters.name
    },
    email () {
      return this.$store.getters.email
    },
    phone () {
      return this.$store.getters.phone
    },
    address () {
      return this.$store.getters.address
    },
    birth () {
      return this.$store.getters.birth
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      // this.axios.patch(
      //   process.env.VUE_APP_APIURL + '/memberprofile/' + this.id, this.form)
      //   .then(response => {
      //     const data = response.data
      //     if (data.success) {
      //       alert('完成會員資料')
      //       this.$store.commit('patchname', data.result.name)
      //       this.$store.commit('patchemail', data.result.email)
      //       this.$store.commit('patchphone', data.result.phone)
      //       this.$store.commit('patchaddress', data.result.address)
      //       this.$store.commit('patchbirth', data.result.birth)
      //       console.log(data)
      //     } else {
      //       alert(data.message)
      //     }
      //   })
      //   .catch(error => {
      //     // 如果回來的狀態不是 200，顯示回來的 message
      //     alert(error.response.data.message)
      //   })
    }
  },
  mounted () {
    this.form.name = this.name
    this.form.email = this.email
    this.form.phone = this.phone
    this.form.address = this.address
    this.form.birth = this.birth
  }
}
</script>

<style lang="scss">
#membercenter{
  padding: 1.5rem;
  *{
    text-align: left;
  }
}

#bbb{
  padding: 0 3rem;
}

</style>
