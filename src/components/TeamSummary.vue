<template>
<v-container fluid > 
<v-card width="400px" class="mr-5">
  <div class="ml-5 mt-5">
    <br/>
    <h2>Your current Pokémon team</h2>
    <br/>
    <!-- <p v-if="teamListLength < maximumList">
      I can't choose, help me
      <button @click="startInterval">
        Pick Pokémon
      </button>
    </p> -->
    <template>
      <p
        v-for="(pokemonName, index) in team"
        :key="index"
        class="chosen-pokemon"
        style="font-size: 20px;"
      >
        {{ pokemonName }}
      </p>
    </template>
    <p v-if="teamListLength > 1 && teamListLength < maximumList">
      You can add {{ maximumList - teamListLength }} more Pokémon
    </p>
    <p v-if="teamListLength > 5">
      Your list is full!
    </p>
    <p v-if="teamListLength > 0">
      <button @click="emptyTeamPokemonList"
      class="clearBtn">
        Clear team
      </button>
    </p>
    <v-btn v-if="teamListLength > 0">
    <router-link to="/team" >
      View your Pokémon team
    </router-link>
    </v-btn>
  </div>
</v-card>
<v-card width="400px" class="mr-5">
  <div class="text-center ml-5 mt-6 mr-5">
    <h2>Challenges</h2><br/>
    <h4>Catch 5 Pokémon</h4>
    <br/>
    <v-progress-linear
    v-model="challenge1"
    color="amber"
    height="20"
    reactive
    ></v-progress-linear>
    
    <div class="text-center">
    </div><br/>
    <h4>Obtain a legendary Pokémon</h4><v-progress-circular :value="0"></v-progress-circular>
    <h4>Catch a Pikachu</h4><v-progress-circular :value="100" color="amber"></v-progress-circular>
  </div>
</v-card>
</v-container>

</template>

<script>
export default {
  name: "TeamSummary",

  props: {
    pokemonList: {
      type: Array,
      required: true
    },
    team: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      maximumList: 6,
      challenge1: 60
    };
  },
  computed: {
    teamListLength() {
      return this.team.length;
    }
  },
  methods: {
    startInterval() {
      const self = this;
      const intervalID = window.setInterval(
        pickRandomPokemonOrClearInterval,
        500
      );
      function pickRandomPokemonOrClearInterval() {
        if (self.team.ListLength < self.maximumList) {
          self.pickRandomPokemon();
        } else {
          clearInterval(intervalID);
        }
      }
    },
    pickRandomPokemon() {
      const list = this.pokemonList.filter(function(pokemon) {
        return !this.team.includes(pokemon.name);
      }, this);

      const number = Math.floor(Math.random() * Math.floor(list.length));
      this.$emit("addTeam", list[number].name);
    },
    emptyTeamPokemonList() {
      this.$emit("eraseTeamPokemonList");
    }
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
.clearBtn {
  color: red;
}
.chosen-pokemon {
  text-transform: capitalize;
}
</style>
