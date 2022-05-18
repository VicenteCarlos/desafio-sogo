import { BiUserCircle } from "react-icons/bi";
import { StyledSection } from "./style";

const Menu = () => (
  <StyledSection>
    <div className="info-user">
      <hgroup>
        <h4>Nome: </h4>
        <h4>Cargo: </h4>
      </hgroup>
      <BiUserCircle />
    </div>
    <div className="contratos-e-serviço">
      <ul>
        <li>
          <button>CADASTRAR CONTRATOS</button>
        </li>
        <li>
          <button>PRESTADORES(AS) DE SERVIÇOS</button>
        </li>
        <li>
          <button>CONTRATOS</button>
        </li>
        <li>
          <button>CONTRATOS-ESTATISTICAS</button>
        </li>
      </ul>
    </div>
  </StyledSection>
);

export { Menu };
