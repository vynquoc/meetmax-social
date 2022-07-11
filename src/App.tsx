import { Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import MainPage from './pages/MainPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="auth" element={<Authentication />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
