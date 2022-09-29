import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 0;

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }
`
export const Locale = styled.div`
  width: 14.3rem;
  height: 3.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 0.4rem;

  .map {
    color: ${(props) => props.theme.purple};
  }

  span {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 14px;
    font-weight: 400;
  }
`
export const Cart = styled.div`
  width: 3.8rem;
  height: 3.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 0.4rem;

  .cart {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
