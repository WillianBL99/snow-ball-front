import '../../styled/css/reset.css';
import '../../styled/css/index.css';
import '../../styled/css/query.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../Routes/Login';
import MainScreen from '../Routes/MainScreen';
import Video from '../Routes/Video';
import { Provider } from '../../hooks/UserContext';

function App() {
	return (		
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/main-screen' element={<MainScreen />} />
          <Route path='/videos/:id' element={<Video />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
	);
}

export default App