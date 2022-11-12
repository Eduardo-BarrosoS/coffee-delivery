import { createContext, ReactNode, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  addCoffeeInTheCart,
  removeCoffeeSelected,
  updateCoffeeSelected,
} from '../components/reducers/coffee/actions'
import { coffeeReducer } from '../components/reducers/coffee/reduce'
import { ICoffee } from '../interfaces/tipeCoffee'
import { ICoffeeOrderFinished } from '../pages/ShoppingCart'
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
  getAllOrderInfo: (order: ICoffeeOrderFinished) => void
}
interface ICoffeeContextsProvider {
  children: ReactNode
}

export const CoffeeContext = createContext({} as ICoffeeContextProps)

export const CoffeeContextsProvider = ({
  children,
}: ICoffeeContextsProvider) => {
  const navigate = useNavigate()
  const [chosenCoffees, dispatch] = useReducer(coffeeReducer, [])
  const [localeHeader, setLocaleHeader] = useState({
    city: '',
    uf: '',
  })

  function addNewCoffeeInCart(chosenCoffee: ICoffee) {
    dispatch(addCoffeeInTheCart(chosenCoffee))
  }
  function removeCoffee(coffeeId: string) {
    dispatch(removeCoffeeSelected(coffeeId))
  }
  function updateCoffee(coffee: ICoffee, increment: boolean) {
    dispatch(updateCoffeeSelected(coffee, increment))
  }

  function getAllOrderInfo(order: ICoffeeOrderFinished) {
    // if (!order) {
    // console.log(order)
    // navigate('/confirmed', {
    //   state: {
    //     order,
    //   },
    // })
    // }
  }

  return (
    <CoffeeContext.Provider
      value={{
        chosenCoffees,
        localeHeader,
        addNewCoffeeInCart,
        removeCoffee,
        updateCoffee,
        setLocaleHeader,
        getAllOrderInfo,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
