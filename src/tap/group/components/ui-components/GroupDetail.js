import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import GroupInput from '../atom-components/GroupInput';
import GroupButton from '../atom-components/GroupButton';
import GroupUserCardWraper from '../wrap-components/GroupUserCardWraper';
import useGroup from '../../../../hooks/useGroup';
import { groupState } from '../../../../recoil/groupAtoms';

export default function GroupDetail() {
  const { groupId } = useParams();
  const group = useRecoilValue(groupState);
  const [search, setSearch] = useState('');
  const { getGroup, getGroupmembers, groupMembers } = useGroup(groupId);

  useEffect(() => {
    getGroupmembers();
    getGroup();
    console.log(groupMembers);
  }, [groupId]);

  return (
    <div className="flex flex-col items-center gap-5 mt-20 md:mt-10 transition-all">
      <h1 className=" text-4xl">{group.groupTitle}</h1>
      <GroupInput setValue={setSearch} buttonText="검색" />
      {groupMembers.length !== 0 ? (
        <GroupUserCardWraper
          mambers={groupMembers}
          title="그룹원 목록"
          buttonText="삭제"
          buttonOnClick={() => {
            console.log('삭제');
          }}
        />
      ) : (
        <>
          <p>그룹에 아무도 없군요 ..</p>
          <p>우측에서 그룹에 친구를 추가해주세요 !</p>
        </>
      )}

      <div className="flex items-center justify-center gap-2 w-full">
        <GroupButton type="Button" text="그룹 삭제" />
      </div>
    </div>
  );
}
