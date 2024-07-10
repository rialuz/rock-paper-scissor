<script setup>
import { useGameStore } from '../stores/counter';

const store = useGameStore();


</script>

<template>
    <div class="scoreboard-container">
        <h2>Scoreboard</h2>
        <div class="score-container">
            <h3>{{ store.playerName }} Score: {{ store.playerScore }}</h3>
            <h3>Computer Score: {{ store.computerScore }}</h3>
        </div>
    </div>
</template>

<style scoped>

.scoreboard-container {
    background-color: #DEE3FF;
    border-radius: 50px;
    border: 3px solid #8ac0ff; 
    width: 350px;
    margin-top: 20px;
    margin-right: 10px;
    height: 170px;
    
    h2 {
      margin-left: 95px;  
      font-weight: 500;
    }
}

.score-container {
    margin-left: 40px;
}

</style>