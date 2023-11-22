import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './common/frame/Main';
import Header from './common/frame/Header';
import Sidebar from './common/frame/Sidebar';
import Redirect from './api/Redirect';
import GroupHome from './tap/group/GroupHome';
import { useEffect } from 'react';
import useGroup from './hooks/useGroup';
import { RecoilRoot } from 'recoil';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState('');
  const { getGroups } = useGroup();

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <BrowserRouter>
      <RecoilRoot>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/:tab_name?/:type?/:groupId?"
              element={
                <>
                  <Main searchResults={searchResults} onMarkerSelect={setSelectedMarker} />
                  <Sidebar onSearchResults={setSearchResults} selectedMarker={selectedMarker} />
                </>
              }
            />
            <Route path="/group/:type?/:groupId?" element={<GroupHome />} />
            <Route exact path="/kakao/callback" element={<Redirect />} />
          </Routes>
          {/*<PostingModal />*/}
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
