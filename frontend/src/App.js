import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import GroupHome from './Group/pages/GroupHome';
import Main from './common/Main';
import Sidebar from './common/Sidebar';
import Redirect from './api/Redirect';
import PostingModal from './userPosting/PostingModal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/" element={<Main />} />
          <Route path="/group" element={<GroupHome />} />
          <Route exact path="/kakao/callback" element={<Redirect />} />
        </Routes>
        <PostingModal /> {/* 확인용 */}
      </div>
    </BrowserRouter>
  );
}

export default App;
