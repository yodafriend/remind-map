import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './common/frame/Main';
import Header from './common/frame/Header';
import Sidebar from './common/frame/Sidebar';
import Redirect from './api/Redirect';
import GroupHome from './tap/group/pages/GroupHome';
import { useEffect } from 'react';
import useGroup from './hooks/useGroup';

function App() {
  const { getGroups } = useGroup();

  useEffect(() => {
    getGroups();
  }, []);
  return (
    <BrowserRouter>
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
          <Route path="/group/:type?/:groupId?" element={<GroupHome />} />
          <Route exact path="/kakao/callback" element={<Redirect />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
