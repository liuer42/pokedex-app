<template>
    <div class="about">
        <v-row align="center" justify="center">
            <img
            :src="aboutimg"
            class="pokeimg">
            <v-card 
            height="580"
            width="400">
            <v-card-text class="mt-6">
                <h3>Hello!<br>
                My name is Eric and I am a student at Waukesha County Technical College.  
                This Pokémon app was made using Vuex and the data is from PokéAPI, a free resource for 
                Pokémon data!<br>
                <a href="https://pokeapi.co/">https://pokeapi.co/</a>
                </h3>
            </v-card-text>
            </v-card>
        </v-row>
    </div>
</template>



<script>
export default {
    name: 'About',
    data: () => ({
        aboutimg: require("../assets/wall.jpg")
    })
}
</script>

<style scoped>
.pokeimg {
    width: 930px;
    height: 580px;
}
</style>