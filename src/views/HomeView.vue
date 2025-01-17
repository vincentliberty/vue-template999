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
  <div>
    test
    <!-- <TheWelcome /> -->
    <div class="test1">
      {{ count }}
    </div>

    
  </div>
</template>


