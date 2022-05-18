import { Container } from "./style";
import { BsSearch } from "react-icons/bs";
import { Contract } from "../../components";
import { useFormContext } from "../../providers/FormProvider";
import { useState } from "react"

const Contratos = () => {
  const { contractRegisteredV2, filterContracts } = useFormContext();
  const [search, setSearch] = useState("")

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
          <div>
            <input 
              placeholder="Digite o numero ou a data do contrato" 
              onChange={e => {
                filterContracts(e.target.value)
                setSearch(e.target.value)
              }}
            />
            <button onClick={() => filterContracts(search)}>
              <BsSearch />
            </button>
          </div>
        </div>
        <div className="contratos">
          {contractRegisteredV2.map((item, i) => (
            <Contract key={i} item={item} />
          ))}
        </div>
      </Container>
    </>
  );
};

export { Contratos };
