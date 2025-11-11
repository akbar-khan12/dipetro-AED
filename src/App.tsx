import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StatesListPage from './pages/StatesListPage';
import StateDetailsPage from './pages/StateDetailsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<StatesListPage />} />
          <Route path="/aed-laws/:slug" element={<StateDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
