<template lang="pug">
  #cart
    #container
      h2.mb-4 購物車
      b-table-simple
        b-thead
          b-tr
            b-th 圖片
            b-th 商品名稱
            b-th 數量
            b-th 單價
            b-th
              b-icon(icon="trash-fill" font-scale="1.3")
          b-tr(v-for="(item, idx) in cart" :key="idx")
            b-td
              b-img(:src="item.productsrc" style={width:'80px'})
            b-td
              span {{item.sortName + '-' + item.productName}}
            b-td
              span 1
            b-td
              span {{item.productPrice}}
            b-td
              b-icon.deleteIcon.text-danger(icon="trash" @click="delCart(idx)" font-scale="1.3")
      h4.text-right.text-warning 共{{cart.length}}件商品 / 總額 ${{totalPrice}}
      #nextStep.row.justify-content-between.mt-5.mx-3
        b-button.p-2.text-warning(variant="dark")
          span.ml-1  繼續購物
        b-button.p-2.text-dak(variant="warning")
          span.ml-1  下一步
</template>

<script>
export default {
  name: 'cart',
  computed: {
    cart () {
      return this.$store.getters.cart
    },
    totalPrice () {
      let price = 0
      for (const item of this.cart) {
        price += item.productPrice
      }
      return price
    }
  },
  methods: {
    delCart (index) {
      this.$store.commit('delCart', index)
    }
  }
}
</script>

<style lang="scss">
#cart{
  h2{
    font-weight: bolder;
  }
  th{
    font-size: 1.2rem;
  }
  .deleteIcon{
    cursor: pointer;
  }
}
</style>
