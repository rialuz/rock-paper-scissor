<script setup>
import Button from "./Button.vue";
import { useGameStore } from "../stores/game";

const store = useGameStore();
</script>

<template>
  <div class="input-container">
    <div class="player-form">
      <label>Welcome, enter your name. </label>
      <input
        placeholder="Enter your name"
        type="text"
        v-model="store.playerName"
        id="name"
      />
      <p>Good Luck!</p>
    </div>
  </div>
</template>

<style scoped>
.input-container {
  margin-top: 15px;
  label,
  p {
    font-size: 24px;
  }
}
input[type="text"] {
  background: none;
  border: none;
  border-bottom: 2px solid #8ac0ff;
  font-family: "Itim", "open-sans", sans-serif ;
  width: 200px;
  font-size: 24px;
}

input:focus-visible {
  outline: unset;
}
</style>
