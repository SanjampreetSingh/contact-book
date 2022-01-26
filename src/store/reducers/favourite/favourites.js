import * as actionTypes from "../../actions/actions"

const initialState = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

const favourites = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FAV:
      return [...state, action.id]

    case actionTypes.DELETE_FAV:
      return state.filter(item => item !== action.id)

    default:
      return state
  }
}

export default favourites
