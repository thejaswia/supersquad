import { combineReducers } from 'redux'
import characters from './CharactersReducer'
import heros from './HerosReducer'

const rootReducer = combineReducers({
  characters,
  heros,
})

export default rootReducer
