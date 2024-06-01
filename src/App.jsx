import { Route, Routes } from 'react-router-dom';
import Home from './paginas/home';
import Historia from './paginas/historia';
import Quiz from './paginas/quiz';
import Ayuda from './paginas/ayuda';

function App() {
  return (
    <>
      <Routes>
        <Route path="/CasaEcologica/" element={<Home/>} />
        <Route path="/CasaEcologica/historia" element={<Historia />} />
        <Route path="/CasaEcologica/quiz" element={<Quiz />} />
        <Route path="/CasaEcologica/contact" element={<Ayuda />} />
      </Routes>
    </>
  );
}

export default App;
