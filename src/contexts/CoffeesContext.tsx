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
}

interface ICoffeeContextsProvider {
  children: ReactNode
}

export const CoffeeContext = createContext({} as ICoffeeContextProps)

export const CoffeeContextsProvider = ({
  children,
}: ICoffeeContextsProvider) => {
  const [chosenCoffeesData, setChosenCoffeesData] = useState<ICoffee[]>([])

  // let amountOfCoffeeChosen

  function addCoffeeInTheCart(chosenCoffee: ICoffee) {
    setChosenCoffeesData((state: ICoffee[]) => [...state, chosenCoffee])
    // amountOfCoffeeChosen = amountOfCoffee
  }
  console.log(chosenCoffeesData)
  return (
    <CoffeeContext.Provider value={{ chosenCoffeesData, addCoffeeInTheCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}
