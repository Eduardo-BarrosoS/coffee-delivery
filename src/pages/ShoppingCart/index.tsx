import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Background, CartContainer, Payment, Requirements } from './style'

import { CoffeeContext } from '../../contexts/CoffeesContext'
import { useContext } from 'react'
import { ChosenCoffeeComponent } from '../../components/ShoppingCartComponents/ChosenCoffeeComponent'
import { AddressFormComponent } from '../../components/ShoppingCartComponents/AddressFormComponent'

export const ShoppingCart = () => {
  const { chosenCoffees } = useContext(CoffeeContext)

  return (
    <CartContainer>
      <div>
        <h3>Complete seu pedido</h3>
        <AddressFormComponent />

        <Background>
          <Payment>
            <Requirements>
              <CurrencyDollar size={22} className="CurrencyDollar" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </Requirements>
            <div className="formOfPayment">
              <div>
                <CreditCard className="creditCard" size={16} />{' '}
                <span>Cartão de credito</span>
              </div>
              <div>
                <Bank className="bank" size={16} />{' '}
                <span>Cartão de debito</span>
              </div>
              <div>
                <Money className="money" size={16} /> <span>Dinheiro</span>
              </div>
            </div>
          </Payment>
        </Background>
      </div>

      <ChosenCoffeeComponent />
    </CartContainer>
  )
}
