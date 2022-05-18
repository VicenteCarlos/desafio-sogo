import { Switch, Route } from "react-router-dom";
import {
  Cadastro,
  Contratos,
  ContratosEstatistica,
  PrestadoresServico,
} from "../pages";

const Rotas = () => (
  <Switch>
    <Route exact path="/">
      <Cadastro />
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
