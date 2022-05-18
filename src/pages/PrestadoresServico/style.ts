import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  
  .container-info {
    img {
      width: 300px;
      border-radius: 30px;
      margin-top: 1rem;
      margin-left: 1rem;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;

      svg {
        color: black;
        margin-top: 3rem;
        width: 300px;
        font-size: 50px;
        background-color: #D9D9D9;
        border-radius: 8px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 29.9vh;
        margin-left: 1.5rem;
      }

      .content {
        background-color: #61728c;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 3rem;
        padding: 10px;
        width: 50vw;
        height: 27vh;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;

        .identifier {
          hgroup {
            display: flex;
            color: #1E1E1E;
            margin-bottom: 2rem;
            background-color: #1D66DB;
            padding: 10px;
            border-radius: 8px;
            justify-content: space-between;
            
            h4 {
              margin: 0 1rem;
            }
          }
        }

        .endereço {
          background-color: #55AAE1;
          padding: 10px;
          border-radius: 8px;
          color: #1E1E1E;
   
          h4 {
            margin: 2rem 1rem;
          }
        }
      }
    }
  }
`;

export { StyledMain };
