import './App.css';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import { Routes, Route } from 'react-router-dom';
import GroupPage from './Group/pages/GroupPage';
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/group" element={<GroupPage />} />
      </Routes>
    </div>
  );
}

export default App;
