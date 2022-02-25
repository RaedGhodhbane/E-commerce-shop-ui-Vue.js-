<template>
  <div class="container">
      <div class="row">
          <div class="col-12 text-center">
              <h4> Add new product </h4>
          </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <form>
            <div class="form-group">
              <label> Category </label>
              <select class="form-control" v-model="categoryId" required>
                <option v-for="category in categories" :key="category.id"
                :value="category.id">{{ category.categoryName }}</option>
              </select>
            </div>
            <div class="form-group">
              <label> Name </label>
              <input type="text" v-model="name" class="form-control">
            </div>
            <div class="form-group">
              <label> Description </label>
              <input type="text" v-model="description" class="form-control">
            </div>
            <div class="form-group">
              <label> Image URL </label>
              <input type="text" v-model="imageURL" class="form-control">
            </div>
            <div class="form-group">
              <label> Price </label>
              <input type="text" v-model="price" class="form-control">
            </div>
            <button type="button" class="btn btn-primary" @click="addProduct"> Add Product </button>
          </form>
        </div>
        <div class="col-3"></div>
      </div>
<!-- Form -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import swal from 'sweetalert';

export default defineComponent({
  props: ['', 'categories'],
  data() {
    return {
      id: null,
      categoryId: null,
      name: null,
      description: null,
      imageURL: null,
      price: null,
    };
  },

  methods: {
    addProduct() {
      const newProduct = {
        categoryId: this.categoryId,
        description: this.description,
        name: this.name,
        imageURL: this.imageURL,
        price: this.price,

      };

      const baseURL = 'https://limitless-lake-55070.herokuapp.com';

      axios.post(`${baseURL}/product/add`, newProduct)
        .then(() => {
          this.$router.push({ name: 'Product' });
          swal({
            text: 'Product added successfully',
            icon: 'success',
          });
        }).catch((err) => console.log('err', err));
    },
  },
});
</script>

<style>

</style>
