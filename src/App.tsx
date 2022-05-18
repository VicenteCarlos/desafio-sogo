import { GlobalStyle } from "./styles/Global";
import { Rotas } from "./routes";
import { Menu } from "./components"
import { StyledDiv } from "./style"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        <Rotas />
        <Menu />
      </StyledDiv>
    </>
  );
};

export default App;
