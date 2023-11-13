/** @format */

import React from 'react';
import GroupUserCard from './GroupUserCard';
import GroupInput from './GroupInput';
import GroupButton from './GroupButton';

export default function GroupDetail() {
  const groupMembers = [
    { userName: '강경규' },
    { userName: '또띠' },
    { userName: '은영' },
    { userName: '쭈쭈' },
    { userName: '박영자' },
    { userName: '최민수' },
    { userName: '이지영' },
    { userName: '정성민' },
    { userName: '신지수' },
    { userName: '김영호' },
  ];
  return (
    <div className="flex flex-col items-center w-10/12 gap-5 mt-20 md:mt-10 transition-all">
      <h1 className=" text-4xl">그룹 이름</h1>

      <div className="flex flex-col gap-3 p-2">
        <GroupInput buttonText="검색" />
        <p className="text-2xl">그룹원 목록</p>
        {groupMembers.map((member, i) => {
          return <GroupUserCard key={i} userName={member.userName} />;
        })}
        <GroupButton text="그룹 삭제" /> <GroupButton text="그룹 편집" />
      </div>
    </div>
  );
}
