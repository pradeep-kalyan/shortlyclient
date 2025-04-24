import SniplyUI from "./components/SniplyUI";
import { useSniplyLogic } from "./hooks/useSniplyLogic";

function App() {
  const logic = useSniplyLogic();
  return <SniplyUI {...logic} />;
}

export default App;
