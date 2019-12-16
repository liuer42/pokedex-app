<template>

  <div class="select-pokemon-page">
    <div class="select-pokemon-content">
      <pokemon-list
        :pokemon-list="statePokemonDataList"
        :team="stateTeamPokemonList"
        @deleteFromTeam="deleteFromTeam"
        @addToTeam="addToTeam"
        :pokedex="statePokedexList"
      />
      <team-summary
        :pokemon-list="statePokemonDataList"
        :team="stateTeamPokemonList"
        @addToTeam="addToTeam"
        @eraseTeamPokemonList="eraseTeamPokemonList"
      />
    </div>
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList'
import TeamSummary from '@/components/TeamSummary'
//import Leaderboard from '@/components/Leaderboard'
//import About from '@/components/About'

import { mapState, mapActions } from "vuex";
export default {
  components: {
        PokemonList,
        TeamSummary,
        //Leaderboard,
        //About
    },
  computed: {
    ...mapState(["statePokemonDataList", "stateTeamPokemonList", "statePokedexList"])
  },
  async created() {
    const pokemonData = await this.getPokemonData();
    this.setPokemonData(pokemonData);
  },
  methods: {
    async getPokemonData() {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const json = await data.json();
      return json.results;
    },
    ...mapActions([
      "setPokemonData",
      "addToTeam",
      "deleteFromTeam",
      "eraseTeamPokemonList",
      "addToPokedex"
    ])
  }
};
</script>

<style scoped>
.select-pokemon-page {
  text-align: center;
}
.select-pokemon-content {
  text-align: left;
  display: flex;
  justify-content: space-evenly;
}
</style>
