import Vue from "vue";
import Vuex from "vuex";
//import firebase from "firebase";
import firebase from '../firebase';
//import { firestorePlugin } from 'vuefire'
import * as VueFire from 'vuefire';
//import { db } from '../db'

Vue.prototype.$firebase = firebase;

Vue.use(Vuex);
Vue.use(VueFire);
Vue.use(firebase);
//Vue.use(firestorePlugin);

export default new Vuex.Store({
  modules: {
    firebase
  },
  state: {
    statePokemonDataList: [],
    stateTeamPokemonList: [],
    statePokedexList: [],
    user: {
      //loggedIn: false,
      data: null
    }
  },
/* 
  firestore: {
    documents: db.collection('stateTeamPokemonList')
  }, */
  
  actions: {
    setPokemonData(context, payload) {
      context.commit("setPokemonData", payload);
    },
    setTeamPokemonList(context, payload) {
      context.commit("setTeamPokemonList", payload);
    },
    addToTeam(context, payload) {
      context.commit("addToTeam", payload);
    },
    deleteFromTeam(context, payload) {
      context.commit("deleteFromTeam", payload);
    },
    eraseTeamPokemonList(context) {
      context.commit("eraseTeamPokemonList");
    },
    addToPokedex(context, payload) {
      context.commit("Pokedex", payload);
    },

    signInAction({commit}, context){

      const provider = new firebase.auth.GoogleAuthProvider();
      
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //var token = result.credential.accessToken;
        // The signed-in user info.
        user => {
          const newUser = {
            id: user.uid,
            pokedex: []
          }
          commit('setUser', newUser)
        }

        var user = result.user;
        if (user){
          const { displayName, email, uid } = user;
          const cleanedUser = { displayName, email, uid };

          console.log(displayName);
          console.log(email);
          console.log(uid);
          context.commit('setUser', cleanedUser);
      } else {
          context.commit('setUser', {});
      }
        // const { displayName, email, uid } = user;
        // call setUser mutation
      })
      .catch(function(error) {
        console.error(error);
     });

    },

    signOutAction() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        // call removeUser mutation
      }).catch(function(error) {
        // An error happened.
        console.log(error)
      });
    },

    setUser(context, payload){
      context.commit("setUser", payload);
    }
  },
  mutations: {
    setPokemonData(state, list) {
      state.statePokemonDataList = list;
    },
    setTeamPokemonList(state, list) {
      state.stateTeamPokemonList = list;
    },
    addToTeam(state, name) {
      state.stateTeamPokemonList.push(name);
    },
    deleteFromTeam(state, item) {
      state.stateTeamPokemonList.splice(item, 1);
    },
    eraseTeamPokemonList(state) {
      state.stateTeamPokemonList = [];
    },
    addToPokedex(state, id) {
      state.statePokedexList.push(id);
    },

    setUser (state, payload) {
      state.user = payload
    },

    removeUser (state) {
      state.user = null
    },

  },

  getters: {
    /* isLoggedIn(state){
      state.user.loggedIn = state.user.data.uid ? true: false;
    }, */
    isLoggedIn: state => 'uid' in state.user,

    allPokemon(state){
      state.stateTeamPokemonList
    },

    pokedex(state){
      state.statePokedexList
    },

    status(state) {
      return state.status
    },

    user(state) {
      return state.user
    },

    error(state) {
      return state.error
    }
  }
});
