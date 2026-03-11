<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="inc()">{{ todo.id }} - {{ todo.content }}</li>
    </ul>
    <p>Count: {{ todos.length }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { increment } from './helpers/increment.helper';
import { todos } from './consts/todos.const';

const clickCount = ref(0);

const inc = () => increment(clickCount);
</script>
