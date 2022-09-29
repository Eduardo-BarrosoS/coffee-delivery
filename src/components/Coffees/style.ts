import styled from 'styled-components'

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3.2rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin: 5.2rem 0 3.2rem 0;
`
export const CoffeesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 4rem;
  column-gap: 2rem;
  margin-bottom: 15.7rem;
`
