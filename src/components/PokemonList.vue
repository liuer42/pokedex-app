<template>

  <div class="pokemon-list">
    
    <h3>Choose your Pokémon</h3>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg11>
      <v-row>
      <v-col 
      v-for="(pokemon, index) in pokemonList"
          :key="pokemon.url"
      cols="12"
      sm="3"
      >
      <v-card
        min-width="250"
        max-width="250"
        min-height="250"
        max-height="250"
        outlined
        class="pokemon-list-item mx-auto ml-6"
      >

      <v-card-text class="text-center">

      
      <div class="pokeIndex mt-3">
        {{ index + 1 + ". " }}</div>
        
      <i v-if="team.includes(pokemon.name)" />
          <i v-else />

          <v-responsive class="pt-4">
        <a>
        <img 
        v-if="!caught"
        :src="uimage"
        width="24px"
        height="24px"
        align="left"
        @click="addToPokedex(index)"
        />
        <img 
        v-if="caught"
        :src="cimage"
        width="24px"
        height="24px"
        align="left"
        @click="addToPokedex(index)"
        />
         </a>
        
          <!-- <v-img v-else="!pokeballImages.caught" :src="{pokeballImages.image}" align="left"> -->
          <img
            :key="pokemon.url"
            :src="
              `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
                1}.png`
            "
            width="130px"
            alt="Pokemon"
          />
          </v-responsive>

            <div class="subheading" style="font-size: 20px;">{{ pokemon.name }}</div>
            <v-list-item-subtitle>
              <!-- <span
                v-for="(typesOfPokemon, index) in pokemonData.types"
                :key="`type${index}`"
              >
              </span> -->
            </v-list-item-subtitle>

          

        <v-card-actions class="justify-center">
          <v-btn 
          text
          v-show="!team.includes(pokemon.name)"
            :class="{ 'is-disabled': teamListLength === 6 }"
            @click="setTeam(pokemon.name)">Add to Team</v-btn>
          <v-btn 
          text
          v-show="team.includes(pokemon.name)"
            @click="setTeam(pokemon.name)"
            class="removeBtn">Remove</v-btn>
        </v-card-actions>
          </v-card-text>
      </v-card>
      </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "PokemonList",
  data: () => ({
      caught: false,
      uimage: require("@/assets/icon/pokeballunchecked.png"),
      cimage: require('../assets/icon/pokeballchecked.png')
    /* ,
      {
        caught: false,
        image: '../assets/icon/pokeballunchecked.png'
      } */
    
    
  }),
  props: {
    pokemonList: {
      type: Array,
      required: true
    },
    team: {
      type: Array,
      required: true
    },
    pokedex: {
      type: Array,
      required: true
    }
  },
  computed: {
    teamListLength() {
      return this.team.length;
    },
    pokedexLength() {
      return this.pokedex.length;
    }
  },
  methods: {
    setTeam(name) {
      if (this.team.includes(name)) {
        const indexInArray = this.team.indexOf(name);
        this.$emit("deleteFromTeam", indexInArray);
        return;
      }
      if (this.teamListLength < 6) {
        this.$emit("addToTeam", name);
      }
    },
    addToPokedex(id){
      this.$emit("addToPokedex", id);

      if (this.caught){
        this.caught = false;
      }else {
        this.caught = true;
      }
    }
  }
};
</script>

<style scoped>
.removeBtn {
  color: red;
}
.pokemon-list {
  text-transform: capitalize;
}
.pokemon-list-item {
  display: flex;
  align-items: center;
}

.ball-switch {
  width:0px;
  height:0px;
  visibility: hidden;
  position: absolute;
}
.ball-switch + label{
  background-image: url('../assets/icon/pokeballunchecked.png');
  width: 24px;
  height: 24px;
  display: inline-block;
  background-size: cover;
}
.uballImg {
  width: 32px;
  height:32px;
  background-image:  url('../assets/icon/pokeballchecked.png');
}
</style>
