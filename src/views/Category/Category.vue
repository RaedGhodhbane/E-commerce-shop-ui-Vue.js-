<template>
  <div class="container">
      <div class="row">
      <div class="col-12 text-center">
      <Header/>
      <h3 class="pt-3"> {{$t('OurCategories')}} </h3>
      <router-link :to="{name :'AddCategory'}">
          <button class="button">{{$t('AddCategory')}}</button>
      </router-link>
  </div>
  </div>
  <div class="row">
      <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6
      col-12 pt-3 d-flex">
          <CategoryBox :category="category"></CategoryBox>
      </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

import Header from '../../components/Header.vue';
import CategoryBox from '../../components/Category/CategoryBox.vue';

export default defineComponent({
  name: 'Category',
  components: { CategoryBox, Header },
  data() {
    return {
      baseURL: 'https://limitless-lake-55070.herokuapp.com',
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      await axios
        .get(`${this.baseURL}/category/`)
        // eslint-disable-next-line no-return-assign
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getCategories();
  },
});
</script>

<style scoped>
.button {
  @apply w-full text-right;
}
</style>
