import './App.css';
import Contato from './contato/Contato';
import Footer from './footer/Footer';
import Certificados from './certificados/certificados';
import Habilidades from './habilidades/Habilidades';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Projetos from './projetos/Projetos';
import Sobre from './sobre/Sobre';
// import certificados from './certificados/Certificados';


function App() {
  return (
    <div className="app">
      <Home />
      <Sobre />
      <Certificados />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
