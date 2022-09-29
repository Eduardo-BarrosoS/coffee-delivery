import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  Background,
  CartContainer,
  ChosenCoffees,
  FromContainer,
  Payment,
  Requirements,
} from './style'

export const ShoppingCart = () => {
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
        <Background>
          <ChosenCoffees></ChosenCoffees>
        </Background>
      </div>
    </CartContainer>
  )
}
