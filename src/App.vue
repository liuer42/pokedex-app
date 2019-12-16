<template>
<v-app id="inspire">
  
  <app-navigation></app-navigation>
    
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      <router-view />
        
      </v-container>
    </v-content>
  
    <v-footer app>
      <span>&copy; PokéTrackr 2019</span>
    </v-footer>
  </v-app>



</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
  name: 'App',
  components: {
    AppNavigation
  },
  props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
        created () {
      this.$vuetify.theme.dark = true
    },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#inspire {
  background-image: url(assets/poke.jpg);
  background-repeat: repeat-y;
  background-size: 100%;
}
</style>
