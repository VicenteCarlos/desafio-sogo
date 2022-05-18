import { ReactNode } from "react";
import { FormProvider } from "./FormProvider";

interface IProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: IProviderProps) => {
  return (
    <>
      <FormProvider>{children}</FormProvider>
    </>
  );
};

export { Provider };
