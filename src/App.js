import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Information from './components/Information';
import Interests from './components/Interests';

function App() {
  return (
    <div className="App">
      <div style={{textAlign:"center", backgroundColor:"darkgray", margin:"25px",border: "3px solid black", width:"500px"}}>
      <Information/>
      <About/>
      <Interests/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
