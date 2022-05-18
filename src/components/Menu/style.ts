import styled from "styled-components"

const StyledSection = styled.section`
    height: 100vh;
    background-color: #1D66DB;
    color: white;
    width: 150px;

    .info-user {
      display: flex;
      align-items: center;
      justify-content: space-between;

      hgroup{
        h4 {
          margin: 1rem 1rem;
        }
      }

      svg {
        color: white;
        font-size: 50px;
      }
    }

    .contratos-e-serviço {
      ul {
        li {
          margin: 3.5rem 0;
          text-align: center;

          button {
            background: none;
            border: none;
            color: white;
            font-size: 14px;
            cursor: pointer;
            text-align: center;
          }
        }
      }
    }
`

export { StyledSection }