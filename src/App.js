import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <Routes />
        </Router>
      </header>
    </div>
  );
}

export default App;
