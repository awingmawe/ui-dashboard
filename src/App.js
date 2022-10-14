import { Routes, Route } from 'react-router-dom';
import HomeDashboard from "./pages/home"
import SummaryDashboard from "./pages/summary"
import MainLayout from "./common/components/layout/mainlayout"
import Login from './pages/login';

import './styles/login.scss';
import './styles/default.scss';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<MainLayout />} >
        <Route path='/' element={<HomeDashboard />} />
        <Route path='/summary' element={<SummaryDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
