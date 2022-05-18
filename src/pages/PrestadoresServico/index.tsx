import { StyledMain } from "../PrestadoresServico/style";
import { AiOutlineUser } from "react-icons/ai";


const PrestadoresServico = () => (
    <StyledMain>
      <section className="container-info">
        <img
          src="https://cdn.discordapp.com/attachments/971859006173896744/976306416728047646/Screenshot_31.png"
          alt="logoSogo"
        />
        <div className="container">
          <AiOutlineUser />
          <div className="content">
            <div className="identifier">
              <hgroup>
                <h4>Nome: </h4>
                <h4>CPF: </h4>
              </hgroup>
            </div>
            <div className="endereço">
              <h4>Endereço: </h4>
              <h4>Complemento: </h4>
            </div>
          </div>
        </div>
      </section>
    </StyledMain>
)

export { PrestadoresServico }