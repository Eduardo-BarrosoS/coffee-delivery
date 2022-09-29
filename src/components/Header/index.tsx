import { MapPin, ShoppingCart } from 'phosphor-react'
import { Cart, HeaderContainer, Locale } from './style'
import Logo from '../../assets/header/logo.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo: copo de café com um nome Coffee Delivery" />
      <div>
        <Locale>
          <MapPin className="map" size={22} /> <span>Porto Alegre, RS </span>
        </Locale>
        <NavLink to="/cart">
          <Cart>
            <ShoppingCart className={'cart'} size={22} />
          </Cart>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
