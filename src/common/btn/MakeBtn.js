import React from 'react';
import Styles from './MakeBtn.module.css';

const MakeBtn = ({ text, onClick }) => {
  return (
    <button className={Styles.makeBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default MakeBtn;
