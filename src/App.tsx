import "./App.scss";
import { Footer } from "./components/FooterComponent";
import { NavigationBar } from "./components/NavigationBarComponent";
import logo from "./green-computer-code.svg";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="green-computer-code" />
      </header>
      <Footer />
    </div>
  );
}

export default App;
