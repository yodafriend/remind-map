import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './common/frame/Main';
import Header from './common/frame/Header';
import Sidebar from './common/frame/Sidebar';
import Redirect from './api/Redirect';
import PostingModal from './common/userposting/PostingModal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/kakao/callback" element={<Redirect />} />
        </Routes>
        <PostingModal /> {/* 확인용 */}
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
