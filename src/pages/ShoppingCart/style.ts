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

export const BackgroundCoffeeSelected = styled(Background)`
  width: 44.8rem;
  flex: 1;
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

  div:nth-child(3),
  div:nth-child(4) {
    display: flex;
    gap: 1.2rem;
  }

  div:nth-child(3) {
    position: relative;
    width: 100%;
    .complement {
      padding-right: 7.9rem;
      /* display: flex; */
      flex: 1;
    }
    span {
      position: absolute;
      top: 1.25rem;
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
  div:nth-child(2) {
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.2rem;
      span {
        font-weight: 400;
        font-size: 1.4rem;
        color: ${(props) => props.theme['base-text']};
      }

      span:last-child {
        font-size: 1.6rem;
      }

      p {
        font-weight: 700;
        font-size: 2rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
  button {
    width: 100%;
    height: 4.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.yellow};
    border-radius: 0.6rem;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.4rem;
    color: ${(props) => props.theme.white};
    transition: all ease 0.2s;
    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
export const Coffee = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin-bottom: 2.4rem;
  img {
    width: 6.4rem;
    height: 6.4rem;
    margin-right: 2rem;
  }
  div {
    span:first-child {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 0.8rem;
    }
    div {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      flex: 1;
      div {
        background: ${(props) => props.theme['base-button']};
        border-radius: 0.6rem;
        display: flex;
        align-items: center;
        gap: 0.6em;
        padding: 0.6rem 0.8rem;
        height: 3.2rem;
        .plus-minus,
        .trash {
          color: ${(props) => props.theme.purple};
        }
        span {
          font-weight: 400;
        }
      }
      div:first-child {
        span {
          font-size: 1.6rem;
          color: ${(props) => props.theme['base-title']};
        }
      }
      div:nth-child(2) {
        span {
          font-size: 1.2rem;

          color: ${(props) => props.theme['base-text']};
        }
      }
    }
  }
  p {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    flex: 1;
    text-align: right;
  }
`
