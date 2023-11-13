import React from 'react';
import Styles from './GroupInput.module.css';

export default function GroupInput({ buttonText }) {
  return (
    <div className={`${Styles.GroupInputContainer} p-1 rounded-md flex gap-2`}>
      <input type="text" className=" p-1" />
      {buttonText ? (
        <button
          type="button"
          className={`${Styles.GroupInputButton} px-1 rounded-md transition-all`}
        >
          {buttonText}
        </button>
      ) : null}
    </div>
  );
}
