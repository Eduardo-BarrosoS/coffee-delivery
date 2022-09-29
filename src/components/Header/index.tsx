import { MapPin, ShoppingCart } from 'phosphor-react'
import { Cart, HeaderContainer, Locale } from './style'

export const Header = () => {
  return (
    <HeaderContainer>
      <img
        src="/src/assets/header/logo.svg"
        alt="Logo: copo de café com um nome Coffee Delivery"
      />
      <div>
        <Locale>
          <MapPin className="map" size={22} /> <span>Porto Alegre, RS </span>
        </Locale>
        <Cart>
          <ShoppingCart className={'cart'} size={22} />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
