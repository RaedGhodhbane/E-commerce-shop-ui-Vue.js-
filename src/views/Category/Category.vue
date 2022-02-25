<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <Header />
        <h3 class="pt-3">
          {{ $t('ourCategories') }}
        </h3>
        <router-link :to="{name :'AddCategory'}">
          <button class="button">
            {{ $t('addCategory') }}
          </button>
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

import Header from '../../components/Header.vue';
import CategoryBox from '../../components/Category/CategoryBox.vue';

export default defineComponent({
  name: 'Category',
  props: ['categories'],
  components: { CategoryBox, Header },
  data() {
    return {
      baseURL: 'https://limitless-lake-55070.herokuapp.com',
    };
  },
  methods: {
  },
});
</script>

<style scoped>
.button {
  @apply w-full text-right;
}
</style>
