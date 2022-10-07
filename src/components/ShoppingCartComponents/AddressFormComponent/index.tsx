import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { AddressContainer, Background, Requirements } from './style'

// import { useContext } from 'react'
// import { CoffeeContext } from '../../../contexts/CoffeesContext'

export const AddressFormComponent = () => {
  const { register } = useFormContext()
  //   function handleInformationByCEP(cep: number) {
  //     if (cep.toString().length === 8) {
  //       fetch(`https://viacep.com.br/ws/${cep}/json/`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setValue('street', data.logradouro)
  //           setValue('city', data.localidade)
  //           setValue('district', data.bairro)
  //           setValue('uf', data.uf)
  //           setFocus('number')
  //         })
  //     }
  //   }

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

        <AddressContainer>
          <input
            type="text"
            placeholder="CEP"
            className="CEP"
            {...register('cep')}
          />
          <input
            type="text"
            placeholder="Rua"
            {...register('street')}
            className="street"
          />
          <div>
            <input
              type="number"
              placeholder="Número"
              {...register('number')}
              className="number"
            />
            <input
              type="text"
              placeholder="Complemento"
              {...register('complement')}
              className="complement"
            />
            <span>Opcional</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Bairro"
              {...register('district')}
              className="district"
            />
            <input
              type="text"
              placeholder="Cidade"
              {...register('city')}
              className="city"
            />
            <input
              type="text"
              placeholder="UF"
              {...register('uf')}
              className="UF"
            />
          </div>
        </AddressContainer>
      </div>
    </Background>
  )
}
