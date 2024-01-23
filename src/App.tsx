import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard, HomePage } from './components';
import './App.css';

function App() {

  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Dashboard>
    </Router>
  )
}

export default App;
