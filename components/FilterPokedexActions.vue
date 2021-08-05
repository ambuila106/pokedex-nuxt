<template>
  <div class="pokedex-actions">
    <div class="pokedex-actions__buttons container-wrap">
      <button @click="filterByAll()" class="btn" :class="{ btn__disable: isFavorite }">All</button>
      <button @click="filterByFavorite()" class="btn" :class="{ btn__disable: !isFavorite }">Favorites</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      isFavorite: false,
    }
  },

  methods: {
    filterByAll() {
      this.isFavorite = false;
      console.log(this.isFavorite);
      this.filterPokemonsByFavorites(this.isFavorite);
    },

    filterByFavorite() {
      this.isFavorite = true;
      console.log(this.isFavorite);
      this.filterPokemonsByFavorites(this.isFavorite);
    },

    ...mapMutations(['filterPokemonsByFavorites'])
  }
}
</script>
