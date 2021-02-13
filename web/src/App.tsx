import Container from "./components/Container";
import Counter from "./components/Counter";
import Mirror from "./components/Mirror";

import './global.css'

function App() {
  return (
    <Container>
      <Counter />

      <hr />

      <Mirror />
    </Container>
  );
}

export default App;
