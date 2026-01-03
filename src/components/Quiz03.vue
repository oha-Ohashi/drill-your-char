
<template>
<div class="multi-line">
  <div class="bottomAligned">
    <!-- 前項 -->
    <div class="num-pane">
      <img v-for="item in nums_A" :src="item" alt="random" @click="change" class="digit" />
    </div>
  </div>
  <div class="bottomAligned">
    <!-- 演算子 -->
    <img :src="url_operator" alt="random" @click="change" class="digit" />
    <!--
    <div class=spacer></div>
    -->

    <!-- 前項 -->
    <div class="num-pane">
      <img v-for="item in nums_B" :src="item" alt="random" @click="change" class="digit" />
    </div>

  </div>
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
      let nums = [
        // 1～1000
        Math.floor( (Math.random()) * 999 ) + 1,
        // 1～50
        Math.floor( (Math.random()) * 49 ) + 1
      ];

      this.nums_A = GetUrlsFromNumber(nums[0]);
      this.nums_B = GetUrlsFromNumber(nums[1]);

      // this.current = this.list[Math.floor(Math.random() * this.list.length)];
      // 足し算と引き算が 50:50
      this.url_operator = "tegaki01/0022.png";
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
  .multi-line{
    border: solid 0.5mm red;
    display: block;
    margin-left: auto;
    margin-right: 0;
  }
  .bottomAligned{
    background-color: #eeee00c0;
    display: flex;
    /*コレ*/justify-content: flex-end;
    border: solid 0.3mm blue;
    height: 12mm;
  }
  .num-pane{
    background-color: #00ff4089;
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