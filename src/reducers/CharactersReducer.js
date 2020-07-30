import charaters_json from '../data/characters.json'
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'

function characters(state = charaters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id)
      return characters

    case REMOVE_CHARACTER:
      return [...state, createCharacter(action.id)]

    default:
      return state
  }
}

function createCharacter(id) {
  let character = charaters_json.find(c => c.id === id)
  return character
}

export default characters
