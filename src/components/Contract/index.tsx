
const Contract = ({ item }: any) => {
  return (
    <section>
      <hgroup>
        <h3>Nº CONTRATO: {item.number}</h3>
        <h3>DATA DE VENCIMENTO: {item.date_validate}</h3>
      </hgroup>
    </section>
  );
};

export { Contract }
