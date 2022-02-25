<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img :src="product.imageURL" class="card-img-top" alt="...">
      </div>
        <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>
    <p class="card-text">{{ product.description.substring(0,65) }}...</p>
    <div class="buttons">
    <a href="#" class="btn btn-primary"> {{$t('goSomewhere')}} </a>
    <a href="#" class="btn btn-danger delete"> {{$t('delete')}} </a>
    </div>
</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductBox',
  props: ['product'],
});
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>
