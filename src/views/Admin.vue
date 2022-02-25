<template>
<router-link :to="{name:'Category'}">
     <button class="btn btn-primary btn-lg button"> Admin Categories </button>
</router-link>
<br />
<router-link :to="{name:'Product'}">
     <button class="btn btn-primary btn-lg"> Admin Products </button>
</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style>
 .button {
     @apply my-24;
 }
</style>
