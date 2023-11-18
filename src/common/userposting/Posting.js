import React, { useState } from 'react';
import Styles from './Posting.module.css';
import { AiFillStar } from 'react-icons/ai';

const Posting = ({ title, nickName, wentDate, fav, latitude, longitude }) => {
  const [onFav, setOnFav] = useState(fav);

  const handleFav = () => {
    setOnFav(!onFav);
  };

  return (
    <div className={Styles.posting}>
      <div className={Styles.postingInfo}>
        <div className={Styles.title}>{title}</div>
        <div className={Styles.nickName}>{nickName}</div>
        <div className={Styles.wentDate}>{wentDate}</div>
        <div className={Styles.latitude}>{latitude}</div>
        <div className={Styles.longitude}>{longitude}</div>
      </div>
      <button className={Styles.fav} onClick={handleFav}>
        <AiFillStar className={`${Styles.fav} ${onFav ? Styles.active : ''}`} />
      </button>
    </div>
  );
};

export default Posting;
