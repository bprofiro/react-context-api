import Container from "./components/Container";
import Counter from "./components/Counter";
import Mirror from "./components/Mirror";
import CountProvider from "./context/CountContext";

import './global.css'

function App() {

  return (
    <Container>
      <CountProvider>
        <Counter />

        <hr />

        <Mirror />
      </CountProvider>
    </Container>
  );
}

export default App;
