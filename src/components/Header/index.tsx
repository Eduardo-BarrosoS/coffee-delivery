import { MapPin, ShoppingCart } from 'phosphor-react'
import { Cart, HeaderContainer, Locale } from './style'
import Logo from '../../assets/header/logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeesContext'

export const Header = () => {
  const { localeHeader } = useContext(CoffeeContext)
  const [locale, setLocale] = useState({
    city: '',
    uf: '',
  })

  useEffect(() => {
    setLocale(localeHeader)
  }, [localeHeader])
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="Logo: copo de café com um nome Coffee Delivery" />
      </NavLink>
      <div>
        <Locale>
          <MapPin className="map" size={22} />
          <span>
            {locale.city !== ''
              ? ` ${locale.city}, ${locale.uf}`
              : 'Cidade, UF'}
          </span>
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
