<script setup>

const props = defineProps({
    img: String,
    value: String,
    click: Function,
    vModel: String
})

</script>

<template>
    <div >
        <button @click="props.click" class="move-btn" :value="props.value">
            <img :src="props.img" />
        </button>
    </div>
</template>

<style scoped>

.move-btn {
    background-color: #DEE3FF;
    border: 4px solid #8ac0ff;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    cursor: pointer;

    img {
        width: 100px;
        height: 100px;
        /* margin: 0 auto; */
    }
}

</style>