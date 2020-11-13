<template lang="pug">
  #announcement
    #container
      #masonry(v-masonry item-selector=".masonrycard" transition-duration="0.1s")
        b-card(
        class="masonrycard"
        v-masonry-tile
        v-for="(announcementcard, index) in announcementcards"
        :key="index"
        :title="announcementcard.title"
        :img-src="announcementcard.img"
        v-b-modal="'modal'+index"
        img-top
        )
          b-card-text 發布日期：{{announcementcard.date}}
        b-modal(
        v-for="(announcementcard, index) in announcementcards"
        :title="announcementcard.title"
        :id="'modal'+index"
        size="lg"
        hide-footer
        )
          b-container
            img.img-fluid(:src="announcementcard.img")
            span(v-html="announcementcard.detail")
            p {{announcementcard.date}}
</template>

<script>
export default {
  data () {
    return {
      announcementcards: [
        {
          title: '12月份市集公告',
          img: require('../assets/image/announcement/announcement_201912_01.jpg'),
          detail: '<h4>擺攤公告</h4><hr><p>11/02(六)我們會在「四四南村邊緣人市集」喔~<br>地址：台北市信義區信義路五段<br>活動時間：12:00~19:00</p>',
          date: '2019/11/29'
        },
        {
          title: '11月份市集公告',
          img: require('../assets/image/announcement/announcement_202011_01.jpg'),
          detail: '<h4>擺攤公告</h4><hr><p>11/02(六)我們會在「四四南村邊緣人市集」喔~<br>地址：台北市信義區信義路五段<br>活動時間：12:00~19:00</p>',
          date: '2019/10/28'
        },
        {
          title: '市集限定優惠活動',
          img: require('../assets/image/announcement/announcement_201910_02.jpg'),
          detail: '',
          date: '2020/10/13'
        },
        {
          title: '10月份市集公告',
          img: require('../assets/image/announcement/announcement_201910_01.jpg'),
          detail: '',
          date: '2019/09/27'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.card{
  outline:none;
  box-shadow: 0px 0px 5px #333;
  border: 0;
}

.masonrycard{
  width: 31.333%;
  margin: 1%;
}

.card-body{
  background: #333;
  color: #fff;
}

.modal-content{
  .modal-title{
  font-size: 1.8rem;
  font-weight: bold;
  }

  h4{
    margin: 0.5rem 0;
  }
}

@media (min-width: 576px) and (max-width: 991.98px) {
  .masonrycard{
    width: 48%;
  }
}
@media (max-width: 575px){
  .masonrycard{
    width: 48%;
    // width: 98%;
    .card-body{
      display: none;
    }
  }
}

button{
  outline: none !important;
}
</style>
