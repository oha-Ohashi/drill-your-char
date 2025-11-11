<script setup lang="ts">
import { ref } from 'vue'
import Quiz01 from './Quiz01.vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <div class="page">
      <div class="grid-container">
        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>

        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>

        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>

        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>

        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>
        <div class="quiz"><Quiz01 /></div>

      </div>
    </div>



</template>

<style scoped>
/*---------------------プリント--------------------------*/
@page {
  size: A4 portlait;
  margin: 0;
}


.page {
  border:  solid 1px black;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  width: 210mm;
  height: 297mm;
  margin: 0;
  padding: 20mm;
  break-inside: avoid-page;
}
:nth-child(1 + n of .page) {
  break-before: page;
}
/*---------------------プリント--------------------------*/


/*---------------------グリッド--------------------------*/
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2列で均等に分割 */
  grid-gap: 8mm 15mm;                /* アイテム間にスペース */
}
/*---------------------グリッド--------------------------*/

/*---------------------問題--------------------------*/
.quiz{
    border: solid 0.1mm rgb(226, 226, 226);
    height: 15mm;

    display: flex;
    align-items: flex-end;
}
/*---------------------問題--------------------------*/
</style>
