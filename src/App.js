// import logo from './logo.svg';
import './App.css';
import Users from "./my-app/Users";

function App(props) {
  let id = props.id;
  return (
    <div className="App">
      <header className="App-header">
        <Users />
      </header>
    </div>
  );
}

export default App;
