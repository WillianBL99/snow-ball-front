/* import '../../styled/css/reset.css';
import '../../styled/css/index.css' */

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../Routes/Login';
import MainScreen from '../Routes/MainScreen';

function App() {
	return (		
    <BrowserRouter>
      <Routes>
        <Route path='/main-screen' element={<MainScreen />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
	);
}

export default App