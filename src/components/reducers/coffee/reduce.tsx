import { ICoffee } from '../../../interfaces/tipeCoffee'

export function coffeeReducer(state: ICoffee[], action: any) {
  switch (action.type) {
    case 'ADD_NEW_COFFEE_IN_THE_LIST': {
      return [...state, action.payload.chosenCoffee]
    }
    case 'REMOVE_COFFEE_BY_LIST': {
      return state.filter((coffee) => coffee.id !== action.payload.coffeeId)
    }
    case 'UPDATE_COFFEE_BY_LIST': {
      return state.map((coffee) => {
        if (coffee.id === action.payload.coffee.id) {
          if (action.payload.increment === true) {
            coffee.amount = action.payload.coffee.amount + 1
          } else {
            coffee.amount = action.payload.coffee.amount - 1
          }
        }
        return coffee
      })
    }
  }

  return state
}
