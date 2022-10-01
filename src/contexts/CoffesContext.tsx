import { createContext, ReactNode, useState } from 'react'
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
}

interface ICoffeeContextsProvider {
  children: ReactNode
}

export const CoffeeContext = createContext({} as ICoffeeContextProps)

export const CoffeeContextsProvider = ({
  children,
}: ICoffeeContextsProvider) => {
  const [chosenCoffees, setChosenCoffees] = useState<ICoffee[]>([])

  // let amountOfCoffeeChosen

  function addCoffeeInTheCart(chosenCoffee: ICoffee) {
    setChosenCoffees((state: ICoffee[]) => [...state, chosenCoffee])
    // amountOfCoffeeChosen = amountOfCoffee
  }
  console.log(chosenCoffees)
  return (
    <CoffeeContext.Provider value={{ chosenCoffees, addCoffeeInTheCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}
