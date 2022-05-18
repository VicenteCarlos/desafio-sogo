import {createGlobalStyle} from "styled-components" 

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`

export { GlobalStyle }