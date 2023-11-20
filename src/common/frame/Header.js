import React, { useState } from 'react';
import Styles from './Header.module.css';
import { AiFillHome } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Header = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = link;
  };

  const [islogined, setIsLogined] = useState(false);

  return (
    <header className={Styles.header}>
      <Link to="/" className={Styles.title}>
        📌 RemindMap
      </Link>
      {islogined ? (
        <div className={Styles.userInfo}>
          <div className={Styles.userPhoto} />
          <div className={Styles.userName}>홍사미</div>
          <AiFillHome className={Styles.home} />
          <Link to="/group">
            <HiUserGroup className={Styles.home} />
          </Link>
        </div>
      ) : (
        <button className={Styles.loginBtn} onClick={handleLogin}>
          로그인
        </button>
      )}
    </header>
  );
};

export default Header;
