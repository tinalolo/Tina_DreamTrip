<template lang="pug">
  #home
    #container
      #carousels.row
        .carousel.col-12.col-lg-6(v-for="carousel in carousels")
          b-carousel.m-1(id="carousel-fade" :interval="carousel.speed" fade controls indicators)
            .carouselImg(v-for="src in carousel.imgs")
              b-carousel-slide.img-scale(:img-src="src")
        .BrandConcept.col-12.col-lg-6.p-5.row.align-items-end
          h1 品牌理念
          h5.text-left Zuzu的風格變化多端，我們使無形的想法具體化，也讓有形的物品抽象化；將生活融入創作中，日常裡看到什麼、聽到什麼、吃到什麼都可以轉換成為軟陶藝術，讓你的生活在小小的耳環上體現，所以就讓我們一起期待ZUzu的原創商品吧！！
      br
      br
      .parallaxline
        v-parallax(src="https://img.51miz.com/preview/element/00/01/06/84/E-1068495-FE3BE6A3.jpg" height="20")
        //- 有個框 背景圖在裡面跑 視差效果
      br
      br
      br
      br
      .section02.row.no-gutters.justify-content-around
        h1.col-12 製程介紹
        div.col-2
          img(:src="require('../assets/image/home/clay.svg')")
          h5 混色揉土
        div.col-2
          img(:src="require('../assets/image/home/tool.svg')")
          h5 修飾塑形
        div.col-2
          img(:src="require('../assets/image/home/oven.svg')")
          h5 低溫烘烤
        div.col-2
          img(:src="require('../assets/image/home/polish.svg')")
          h5 去邊打磨
        .parallaxline.my-5
            v-parallax(src="https://img.51miz.com/preview/element/00/01/06/84/E-1068495-FE3BE6A3.jpg" height="20")
            //- 有個框 背景圖在裡面跑 視差效果
      .section03.row.justify-content-center.align-items-center
        .reveal.col-12.col-md-3
          .revealBOX
            .taiwan-container
              h1 商品展示
              .taiwan-box
                img.ear(:src="require('../assets/image/home/ear (1).svg')")
                img.taiwansvg1(:src="require('../assets/image/home/taiwanearrings_animated.svg')")
        #Introductioncontainer.col-12.col-md-5
          #Introductionbox
            Introduction
      .parallaxline
</template>
<script>
import Introduction from '../components/Introduction' // 引用introduction.vue
export default {
  components: {
    Introduction
  },
  data () {
    return {
      carousels: [
        {
          speed: 5000,
          imgs: [
            require('../assets/image/home/carousel/S__13344997.jpg'),
            require('../assets/image/home/carousel/S__13344983.jpg'),
            require('../assets/image/home/carousel/S__13344991.jpg')
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.img-scale{
  animation: img-scale 20s 1s 1 ease forwards;
}
@keyframes img-scale{
  from{
    transform: scale(1);
  }
  to{
    transform: scale(1.2);
  }
}

.parallaxline{
  width: 100%;
  height: 20px;
}

.mask{
  width: 50vw;
  height: 50vh;
  background: url("https://img.51miz.com/preview/element/00/01/06/84/E-1068495-FE3BE6A3.jpg")no-repeat top center;
  background-size: cover;
  -webkit-mask: url("../assets/image/taiwan-map-clip-art-taiwan-thumbnail1.png") no-repeat center center;
  mask: url("../assets/image/taiwan-map-clip-art-taiwan-thumbnail1.png") no-repeat center center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mask:hover{
  background: url("../assets/image/home/carousel/S__13344984.jpg")no-repeat top center;
}

#carousels{
  .BrandConcept{
  h1{
  color: #333;
  font-weight: bold;
  }
  h5{
    font-weight: bolder;
  }
  }
}

.revealBOX{
  position: relative;

.taiwan-container{
  position: relative;
  h1{
    position: absolute;
    top: 0;
    left: 0;
  }

}

  .taiwan-box{
    width: 100px;
    height: 100px;
    position: relative;
  }
  .ear{
    position: absolute;
  width: 4rem;
  top: -20%;
  left: 160%;
  }
  .taiwansvg1{
    position: absolute;
    width: 400px;
    top: 13%;
    left: -12%;
  }
}

.section01{
  margin:5rem 0;
  img{
    width: 100%;
    height: auto;
  }
  h1{
    color: #333;
    font-weight: bold;
  }
  h5{
    font-weight: bolder;
  }
}

.section02{
  h1{
    margin-bottom: 8rem;
    font-weight: bolder;
  }
  img{
    width: 100%;
  }
  h5{
    margin: 2rem 0;
    font-weight: bolder;
  }
}

.section03{
  position: relative;
  min-height: 300px;
  .taiwansvg{
  width: 1000px;
  position: absolute;
  top: 0;
  left: -20%;
  }
  h1{
    // margin-bottom: 8rem;
    font-weight: bolder;
  }
  #Introductionbox{
    position: absolute;
    top: -150px;
    left: 0;
  }
}

#texttry{
  padding-top: 5em;
  display: flex;
  justify-content: start;
  font-size: 20px;
  width: auto;
}
/* DEMO-SPECIFIC STYLES */
.textanime1 p {
  color: rgb(0, 0, 0);
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation:
  typing 5s steps(30, end) infinite,
  blink-caret .5s step-end infinite;
}

.textanime2 p {
  color: rgb(0, 0, 0);
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation:
  typing 10s 10s steps(30, end) infinite,
  blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}

@media (max-width: 767px){
.revealBOX{
  .ear{
    width: 3rem;
    top: -5%;
    left: 160%;
  }
  .taiwansvg1{
    width: 200px;
    top: 23%;
    left: 79%;
  }
}
.section03{
  position: relative;
  min-height: 500px;
}
}

</style>
