import styled from "styled-components";

const Contratos = () => {
  return (
    <>
      <img
        src="https://cdn.discordapp.com/attachments/971859006173896744/976306416728047646/Screenshot_31.png"
        alt="logoSogo"
      />
      <Container>
        <div className="infos">
          <h1>CONTRATOS</h1>
          <p>VENCIDOS</p>
          <input placeholder="Digite o nome, numero ou a data do contrato" />
        </div>
        <div className="contratos"></div>
      </Container>
    </>
  );
};

const Container = styled.div`
    margin: auto auto;
    display: flex;
    flex-direction: column;
    width: 60vw;
    padding: 5px;
    background-color: #61728C;

    .infos {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #55AAE1;

        p {
            color: white;
            font-weight: bold;
        }

        input {
            border: none;
            padding: 7px;
            width: 28%;
        }
    }
`;

export { Contratos };
