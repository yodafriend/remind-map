import React from 'react';
import Styles from './MakeBtn2.module.css';

const MakeBtn2 = ({ text, onClick }) => {
  return (
    <button className={Styles.makeBtn2} onClick={onClick}>
      {text}
    </button>
  );
};

export default MakeBtn2;
