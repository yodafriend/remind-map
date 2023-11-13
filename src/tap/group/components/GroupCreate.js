import React from 'react';
import GroupInput from './GroupInput';
import GroupUserCard from './GroupUserCard';
import GroupButton from './GroupButton';

export default function GroupCreate() {
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
      <h1 className="text-4xl">그룹 생성</h1>
      <form className="flex flex-col gap-5">
        <p>그룹 이름을 입력해주세요</p>
        <GroupInput />
        <p>초대할 멤버의 이름을 입력해주세요</p>
        <GroupInput buttonText="검색" />
        <p>멤버 목록</p>
        <div className="flex flex-col gap-2">
          {groupMembers.map((member, i) => {
            return <GroupUserCard key={i} userName={member.userName} buttonText="삭제" />;
          })}
        </div>
        <GroupButton text="생성하기" />
      </form>
    </div>
  );
}
