import React from 'react';
import Styles from './GroupCard.module.css';

export default function GroupCard() {
  return (
    <div
      className={`${Styles.CardContainer} flex min-w-fit md:w-full md:h-32 md:min-h-fit items-center justiy-center text-white rounded-md cursor-pointer transition-all`}
    >
      <div className="w-6/12 md:h-32 md:flex items-center justify-center p-2 hidden">
        <img
          className="w-12/12 md:w-20 rounded-full"
          src="https://img.icons8.com/?size=128&id=ckaioC1qqwCu&format=png"
          alt=""
        />
      </div>
      <p className="w-full md:w-6/12 p-3 md:text-center text-sm md:text-lg">그룹 이름</p>
    </div>
  );
}
