import { combineReducers } from "redux"
import contacts from "./contact/contacts"

const rootReducer = combineReducers({
  contacts,
})

export default rootReducer
