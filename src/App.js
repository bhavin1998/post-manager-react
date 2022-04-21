import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Login/>
    </div>
    
    </>
  );
}

export default App;
