<template>
  <div @click="modalAction(true)" class="pokemon-item">
    <span>{{ pokemon.name }}</span>

    <FavoriteButton :pokemon="pokemon" />
    <PokemonCard v-if="showModal" v-on:modalAction="modalAction" :pokemon="pokemon"/>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: { required: true, type: Object },
  },
  name: "pokemon-list-item",

  data() {
    return {
      showModal: false,
    }
  },

  methods: {
    modalAction(show) {
      console.log(show);
      this.showModal = show;
    }
  }
};
</script>
