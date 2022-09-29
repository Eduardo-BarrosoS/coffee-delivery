import { Items, MainHomeContainer } from './style'
import coffee from '../../assets/home/coffee.svg'
import { ShoppingCart } from 'phosphor-react'
export const MainHome = () => {
  return (
    <MainHomeContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div>
          <Items>
            <div>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </Items>
        </div>
      </div>
      <img src={coffee} alt="" />
    </MainHomeContainer>
  )
}
