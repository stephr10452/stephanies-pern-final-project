import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './index.css';

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className='App'>
    <Router>
      <NavBar />
      <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/candles" element={<Index />} />
        <Route path="/candles/new" element={<New />} />
        <Route path="/candles/:id" element={<Show />} />
        <Route path="/candles/:id/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      </main>
     </Router>
    </div>
  );
}

export default App;
