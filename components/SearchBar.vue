<template>
  <div class="search-bar">
    <div class="flex-center">
      <img src="/icons/search.svg" alt="Pikachu Hello" />
    </div>

    <input v-model="name" type="text" placeholder="Search">
  </div>
</template>

<script>
import {  mapMutations } from 'vuex';

export default {
  data() {
    return {
      name: ''
    }
  },

  methods: {
    ...mapMutations(['filterPokemonsByName'])
  },

  watch: {
    name: function () {
       this.filterPokemonsByName(this.name)
    }
  }
}
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
