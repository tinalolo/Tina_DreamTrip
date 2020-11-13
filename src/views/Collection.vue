<template lang="pug">
  #collection
    #container
      div.box
        div.pic(v-for="(src, index) in imgs" @click="showImg(index)")
          img.picimg(:src="src")
        vue-easy-lightbox(escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index" @hide="handleHide")
</template>

<script>
export default {
  data () {
    return {
      imgs: [
        // require('../assets/image/collection/customer_sharing/customer_sharing_202001_02.jpg'),
        // require('../assets/image/collection/customer_sharing/customer_sharing_202001_01.jpg'),
        require('../assets/image/collection/customer_sharing/customer_sharing_201912_03.jpg'),
        require('../assets/image/collection/customer_sharing/customer_sharing_201912_02.jpg'),
        require('../assets/image/collection/customer_sharing/customer_sharing_201912_01.jpg'),
        require('../assets/image/collection/customer_sharing/customer_sharing_201911_04.jpg'),
        require('../assets/image/collection/customer_sharing/customer_sharing_201911_03.jpg'),
        require('../assets/image/collection/customer_sharing/customer_sharing_201911_02.jpg'),
        require('../assets/image/collection/customer_sharing/customer_sharing_201911_01.jpg'),
        require('../assets/image/collection/customer_sharing/customer_sharing_201910_02.jpg'),
        require('../assets/image/collection/customer_sharing/customer_sharing_201910_01.jpg')
        // require('../assets/image/collection/customer_sharing/customer_sharing_201910_01.jpg')
      ],
      visible: false,
      index: 0
    }
  },
  methods: {
    showImg (index) {
      this.index = index
      this.visible = !this.visible
    },
    handleHide () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss">
.box{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 0.5rem;
  max-width: 75rem;
  margin: 3rem auto;
}

.pic{
  cursor: pointer;
}

.picimg{
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-radius: 0.2rem;
  // border: 0.3rem dotted #333;
}
</style>
