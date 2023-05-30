<template>
  <div>
    <h1>Pokemon list</h1>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
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
</script>
