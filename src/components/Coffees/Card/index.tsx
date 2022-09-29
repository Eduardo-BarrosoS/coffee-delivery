import { AddCoffee, CardContainer } from './style'
import traditional from '../../../assets/traditionalEspresso.svg'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export const Card = () => {
  return (
    <CardContainer>
      <div className="content">
        <img src={traditional} alt="" />
        <div className="coffeeType">
          <span>Tradicional</span>
        </div>
        <h4>Expresso Tradicional</h4>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <AddCoffee>
          <div>
            <span>R$</span>
            <p className="price">9,90</p>
          </div>
          <div>
            <Minus size={14} className="plus-minus" weight="fill" />
            <span>1</span>
            <Plus size={14} className="plus-minus" weight="fill" />
          </div>
          <div>
            <ShoppingCartSimple size={16} weight="fill" />
          </div>
        </AddCoffee>
      </div>
    </CardContainer>
  )
}
