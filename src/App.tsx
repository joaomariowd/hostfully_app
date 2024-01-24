import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components';
import './App.css';
import { Home, Property } from './pages';

function App() {

  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties/:propertyId" element={<Property />} />
        </Routes>
      </Dashboard>
    </Router>
  )
}

export default App;
