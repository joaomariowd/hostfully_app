import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard, HomePage, PropertyPage } from './components';
import './App.css';

function App() {

  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties/:propertyId" element={<PropertyPage />} />
        </Routes>
      </Dashboard>
    </Router>
  )
}

export default App;
