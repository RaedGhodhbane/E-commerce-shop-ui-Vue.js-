<template>
  <div class="card w-100 h-100">
      <div class="embed-responsive embed-responsive-16by9">
      <img :src="category.imageUrl" class="card-img-top" alt="...">
      </div>
  <div class="card-body">
    <h5 class="card-title">{{ category.categoryName }}</h5>
    <p class="card-text">{{ category.description }}</p>
    <div class="buttons">
    <a href="#" class="btn btn-primary"> {{$t('Go somewhere')}} </a>
    <a href="#" class="btn btn-danger delete"> {{$t('Delete')}} </a>
    </div>

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
.delete {
  @apply ml-5;
}
.buttons {
  @apply pt-2;
}
</style>
