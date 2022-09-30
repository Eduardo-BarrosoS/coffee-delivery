import { AddCoffee, CardContainer } from './style'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { ICoffee } from '../../../interfaces/tipeCoffee'
import traditionalEspresso from '../../../assets/traditionalEspresso.svg'
// import React, { useState } from 'react'

interface ICardProps {
  coffee: ICoffee
}

export const Card = ({ coffee }: ICardProps) => {
  // const [amountOfCoffee, setAmountOfCoffee] = useState<ICoffee[]>([])

  // function addCoffeeInTheCart(coffees: ICoffee) {
  //   setAmountOfCoffee([...amountOfCoffee, coffees])
  // }

  // console.log(amountOfCoffee)

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
            <Minus size={14} className="plus-minus" weight="duotone" />
            <span>1</span>
            <Plus size={14} className="plus-minus" weight="duotone" />
          </div>
          <div>
            <ShoppingCartSimple
              className="shoppingCartSimple"
              size={16}
              weight="fill"
              // onClick={() => addCoffeeInTheCart(coffee)}
            />
          </div>
        </AddCoffee>
      </div>
    </CardContainer>
  )
}
