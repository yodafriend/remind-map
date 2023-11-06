import React from 'react';
import Styles from './Header.module.css';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.title}>📌 RemindMap</div>
      <Link to="/">홈</Link>
      <Link to="/group">그룹</Link>
      <div className={Styles.userInfo}>
        <div className={Styles.userPhoto} />
        <div className={Styles.userName}>홍사미</div>
        <AiFillHome className={Styles.home} />
      </div>
    </header>
  );
};

export default Header;
