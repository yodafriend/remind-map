import React, { useState } from 'react';
import Styles from './Sidebar.module.css';
import SidebarMenu from './SidebarMenu';
import SidebarContent from './SidebarContent';

const OpenBtn = ({ handleSidebarToggle, isSidebarOpen }) => {
  return (
    <div>
      <button className={Styles.openBtn} onClick={handleSidebarToggle}>
        {isSidebarOpen ? '◀' : '▶'}
      </button>
    </div>
  );
};

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState('검색');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // eslint-disable-next-line prettier/prettier
  const handleTabChange = tab => {
    setSelectedTab(tab);
  };

  return (
    <div className={Styles.sidebarContainer}>
      <div className={Styles.sidebar}>
        {isSidebarOpen && (
          <>
            <SidebarMenu handleTabChange={handleTabChange} />
            <SidebarContent selectedTab={selectedTab} />
          </>
        )}
      </div>
      <OpenBtn handleSidebarToggle={handleSidebarToggle} isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default Sidebar;
