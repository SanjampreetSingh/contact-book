import { combineReducers } from "redux"
import contacts from "./contact/contacts"
import favourites from "./favourite/favourites"

const rootReducer = combineReducers({
  contacts,
  favourites
})

export default rootReducer
