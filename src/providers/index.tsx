import { ReactNode } from "react";

interface IProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: IProviderProps) => <>{children}</>;

export { Provider };
