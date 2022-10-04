import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './layout/Nav';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import ContactPage from './pages/ContactPage';
import { AuthProvider } from './context/AuthContext';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<MovieDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
