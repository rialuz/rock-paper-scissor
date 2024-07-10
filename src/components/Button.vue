<script setup>
const props = defineProps({
    text: String,
    onClick: Function
})
</script>

<template>
    <button type="button" onclick="props.onClick">{{ props.text }}</button>
</template>

<style>

button {
    margin: 10px;
    height: 40px;
    width: 125px;
    background-color: #DEE3FF;
    border: 3px solid #8AC0FF;
    border-radius: 10px;
    font-family: "Itim", cursive;
    cursor: pointer;
}

</style>

