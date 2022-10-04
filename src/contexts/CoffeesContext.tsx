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
  updateCoffeeSelected: (coffeeId: ICoffee, increment: boolean) => void
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
    },
    [],
  )

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
  function updateCoffeeSelected(coffee: ICoffee, increment: boolean) {
    dispatch({
      type: 'UPDATE_COFFEE_BY_LIST',
      payload: {
        coffee,
        increment,
      },
    })
  }

  return (
    <CoffeeContext.Provider
      value={{
        chosenCoffees,

        addCoffeeInTheCart,
        removeCoffeeSelected,
        updateCoffeeSelected,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
