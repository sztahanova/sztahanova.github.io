import logo from "./green-computer-code.svg";
import "./App.scss";
import NavigationBar from "./components/NavigationBarComponent";
import Footer from "./components/FooterComponent";

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
