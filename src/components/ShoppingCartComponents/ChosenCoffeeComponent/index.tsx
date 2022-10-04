import { Minus, Plus, Trash } from 'phosphor-react'
import { BackgroundCoffeeSelected, ChosenCoffees, Coffee } from './style'

import EspressoTraditional from '../../../assets/traditionalEspresso.svg'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeesContext'

export const ChosenCoffeeComponent = () => {
  const { chosenCoffees, removeCoffeeSelected, updateCoffeeSelected } =
    useContext(CoffeeContext)
  // const [amountOfCoffee, setAmountOfCoffee] = useState(1)
  // const [totalItemsPrice, setTotalItemsPrice] = useState(0)
  // useEffect(() => {
  //   setTotalItemsPrice(34)
  // }, [chosenCoffeesData])

  // function setMinusAmount() {
  //   if (amountOfCoffee > 1) {
  //     setAmountOfCoffee(amountOfCoffee + 1)
  //   }
  // }
  // function setPlusAmount(inventory: number) {
  //   if (amountOfCoffee < inventory) {
  //     setAmountOfCoffee(amountOfCoffee + 1)
  //   }
  // }

  const [totalItemsPrice, setTotalItemsPrice] = useState(0)
  useEffect(() => {
    chosenCoffees.forEach((coffee) => {
      setTotalItemsPrice(coffee.price + totalItemsPrice)
    })
  }, [chosenCoffees])

  return (
    <div>
      <h3>Cafés selecionados</h3>
      <BackgroundCoffeeSelected>
        <ChosenCoffees>
          {chosenCoffees.map((coffees) => {
            return (
              <>
                <Coffee key={coffees.id}>
                  <img src={EspressoTraditional} alt="" />
                  <div>
                    <span>{coffees.name}</span>
                    <div>
                      <div>
                        <Minus
                          size={14}
                          onClick={() => updateCoffeeSelected(coffees, false)}
                          className="plus-minus"
                          weight="fill"
                        />
                        <span>{coffees.amount}</span>
                        <Plus
                          size={14}
                          onClick={() => updateCoffeeSelected(coffees, true)}
                          className="plus-minus"
                          weight="fill"
                        />
                      </div>
                      <button onClick={() => removeCoffeeSelected(coffees.id)}>
                        <Trash className="trash" size={16} />
                        <span>Remover</span>
                      </button>
                    </div>
                  </div>
                  <p>R${coffees.price * coffees.amount}</p>
                </Coffee>
              </>
            )
          })}
          <div className="prices">
            <div>
              <span>Total de itens</span> <span>R${totalItemsPrice}</span>
            </div>
            <div>
              <span>Entrega</span> <span>R$ 3,50</span>
            </div>
            <div>
              <p> Total </p> <p>R$ 33,20 </p>
            </div>
          </div>
          <NavLink to="/confirmed">
            <button className="confirm-btn"> Confirmar pedido </button>
          </NavLink>
        </ChosenCoffees>
      </BackgroundCoffeeSelected>
    </div>
  )
}
