import { AddCoffee, CardContainer } from './style'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { ICoffee } from '../../../interfaces/tipeCoffee'
import traditionalEspresso from '../../../assets/traditionalEspresso.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeesContext'
// import React, { useState } from 'react'

interface ICardProps {
  coffee: ICoffee
}

export const Card = ({ coffee }: ICardProps) => {
  const { addCoffeeInTheCart } = useContext(CoffeeContext)
  // const [amountOfCoffee, setAmountOfCoffee] = useState(0)

  function chooseTheAmountOfCoffee(plusOrMinus: string) {
    if (plusOrMinus === 'plus') {
      coffee.amount = coffee.amount + 1
    } else {
      if (coffee.amount > 1) {
        coffee.amount = coffee.amount - 1
      }
    }
  }

  function chooseCoffee(coffeeSelected: ICoffee) {
    addCoffeeInTheCart(coffeeSelected)
  }

  return (
    <CardContainer>
      <div className="content">
        <img src={traditionalEspresso} alt="" />
        <div className="coffeeType">
          <span>Tradicional</span>
        </div>
        <h4>{coffee.name}</h4>
        <p>{coffee.description}</p>
        <AddCoffee>
          <div>
            <span>R$</span>
            <p className="price">{coffee.price}</p>
          </div>
          <div>
            <Minus
              size={14}
              onClick={() => chooseTheAmountOfCoffee('Minus')}
              className="plus-minus"
              weight="duotone"
            />
            <span>1</span>
            <Plus size={14} className="plus-minus" weight="duotone" />
          </div>
          {/* { chosenCoffees.id ? } */}
          <div onClick={() => chooseCoffee(coffee)}>
            <ShoppingCartSimple
              className="shoppingCartSimple"
              size={16}
              weight="fill"
            />
          </div>
        </AddCoffee>
      </div>
    </CardContainer>
  )
}
