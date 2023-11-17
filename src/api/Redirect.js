import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { UserId } from '../store/UserId';
import { UserNickname } from '../store/UserNickname';
import { UserProfile } from '../store/UserProfile';

const Redirect = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  console.log(code);
  const navigate = useNavigate();

  const [userId, setUserId] = useRecoilState(UserId);
  const [userNickname, setUserNickname] = useRecoilState(UserNickname);
  const [userProfile, setUserProfile] = useRecoilState(UserProfile);

  useEffect(() => {
    const jwtToken = localStorage.getItem('Authorization');
    const axiosInstance = axios.create();
    console.log(jwtToken);

    // 응답 인터셉터 설정
    axiosInstance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 401) {
          console.log('401 Unauthorized:', error.response.data.message);
          navigate('/logout');
        }
        return Promise.reject(error);
      },
    );

    axiosInstance
      .post(`http://localhost:8080/kakao/kakaoLogin/${code}`)
      .then(response => {
        localStorage.setItem('Authorization', response.headers.authorization);
        setUserId(response.data.memberId);
        setUserNickname(response.data.nickname);
        setUserProfile(response.data.thumbnailImageUrl);
        console.log(userId, userNickname, userProfile);
        navigate('/');
      })
      .catch(error => console.error(error));
  }, []);

  const handleTestClick = () => {
    const jwtToken = localStorage.getItem('Authorization');

    if (jwtToken) {
      axios
        .post(
          'http://localhost:8080/test',
          {},
          {
            headers: {
              Authorization: jwtToken,
            },
          },
        )
        .then(response => {
          if (response.status === 200) {
            console.log('성공');
          } else {
            console.log('401 원인: ', response.data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      console.log('No JWT token found');
    }
  };

  return (
    <button style={{ zIndex: '800', width: '200px', height: '200px' }} onClick={handleTestClick}>
      버튼
    </button>
  );
};

export default Redirect;
