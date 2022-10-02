import { Minus, Plus, Trash } from 'phosphor-react'
import { BackgroundCoffeeSelected, ChosenCoffees, Coffee } from './style'

import EspressoTraditional from '../../../assets/traditionalEspresso.svg'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeesContext'

export const ChosenCoffeeComponent = () => {
  const { chosenCoffeesData, removeCoffeeSelected } = useContext(CoffeeContext)
  const [totalItemsPrice, setTotalItemsPrice] = useState(0)
  useEffect(() => {
    setTotalItemsPrice(34)
  }, [chosenCoffeesData])

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
                        <span>1</span>
                        <Plus size={14} className="plus-minus" weight="fill" />
                      </div>
                      <button onClick={() => removeCoffeeSelected(coffees)}>
                        <Trash className="trash" size={16} />
                        <span>Remover</span>
                      </button>
                    </div>
                  </div>
                  <p>R${coffees.price}</p>
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
