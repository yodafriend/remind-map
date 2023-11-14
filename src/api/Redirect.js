import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  console.log(code);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(`http://localhost:8080/kakao/kakaoLogin/${code}`)
      .then(response => {
        console.log(response.data.memeberId);
        console.log(response.data.nickname);
        console.log(response.data.thumbnailImageUrl);
        localStorage.setItem('Authorization', response.headers.authorization);
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
              Authorization: jwtToken, // JWT 토큰을 헤더에 추가
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

  return <button onClick={handleTestClick}>테스트</button>;
};

export default Redirect;
