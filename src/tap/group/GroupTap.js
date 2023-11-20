import React, { useEffect, useState } from 'react';
import styles from './GroupTap.module.css';

import Datepicker from 'react-tailwindcss-datepicker';
import { groupMarkers } from '../group/datas';
import Posting from '../../common/userposting/Posting';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { groupState, groupsState, seletGroupIdState } from '../../recoil/groupAtoms';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { seletGroupIndexState } from '../../recoil/groupAtoms';
import useGroup from '../../hooks/useGroup';
import GroupDetail from './components/ui-components/GroupDetail';
import GroupFriends from './components/ui-components/GroupFriends';
import GroupButton from './components/atom-components/GroupButton';
import GroupCreate from './components/ui-components/GroupCreate';

const GroupTap = () => {
  const create = useMatch('/grouptab/create/:id');
  const detail = useMatch('/grouptab/all/:id');
  const navigator = useNavigate();
  const { groupId } = useParams();
  const setSeletGroupIndex = useSetRecoilState(seletGroupIndexState);
  const setSeletGroupId = useSetRecoilState(seletGroupIdState);
  const { getGroups, getGroup, getGroupmembers, groupMembers } = useGroup(groupId);
  const groups = useRecoilValue(groupsState);
  const group = useRecoilValue(groupState);

  const [isGroups, setIsGroups] = useState(false);

  const [isDetailGroup, setIsDetailGroup] = useState(false);
  const [a, setA] = useState(true);
  useEffect(() => {
    getGroups();
    getGroup();
    getGroupmembers();
    console.log('groupId : ', groupId);
    console.log('members : ', groupMembers);
  }, [groupId]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsDetailGroup(!isDetailGroup);
  //   }, 200);
  // }, [a]);

  const seletGroup = groupId => {
    const groupIndex = groups.findIndex(el => {
      return el.groupId === groupId;
    });
    navigator(`/grouptab/all/${groupId}`);
    setSeletGroupId(groupId);
    setSeletGroupIndex(groupIndex);
    setIsGroups(false);
  };

  const openGroup = () => {
    setIsGroups(!isGroups);
  };

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const handleValueChange = newValue => {
    setValue(newValue);
  };
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
        <GroupButton
          onClick={onDetailTab}
          text="그룹 만들기"
          type="Button"
          size="w90"
          url={`/grouptab/create/${groupId}`}
        />

        <Datepicker
          inputClassName="w-full p-2"
          containerClassName={`${styles.groupTapItem} border rounded-sm`}
          toggleClassName="hidden"
          primaryColor="purple"
          useRange={false}
          value={value}
          onChange={handleValueChange}
          placeholder="YYYY-MM-DD"
        />
        <div className="w-full flex flex-col items-center justify-center relative">
          <p onClick={openGroup} className={`${styles.groupTapItem} border p-2`}>
            {group.groupTitle}
          </p>
          {isGroups ? (
            <ul className={`${styles.groupTapItem} border absolute top-9 bg-white`}>
              {groups.map((group, i) => {
                return (
                  <li
                    onClick={() => {
                      seletGroup(group.groupId);
                    }}
                    key={i}
                    className="p-2 border border-b"
                  >
                    {group.groupTitle}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-3">
          {groupMarkers.map((marker, i) => {
            return +groupId === marker.groupId ? (
              <Posting
                key={i}
                title={marker.title}
                writer={marker.writer}
                date={marker.date}
                fav={marker.fav}
              />
            ) : null;
          })}
        </div>
      </div>
      {a && (
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
      )}
    </div>
  );
};

export default GroupTap;
