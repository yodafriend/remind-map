import React from 'react';
import GroupButton from './GroupButton';

export default function GroupUserCard({ member, userName, buttonText, onClick, buttonOnClick }) {
  return (
    <div onClick={onClick} className="w-full border-b border-main-color flex items-center relative">
      <p className="pb-1">{userName}</p>
      <div className="grow" />
      {buttonText && (
        <GroupButton
          type="Button"
          text={buttonText}
          onClick={() => buttonOnClick(member)}
          position="inInput"
          size="sm"
          className="text-sm color-white bg-main-color px-1 border rounded-md hover:bg-main-hover"
        />
      )}
    </div>
  );
}
