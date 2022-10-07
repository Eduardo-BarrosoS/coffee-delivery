import { ICoffee } from '../../../interfaces/tipeCoffee'

export function addCoffeeInTheCart(chosenCoffee: ICoffee) {
  return {
    type: 'ADD_NEW_COFFEE_IN_THE_LIST',
    payload: {
      chosenCoffee,
    },
  }
}

export function removeCoffeeSelected(coffeeId: string) {
  return {
    type: 'REMOVE_COFFEE_BY_LIST',
    payload: {
      coffeeId,
    },
  }
}
export function updateCoffeeSelected(coffee: ICoffee, increment: boolean) {
  return {
    type: 'UPDATE_COFFEE_BY_LIST',
    payload: {
      coffee,
      increment,
    },
  }
}
