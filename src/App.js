import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navigation from './components/Navigation';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import Popup from './components/Popup';



function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route psth="/" element={<LoginScreen />}></Route>
        <Route psth="/" element={<RegisterScreen />}></Route>
      </Routes>
      <Popup />
    </BrowserRouter>
  );
}

export default App;