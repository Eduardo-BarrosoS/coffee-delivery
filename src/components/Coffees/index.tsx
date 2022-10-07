import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeesContext'
import { coffee } from '../../data/coffeesData/coffee'
import { Card } from './Card'
import { CoffeesContainer, Title } from './style'

export const Coffees = () => {
  const { chosenCoffees } = useContext(CoffeeContext)
  return (
    <>
      <Title>Nossos cafés</Title>
      <CoffeesContainer>
        {coffee.map((coffee) => {
          if (coffee.inventory > 0) {
            const alreadyExist = chosenCoffees.find((coffeeSelected) => {
              return coffeeSelected.id === coffee.id
            })
            if (alreadyExist) {
              return (
                <Card
                  key={alreadyExist.id}
                  coffee={alreadyExist}
                  alreadyExist={true}
                />
              )
            }

            return <Card key={coffee.id} coffee={coffee} alreadyExist={false} />
          } else return <></>
        })}
      </CoffeesContainer>
    </>
  )
}
