import React from 'react';
import GroupCard from './GroupCard';
import Styles from './GroupList.module.css';
import GroupButton from './GroupButton';
export default function GroupList() {
  const group = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];

  return (
    <div
      className={`${Styles.UserList} fixed md:sticky w-screen md:w-80 flex md:flex-col items-center overflow-x-scroll md:overflow-y-scroll gap-3 p-2`}
    >
      <div className="flex md:flex-col min-w-fit w-40 gap-3">
        <GroupButton text="그룹 만들기" />
      </div>
      {group.map((el, i) => {
        return <GroupCard key={i} />;
      })}
    </div>
  );
}
