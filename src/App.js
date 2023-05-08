import './App.css';
import Contato from './contato/Contato';
import Footer from './footer/Footer';
import Habilidades from './habilidades/Habilidades';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Projetos from './projetos/Projetos';
import Sobre from './sobre/Sobre';


function App() {
  return (
    <div className="app">
      <Home />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
