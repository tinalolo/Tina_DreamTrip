<template lang="pug">
  #introduction
    #container
      .perspective
        label.tab(for="tab-top")
        label.tab(for="tab-front")
        label.tab(for="tab-bottom")
        input#tab-top(type="radio" name="tabs")
        input#tab-front(type="radio" name="tabs")
        input#tab-bottom(type="radio" name="tabs")
        .cube
          .tab-content
            img(:src="productsrc[0]")
          .tab-content
            img(:src="productsrc[1]")
          .tab-content
            img(:src="productsrc[2]")
</template>

<script>
export default {
  name: 'Introduction',
  data () {
    return {
      sortTitle: 'EARRINGS',
      sortName: 'TAIWAN',
      sortsrc: require('../assets/image/product/2020725 _1_200725_89.jpg'),
      productName: 'Big Taiwan',
      productsrc: [
        require('../assets/image/collection/creation/creation_20200725_01.jpg'),
        require('../assets/image/collection/creation/2020725_200725_31.jpg'),
        require('../assets/image/collection/creation/creation_20200725_03.jpg')
      ],
      productPrice: '580',
      productDescription: 'SIZE: Width 6.7cm/ Height 2.5cm',
      productStock: true,
      productLink: '/shopproduct',
      ShopCardWishlist: false,
      addToCart: false,
      stock: 1
    }
  }
}
</script>

<style lang="scss">
#introduction{
  .perspective {
    // background:red;
    perspective: 300rem;
    // perspective-origin: 50% 50px;
    width: 400px;
    // margin: 0 auto;
    // font-family: 'Roboto', sans-serif;
    // font-weight: 100;
    // color: #fff;
    // text-align: center;
  }
  input {
    display: none;
  }
  .tab {
    position: absolute;
    width: 40px;
    height: 40px;
    // background: pink;
    right: 12%;
    cursor: pointer;
    // line-height: 100px;
    // font-weight: 300;
    // box-shadow: 1px #333;

    &:nth-child(1) {
      top: -5px;
      background:url("../assets/image/collection/creation/creation_20200725_01.jpg") center/cover no-repeat;
    }
    &:nth-child(2) {
      top: 40px;
      background:url("../assets/image/collection/creation/creation_20200725_02.jpg") center/cover no-repeat;
    }
    &:nth-child(3) {
      top: 85px;
      background:url("../assets/image/collection/creation/creation_20200725_03.jpg") center/cover no-repeat;
    }
  }

  .cube {
    position: relative;
    // margisn: 60px auto 0;
    width: 300px;
    height: 300px;
    // transform-origin: 0 150px;
    transform-style: preserve-3d;
    transition: transform 0.5s ease-in;
  }
  .tab-content {
    width: 300px;
    height: 300px;
    position: absolute;
    // h1 {
    //   font-size: 25px;
    //   margin: 75px 0 10px;
    //   font-weight: 300;
    // }
    // p {
    //   font-size: 12px;
    // }
    &:nth-child(2) {
      transform: translateZ(150px);
      // background: #1B9AAA;
    }
    &:nth-child(1) {
      transform: rotateX(-270deg) translateY(-150px);
      transform-origin: top left;
      // background: url("../assets/image/product/2020725 _1_200725_56.jpg") center/cover no-repeat;
    }
    &:nth-child(3) {
      transform: rotateX(-90deg) translateY(150px);
      transform-origin: bottom center;
      // background: #EF476F;
    }
  }

  #tab-top:checked ~ .cube {
    transform: rotateX(-90deg);
  }
  #tab-front:checked ~ .cube {
    transform: rotateX(0deg);
  }
  #tab-bottom:checked ~ .cube {
    transform: rotateX(90deg);
  }
  img{
    width: 300px;
  }
}
</style>
