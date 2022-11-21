import logo from './logo.svg';
import './App.css';
import Agregar from './Components/Agregar';
import Mostrar from './Components/Mostrar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Agregar />
          <Mostrar/>
        </p>
      </header>
    </div>
  );
}
export default App;
