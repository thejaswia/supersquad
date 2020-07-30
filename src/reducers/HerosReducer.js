import charaters_json from '../data/characters.json'
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'

function heros(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)]
      return heroes
    case REMOVE_CHARACTER:
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}

function createCharacter(id) {
  let character = charaters_json.find(c => c.id === id)
  return character
}

export default heros
