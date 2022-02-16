<template>
  <nav class="container mb-4 mt-4">
      <div class="row">
          <div class="col-9"></div>
          <div class="col-3">
              <select class="custom-select" v-model="lang" @change="handleChange($event)">
                  <option value="en"> {{$t('language1')}} </option>
                  <option value="fr"> {{$t('language2')}} </option>
                  <option value="es"> {{$t('language3')}} </option>
                  <option value="ita"> {{$t('language4')}} </option>
                  <option value="deut"> {{$t('language5')}} </option>
              </select>
          </div>
      </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    const lang = localStorage.getItem('lang') || 'en';
    return {
      lang,
    };
  },
  methods: {
    handleChange(event: any) {
      localStorage.setItem('lang', event.target.value);
      window.location.reload();
    },
  },
});
</script>

<style>

</style>
