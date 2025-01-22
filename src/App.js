import "./styles/App.css"
import Header from "./components/header/Header"
import Main from "./components/main/Main";


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
