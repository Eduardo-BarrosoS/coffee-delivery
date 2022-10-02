import { createContext, ReactNode, useState } from 'react'
import { ICoffee } from '../interfaces/tipeCoffee'

// interface IChosenCoffee {
//   chosenCoffee: {
//     coffee: ICoffee[]
//     amountOfCoffeeChosen: number
//   }
// }

interface ICoffeeContextProps {
  chosenCoffeesData: ICoffee[]
  addCoffeeInTheCart: (chosenCoffee: ICoffee) => void
  removeCoffeeSelected: (chosenCoffee: ICoffee) => void
}

interface ICoffeeContextsProvider {
  children: ReactNode
}

export const CoffeeContext = createContext({} as ICoffeeContextProps)

export const CoffeeContextsProvider = ({
  children,
}: ICoffeeContextsProvider) => {
  const [chosenCoffeesData, setChosenCoffeesData] = useState<ICoffee[]>([])

  function addCoffeeInTheCart(chosenCoffee: ICoffee) {
    setChosenCoffeesData((state) => [...state, chosenCoffee])
  }

  function removeCoffeeSelected(coffeeRemove: ICoffee) {
    const coffeeIndex = chosenCoffeesData.findIndex(
      (coffee) => coffee.id === coffeeRemove.id,
    )
    chosenCoffeesData.splice(coffeeIndex, 1)
    setChosenCoffeesData([...chosenCoffeesData])
  }

  return (
    <CoffeeContext.Provider
      value={{ chosenCoffeesData, addCoffeeInTheCart, removeCoffeeSelected }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
