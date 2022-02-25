<template>
    <Navbar/>
  <div id="nav">
    <router-link to="/">
      {{ $t('home') }}
    </router-link> |
    <router-link to="/about">
      {{ $t('about') }}
    </router-link> |
    <router-link to="/admin/category">
      {{ $t('category') }}
    </router-link>
  </div>
  <router-view :baseURL="baseURL" :categories="categories" :products="products"> </router-view>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  components: { Navbar },
  data() {
    return {
      baseURL: 'https://limitless-lake-55070.herokuapp.com/',
      products: [],
      categories: [],
    };
  },
  methods: {
    async fetchData() {
      // Api call to get all the categories

      await axios.get(`${this.baseURL}category/`)
        .then((res) => {
          this.categories = res.data;
        }).catch((err) => console.log('err', err));

      // Api call to get all the products

      await axios.get(`${this.baseURL}product/`)
        .then((res) => {
          this.products = res.data;
        }).catch((err) => console.log('err', err));
    },
  },
  mounted() {
    this.fetchData();
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
