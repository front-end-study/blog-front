<template>
  <div>
    <h3>{{ pageName }}</h3>
    <!-- <input type="text" v-model:value="count"> -->
  </div>
</template>

<script>
  import { AppStore } from '../../store/modules/app';
  import { defineComponent, onMounted } from 'vue';

  export default defineComponent({
    setup() {
      const pageName = 'Home Page';

      onMounted(() => {
        console.log('mounted');
      });

      return {
        pageName
      };
    },
    mounted() {
      console.log(AppStore.getSysNo);
    }
  });
</script>
