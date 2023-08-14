import { CotizadorProvider } from "./context/CreateContext";
import AppSeguro from "./components/AppSeguro";

function App() {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  );
}

export default App;
