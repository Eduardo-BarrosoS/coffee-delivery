import { MapPinLine } from 'phosphor-react'
import { Background, FromContainer, Requirements } from './style'

import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeesContext'

export const AddressFormComponent = () => {
  const { chosenCoffees } = useContext(CoffeeContext)

  console.log(chosenCoffees)

  return (
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
  )
}
