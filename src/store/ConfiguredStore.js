import { createStore } from "redux"

import rootReducer from "./reducers/RootReducer"

export default function configuredStore(initialState) {
  return createStore(rootReducer)
}
