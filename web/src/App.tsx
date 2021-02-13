import Container from "./components/Container";
import Counter from "./components/Counter";
import Mirror from "./components/Mirror";
import CountProvider from "./context/CountContext";
import ThemeProvider from "./context/ThemeContext";

import './global.css'

function App() {

  return (
    <ThemeProvider>
      <Container>
      <CountProvider>
        <Counter />

        <hr />

        <Mirror />
      </CountProvider>
    </Container>
    </ThemeProvider>
  );
}

export default App;
