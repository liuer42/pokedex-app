<template>
<span>

<v-navigation-drawer
      persistent
      v-model="drawer"
      app
      clipped
      disable-resize-watcher
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-pokeball</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link to="/" style="textDecoration: none; color:white;">    
            <v-list-item-title>Pokemon</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
          <router-link to="/team" style="textDecoration: none; color:white;">    
            <v-list-item-title>Team Summary</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-trophy-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link to="/leaderboard" style="textDecoration: none; color:white;">   
            <v-list-item-title>Leaderboard</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link to="/about" style="textDecoration: none; color:white;">   
            <v-list-item-title>About</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>PokéTrackr</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
            <!-- <Auth></Auth> -->
            <div class="hidden-sm-and-down">
                <v-btn @click="login()">Sign In</v-btn>               
            </div>
            <div>
                <v-btn @click="logout()">
                  <!-- <span> {{ user.data.displayName }} </span> -->
                  Logout</v-btn>
            </div>

    </v-app-bar>

</span>

</template>

<script>
//import Auth from "./Auth.vue";
import { mapActions } from 'vuex';

export default {
    name: 'AppNavigation',
    //components: { Auth },

    data() {
        return {
            appTitle: 'PokéTrackr',
            drawer: true,
        };
    },
    computed: {
      isAuthenticated() {
          return this.$store.getters.isAuthenticated;
      },
      ...mapActions(["signInAction", "signOutAction"]),
      //...mapGetters(["isLoggedIn"])

    },
    methods: {
      login: function(){
        this.$store.dispatch('signInAction');
      },
      logout: function(){
        this.$store.dispatch('signOutAction');
      },
      /* isLoggedIn(){
        return this.$store.getters.isLoggedIn;
      } */
    }
};
</script>

<style scoped>
</style>