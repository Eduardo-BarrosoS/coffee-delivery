import { createContext, ReactNode, useReducer } from 'react'
import { ICoffee } from '../interfaces/tipeCoffee'

// interface IChosenCoffee {
//   chosenCoffee: {
//     coffee: ICoffee[]
//     amountOfCoffeeChosen: number
//   }
// }

interface ICoffeeContextProps {
  chosenCoffees: ICoffee[]
  addCoffeeInTheCart: (chosenCoffee: ICoffee) => void
  removeCoffeeSelected: (coffeeId: string) => void
  updateCoffeeSelected: (coffeeId: ICoffee) => void
}

interface ICoffeeContextsProvider {
  children: ReactNode
}

// interface ICoffeesReducer {
//   chosenCoffees: ICoffee[]
// }
export const CoffeeContext = createContext({} as ICoffeeContextProps)

export const CoffeeContextsProvider = ({
  children,
}: ICoffeeContextsProvider) => {
  // const [chosenCoffeesData, setChosenCoffeesData] = useState<ICoffee[]>([])

  const [chosenCoffees, dispatch] = useReducer(
    (state: ICoffee[], action: any) => {
      switch (action.type) {
        case 'ADD_NEW_COFFEE_IN_THE_LIST':
          return [...state, action.payload.chosenCoffee]
        case 'REMOVE_COFFEE_BY_LIST': {
          return state.filter((coffee) => coffee.id !== action.payload.coffeeId)
        }
        case 'UPDATE_COFFEE_BY_LIST': {
          console.log(
            (action.payload.coffee.amount = action.payload.coffee.amount + 1),
          )
          // return state.map((coffee) => {
          //   if (coffee.id === action.payload.coffee.id) {
          //     return (coffee.amount = coffee.amount + 1)
          //   }
          // })
          // return state.filter((coffee) => {
          //   const coffeeUpdated = coffee.id === action.payload.coffee.id
          // })
        }
      }

      return state
    },
    [],
  )
  console.log(chosenCoffees)

  function addCoffeeInTheCart(chosenCoffee: ICoffee) {
    dispatch({
      type: 'ADD_NEW_COFFEE_IN_THE_LIST',
      payload: {
        chosenCoffee,
      },
    })
  }

  function removeCoffeeSelected(coffeeId: string) {
    dispatch({
      type: 'REMOVE_COFFEE_BY_LIST',
      payload: {
        coffeeId,
      },
    })
  }
  function updateCoffeeSelected(coffee: ICoffee) {
    dispatch({
      type: 'UPDATE_COFFEE_BY_LIST',
      payload: {
        coffee,
      },
    })
  }

  return (
    <CoffeeContext.Provider
      value={{
        addCoffeeInTheCart,
        chosenCoffees,
        removeCoffeeSelected,
        updateCoffeeSelected,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
