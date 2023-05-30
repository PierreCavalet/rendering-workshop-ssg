<template>
  <div>
    <NuxtLink to="/"> back </NuxtLink>
    <h1>{{ pokemon.name.english }}</h1>
    <table>
      <thead>
        <tr>
          <th colspan="6">Stats</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>HP</th>
          <th>Attack</th>
          <th>Defense</th>
          <th>Sp. Attack</th>
          <th>Sp. Defense</th>
          <th>Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ pokemon.base.HP }}</td>
          <td>{{ pokemon.base.Attack }}</td>
          <td>{{ pokemon.base.Defense }}</td>
          <td>{{ pokemon.base["Sp. Attack"] }}</td>
          <td>{{ pokemon.base["Sp. Defense"] }}</td>
          <td>{{ pokemon.base.Speed }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const route = useRoute();

const pokemonId = route.params.id;
const { data: pokemon } = await useAsyncData(`pokemon-${pokemonId}`, () =>
  $fetch(`/api/pokemon/${pokemonId}`)
);
</script>

<style scoped>
table,
td {
  border: 1px solid #333;
}

thead,
tfoot {
  background-color: #333;
  color: #fff;
}
</style>
