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
  const { getGroups, getGroup, getGroupmembers } = useGroup(groupId);
  const [isDetailGroup, setIsDetailGroup] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    // ref.current가 null이 아닌 경우에만 observe 호출
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setTimeout(() => {
          if (entry.intersectionRatio) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
            console.log('on!');
          }
          if (!entry.intersectionRatio) {
            entry.target.classList.remove('opacity-100');
            entry.target.classList.add('opacity-0');
            console.log('off!');
          }
        }, 200);
      });
    });
    if (ref.current) {
      observer.observe(ref.current);
    }

    // 컴포넌트가 언마운트될 때 정리(clean-up)를 위한 함수
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  useEffect(() => {
    getGroups();
    getGroup();
    getGroupmembers();
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
      <div ref={ref} className={`${styles.trans} ${styles.groupTap} opacity-0`}>
        <GroupButton onClick={onCreateTab} text="그룹관리" type="Button" size="w90" />
        <GroupButton onClick={onDetailTab} text="그룹 만들기" type="Button" size="w90" />
        <DatePicker />
        <Seleter />
        <div
          className={`${styles.trans} w-full flex flex-col items-center justify-center gap-3 transition-all`}
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
        className={`${
          styles.groupDetailTap
        } opacity-0 fixed h-screen overflow-y-scroll left-20 p-3 ${
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
