import { AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";

const People = ({ item }: any) => {
  return (
    <Container>
      <AiOutlineUser />
      <div className="content">
        <div className="identifier">
          <hgroup>
            <h4>Nome: {item.name}</h4>
            <h4>CPF: {item.cpf}</h4>
          </hgroup>
        </div>
        <div className="endereço">
          <h4>Endereço: {item.endereço}</h4>
          <h4>Complemento: </h4>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  .content {
    border: 4px solid transparent;
    cursor: pointer;
  }

  .content:hover {
    border-color: #0D99FF;
  }
`

export { People };
