<script setup>
import NavItems from "../components/NavItems.vue";
import PlayerMove from "../components/PlayerMove.vue";
import ComputerMove from "../components/ComputerMove.vue";
import WinnerContainer from "../components/WinnerContainer.vue";
</script>

<template>
  <div class="wrapper">
    <NavItems />
    <div class="game-wrapper">
      <PlayerMove />
      <ComputerMove />
      <WinnerContainer />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.game-wrapper {
  display: flex;
  justify-content: space-evenly;
}
</style>
