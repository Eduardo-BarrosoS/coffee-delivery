import styled from 'styled-components'

export const TitleContainer = styled.div`
  margin: 8rem 0 2.8rem 0;
  h3 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-weight: 400;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const OrderInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .orderContainer {
    width: 52.6rem;
    height: 27rem;
    padding: 4.5rem 4rem;
    border: 1px solid transparent;
    border-radius: 20px;
    background: linear-gradient(to right, white, white),
      linear-gradient(to right, #dbac2c, #8047f8);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;

    border-radius: 6px 36px;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    div {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    .mapPinContainer {
      background: ${(props) => props.theme.purple};
    }
    .timerContainer {
      background: ${(props) => props.theme.yellow};
    }
    .currencyDollar {
      background: ${(props) => props.theme['yellow-dark']};
    }

    div div:first-child {
      width: 3.2rem;
      height: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.white};
      border-radius: 50%;
    }

    div div:last-child {
      span {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-text']};
      }
    }

    div:first-child div span {
      width: 30.1rem;
    }
    div:nth-child(2) div span {
      width: 14.1rem;
    }
    div:last-child div span {
      width: 16.2rem;
    }
  }
`
