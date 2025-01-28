import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Add from './page/Add';
import Home from './page/Home';

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
