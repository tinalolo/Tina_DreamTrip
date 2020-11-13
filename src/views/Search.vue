<template lang="pug">
  #search
    #container
      #searchPosition.row.no-gutters.align-items-end.justify-content-center
        .searchWrapper.px-2.mt-5
          img(src="../assets/image/search.svg" width="50px")
        .searchWrapper.px-2
          b-input(v-model="search" placeholder="Search product ..." variant="outline-warning")
      .productWrapper.flex.row.no-gutters
          .productCard.col-6.col-md-4.col-lg-3(v-for="item in filteredList" v-if="search.length>0 ? !isShow : isShow" )
            router-link.m-2(:to="{ name: 'Product', params: { id: item._id }}")
              b-card(:title="item.sortName + '-' + item.productName" :img-src="item.src")
                b-card-text NT${{item.productPrice}}
              .producthover
</template>

<script>
export default {
  data () {
    return {
      search: '',
      isShow: false,
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
    filteredList () {
      return this.products.filter(product => {
        const productfilter = product.sortName + product.productName
        return productfilter.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style lang="scss">
#search{
  .form-control{
    height: 3rem;
    border: 0.2rem solid orange;
    border-radius: 3rem;
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

  @media (max-width: 767px){
    .form-control{
    height: 2.5rem;
    }
    .card-title{
    font-size: 1rem;
    text-align: left;
    margin-bottom: 1rem;
  }
  }
}
</style>
