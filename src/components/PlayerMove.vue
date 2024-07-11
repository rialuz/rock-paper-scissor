<script setup>
import MoveItem from "./MoveItem.vue";
import { useGameStore } from "../stores/game.js";
import rockImg from "../images/rock.png";
import paperImg from "../images/paper.png";
import scissorImg from "../images/scissor.png";

const store = useGameStore();

const userFunc = (e) => {
  store.playerChosenMove(e);
  store.randomComputerMove();
  store.playGame();
};
</script>

<template>
  <div>
    <h3>Your Move:</h3>
    <div class="player-move-container">
      <MoveItem :clickFunc="userFunc" value="rock" :img="rockImg" />
      <MoveItem :clickFunc="userFunc" value="paper" :img="paperImg" />
      <MoveItem :clickFunc="userFunc" value="scissor" :img="scissorImg" />
    </div>
  </div>
</template>

<style scoped>
.player-move-container {
  display: flex;
  flex-flow: row wrap;
  width: 300px;
  gap: 50px;
  justify-content: center;
}

h3 {
  text-align: center;
}
</style>
