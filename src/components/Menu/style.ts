import styled from "styled-components"

const StyledSection = styled.section`
    height: 100vh;
    background-color: #1D66DB;
    padding: 20px;
    color: white;

    .info-user {
      display: flex;
      align-items: center;
      justify-content: space-between;

      hgroup{
        h4 {
          margin: 1rem 0;
        }
      }

      svg {
        color: white;
        font-size: 80px;
      }
    }

    .contratos-e-serviço {
      ul {
        li {
          margin: 3.5rem 0;

          button {
            background: none;
            border: none;
            color: white;
            font-size: 17px;
            cursor: pointer;
          }
        }
      }
    }
`

export { StyledSection }