<template>
  <div class="container">
      <div class="row">
      <div class="col-12 text-center">
      <h3 class="title"> Add category </h3>
  </div>
  </div>
  <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form class="category">
          <div>
              <label class="text-name"> {{$t('name')}} </label>
              <input type="text" class="input" v-model="categoryName">
          </div>
          <div>
              <label class="text-name"> {{$t('description')}} </label>
              <textarea type="text" class="input" v-model="description"/>
          </div>
          <div>
              <label class="text-name"> {{$t('image')}} </label>
              <input type="text" class="input" @click="i18ncall" v-model="imageUrl">
          </div>
          <button type="button" class="button" @click="addCategory"> {{$t('submit')}} </button>
      </form>
      </div>
      <div class="col-3"></div>

  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import axios from 'axios';
import sweetalert from 'sweetalert';

export default defineComponent({
  name: 'AddCategory',
  data() {
    return {
      categoryName: '',
      description: '',
      imageUrl: '',

    };
  },
  methods: {
    addCategory() {
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageUrl,
      };

      const baseURL = 'https://limitless-lake-55070.herokuapp.com/';

      axios({
        method: 'post',
        url: `${baseURL}/category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        sweetalert({
          text: 'Category added successfully',
          icon: 'success',
        });
      })
        .catch((err) => {
          console.log(err);
        });
    },
    i18ncall() {
      console.log(this.$t('image'));
    },

  },

});
</script>

<style scoped>
.title {
  @apply pb-2;
}
.category {
  @apply py-32;
}
.text-name {
  @apply pt-2 flex justify-center;
}
.input {
  @apply w-1/2 border;
}
.button {
  @apply mt-5 pt-2 shadow-lg bg-blue-400;
}
</style>
