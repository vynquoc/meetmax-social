import { Routes, Route } from 'react-router-dom';
import Authentication from './features/Auth/pages';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import FriendPage from './features/Friend/pages/FriendProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="auth/*" element={<Authentication />} />
        <Route path="/:username" element={<FriendPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
