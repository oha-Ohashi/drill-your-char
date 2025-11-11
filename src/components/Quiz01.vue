<!--
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>

</template>

<style scoped>

</style>
-->

<template>
  <div class="bottomAligned">
    <!-- 
    -->
    <img :src="url_nums[0]" alt="random" @click="change" class="digit" />
    <div class=spacer></div>
    <img :src="url_operator" alt="random" @click="change" class="digit" />
    <div class=spacer></div>
    <img :src="url_nums[1]" alt="random" @click="change" class="digit" />
    <div class=spacer></div>
    <img :src="url_equal" alt="random" @click="change" class="digit" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      url_nums: [null, null],
      url_operator: null,
      url_equal: "tegaki01/0024.png",
      max_num: 25,
    };
  },
  created() {
    this.change();
  },  
  methods: {  
    change() {
      for(let i = 0; i < 2; i++){
        //0011 ～ 0019が出る
        let num = Math.floor( (Math.random()) * 9);  
        num += 11;
        this.url_nums[i] = "tegaki01/"+ String(num).padStart(4, '0') +".png";  
      }
      //this.current = this.list[Math.floor(Math.random() * this.list.length)];
      this.url_operator =  Math.random() > 0.5 ? "tegaki01/0020.png" : "tegaki01/0021.png";
    },
  },
};

function easeInCubic(x: number): number {
  return x * x * x;
}
function easeInQuad(x: number): number {
  return x * x;
}
</script>

<style scoped>
  .bottomAligned{
    background-color: transparent;
    display: flex;
  }
  .digit{
    height: 10mm;
  }
  .spacer{
    display: inline-block;
    width:5mm;
  }
</style>