<template lang="pug">
  #shop
    #container
      b-tabs(v-model="tabIndex" content-class="mt-3" justified fade)
        b-tab(title="ALL" :title-link-class="linkClass(0)")
          .sortName.flex.row.no-gutters
            .sort.col-6.col-md-4.col-lg-3(v-for="sort in sorts")
              router-link.m-1(:to="{ name: 'Sort', params: { id: sort.sortName }}")
                b-card(:img-src="sort.src" overlay text-variant="white" :title="sort.sortName")
        b-tab(title="EARRINGS" :title-link-class="linkClass(1)")
          .sortName.flex.row.no-gutters
            .sort.col-6.col-md-4.col-lg-3(v-for="sort in filterEARRINGS")
              router-link.m-1(:to="{ name: 'Sort', params: { id: sort.sortName }}")
                b-card(:img-src="sort.src" overlay text-variant="white" :title="sort.sortName")
        b-tab(title="KEYCHAIN" :title-link-class="linkClass(2)")
          .sortName.flex.row.no-gutters
            .sort.col-6.col-md-4.col-lg-3(v-for="sort in filterKEYCHAIN")
              router-link.m-1(:to="{ name: 'Sort', params: { id: sort.sortName }}")
                b-card(:img-src="sort.src" overlay text-variant="white" :title="sort.sortName")
        b-tab(title="BADGE" :title-link-class="linkClass(3)")
          .sortName.flex.row.no-gutters
            .sort.col-6.col-md-4.col-lg-3(v-for="sort in filterBADGE")
              router-link.m-1(:to="{ name: 'Sort', params: { id: sort.sortName }}")
                b-card(:img-src="sort.src" overlay text-variant="white" :title="sort.sortName")
</template>

<script>
export default {
  data () {
    return {
      sorts: [],
      tabIndex: 0
    }
  },
  methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-dark', 'text-warning']
      } else {
        return ['bg-transparent', 'text-dark']
      }
    }
  },
  mounted () {
    // this.axios.get(process.env.VUE_APP_APIURL + '/adminsort')
    //   .then(response => {
    //     this.sorts = response.data.result.map(d => {
    //       return {
    //         sortTitle: d.sortTitle,
    //         sortName: d.sortName,
    //         src: process.env.VUE_APP_APIURL + '/sort/' + d.sortsrc,
    //         _id: d._id
    //       }
    //     })
    //     console.log(this.sorts)
    //   })
    //   .catch(() => {
    //     alert('發生錯誤')
    //   })
  },
  computed: {
    filterEARRINGS () {
      return this.sorts.filter(function (sort) {
        return sort.sortTitle === 'EARRINGS'
      })
    },
    filterKEYCHAIN () {
      return this.sorts.filter(function (sort) {
        return sort.sortTitle === 'KEYCHAIN'
      })
    },
    filterBADGE () {
      return this.sorts.filter(function (sort) {
        return sort.sortTitle === 'BADGE'
      })
    }
  }
}
</script>

<style lang="scss">
#shop{
  .nav{
    background: orange;
    a{
      font-weight: bold;
    }
  }

  @media (max-width: 767px){
    .nav{
    a{
      font-size: 0.8rem;
      font-weight: bold;
    }
    .nav-link{
      padding: 0.3rem;
    }
  }
  }

  .card-body{
    transition: 1s;
    .card-title{
      position: absolute;
      top: calc(50% - 0.7rem);
      right: 0;
      left: 0;
      font-size: 1.4rem;
    }
    h4{
      opacity: 0;
      transition: 1s;
    }
  }

  a{
    color: white;
    display: block;
    font-size: 1.2rem;
  }

  .card{
    background: transparent;
    border: 0;
    img{
      border-radius: 1rem 0;
    }
  }

  .card-body{
    background: transparent;
      border-radius: 1rem 0;
  }

  .card-body:hover{
    background: rgba($color: rgb(7, 7, 7), $alpha: 0.7);
      border-radius: 1rem 0;
    .card-title{
      color: orange;
    text-shadow: 0 0 5px rgb(0, 0, 0);
    }
    h4{
      opacity: 1;
    }
  }
}
</style>
