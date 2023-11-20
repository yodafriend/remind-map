import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useFriends = () => {
  const navigator = useNavigate();
  const [friends, setFriends] = useState([]);
  const getFriends = async () => {
    try {
      const result = await axios.get('/friends');
      console.log(result);
      setFriends(result.data);
    } catch (error) {}
  };

  return { getFriends, friends };
};
export default useFriends;
