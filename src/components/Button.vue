<script setup>
const props = defineProps({
  text: String,
  onClick: Function,
});
</script>

<template>
  <button type="button" :onclick="props.onClick">{{ props.text }}</button>
</template>

<style scoped>
button {
  margin: 10px;
  height: 40px;
  width: 125px;
  background-color: #dee3ff;
  border: 3px solid #8ac0ff;
  border-radius: 10px;
  font-family: "Itim", cursive;
  cursor: pointer;
}
</style>
