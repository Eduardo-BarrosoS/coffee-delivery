import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  Background,
  BackgroundCoffeeSelected,
  CartContainer,
  ChosenCoffees,
  Coffee,
  FromContainer,
  Payment,
  Requirements,
} from './style'

import EspressoTraditional from '../../assets/traditionalEspresso.svg'
import { NavLink } from 'react-router-dom'
import { CoffeeContext } from '../../contexts/CoffesContext'
import { useContext } from 'react'

export const ShoppingCart = () => {
  const { chosenCoffees } = useContext(CoffeeContext)

  console.log(chosenCoffees)

  return (
    <CartContainer>
      <div>
        <h3>Complete seu pedido</h3>
        <Background className="address">
          <div>
            <Requirements>
              <MapPinLine size={22} className="mapPinLine" />
              <div>
                <p>Endereço da Entrega</p>
                <span>Inform e endereço onde deseja receber seu pedido</span>
              </div>
            </Requirements>
            <FromContainer action="">
              <input type="text" placeholder="CPF" className="CEP" />
              <input type="text" placeholder="Rua" className="street" />
              <div>
                <input type="number" placeholder="Número" className="number" />
                <input
                  type="text"
                  placeholder="Complemento"
                  className="complement"
                />
                <span>Opcional</span>
              </div>
              <div>
                <input type="text" placeholder="Bairro" className="district" />
                <input type="text" placeholder="Cidade" className="city" />
                <input type="text" placeholder="UF" className="UF" />
              </div>
            </FromContainer>
          </div>
        </Background>

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
                            className="plus-minus"
                            weight="fill"
                          />
                          <span>{coffees.amount}</span>
                          <Plus
                            size={14}
                            className="plus-minus"
                            weight="fill"
                          />
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
            <div>
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
    </CartContainer>
  )
}
