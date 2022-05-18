import styled from "styled-components"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #61728c;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
  width: 20vw;

  input {
    background-color: #1565c0;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    color: white;
  }

  label {
    color: white;
  }

  p {
    margin: 1rem 0;
    color: white;
  }

  button {
    height: 3rem;
    font-weight: bold;
    font-size: 16px;
    margin-top: 1rem;
    color: #1565c0;
  }
`;

export { StyledForm }