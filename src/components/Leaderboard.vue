<template>
    <div class="leaderboard" style="width: 1000px; height: 90%;">
        <v-data-table
        :headers="headers"
        :items="users"
        class="elevation-1"
        ></v-data-table>
    </div>
</template>


<script>
export default {
    name: 'Leaderboard',

    data () {
        return {
            headers: [
                { text: 'Name', align: 'left', sortable: false, value: 'name' },
                { text: 'Pokemon Caught', value: 'pokedex' },
                { text: 'Rank', value: 'rank'}
            ],
            users: [
            {
                name: 'Eric L',
                pokedex: 151,
                rank: 'Pokemon Master'
            },
            {
                name: 'Ash Ketchum',
                pokedex: 130,
                rank: 'Ace Trainer'
            },
            {
                name: 'Walter White',
                pokedex: 99,
                rank: 'Ace Trainer'
            },
            {
                name: 'Billy Rae Cyrus',
                pokedex: 70,
                rank: 'Cool Trainer'
            },
            {
                name: 'John Doe',
                pokedex: 50,
                rank: 'Youngster'
            },
            {
                name: 'Will Smith',
                pokedex: 25,
                rank: 'Schoolkid'
            },
            {
                name: 'Michael Jordan',
                pokedex: 23,
                rank: 'Jr. Trainer'
            },
            {
                name: 'Donald Trump',
                pokedex: 1,
                rank: 'Preschooler'
            }

            ]
        }
    }
}
</script>

<style>

</style>