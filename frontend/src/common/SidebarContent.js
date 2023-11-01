import React from 'react';
import Styles from './SidebarMenu.module.css';
import SearchPage from '../TapPages/SearchPage';
import RankPage from '../TapPages/RankPage';
import FavPage from '../TapPages/FavPage';
import GroupPage from '../TapPages/GroupPage';
import MarkerPage from '../TapPages/MarkerPage';
import RoutePage from '../TapPages/RoutePage';

const SidebarContent = ({ selectedTab }) => {
  return (
    <div className={Styles.sidebarContent}>
      {selectedTab === '검색' && <SearchPage />}
      {selectedTab === '랭킹' && <RankPage />}
      {selectedTab === '찜' && <FavPage />}
      {selectedTab === '그룹' && <GroupPage />}
      {selectedTab === '마커' && <MarkerPage />}
      {selectedTab === '루트' && <RoutePage />}
    </div>
  );
};

export default SidebarContent;
