import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

export const FromContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.2rem;
  input {
    height: 4.2rem;
    background: ${(props) => props.theme['base-button']};
    padding: 1.3rem 1.2rem;
    border-radius: 0.4rem;
    border: none;
    color: ${(props) => props.theme['base-text']};
    outline: none;
    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
    }
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-weight: 400;
      font-size: 14px;
    }
  }

  div:nth-child(3) {
    position: relative;
    width: 100%;
    .complement {
      padding-right: 7.9rem;
      display: flex;
      flex: 1;
    }
    span {
      position: absolute;
      top: 1.15rem;
      right: 1.2rem;
      color: ${(props) => props.theme['base-label']};
      font-weight: 400;
      font-size: 14px;
    }
  }

  .CEP,
  .number,
  .district {
    width: 20rem;
  }
  .city {
    width: 27.6rem;
  }
  .UF {
    width: 6rem;
  }
`
export const Payment = styled.div`
  width: 100%;
  .formOfPayment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.2rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      width: 17.86rem;
      height: 5.1rem;
      background: ${(props) => props.theme['base-button']};
      border-radius: 0.6rem;

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
  }
`
export const FormOfPayment = styled.div``
export const ChosenCoffees = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
