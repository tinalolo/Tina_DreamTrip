<template lang="pug">
  #adminproduct
    #uploadProduct.row.no-gutters.p-2
      h2.col-12 Uplaod Product
      b-form.col-12.row.no-gutters.justify-content-center(@submit="submitProduct")
        #fileProduct.col-12.col-md-4.text-left.p-0.m-1
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
          v-model="sortName"
          placeholder="sortName"
        )
        b-form-input.col-12.col-md-3.m-1.p-2(
          v-model="productName"
          placeholder="productName"
        )
        b-form-input.col-12.col-md-3.m-1.p-2(
          v-model="productPrice"
          placeholder="productPrice"
        )
        b-form-input.col-12.col-md-3.m-1.p-2(
          v-model="productDescription"
          placeholder="productDescription"
        )
        b-form-input.col-12.col-md-3.m-1.p-2(
          v-model="productStock"
          placeholder="productStock"
        )
        #fileButton.col-12.col-md-1.m-1
          b-button(type="submit" variant="primary") 上傳
    #productList.row.no-gutters.px-2
      h2.col-12 Product List
      b-card-group(deck)
        .productCard.col-12.col-sm-6.col-lg-4.row.no-gutters(v-for="(image, idx) in images" :key="idx")
          b-img.col-12(:src="image.src")
          #productCardBody.col-12.row.no-gutters
            .productCardDetail.col-12
              span sortName:
              b-form-input(v-if="image.edit" v-model="image.model1")
              p(v-else) {{image.sortName}}
            .productCardDetail.col-12
              span productName:
              b-form-input(v-if="image.edit" v-model="image.model2")
              p(v-else) {{image.productName}}
            .productCardDetail.col-12
              span Description:
              b-form-input(v-if="image.edit" v-model="image.model4")
              p(v-else) {{image.productDescription}}
            .productCardDetail.col-6
              span Price:
              b-form-input(v-if="image.edit" v-model="image.model3")
              p(v-else) ${{image.productPrice}}
            .productCardDetail.col-6
              span Stock:
              b-form-input(v-if="image.edit" v-model="image.model5")
              p(v-else) {{image.productStock}}
            .productCardDetail.col-12.text-center
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
      sortName: '',
      productName: '',
      productPrice: '',
      productDescription: '',
      productStock: '',
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
    submitProduct (event) {
      event.preventDefault()
      // if (this.file === null || this.file.size >= 1024 * 1024 || !this.file.type.includes('image')) {
      //   alert('檔案格式不符')
      // } else {
      //   // FormData 可以同時傳送檔案和表單資料
      //   const fd = new FormData()
      //   fd.append('image', this.file)
      //   fd.append('sortName', this.sortName)
      //   fd.append('productName', this.productName)
      //   fd.append('productPrice', this.productPrice)
      //   fd.append('productDescription', this.productDescription)
      //   fd.append('productStock', this.productStock)

      //   this.axios.post(process.env.VUE_APP_APIURL + '/product', fd, { // 把fd船進去
      //     // 因為 axios 預設是送 json，所以要自己設定成 formdata
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     }
      //   }).then(response => {
      //     console.log(response.data)
      //     this.images.push(
      //       {
      //         sortName: this.sortName,
      //         productName: this.productName,
      //         productPrice: this.productPrice,
      //         productDescription: this.productDescription,
      //         productStock: this.productStock,
      //         src: process.env.VUE_APP_APIURL + '/sort/' + response.data.result.productsrc,
      //         _id: response.data.result._id,
      //         edit: false,
      //         model1: '',
      //         model2: '',
      //         model3: '',
      //         model4: '',
      //         model5: ''
      //       }
      //     )
      //     this.file = null
      //     this.sortName = ''
      //     this.productName = ''
      //     this.productPrice = ''
      //     this.productDescription = ''
      //     this.productStock = ''
      //   }).catch(error => {
      //     alert(error.response.data.message)
      //   })
      // }
    },
    edit (image) {
      image.edit = true
      image.model1 = image.sortName
      image.model2 = image.productName
      image.model3 = image.productPrice
      image.model4 = image.productDescription
      image.model5 = image.productStock
    },
    update (image) {
      // this.axios.patch(process.env.VUE_APP_APIURL + '/product/' + image._id, { // patch是部分更新 Put是全部更新
      //   sortName: image.model1,
      //   productName: image.model2,
      //   productPrice: image.model3,
      //   productDescription: image.model4,
      //   productStock: image.model5
      // })
      //   .then(response => {
      //     image.edit = false
      //     image.sortName = image.model1
      //     image.productName = image.model2
      //     image.productPrice = image.model3
      //     image.productDescription = image.model4
      //     image.productStock = image.model5
      //   })
      //   .catch(() => {
      //     alert('發生錯誤')
      //   })
    },
    cancel (image) {
      image.edit = false
      image.model1 = image.sortName
      image.model2 = image.productName
      image.model3 = image.productPrice
      image.model4 = image.productDescription
      image.model5 = image.productStock
    },
    del (image, idx) {
      // this.axios.delete(process.env.VUE_APP_APIURL + '/product/' + image._id)
      //   .then(response => {
      //     this.images.splice(idx, 1)
      //   })
      //   .catch(() => {
      //     alert('發生錯誤')
      //   })
    }
  },
  mounted () {
    // this.axios.get(process.env.VUE_APP_APIURL + '/adminproduct')
    //   .then(response => {
    //     this.images = response.data.result.map(d => {
    //       return {
    //         sortName: d.sortName,
    //         productName: d.productName,
    //         productPrice: d.productPrice,
    //         productDescription: d.productDescription,
    //         productStock: d.productStock,
    //         src: process.env.VUE_APP_APIURL + '/product/' + d.productsrc,
    //         _id: d._id,
    //         edit: false,
    //         model: d.productsrc
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
#adminproduct{
  #uploadProduct{
    background: rgba($color: #fff, $alpha: 0.8);
    margin-bottom: 1rem;
  }

  .productCard{
    // border: 2px solid #bbb;
    text-align: left;
    .productCardDetail{
      padding: 0.2rem 0.5rem;
    }

  span{
    color: rgb(14, 14, 75);
    font-size: 1.2rem;
    font-weight: bolder;
    margin-right: 8px;
    }
  #productCardBody{
    background: rgba($color: #fff, $alpha: 0.5);
    min-height: 340px;
  }
  }
  p{
    margin-bottom: 0;
  }
}
</style>
