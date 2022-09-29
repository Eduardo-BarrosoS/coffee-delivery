import styled from 'styled-components'

export const MainHomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9.4rem 0 10.8rem 0;
  flex: 1;
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1.5rem;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 6.6rem;
  }
`
export const Items = styled.div`
  display: grid;
  grid-template-columns: 23.1rem 30rem;
  column-gap: 4rem;
  row-gap: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 1.2rem;
  }

  div div {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white};
  }

  div:first-child div {
    background: ${(props) => props.theme['yellow-dark']};
  }
  div:nth-child(2) div {
    background: ${(props) => props.theme['base-text']};
  }
  div:nth-child(3) div {
    background: ${(props) => props.theme.yellow};
  }
  div:last-child div {
    background: ${(props) => props.theme.purple};
  }

  span {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${(props) => props.theme['base-text']};
  }
`
