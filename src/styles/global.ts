import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

     :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['base-label']};
    }

    :root {
        font-size: 62.5%;
    }r

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

     body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    } 

`
