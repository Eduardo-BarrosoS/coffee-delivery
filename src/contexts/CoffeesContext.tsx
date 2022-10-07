import { createContext, ReactNode, useReducer, useState } from 'react'
import {
  addCoffeeInTheCart,
  removeCoffeeSelected,
  updateCoffeeSelected,
} from '../components/reducers/coffee/actions'
import { coffeeReducer } from '../components/reducers/coffee/reduce'
import { ICoffee } from '../interfaces/tipeCoffee'
interface IlocaleHeader {
  city: string
  uf: string
}
interface ICoffeeContextProps {
  chosenCoffees: ICoffee[]
  localeHeader: IlocaleHeader
  addNewCoffeeInCart: (chosenCoffee: ICoffee) => void
  removeCoffee: (coffeeId: string) => void
  updateCoffee: (coffee: ICoffee, increment: boolean) => void
  setLocaleHeader: (data: IlocaleHeader) => void
}
interface ICoffeeContextsProvider {
  children: ReactNode
}

export const CoffeeContext = createContext({} as ICoffeeContextProps)

export const CoffeeContextsProvider = ({
  children,
}: ICoffeeContextsProvider) => {
  const [chosenCoffees, dispatch] = useReducer(coffeeReducer, [])

  function addNewCoffeeInCart(chosenCoffee: ICoffee) {
    dispatch(addCoffeeInTheCart(chosenCoffee))
  }
  function removeCoffee(coffeeId: string) {
    dispatch(removeCoffeeSelected(coffeeId))
  }
  function updateCoffee(coffee: ICoffee, increment: boolean) {
    dispatch(updateCoffeeSelected(coffee, increment))
  }

  const [localeHeader, setLocaleHeader] = useState({
    city: '',
    uf: '',
  })

  return (
    <CoffeeContext.Provider
      value={{
        chosenCoffees,
        localeHeader,
        addNewCoffeeInCart,
        removeCoffee,
        updateCoffee,
        setLocaleHeader,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
