import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * ref() are state properties
 * computed() are getters
 * functions are actions()
 */

export const useGameStore = defineStore('game',() => {
  const playerName = ref("");
  const playerScore = ref(0);
  const computerScore = ref(0);
  const moveOptions = ref({
    0: "rock",
    1: "scissors",
    2: "paper"
  });
  const playerMove = ref("");
  const computerMove = ref("");
  const winner = ref("");

  const playerWon = computed(() => playerScore.value + 1);
  const computerWon = computed(() => computerScore.value + 1);

  // set player's name 
  const setPlayerName = (e) => {
    playerName.value = e.target.value;
  }

  const playGame = () => {
    if(playerMove === 'rock'){
      if(computerMove === 'scissors') {
        winner.value = playerName.value + " won!";
         playerWon();
      }
      else if(computerMove === 'rock') winner.value = "It's a tie!"
      else {
        "Computer won!";
        computerWon();
      }
    }
    if(playerMove === 'scissors'){
      if(computerMove === 'paper'){
        winner.value = playerName.value + " won!";
        playerWon();
      }
      else if(computerMove === 'scissors') winner.value = "It's a tie!"
      else {
        "Computer won!";
        computerWon();
      }
    }
    if(playerMove === 'paper'){
      if(computerMove === 'rock') {
        winner.value = playerName.value + " won!";
        playerWon();
      }
      else if(computerMove === 'paper') winner.value = "It's a tie!"
      else {
        "Computer won!";
        computerWon();
      }
    }
  }

  // set player's move; "rock", "paper", "scissors"
  const playerChosenMove = ($event) => {
    playerMove.value = $event.target.value;
    console.log('playerMove', playerMove)
  }

  // randomly sets computer move given an arr of "rock", "paper", "scissors"
  const randomComputerMove = () => {
    const randomIndex = Math.floor(Math.random() * 3);

    computerMove.value = moveOptions[randomIndex];
    console.log(computerMove, "cm")
  }

  // reset game by clearing players name, players score and name, computers score and name
  const resetGame = () => {
    playerName.value = "";
    playerScore.value = 0;
    computerScore.value = 0;
    playerMove.value = "";
    computerMove.value = ""
  }

  return {
     playerScore,
     computerScore, 
     playerWon, 
     computerWon,
     computerMove,
     playerMove,
     moveOptions,
     playerName,
     setPlayerName,
     playerChosenMove,
     randomComputerMove,
     playGame
     }
})
