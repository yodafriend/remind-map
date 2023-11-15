import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './common/frame/Main';
import Header from './common/frame/Header';
import Sidebar from './common/frame/Sidebar';
import Redirect from './api/Redirect';
import PostingModal from './common/userposting/PostingModal';
import GroupHome from './tap/group/pages/GroupHome';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main /> <Sidebar />
                </>
              }
            />
            <Route path="/group" element={<GroupHome />} />
            <Route exact path="/kakao/callback" element={<Redirect />} />
          </Routes>
          <PostingModal /> {/* 확인용 */}
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
