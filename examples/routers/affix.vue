<style>
  body {
    /*height: 2000px;*/
  }
  .demo-affix{
    width: 100px;
    height: 30px;
    background: #f60;
    color: #fff
  }
</style>
<template>
  <div ref="scrollable" class="scrollable-container">
    <Affix :target="() => this.$refs.scrollable">
      <div class="demo-affix">固定在最顶部</div>
    </Affix>
    <div v-for="(item,index) in arr">{{item}}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        arr: []
      }
    },
    created(){
      for(let i = 0 ; i < 100 ; i++){
        this.arr.push(i);
      }
    }
  }
</script>
