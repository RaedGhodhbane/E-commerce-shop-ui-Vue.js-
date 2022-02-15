<template>
  <nav class="container mb-4 mt-4">
      <div class="row">
          <div class="col-9"></div>
          <div class="col-3">
              <select class="custom-select" v-model="lang" @change="handleChange($event)">
                  <option value="en"> English </option>
                  <option value="fr"> French </option>
                  <option value="es"> Spanish </option>
                  <option value="ita"> Italian </option>
                  <option value="deut"> Deutsch </option>
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
