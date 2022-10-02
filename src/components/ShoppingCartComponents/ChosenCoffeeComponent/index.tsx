import { Minus, Plus, Trash } from 'phosphor-react'
import { BackgroundCoffeeSelected, ChosenCoffees, Coffee } from './style'

import EspressoTraditional from '../../../assets/traditionalEspresso.svg'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeesContext'
import { ICoffee } from '../../../interfaces/tipeCoffee'

export const ChosenCoffeeComponent = () => {
  const { chosenCoffeesData } = useContext(CoffeeContext)

  // const pricePerItem = chosenCoffeesData.map((coffees) => {
  //   return coffees.price * coffees.amount
  // })

  // console.log(pricePerItem)

  // const [amountCoffee, setAmountCoffee] = useState(1)
  // let coffeeAmountChosen: ICoffee

  // function chooseAmountOfCoffee(coffee: ICoffee, id: string) {
  //   setAmountCoffee(amountCoffee + 1)

  //   coffeeAmountChosen = coffee
  // }
  // useEffect(() => {

  // }, [amountCoffee])

  return (
    <div>
      <h3>Cafés selecionados</h3>
      <BackgroundCoffeeSelected>
        <ChosenCoffees>
          {chosenCoffeesData.map((coffees) => {
            return (
              <>
                <Coffee key={coffees.id}>
                  <img src={EspressoTraditional} alt="" />
                  <div>
                    <span>{coffees.name}</span>
                    <div>
                      <div>
                        <Minus size={14} className="plus-minus" weight="fill" />
                        <span>amountCoffee</span>
                        <Plus size={14} className="plus-minus" weight="fill" />
                      </div>
                      <div>
                        <Trash className="trash" size={16} />{' '}
                        <span>Remover</span>
                      </div>
                    </div>
                  </div>
                  <p>R${coffees.price}</p>
                </Coffee>
              </>
            )
          })}
          <div className="prices">
            <div>
              <span>Total de itens</span> <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span> <span>R$ 3,50</span>
            </div>
            <div>
              <p> Total </p> <p>R$ 33,20 </p>
            </div>
          </div>
          <NavLink to="/confirmed">
            <button> Confirmar pedido </button>
          </NavLink>
        </ChosenCoffees>
      </BackgroundCoffeeSelected>
    </div>
  )
}
