import styled from "styled-components";
import { useFormContext } from "../../providers/FormProvider";
import { useState, useEffect } from "react";

const ContratosEstatistica = () => {
  const { contractRegistered } = useFormContext();
  const [med, setMed] = useState<number>(0);

  useEffect(() => {
    contractRegistered.forEach((item) => {
      setMed(med + Number(item.date_validate[3]));
      setMed(med - Number(item.date_validate[13]));
    });
  }, []);

  return (
    <>
      <img
        src="https://cdn.discordapp.com/attachments/971859006173896744/976306416728047646/Screenshot_31.png"
        alt="logoSogo"
      />
      <Container>
        <section>
          <h2>Numero de contratos cadastrados:</h2>
          <p>{contractRegistered.length}</p>
        </section>
        <section>
          <h2>Numero de contratos a vencer:</h2>
          <p>Todos irão vencer</p>
        </section>
        <section id="last">
          <h2>
            Tempo médio de prestaçao de serviço:{" "}
            {med / contractRegistered.length}
          </h2>
          <p></p>
        </section>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    margin: 0 3rem;
    background-color: #1d66db;
    color: white;
    padding: 15px;
    border-radius: 15px;

    p {
      font-size: 25px;
      text-align: center;
      margin-top: 2rem;
    }
  }

  #last {
    margin-right: 15rem;
  }
`;

export { ContratosEstatistica };
