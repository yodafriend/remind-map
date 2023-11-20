import React from 'react';
import GroupUserCard from '../atom-components/GroupUserCard';

export default function GroupCardWraper({ mambers, title, buttonText, buttonOnClick }) {
  return (
    <div className="flex flex-col gap-3 w-8/12 md:w-full">
      <p className="text-2xl">{title}</p>
      {mambers.map((member, i) => {
        return (
          <GroupUserCard
            key={i}
            member={member}
            userName={member.nickname || member.profile_nickname || member.userName}
            buttonText={buttonText}
            buttonOnClick={buttonOnClick}
          />
        );
      })}
    </div>
  );
}
