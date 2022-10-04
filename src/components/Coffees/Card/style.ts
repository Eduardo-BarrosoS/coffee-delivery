import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 25.6rem;
  height: 31rem;
  background: ${(props) => props.theme['base-card']};
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 3.6rem;
  border-bottom-left-radius: 3.6rem;
  border-bottom-right-radius: 0.6rem;
  position: relative;
  .content {
    position: absolute;
    top: -2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 12rem;
      height: 12rem;
      margin-bottom: 1.2rem;
    }
  }
  .coffeeType {
    margin-bottom: 1.6rem;
  }
  .coffeeType span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: lowercase;
    padding: 0.4rem 0.8rem;
  }
  h4 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.8rem;
  }
  p {
    width: 21.6rem;
    text-align: center;
    font-weight: 400;
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 3.3rem;
  }
`

export const AddCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 1.1rem;
    span {
      font-size: 1.4rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
    }
    .price {
      font-family: 'Baloo 2';
      width: auto;
      margin: 0;
      font-weight: 800;
      font-size: 2.4rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.85rem 0.8rem;
    background: ${(props) => props.theme['base-button']};
    border-radius: 0.6rem;

    span {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-title']};
    }

    .plus-minus {
      color: ${(props) => props.theme.purple};
      cursor: pointer;
      transition: all ease 0.2s;
      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }

  .addCoffee-btn,
  .removeCoffee-btn {
    padding: 0.8rem;
    border-radius: 0.6rem;
    cursor: pointer;
    transition: all ease 0.2s;
    border: none;
    outline: none;
  }

  .addCoffee-btn {
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
  .tooltip {
    height: 4rem;
    font-size: 2rem;
    color: red;
  }
  .removeCoffee-btn {
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.yellow};

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`
