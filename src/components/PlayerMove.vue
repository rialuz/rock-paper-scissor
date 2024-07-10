<script setup>
import MoveItem from "./MoveItem.vue";
import {useGameStore} from "../stores/counter.js";
import rockImg from "../images/rock.png";
import paperImg from "../images/paper.png";
import scissorImg from "../images/scissor.png";

const store = useGameStore();

const userFunc = () => {
    store.playerChosenMove;
    store.randomComputerMove;

    setTimeout(() => {
        store.playGame();
    }, 3000);
}

</script>

<template>
    <div>
       Me {{ store.playerMove}}
        {{ store.ComputerMove }}
        {{ store.winner }}
        <MoveItem :clickFunc="userFunc" :value="rock" :img="rockImg" />
        <MoveItem :clickFunc="userFunc" :value="paper" :img="paperImg" />
        <MoveItem :clickFunc="userFunc" :value="scissor" :img="scissorImg" />
    </div>
</template>