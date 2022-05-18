import { createGlobalStyle } from "styled-components";

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

    body::-webkit-scrollbar {
         width: 12px;              
    }

    body::-webkit-scrollbar-track {
        background: orange;      
    }

    body::-webkit-scrollbar-thumb {
        background-color: blue;   
        border-radius: 20px;      
        border: 3px solid orange; 
    }
`;

export { GlobalStyle };
