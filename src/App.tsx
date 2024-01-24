import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard, HomePage, Property } from './components';
import './App.css';

function App() {

  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties/:id" element={<Property />} />
        </Routes>
      </Dashboard>
    </Router>
  )
}

export default App;
