import '../../styled/css/reset.css';
import '../../styled/css/index.css';
import '../../styled/css/query.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateVideo from '../Routes/CreateVideo';

import Login from '../Routes/Login';
import MainScreen from '../Routes/MainScreen';
import { Provider } from '../../hooks/UserContext';

function App() {
	return (		
    <Provider>
      <BrowserRouter>
        <Routes>
        <Route path='/create-video' element={<CreateVideo />} />
          <Route path='/main-screen' element={<MainScreen />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
	);
}

export default App