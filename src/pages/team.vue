<template>
  <div>
    <h1 class="overview-team-pokemon__title">
      Your Pokémon team
    </h1>
    <router-link to="/">
      Go back
    </router-link>
    <div class="overview-team-pokemon">
      <pokemon-card
        v-for="(pokemon, index) in stateTeamPokemonList"
        :key="index"
        :pokemon-name="pokemon"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PokemonCard from "@/components/PokemonCard";
export default {
  components: {
    PokemonCard
  },
  computed: {
    ...mapState(["stateTeamPokemonList"])
  }
};
</script>

<style scoped>
.overview-team-pokemon {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.overview-team-pokemon__title {
  margin-top: 10px;
  text-align: center;
}
</style>
