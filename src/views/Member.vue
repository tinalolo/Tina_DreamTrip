<template lang="pug">
  #member
    #container
      #sidebar
        v-navigation-drawer(v-model="drawer" permanent :expand-on-hover="expandonhover()")
          v-list-item(class="px-2")
            v-list-item-avatar
              v-img(src="https://randomuser.me/api/portraits/men/85.jpg")
            v-list-item-title {{account}} 您好
          v-divider
          v-list(dense nav)
            v-list-item(v-for="item in items" :key="item.title" :to="item.path")
              v-list-item-icon
                v-icon {{ item.icon }}
              v-list-item-content
                v-list-item-title {{ item.title }}
      #membercontent(:style="{paddingLeft:contentwidth()}")
        router-view
</template>

<script>

export default {
  data () {
    return {
      drawer: true,
      expandOnHover: true,
      items: [
        { title: '我的帳戶', icon: 'mdi-home-city', path: '/member/membercenter' },
        { title: '願望清單', icon: 'mdi-heart', path: '/member/wishlist' },
        { title: '購物清單', icon: 'mdi-cart', path: '/member/membercart' }
      ]
    }
  },
  props: {
    screenWidth: Number
  },
  methods: {
    expandonhover () {
      return (this.screenWidth < 768) ? this.expandOnHover : !this.expandOnHover
    },
    contentwidth () {
      return (this.screenWidth < 768) ? '56px' : '256px'
    }
  },
  computed: {
    account () {
      return this.$store.getters.account
    }
  }
}
</script>

<style lang="scss">
#member{
  position: relative;
}

.v-navigation-drawer{
  min-height: 50vh;
}

#sidebar{
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 99;
}

#membercontent{
  background: rgba($color: #fff, $alpha: 0.5);
  width: 100%;
  min-height: 50vh;
}
</style>
