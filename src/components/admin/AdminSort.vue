<template lang="pug">
  #adminsort
    #uploadSort.row.no-gutters.p-2
      h2.col-12 Uplaod Sort
      b-form.col-12.row.no-gutters.justify-content-center(@submit="submitSort")
        #fileSort.col-12.col-md-4.text-left.p-0.m-1
          b-form-file(
            v-model="file"
            :state="state"
            placeholder="選擇檔案或拖曳至此"
            drop-palceholder="將檔案拖曳至此"
            browse-text="瀏覽"
            required
            accept="image/*"
            @input="validateFile"
          )
          p.text-danger 僅支援 1MB 以下的圖片
        b-form-input.col-12.col-md-3.m-1.p-2(
          v-model="sortTitle"
          placeholder="sortTitle"
        )
        b-form-input.col-12.col-md-3.m-1.p-2(
          v-model="sortName"
          placeholder="sortName"
        )
        #fileButton.col-12.col-md-1.m-1
          b-button(type="submit" variant="primary") 上傳
    #sortList
      h2 Sort List
      b-table-simple
        b-thead
          b-tr
            b-th img
            b-th sortTitle
            b-th sortName
            b-th action
          b-tr(id="my-table" v-for="(image, idx) in images" :key="idx")
            b-td
              b-img(:src="image.src")
            b-td
              b-form-input(v-if="image.edit" v-model="image.model1")
              span(v-else) {{image.sortTitle}}
            b-td
              b-form-input(v-if="image.edit" v-model="image.model2")
              span(v-else) {{image.sortName}}
            b-td
              b-btn.mx-1(v-if="image.edit" variant="danger" @click="cancel(image)")
                b-icon(icon="reply")
              b-btn.mx-1(v-else variant="success" @click="edit(image)")
                b-icon(icon="pencil-square")
              b-btn.mx-1(v-if="image.edit" variant="success" @click="update(image)")
                b-icon(icon="file-earmark-check")
              b-btn.mx-1(v-else variant="danger"  @click="del(image,idx)")
                b-icon(icon="trash")
</template>

<script>
export default {
  data () {
    return {
      file: null,
      sortTitle: '',
      sortName: '',
      state: null,
      images: []
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    validateFile () {
      if (this.file != null) {
        if (this.file.size >= 1024 * 1024 || !this.file.type.includes('image')) {
          this.state = false
          this.file = null
        } else {
          this.state = true
        }
      }
    },
    submitSort (event) {
      event.preventDefault()
      // if (this.file === null || this.file.size >= 1024 * 1024 || !this.file.type.includes('image')) {
      //   alert('檔案格式不符')
      // } else {
      //   // FormData 可以同時傳送檔案和表單資料
      //   const fd = new FormData()
      //   fd.append('image', this.file)
      //   fd.append('sortTitle', this.sortTitle)
      //   fd.append('sortName', this.sortName)

      //   this.axios.post(process.env.VUE_APP_APIURL + '/sort', fd, {
      //     // 因為 axios 預設是送 json，所以要自己設定成 formdata
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     }
      //   }).then(response => {
      //     console.log(response.data)
      //     this.images.push(
      //       {
      //         sortTitle: this.sortTitle,
      //         sortName: this.sortName,
      //         src: process.env.VUE_APP_APIURL + '/sort/' + response.data.result.sortsrc,
      //         _id: response.data.result._id,
      //         edit: false,
      //         model1: '',
      //         model2: ''
      //       }
      //     )
      //     this.file = null
      //     this.sortTitle = ''
      //     this.sortName = ''
      //   }).catch(error => {
      //     alert(error.response.data.message)
      //   })
      // }
    },
    edit (image) {
      image.edit = true
      image.model1 = image.sortTitle
      image.model2 = image.sortName
    },
    update (image) {
      // this.axios.patch(process.env.VUE_APP_APIURL + '/sort/' + image._id, { sortTitle: image.model1, sortName: image.model2 })
      //   .then(response => {
      //     image.edit = false
      //     image.sortTitle = image.model1
      //     image.sortName = image.model2
      //   })
      //   .catch(() => {
      //     alert('發生錯誤')
      //   })
    },
    cancel (image) {
      image.edit = false
      image.model1 = image.sortTitle
      image.model2 = image.sortName
    },
    del (image, idx) {
      // this.axios.delete(process.env.VUE_APP_APIURL + '/sort/' + image._id)
      //   .then(response => {
      //     this.images.splice(idx, 1)
      //   })
      //   .catch(() => {
      //     alert('發生錯誤')
      //   })
    }
  },
  mounted () {
    // this.axios.get(process.env.VUE_APP_APIURL + '/adminsort')
    //   .then(response => {
    //     this.images = response.data.result.map(d => {
    //       return {
    //         sortTitle: d.sortTitle,
    //         sortName: d.sortName,
    //         src: process.env.VUE_APP_APIURL + '/sort/' + d.sortsrc,
    //         _id: d._id,
    //         edit: false,
    //         model: d.sortsrc
    //       }
    //     })
    //   })
    //   .catch(() => {
    //     alert('發生錯誤')
    //   })
  }
}
</script>

<style lang="scss">
#adminsort{
  img{
    height: 80px;
  }
  #uploadSort{
    background: rgba($color: #fff, $alpha: 0.8);
    margin-bottom: 1rem;
  }
  p{
    margin-bottom: 0;
  }
}
</style>
