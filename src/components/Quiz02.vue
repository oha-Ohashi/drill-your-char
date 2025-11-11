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
    <!-- 前項 -->
    <div class="num-pane">
      <img v-for="item in nums_A" :src="item" alt="random" @click="change" class="digit" />
    </div>

    <!-- 演算子 -->
    <div class=spacer></div>
    <img :src="url_operator" alt="random" @click="change" class="digit" />
    <div class=spacer></div>

    <!-- 後項 -->
    <div class="num-pane">
      <img v-for="item in nums_B" :src="item" alt="random" @click="change" class="digit" />
    </div>

    <!-- イコール -->
    <div class=spacer></div>
    <img :src="url_equal" alt="random" @click="change" class="digit" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      nums_A: [],
      url_operator: null,
      nums_B: [],
      url_equal: "tegaki01/0024.png",
      max_num: 25,
    };
  },
  created() {
    this.change();
  },  
  methods: {  
    change() {
      let nums = [0, 0].map((elm) => {
        return Math.floor( (Math.random()) * 99) + 1;  
      });

      const isPlus = Math.random() > 0.5;

      if (!isPlus){
        nums.sort((a, b) => b - a);
      }

      this.nums_A = GetUrlsFromNumber(nums[0]);
      this.nums_B = GetUrlsFromNumber(nums[1]);

      //this.current = this.list[Math.floor(Math.random() * this.list.length)];
      // 足し算と引き算が 50:50
      this.url_operator = isPlus ? 
        "tegaki01/0020.png" : "tegaki01/0021.png";
    },
  },
};

function GetUrlsFromNumber(x: number): string[] {
  const chars = x.toString().split('');
  console.log(chars);
  const paths = chars.map((elm, index) => {
    const nth = index % 2 === 1 ? Number(elm) : Number(elm) + 10;
    const path = "tegaki01/"+ String(nth).padStart(4, '0') +".png";  
    return path;
  });
  return paths;
}
</script>

<style scoped>
  .bottomAligned{
    background-color: transparent;
    display: flex;
  }
  .num-pane{
    /*background-color: blue;*/
    width: 11mm;
    text-align: end;
  }
  .digit{
    height: 8mm;
  }
  .spacer{
    display: inline-block;
    width:4mm;
  }
</style>