<script setup>
const props = defineProps({
  img: String,
  value: String,
  clickFunc: Function,
  disabled: Boolean,
});
</script>

<template>
  <div class="move-btn">
    <input
      type="image"
      :src="props.img"
      @click="props.clickFunc"
      :value="props.value"
      :disabled="props.disabled"
    />
  </div>
</template>

<style scoped>
.move-btn {
  background-color: #dee3ff;
  border: 4px solid #8ac0ff;
  height: 100px;
  width: 100px;
  border-radius: 50%;

  input {
    width: 80px;
    height: 80px;
    position: relative;
    right: 5px;
    bottom: 5px;
    padding: 18px;
  }
}
.move-btn:focus-within {
  border: 5px solid #4898fb;
  box-shadow: #78aef1 0px 5px 15px;
}
</style>
