<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import i18next from 'i18next';

export default defineComponent({
  name: 'Home',
  components: {
  },
  data() {
    return {
      x: i18next.t('text1', { aaa: 'i18next' }),
    };
  },
});

</script>
