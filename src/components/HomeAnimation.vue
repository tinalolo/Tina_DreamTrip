// 應該不用寫這個
<template lang="pug">
  #homeanimation(v-if="isShow")
    .containerHomeAnimation(onclick)
      .top
      .bottom
      .center
        h2 Welcome
        h3 To
        h2 ZUzu Creation
        b-img.logoimg(src="../../public/img/logo.png" width="100px")
        br
        b-icon.my-1.toHome(icon="arrow-right-circle-fill" variant="warning" font-scale="3" @click="toggle" )
</template>

<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    toggle () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss">
#homeanimation{
  // *,*:before,*:after{box-sizing:border-box}

  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 101;

  .containerHomeAnimation{
    position:absolute;
    width:100%;
    height:100%;
    overflow:hidden;

    &:hover,&:active{
      .top, .bottom{
        &:before, &:after{
          margin-left: 200px;
          transform-origin: -200px 50%;
          transition-delay:0s;
        }
      }

      .center{
        opacity:1;
        transition-delay:0.2s;
      }
    }
  }

  .top, .bottom{
    &:before, &:after{
      content:'';
      display:block;
      position:absolute;
      width:200vmax;
      height:200vmax;
      top:50%;left:50%;
      margin-top:-100vmax;
      transform-origin: 0 50%;
      transition:all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
      z-index:10;
      opacity:0.65;
      transition-delay:0.2s;
    }
  }

  .top{
    &:before{transform:rotate(45deg);background:#ff6600;}
    &:after{transform:rotate(135deg);background:#fffb00;}
  }
  .bottom{
    &:before{transform:rotate(-45deg);background:#8d8d8d;}
    &:after{transform:rotate(-135deg);background:#000000;}
  }

  .center{
    position:absolute;
    width:400px;
    height:400px;
    top:50%;left:50%;
    margin-left:-200px;
    margin-top:-200px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:30px;
    opacity:0;
    transition:all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    transition-delay:0s;
    color:#333;

    input{
      width:100%;
      padding:15px;
      margin:5px;
      border-radius:1px;
      border:1px solid #ccc;
      font-family:inherit;
    }

    .toHome{
      cursor: pointer;
    }
  }
}
</style>
