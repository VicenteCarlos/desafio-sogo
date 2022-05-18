import { createContext, useContext, useState, ReactNode } from "react";

interface IFormContextProps {
  children: ReactNode;
}

interface IPeopleProps {
  name: string;
  cpf: string;
  endereço: string;
}

interface IContractProps {
  number: string;
  date_register: string;
  date_validate: string;
  name_people: string;
  cpf_people: string;
  endereço_people: string;
}

interface IPeople {
  peopleRegistered: Array<IPeopleProps>;
  contractRegistered: Array<IContractProps>;
  contractRegisteredV2: Array<IContractProps>;
  addPeople: (people: IPeopleProps) => void;
  addContract: (contract: IContractProps) => void;
  filterContracts: (value: string) => void;
}

const FormContext = createContext<IPeople>({} as IPeople);

const FormProvider = ({ children }: IFormContextProps) => {
  const [peopleRegistered, setPeopleRegistered] = useState<IPeopleProps[]>([]);
  const [contractRegistered, setContractRegistered] = useState<
    IContractProps[]
  >([]);
  const [contractRegisteredV2, setContractRegisteredV2] = useState<
    IContractProps[]
  >(contractRegistered);

  console.log(contractRegistered);

  const addPeople = (people: IPeopleProps): void => {
    setPeopleRegistered([...peopleRegistered, people]);
  };

  const addContract = (contract: IContractProps): void => {
    setContractRegistered([...contractRegistered, contract]);
    setContractRegisteredV2([...contractRegisteredV2, contract]);
  };

  const filterContracts = (value: string) => {
    const contractFiltered = contractRegistered.filter(
      (item) =>
        item.number === value || item.date_validate === value
    );
    if (value==="") {
        setContractRegisteredV2(contractRegistered)
    }
    setContractRegisteredV2(contractFiltered);
  };

  return (
    <FormContext.Provider
      value={{
        peopleRegistered,
        addPeople,
        contractRegistered,
        addContract,
        filterContracts,
        contractRegisteredV2,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

const useFormContext = () => useContext(FormContext);

export { FormProvider, useFormContext };
