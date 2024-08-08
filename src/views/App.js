import logo from "./logo.svg";
import "./App.css";
import ListTodos from "./Todos/ListTodos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>TODO APPS with React</p>
          <ListTodos />
        </header>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
