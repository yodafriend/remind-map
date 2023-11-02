import './App.css';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import { Routes, Route } from 'react-router-dom';
import GroupHome from './group/pages/GroupHome';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/group" element={<GroupHome />} />
      </Routes>
    </div>
  );
}

export default App;
