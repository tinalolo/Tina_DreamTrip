<template lang="pug">
  #sort
    #container
      .sort
        .sortName {{id}}
        #productContainer.flex.row.no-gutters
          .productCards.col-6.col-md-4.col-lg-3(v-for="product in products" v-if="product.sortName === id")
              router-link.m-2(:to="{ name: 'Product', params: { id: product._id }}")
                b-card(:title="product.sortName + '-' + product.productName" :img-src="product.src")
                  b-card-text NT${{product.productPrice}}
                .producthover
</template>

<script>
export default {
  name: 'Sort',
  data () {
    return {
      products: []
    }
  },
  mounted () {
    // this.axios.get(process.env.VUE_APP_APIURL + '/adminproduct')
    //   .then(response => {
    //     this.products = response.data.result.map(d => {
    //       return {
    //         sortName: d.sortName,
    //         productName: d.productName,
    //         productPrice: d.productPrice,
    //         productDescription: d.productDescription,
    //         productStock: d.productStock,
    //         src: process.env.VUE_APP_APIURL + '/product/' + d.productsrc,
    //         _id: d._id
    //       }
    //     })
    //   })
    //   .catch(() => {
    //     alert('發生錯誤')
    //   })
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="scss">
#sort{
  .sortTitle{
    width: 100%;
    background: orange;
    color: #333;
    border-radius: 1rem 0 0 0;
  }
  a{
    color: #fff;
    display: block;
  }
  .sortName{
    font-size: 1.6rem;
    color: orange;
    background: #333;
    padding: 0.2rem 0;
    border-radius: 1rem 0 1rem 0;
  }

  .card{
    background: #333;
    border: none;
    border-radius: 1rem 0 1rem 0;
    img{
      border-radius: 1rem 0 0 0;
    }
  }

  .card-title{
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 1.5rem;
  }

  .card-text{
    text-align: left;
  }

  .producthover{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0.5rem;
    border-radius: 1rem 0 1rem 0;
    transition: 1s;
    &::after{
      content: "Quick View";
      opacity: 0;
      display: block;
      background: #333;
      color: orange;
      font-size: 1.4rem;
      border: 4px double orange;
      margin: 1rem;
      top: calc(50% - 0.7rem);
      left: 0;
      right: 0;
      position: absolute;
      transition: 1s;
    }
  }

  .producthover:hover{
    background: rgba($color: #000000, $alpha: 0.5);
    // z-index: 1;
    &::after{
    opacity: 1;
    }
  }
}
</style>
