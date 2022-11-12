import manMakingDelivery from '../../assets/confirmedOrder/manMakingDelivery.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderInformation, TitleContainer } from './style'
import { Location, useLocation } from 'react-router-dom'
// import { useState } from 'react'
import { ICoffeeOrderFinished } from '../ShoppingCart'

interface ILocation extends Location {
  state: {
    order: ICoffeeOrderFinished
  }
}

export const ConfirmedOrder = () => {
  const locale: ILocation = useLocation()

  console.log(locale)

  // const [orderData, setOrderData] = useState()

  return (
    <>
      <TitleContainer>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContainer>
      <OrderInformation>
        <div className="orderContainer">
          <div>
            <div className="mapPinContainer">
              <MapPin size={16} weight="fill" />
            </div>
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  asdasdW
                  {/* {locale.state.order.addressInfo.city},
                  {locale.state.order.addressInfo.number} */}
                </strong>
                Farrapos - Porto Alegre, RS
              </span>
            </div>
          </div>
          <div>
            <div className="timerContainer">
              <Timer size={16} weight="fill" />
            </div>
            <div>
              <span>
                Previsão de entrega <strong>20 min - 30 min </strong>
              </span>
            </div>
          </div>
          <div>
            <div className="currencyDollar">
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <div>
              <span>
                Pagamento na entrega <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </div>
        </div>
        <img src={manMakingDelivery} alt="" />
      </OrderInformation>
    </>
  )
}
