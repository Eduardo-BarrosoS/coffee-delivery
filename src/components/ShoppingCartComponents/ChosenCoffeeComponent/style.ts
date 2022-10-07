import styled from 'styled-components'

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

export const ChosenCoffees = styled.div`
  width: 100%;
  .prices {
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
  .confirm-btn {
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
    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
    &:disabled {
      background: ${(props) => props.theme['base-label']};
      cursor: not-allowed;
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
      div,
      button {
        background: ${(props) => props.theme['base-button']};
        border-radius: 0.6rem;
        display: flex;
        align-items: center;
        gap: 0.6em;
        padding: 0.6rem 0.8rem;
        height: 3.2rem;
        transition: all ease 0.2s;
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
      button {
        border: none;
        cursor: pointer;
        &:hover {
          background: ${(props) => props.theme['base-hover']};
        }
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
