<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="clickMe">click me</button>
    <ul>
      <li v-for="pokemon in pokemons.slice(0, 10)" :key="pokemon.id">
        <NuxtLink :to="`/pokemon/${pokemon.id}`">
          {{ pokemon.name.english }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: pokemons } = await useAsyncData("pokemons", () =>
  $fetch("/api/pokemon")
);

const title = ref("Pokemon list");

const clickMe = () => {
  title.value = "I CHANGED MY TITLE YESSS";
};
</script>
