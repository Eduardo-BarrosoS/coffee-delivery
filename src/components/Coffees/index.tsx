import { coffee } from '../../data/coffeesData/coffee'
import { Card } from './Card'
import { CoffeesContainer, Title } from './style'

export const Coffees = () => {
  return (
    <>
      <Title>Nossos cafés</Title>
      <CoffeesContainer>
        {coffee.map((coffee) => {
          if (coffee.inventory > 0) {
            return <Card key={coffee.id} coffee={coffee} />
          } else return <></>
        })}
      </CoffeesContainer>
    </>
  )
}
