import { Minus, Plus, Trash } from 'phosphor-react'
import { BackgroundCoffeeSelected, ChosenCoffees, Coffee } from './style'

import EspressoTraditional from '../../../assets/traditionalEspresso.svg'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeesContext'
import { useFormContext } from 'react-hook-form'
import {
  coffeeFromData,
  ICoffeeOrderFinished,
} from '../../../pages/ShoppingCart'

interface chosenCoffeeComponentProps {
  inputRadioIsChecked: string
}

interface IItemsPrice {
  coffeeId: string
  coffeeTotalPrice: number
}

export const ChosenCoffeeComponent = ({
  inputRadioIsChecked,
}: chosenCoffeeComponentProps) => {
  const [totalItemsPrice, setTotalItemsPrice] = useState(0)
  const [orderFinished, setOrderFinished] = useState<ICoffeeOrderFinished>({
    addressInfo: {
      cep: 0,
      street: '',
      number: 0,
      complement: '',
      district: '',
      city: '',
      uf: '',
      credit: '',
      debit: '',
      money: '',
    },
    coffeeList: [],
    totalItemsPrice: 0,
    totalPrice: 0,
    deliveryFee: 0,
  })

  const { getValues, setValue } = useFormContext<coffeeFromData>()
  const {
    chosenCoffees,
    removeCoffee,
    updateCoffee,
    setLocaleHeader,
    getAllOrderInfo,
  } = useContext(CoffeeContext)

  const deliveryFee = 3.5
  const itemsPrice: IItemsPrice[] = []
  let datas: coffeeFromData
  // const [datas, setDatas] = useState<coffeeFromData>({
  //   cep: 0,
  //   street: '',
  //   number: 0,
  //   complement: '',
  //   district: '',
  //   city: '',
  //   uf: '',
  //   credit: '',
  //   debit: '',
  //   money: '',
  // })

  useEffect(() => {
    chosenCoffees.forEach((coffee) => {
      itemsPrice.push({
        coffeeId: coffee.id,
        coffeeTotalPrice: coffee.amount * coffee.price,
      })
    })

    setTotalItemsPrice(
      itemsPrice.reduce((acc, item) => acc + item.coffeeTotalPrice, 0),
    )
    handleAllOrderInfo(datas)
  }, [chosenCoffees])

  function handleAllOrderInfo(address: coffeeFromData) {
    setOrderFinished({
      addressInfo: address,
      coffeeList: chosenCoffees,
      totalItemsPrice,
      totalPrice: totalItemsPrice + deliveryFee,
      deliveryFee,
    })
    console.log(
      '???? ~ file: index.tsx ~ line 111 ~ handleCoffeeSubmit ~ orderFinished',
      orderFinished,
    )
  }

  function handleCoffeeSubmit() {
    inputRadioIsChecked === 'credit'
      ? setValue('credit', 'true')
      : setValue('credit', 'false')
    inputRadioIsChecked === 'debit'
      ? setValue('debit', 'true')
      : setValue('debit', 'false')
    inputRadioIsChecked === 'money'
      ? setValue('money', 'true')
      : setValue('money', 'false')

    // setDatas(getValues())
    datas = getValues()
    setLocaleHeader({
      city: datas.city,
      uf: datas.uf,
    })
    handleAllOrderInfo(datas)
    getAllOrderInfo(orderFinished)
  }

  return (
    <div>
      <h3>Caf??s selecionados</h3>
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
                          onClick={() => updateCoffee(coffees, false)}
                          className="plus-minus"
                          weight="fill"
                        />
                        <span>{coffees.amount}</span>
                        <Plus
                          size={14}
                          onClick={() => updateCoffee(coffees, true)}
                          className="plus-minus"
                          weight="fill"
                        />
                      </div>
                      <button onClick={() => removeCoffee(coffees.id)}>
                        <Trash className="trash" size={16} />
                        <span>Remover</span>
                      </button>
                    </div>
                  </div>
                  <p>R${coffees.price * coffees.amount}</p>
                </Coffee>
              </>
            )
          })}
          <div className="prices">
            <div>
              <span>Total de itens</span> <span>R${totalItemsPrice}</span>
            </div>
            <div>
              <span>Entrega</span>{' '}
              <span>R${totalItemsPrice ? deliveryFee : 0.0}</span>
            </div>
            <div>
              <p> Total </p>
              <p>R${totalItemsPrice ? totalItemsPrice + deliveryFee : 0.0}</p>
            </div>
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              handleCoffeeSubmit()
            }}
            className="confirm-btn"
            // disabled={}
          >
            Confirmar pedido
          </button>
        </ChosenCoffees>
      </BackgroundCoffeeSelected>
    </div>
  )
}
