<template>
  <button
    :type="htmlType"
    :class="classes"
    :disabled="disabled"
    @click="handleClick">
    <Icon v-if="loading" class="vvu-load-loop" type="load-c"></Icon>
    <Icon v-if="icon && !loading" :type="icon"></Icon>
    <span v-if="showSlot" ref="slot"><slot></slot></span>
  </button>
</template>

<script>
import Icon from '../icon';
export default {
  
}
</script>

