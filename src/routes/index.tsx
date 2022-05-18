import { Switch, Route } from "react-router-dom";
import {
  CadastroContratos,
  Contratos,
  ContratosEstatistica,
  PrestadoresServico,
} from "../pages";

const Rotas = () => (
  <Switch>
    <Route exact path="/">
      <CadastroContratos />
    </Route>
    <Route path="/contracts">
      <Contratos />
    </Route>
    <Route path="/statisticalContracts">
      <ContratosEstatistica />
    </Route>
    <Route path="/serviceProviders">
      <PrestadoresServico />
    </Route>
  </Switch>
);

export { Rotas };
