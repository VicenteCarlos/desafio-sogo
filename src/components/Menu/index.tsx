import { BiUserCircle } from "react-icons/bi";
import { StyledSection } from "./style";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const { push } = useHistory();

  return (
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
            <button onClick={() => push("/")}>
              CADASTRAR CONTRATOS / PESSOAS
            </button>
          </li>
          <li>
            <button onClick={() => push("/serviceProviders")}>
              PRESTADORES(AS) DE SERVIÇOS
            </button>
          </li>
          <li>
            <button onClick={() => push("/contracts")}>CONTRATOS</button>
          </li>
          <li>
            <button onClick={() => push("/statisticalContracts")}>
              CONTRATOS-ESTATISTICAS
            </button>
          </li>
        </ul>
      </div>
    </StyledSection>
  );
};

export { Menu };
