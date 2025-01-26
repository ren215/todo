import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Icon from './components/Icon';

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Icon text="平" size="small" color="red" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
