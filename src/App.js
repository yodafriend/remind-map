import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Main from './common/frame/Main';
import Header from './common/frame/Header';
import Sidebar from './common/frame/Sidebar';
import Redirect from './api/Redirect';
import PostingModal from './common/userposting/PostingModal';
import GroupHome from './tap/group/pages/GroupHome';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState('');

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main searchResults={searchResults} onMarkerSelect={setSelectedMarker} />
                <Sidebar onSearchResults={setSearchResults} selectedMarker={selectedMarker} />
              </>
            }
          />
          <Route exact path="/kakao/callback" element={<Redirect />} />
        </Routes>
        {/*<PostingModal />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
