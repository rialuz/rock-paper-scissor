<script setup>
import { useGameStore } from "../stores/game.js";
import MoveItem from "../components/MoveItem.vue";
import ComputerMoveItm from "../components/ComputerMoveItm.vue";
import rockImg from "../images/rock.png";
import paperImg from "../images/paper.png";
import scissorImg from "../images/scissor.png";

const store = useGameStore();
</script>

<template>
  <div>
    <h3>Computer Move:</h3>
    <div class="player-move-container">
      <MoveItem
        v-if="store.computerMove === 'rock'"
        :clickFunc="userFunc"
        value="rock"
        :img="rockImg"
        disabled="true"
      />
      <MoveItem
        v-else-if="store.computerMove === 'paper'"
        :clickFunc="userFunc"
        value="paper"
        :img="paperImg"
        disabled="true"
      />
      <MoveItem
        v-else-if="store.computerMove === 'scissor'"
        :clickFunc="userFunc"
        value="scissor"
        :img="scissorImg"
        disabled="true"
      />
      <ComputerMoveItm v-else />
    </div>
  </div>
</template>

<style scoped>
h3 {
  text-align: center;
}
</style>
