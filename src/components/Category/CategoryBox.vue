<template>
  <div class="card w-100 h-100">
      <div class="embed-responsive embed-responsive-16by9">
      <img :src="category.imageUrl" class="card-img-top" alt="...">
      </div>
  <div class="card-body">
    <h5 class="card-title">{{ category.categoryName }}</h5>
    <p class="card-text">{{ category.description }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategoryBox',
  props: ['category'],
  methods: {},
});
</script>

<style scoped>
.card-img-top {
    object-fit: cover;
}
</style>
