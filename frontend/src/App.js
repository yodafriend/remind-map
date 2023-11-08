import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import GroupHome from './Group/pages/GroupHome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/group" element={<GroupHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
