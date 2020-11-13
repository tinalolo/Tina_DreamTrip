<template lang="pug">
  #product
    #container.flex.row
      #productsrc.col-12.col-md-6
        b-img(:src="product.productsrc" fluid)
      #productName.text-left.col-12.col-md-6
        #123
        h4 {{product.sortName}}
        h1 {{product.productName}}
        br
        p NT${{product.productPrice}}
        b-button.cartStock(@click="addCart(product)" v-if="product.productStock>0" variant="dark")
          b-icon.text-warning(icon="cart-plus" font-scale="1.5")
          span.ml-1  Add To Cart
        b-button(@click="addCart(product)" v-else variant="dark" disabled)
          span.ml-1  Sold Out
        hr
        br
        p {{product.productDescription}}
        br
        p 🔺採用德國軟陶，環保材質
        p 🔺低溫烘烤、無毒無味
        p 🔺防水不掉色、堅固有彈性
        p 🔺925純銀耳針/耳夾可選擇
        br
        p ⚠️商品為手工製作，表面有些微手紋壓痕 、烘烤出的小泡泡，屬正常現象，高標準者勿下單。
        p ⚠️在配戴的過程中請輕巧配戴，避免碰撞，並且盡量避免於洗澡、游泳、泡溫泉時配戴。
        //- #ddd
          b-icon(icon="heart" font-scale="1.5")

</template>

<script>
export default {
  data () {
    return {
      product: {
        sortName: '',
        productName: '',
        productPrice: '',
        productDescription: '',
        productStock: '',
        productsrc: '',
        productid: ''
      },
      count: ''
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  mounted () {
    // this.axios.get(process.env.VUE_APP_APIURL + '/productDetail/' + this.id)
    //   .then(response => {
    //     const data = response.data
    //     if (data.success) {
    //       this.product.sortName = data.result.sortName
    //       this.product.productName = data.result.productName
    //       this.product.productPrice = data.result.productPrice
    //       this.product.productDescription = data.result.productDescription
    //       this.product.productStock = data.result.productStock
    //       this.product.productsrc = process.env.VUE_APP_APIURL + '/product/' + data.result.productsrc
    //       this.product.productid = data.result._id
    //     } else {
    //       alert(data.message)
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     alert('發生錯誤')
    //   })
  },
  methods: {
    addCart (data) {
      this.product.productStock = data.productStock - 1
      this.$store.commit('addCart', data)
    }
  }
}
</script>

<style lang="scss">
#product{
  .cartStock:hover{
    background: #ff9100;
    border:1px solid #ff9100;
    color: black;
  }

}
</style>
