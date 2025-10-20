import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ThankYou from './pages/ThankYou';
import AppLayout from './pages/AppLayout';
import { AuthProvider } from './context/AuthProvider';
import { LoginAuthProvider } from './context/loginAuth/LoginAuthProvider';
import IDCard from './components/idCard/IDCard';

function App() {
  return (
    <AuthProvider>
      <LoginAuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="dashboard" element={<AppLayout />} />
            <Route path="id-card" element={<IDCard />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </LoginAuthProvider>
    </AuthProvider>
  );
}

export default App;
