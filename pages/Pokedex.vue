<template>
  <div>
    <div class="container-wrap">
      <SearchBar />
      <div v-for="pokemon in pokemons" :key="pokemon.name">
        <PokemonListItem :pokemon="pokemon" v-if="pokemon"/>
      </div>
    </div>
    <FilterPokedexActions />
  </div>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    data(){
      return {
      }
    },
    async mounted() {
      this.$axios.$get('/pokemon').
        then(res => this.setPokemons(res.results))
      console.log(this.$store);
    },

    methods: {
      ...mapMutations(['setPokemons'])
    },

    computed: {
      pokemons() {
        return this.$store.getters.getPokemonsFiltered
      },

      isFilteredByName() {
        return this.$store.getters.getIsFilteredByName
      },

      ...mapGetters({
        pokemons2: 'getPokemonsFiltered',
      })
    }

}
</script>
