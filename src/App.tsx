import "./App.css";
import Counter from "./components/Counter";
import { AppContextProvider } from "./context/StateContext";

const App = () => {
  return (
    <AppContextProvider>
      <div className="app">
        <Counter />
      </div>
    </AppContextProvider>
  );
};

export default App;
