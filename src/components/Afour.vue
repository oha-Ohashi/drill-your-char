<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <body>
  <div class="page">
    1ページあ
    <br/>
    {{msg}}
  </div>
  <div class="page">
    2ページ目
  </div>
</body>


</template>

<style scoped>

</style>
