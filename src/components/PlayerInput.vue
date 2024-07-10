<script setup>
import Button from './Button.vue';
import { useGameStore } from '../stores/counter';

const store = useGameStore();

/**
 * Grab Players name
 */

console.log("Player name", store.playerName)
</script>

<template>
    <div class="input-container">
        <div class="player-form">
            <label>Welcome </label>
            <span>
            <input
             placeholder="Enter your name"
             type="text" 
             v-model="store.playerName" 
             id="name" />
             <p>Good Luck!</p>
            </span>

        </div>

        <!-- <div v-else>
            <h2>Welcome {{ store.playerName }}, good luck!</h2>
        </div> -->
    </div>
</template>

<style scoped>

.input-container {
    margin-top: 15px;

    label, p {
        font-size: 24px;
    }
}



 input[type="text"] {
    background: none;
    border: none;
    border-bottom: 2px solid #8AC0FF;
    font-family: "Itim", cursive;
    width: 200px;
    font-size: 24px;

}

input:focus-visible {
    outline: unset;
}

</style>