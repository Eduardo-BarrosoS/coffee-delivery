import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Background, CartContainer, Payment, Requirements } from './style'

// import { CoffeeContext } from '../../contexts/CoffeesContext'
// import { useContext } from 'react'
import { ChosenCoffeeComponent } from '../../components/ShoppingCartComponents/ChosenCoffeeComponent'
import { AddressFormComponent } from '../../components/ShoppingCartComponents/AddressFormComponent'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'

const coffeeFormValidationSchema = zod.object({
  cpf: zod.string(),
  street: zod.string(),
  number: zod.number(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  uf: zod.string(),
  paymentOption: zod.string(),
})

type coffeeFromData = zod.infer<typeof coffeeFormValidationSchema>

export const ShoppingCart = () => {
  const [inputRadioIsChecked, setInputRadioIsChecked] = useState('')
  // const { chosenCoffees } = useContext(CoffeeContext)
  const newCoffeeFormContext = useForm<coffeeFromData>({
    resolver: zodResolver(coffeeFormValidationSchema),
    defaultValues: {
      cpf: '',
      street: '',
      number: Number(),
      complement: '',
      district: '',
      city: '',
      uf: '',
      paymentOption: 'credit' || 'debit' || 'money',
    },
  })

  const { register } = newCoffeeFormContext

  return (
    <CartContainer>
      <FormProvider {...newCoffeeFormContext}>
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
                <input
                  type="radio"
                  checked={inputRadioIsChecked === 'credit'}
                  id="credit"
                  hidden
                  {...register('paymentOption', {
                    onChange: () => setInputRadioIsChecked('credit'),
                  })}
                />
                <label htmlFor="credit" className="creditLabel">
                  <CreditCard className="creditCard" size={16} />{' '}
                  <span>Cartão de credito</span>
                </label>

                <input
                  type="radio"
                  checked={inputRadioIsChecked === 'debit'}
                  id="debit"
                  hidden
                  {...register('paymentOption', {
                    onChange: () => setInputRadioIsChecked('debit'),
                  })}
                />
                <label htmlFor="debit" className="debitLabel">
                  <Bank className="bank" size={16} />{' '}
                  <span>Cartão de debito</span>
                </label>
                <input
                  type="radio"
                  checked={inputRadioIsChecked === 'money'}
                  id="money"
                  hidden
                  {...register('paymentOption', {
                    onChange: () => setInputRadioIsChecked('money'),
                  })}
                />
                <label htmlFor="money" className="moneyLabel">
                  <Money className="money" size={16} /> <span>Dinheiro</span>
                </label>
              </div>
            </Payment>
          </Background>
        </div>

        <ChosenCoffeeComponent />
      </FormProvider>
    </CartContainer>
  )
}
