import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 112rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.2rem 16rem;
`
export const Locale = styled.div`
  width: 14.3rem;
  height: 3.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: ${(props) => props.theme['purple-light']};

  &.map {
    color: ${(props) => props.theme.purple};
  }

  span {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 14px;
    font-weight: 400;
  }
`
