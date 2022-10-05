import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 2.7rem;
  .address {
    margin-bottom: 1.2rem;
  }
  h3 {
    font-weight: 700;
    font-size: 1.8rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.6rem;
  }
`
export const Background = styled.div`
  width: 64rem;
  padding: 4rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 0.6rem;
`
export const Requirements = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  .mapPinLine {
    color: ${(props) => props.theme['yellow-dark']};
  }
  .CurrencyDollar {
    color: ${(props) => props.theme.purple};
  }
  div {
    display: flex;
    flex-direction: column;
    p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
    span {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const Payment = styled.div`
  width: 100%;
  .formOfPayment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.2rem;

    div,
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      width: 17.86rem;
      height: 5.1rem;
      background: ${(props) => props.theme['base-button']};
      border-radius: 0.6rem;
      cursor: pointer;
      transition: all ease-in-out 0.2s;

      &:hover {
        background: ${(props) => props.theme['base-hover']};
      }

      .money,
      .bank,
      .creditCard {
        color: ${(props) => props.theme.purple};
      }

      span {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 160%;
        color: ${(props) => props.theme['base-text']};
        text-transform: uppercase;
      }
    }

    #credit:checked ~ .creditLabel,
    #debit:checked ~ .debitLabel,
    #money:checked ~ .moneyLabel {
      border: 1px solid ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    }
  }
`
