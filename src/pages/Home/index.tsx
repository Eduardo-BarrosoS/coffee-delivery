import { Coffees } from '../../components/Coffees'
import { MainHome } from '../../components/MainHome'
import { HomeContainer } from './style'

export const Home = () => {
  return (
    <HomeContainer>
      <MainHome />
      <Coffees />
    </HomeContainer>
  )
}
