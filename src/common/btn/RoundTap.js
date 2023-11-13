import React from 'react';
import Styles from './RoundTap.module.css';

const RoundTap = ({ isMakerActive, handleActiveRoute }) => {
  return (
    <div className={Styles.roundTap}>
      <button
        className={`${Styles.Btn} ${isMakerActive ? Styles.active : ''}`}
        onClick={handleActiveRoute}
      >
        마커
      </button>
      <button className={`${isMakerActive ? '' : Styles.active}`} onClick={handleActiveRoute}>
        루트
      </button>
    </div>
  );
};

export default RoundTap;
