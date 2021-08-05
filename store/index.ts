export const state = () => ({
  _pokemons: [],
  _pokemonsFiltered: [],
  _isFilteredByFavorite: false,
  _isFilteredByName: false,
});

export const getters = {
  getPokemonsFiltered(state:any) {
      return state._pokemonsFiltered
  },

  getPokemons(state:any) {
    return state._pokemons
  },

  getIsFilteredByName(state:any) {
    return state._isFilteredByName
  },

  getIsFilteredByFavorite(state:any) {
    return state._isFilteredByFavorite
  },
}

export const actions = {


}

export const mutations = {
  async setCounter(state:any, count: any) {
    state._counter = count;
  },

  async setPokemons(state:any, pokemons: any) {
    state._pokemons = pokemons;
  },

  filterPokemonsByFavorites(state:any, isFavoriteSelected:any = false) {
    state._isFilteredByFavorite = isFavoriteSelected
    state._pokemonsFiltered = isFavoriteSelected ?
      state._pokemons.filter( (pokemon:any) => pokemon.isFavorite) :
      state._pokemons
  },

  filterPokemonsByName(state:any, name:any = false) {
    state._pokemonsFiltered = state.pokemons.filter( (pokemon:any) => pokemon.name.includes(name))
  },
}
