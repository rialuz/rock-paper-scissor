<script setup>
import Button from "./Button.vue";
import { useGameStore } from "../stores/game.js";

const store = useGameStore();
</script>

<template>
  <div class="win-wrapper">
    <div class="winner-container">
      <h2>Who Won?</h2>
      <h3>Winner: {{ store.winner }}</h3>
    </div>
    <div>
      <Button :onClick="store.resetGame" text="Start Over" />
    </div>
  </div>
</template>

<style scoped>
.win-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.winner-container {
  background-color: #dee3ff;
  border-radius: 50px;
  border: 3px solid #8ac0ff;
  width: 200px;
  height: 300px;

  h2 {
    font-weight: 500;
    text-align: center;
  }

  h3 {
    text-align: center;
  }
}
</style>
