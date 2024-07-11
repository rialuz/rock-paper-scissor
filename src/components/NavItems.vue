<script setup>
import PlayerInput from "./PlayerInput.vue";
import Scoreboard from "./Scoreboard.vue";
import Button from "./Button.vue";
import MoveItem from "./MoveItem.vue";
import WinnerContainer from "./WinnerContainer.vue";
import PlayerMove from "./PlayerMove.vue";

/*
 * ScoreBoard
 */
</script>

<template>
  <div class="nav-container">
    <div class="title">
      <h2>Rock. Paper. Scissor.</h2>
      <h2>SHOOT!</h2>
      <PlayerInput />
    </div>
    <Scoreboard />
  </div>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;

  h2 {
    font-weight: 800;
  }

  .title {
    margin-left: 20px;
  }
}
</style>
