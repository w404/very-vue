<style>
  .demo-affix {
    width: 300px;
    height: 30px;
    background-color: #1890ff;
    color: #fff;
    border-radius: 5px;
  }
</style>

<template>
  <div ref="scrollBar">
    <Affix>
      <div class="demo-affix">固定在最顶部</div>
    </Affix>
    <Affix :offset-top="200">
      <div class="demo-affix">固定在距离顶部 50px 的位置</div>
    </Affix>
    <Affix :target="() => this.$refs.scrollBar">
      <div class="demo-affix">固定在距离顶部 50px 的位置</div>
    </Affix>
    <div v-for="(item,index) in arr" :key="index">{{item}}</div>
    <Affix :offset-bottom="50">
      <div class="demo-affix">固定在最顶部</div>
    </Affix>
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
