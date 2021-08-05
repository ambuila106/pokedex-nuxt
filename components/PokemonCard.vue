<template>
  <div @click.stop="modalAction(false)" class="modal">
    <div class="container-wrap">
      <div v-if="pokemonFetch" class="pokemon-card">
        <div class="pokemon-card__head">
          <img class="pokemon-card__stage" src="/stage.png" alt="Stage with sky" />
          <img class="pokemon-card__sprite" :src="pokemonFetch.sprites ? pokemonFetch.sprites.other['official-artwork']['front_default'] : ''" alt="">
        </div>
        <div class="pokemon-card__body">
          <div class="stats">
            <span class="stats__item">
              <span class="stats__title">Name: </span
              ><span class="stats__value">{{ pokemonFetch.name }}</span>
            </span>
            <span class="stats__item">
              <span class="stats__title">Weight: </span
              ><span class="stats__value">{{ pokemonFetch.weight }}</span>
            </span>
            <span class="stats__item">
              <span class="stats__title">Height: </span
              ><span class="stats__value">{{ pokemonFetch.height }}</span>
            </span>
            <span class="stats__item">
              <span class="stats__title">Types: </span
              ><span class="stats__value">{{ types }}</span>
            </span>
          </div>
        </div>
        <div class="pokemon-card__actions">
          <button @click.stop="copyPokemon()" class="btn">Share to my friends</button>
          <FavoriteButton :pokemon="pokemon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: { required: true, type: Object },
  },
  name: "pokemon-card",

  data() {
    return {
      pokemonFetch: {},
      types: ''
    }
  },

  async mounted() {
    this.$axios.$get('/pokemon/' + this.pokemon.name).
      then(res => {
        this.pokemonFetch = res;
        this.fetchTypes();
      })

  },

  methods: {
    modalAction(show){
      this.$emit('modalAction', show);
    },

    fetchTypes() {
      this.pokemonFetch?.types.forEach((type, index) => {
        if (this.pokemonFetch !== undefined) {
          this.types +=
            type.type.name +
            (index === this.pokemonFetch.types.length - 1 ? '' : ', ')
        }
      })
      console.log(this.types)
      return this.types
    },

    copyPokemon() {
        const aux = document.createElement("input");

        const text = `Name: ${this.pokemon.name}, Weight: ${this.pokemonFetch.weight}, Height: ${this.pokemonFetch.height}, Types: ${this.types}.`

        aux.setAttribute("value", text);

        // Añade el campo a la página
        document.body.appendChild(aux);

        // Selecciona el contenido del campo
        aux.select();

        // Copia el texto seleccionado
        document.execCommand("copy");

        // Elimina el campo de la página
        document.body.removeChild(aux);
    }
  }
};
</script>
