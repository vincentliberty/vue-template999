<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import axios from 'axios';
import { ref } from 'vue'

const count = ref()

axios.get('/api').then(res => {
  console.log('res', res.data.visitCount);
  count.value = res.data.visitCount;
});


</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div>
      {{ count }}
    </div>

    
  </main>
</template>


