import * as actionTypes from "../../actions/actions"

const initialState = require("../../../contextProvider/dummyData/data.json")

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.name,
          phone: action.phone,
          email: action.email,
        },
      ]

    case actionTypes.UPDATE_CONTACT:
      return state.map(obj => {
        if (obj.id === action.id) {
          return {
            ...obj,
            name: action.name,
            phone: action.phone,
            email: action.email,
          }
        }
        return obj
      })

    case actionTypes.DELETE_CONTACT:
      return state.filter(obj => obj.id !== action.id)

    default:
      return state
  }
}

export default contacts
