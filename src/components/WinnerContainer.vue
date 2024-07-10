<script setup>
import Button from "./Button.vue"
import { useGameStore } from "../stores/counter.js"

const store = useGameStore();

</script>

<template>
<div>
    <div>
        Winner:
        
    </div>
    <div>
        <Button text="Play Again" />
        <Button text="Start Over" />
    </div>
</div>
</template>