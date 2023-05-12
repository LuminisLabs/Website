import { Routes, Route } from 'react-router-dom';
import { Products } from '../pages/Products/index.jsx';
import { About } from '../pages/About/index.jsx';
import { Home } from '../pages/Home/index.jsx';
import { Team } from '../pages/Team/index.jsx';
import { CurrentPageProvider } from '../contexts/currentPage.jsx';

function App() {
  return (
    <CurrentPageProvider>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/sobre-nos" element={ <About/> }/>
        <Route path="/produtos" element={ <Products/> }/>
        <Route path="/time" element={ <Team/> }/>
      </Routes>
    </CurrentPageProvider>
  );
}

export default App;
