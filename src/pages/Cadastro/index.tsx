import { RegisterPeopleForm ,RegisterContractForm } from "../../components";
import { StyledDiv } from "./style"
import "./styled.css"

const Cadastro = () => {
  return (
    <>
      <img
        src="https://cdn.discordapp.com/attachments/971859006173896744/976306416728047646/Screenshot_31.png"
        alt="logoSogo"
      />
      <StyledDiv>
        <h2>Cadastrar Pessoa</h2>
        <RegisterPeopleForm />
      </StyledDiv>
      <StyledDiv>
        <h2>Cadastrar Contrato</h2>
        <RegisterContractForm />
      </StyledDiv>
    </>
  );
};

export { Cadastro };
