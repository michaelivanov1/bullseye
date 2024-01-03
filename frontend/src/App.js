import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Livvic, sans-serif' }}>
      <div>
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
