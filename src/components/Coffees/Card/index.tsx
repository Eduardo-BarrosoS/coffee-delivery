import { AddCoffee, CardContainer } from './style'
import { Minus, Plus, ShoppingCartSimple, Trash } from 'phosphor-react'
import { ICoffee } from '../../../interfaces/tipeCoffee'
import traditionalEspresso from '../../../assets/traditionalEspresso.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeesContext'
import { Tooltip } from '@mui/material'
// import React, { useState } from 'react'

interface ICardProps {
  coffee: ICoffee
  alreadyExist: boolean
}

export const Card = ({ coffee, alreadyExist }: ICardProps) => {
  const { addCoffeeInTheCart, updateCoffeeSelected, removeCoffeeSelected } =
    useContext(CoffeeContext)
  // const [amountOfCoffee, setAmountOfCoffee] = useState(0)

  // function chooseTheAmountOfCoffee(plusOrMinus: string) {
  //   if (plusOrMinus === 'plus') {
  //     coffee.amount = coffee.amount + 1
  //   } else {
  //     if (coffee.amount > 1) {
  //       coffee.amount = coffee.amount - 1
  //     }
  //   }
  // }

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
            {!alreadyExist ? (
              <Tooltip
                placement="top-start"
                arrow
                title="Antes de definir a quantidade adicione o café ao carrinho"
              >
                <Minus size={14} className="plus-minus" weight="duotone" />
              </Tooltip>
            ) : (
              <Minus
                size={14}
                onClick={() => updateCoffeeSelected(coffee, false)}
                className="plus-minus"
                weight="duotone"
              />
            )}

            <span>{coffee.amount}</span>

            {!alreadyExist ? (
              <Tooltip
                placement="top-end"
                arrow
                title=" Antes de definir a quantidade adicione o café ao carrinho"
              >
                <Plus size={14} className="plus-minus" weight="duotone" />
              </Tooltip>
            ) : (
              <Plus
                size={14}
                className="plus-minus"
                weight="duotone"
                onClick={() => {
                  updateCoffeeSelected(coffee, true)
                }}
              />
            )}
          </div>
          {/* { chosenCoffees.id ? } */}
          {alreadyExist ? (
            <button
              className="removeCoffee-btn"
              onClick={() => removeCoffeeSelected(coffee.id)}
            >
              <Trash className="shoppingCartSimple" size={16} weight="fill" />
            </button>
          ) : (
            <button
              className="addCoffee-btn"
              onClick={() => chooseCoffee(coffee)}
            >
              <ShoppingCartSimple
                className="shoppingCartSimple"
                size={16}
                weight="fill"
              />
            </button>
          )}
        </AddCoffee>
      </div>
    </CardContainer>
  )
}
