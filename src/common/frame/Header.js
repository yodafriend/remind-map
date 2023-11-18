import { useState, useEffect } from 'react';
import Styles from './Header.module.css';
import { AiFillHome } from 'react-icons/ai';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserLogin } from '../../store/UserLogin';
import { UserProfile } from '../../store/UserProfile';
import { UserNickname } from '../../store/UserNickname';
import axios from 'axios';

const Header = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login&scope=friends,talk_message`;

  const handleLogin = () => {
    window.location.href = link;
  };

  const [isLogined, setIsLogined] = useRecoilState(UserLogin);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('Authorization');
    setIsLogined(false);
  };

  const profileImg = useRecoilValue(UserProfile);
  const nickname = useRecoilValue(UserNickname);

  useEffect(() => {
    const jwtToken = localStorage.getItem('Authorization');
    axios
      .post('https://localhost:8080/login-check', {
        headers: {
          Authorization: `${jwtToken}`,
        },
      })
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log('못 쓰는 토큰');
      });
  }, [setIsLogined]);

  return (
    <header className={Styles.header}>
      <div className={Styles.title}>📌 RemindMap</div>
      {isLogined && profileImg ? (
        <div className={Styles.userInfo} onClick={toggleDropdown}>
          <img className={Styles.userPhoto} src={profileImg} alt="유저 프로필" />
          <div className={Styles.userName}>{nickname}</div>
          <AiFillHome className={Styles.home} />
          {isDropdownVisible && (
            <div className={Styles.dropdown}>
              <button onClick={handleLogout}>로그아웃</button>
            </div>
          )}
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
