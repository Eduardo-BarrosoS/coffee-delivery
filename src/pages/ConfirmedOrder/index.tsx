import manMakingDelivery from '../../assets/confirmedOrder/manMakingDelivery.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderInformation, TitleContainer } from './style'

export const ConfirmedOrder = () => {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
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
