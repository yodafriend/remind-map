import React, { useEffect, useRef, useState } from 'react';
import styles from './GroupTap.module.css';

import { groupMarkers } from '../group/datas';
import Posting from '../../common/userposting/Posting';

import { useMatch, useNavigate, useParams } from 'react-router-dom';

import useGroup from '../../hooks/useGroup';
import GroupDetail from './components/ui-components/GroupDetail';
import GroupFriends from './components/ui-components/GroupFriends';
import GroupButton from './components/atom-components/GroupButton';
import GroupCreate from './components/ui-components/GroupCreate';
import Seleter from './components/atom-components/Seleter';
import DatePicker from './components/atom-components/DatePicker';

const GroupTap = () => {
  const create = useMatch('/grouptab/create/:id');
  const detail = useMatch('/grouptab/all/:id');
  const navigator = useNavigate();
  const { groupId } = useParams();
  const { getGroups, getGroup, getGroupmembers, groupMembers } = useGroup(groupId);
  const [isDetailGroup, setIsDetailGroup] = useState(false);
  const ref = useRef();
  useEffect(() => {
    ref.current.classList.add('opacity-0');
    setTimeout(() => {
      ref.current.classList.remove('opacity-0');
    }, 200);
  }, [ref]);

  useEffect(() => {
    getGroups();
    getGroup();
    getGroupmembers();
    // console.log('ref:', ref.current.className + ' gap-5');
    // ref.current.className = ref.current.className + ' opacity-0';
    // ref.current.className.replace(' opacity-0', ' opacity-1');
    console.log('groupId : ', groupId);
    console.log('members : ', groupMembers);
  }, [groupId]);

  const onCreateTab = () => {
    if (detail) {
      setIsDetailGroup(!isDetailGroup);
    }
    if (create) {
      navigator(`/grouptab/all/${groupId}`);
      if (isDetailGroup === false) {
        setIsDetailGroup(true);
      }
    }
  };
  const onDetailTab = () => {
    if (create) {
      setIsDetailGroup(!isDetailGroup);
    }
    if (detail) {
      navigator(`/grouptab/create/${groupId}`);
      if (isDetailGroup === false) {
        setIsDetailGroup(true);
      }
    }
  };

  return (
    <div>
      <div className={styles.groupTap}>
        <GroupButton onClick={onCreateTab} text="그룹관리" type="Button" size="w90" />
        <GroupButton onClick={onDetailTab} text="그룹 만들기" type="Button" size="w90" />
        <DatePicker />
        <Seleter />
        <div
          ref={ref}
          className={`${styles.trans} opacity-0 w-full flex flex-col items-center justify-center gap-3 transition-all`}
        >
          {groupMarkers.map((marker, i) => {
            return (
              +groupId === marker.groupId && (
                <Posting
                  key={i}
                  title={marker.title}
                  writer={marker.writer}
                  date={marker.date}
                  fav={marker.fav}
                />
              )
            );
          })}
        </div>
      </div>

      <div
        className={`${styles.groupDetailTap} fixed h-screen overflow-y-scroll left-20 p-3 ${
          isDetailGroup ? styles.open : styles.close
        } `}
      >
        {detail && (
          <>
            <GroupDetail />
            <GroupFriends />
          </>
        )}
        {create && <GroupCreate />}
      </div>
    </div>
  );
};

export default GroupTap;
