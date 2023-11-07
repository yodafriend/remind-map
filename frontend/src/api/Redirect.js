import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  console.log(code);
  const navigate = useNavigate();
  navigate('/');

  /*
  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios.post(`http://localhost/kakao/kakaoLogin${code}`).then(r => {
      console.log(r.data);

      localStorage.setItem('name', r.data.user_name);

      navigate('/');
    });
  }, []);*/
};

export default Redirect;
