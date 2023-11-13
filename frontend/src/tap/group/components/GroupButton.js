import React from 'react';
import Styles from './GroupButton.module.css';

export default function GroupButton({ text, onClick }) {
  return (
    <button onClick={onClick} className={`${Styles.GroupButton}`}>
      {text}
    </button>
  );
}
