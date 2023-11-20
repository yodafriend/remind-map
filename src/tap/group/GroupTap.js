import React, { useState } from 'react';
import styles from './GroupTap.module.css';

import Datepicker from 'react-tailwindcss-datepicker';
import { groupMarkers } from '../group/datas';
import Posting from '../../common/userposting/Posting';
import { useRecoilState, useRecoilValue } from 'recoil';
import { groupsState } from '../../recoil/groupAtoms';
import { Link } from 'react-router-dom';
import { seletGroupIndexState } from '../../recoil/groupAtoms';

const GroupTap = () => {
  const [seletGroupIndex, setSeletGroupIndex] = useRecoilState(seletGroupIndexState);
  const groups = useRecoilValue(groupsState);

  const [curGroupId, setCurGroupId] = useState(0);
  const [isGroups, setIsGroups] = useState(false);

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const handleValueChange = newValue => {
    setValue(newValue);
  };
  const seletGroup = groupId => {
    const groupIndex = groups.findIndex(el => {
      return el.groupId === groupId;
    });
    setCurGroupId(groupId);
    setSeletGroupIndex(groupIndex);
    setIsGroups(false);
  };

  const openGroup = () => {
    setIsGroups(!isGroups);
  };

  return (
    <div className={styles.groupTap}>
      <Link to="/group" className={`${styles.groupTapItem} border p-2 text-center`}>
        그룹관리
      </Link>
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
      <div className="w-full flex flex-col items-center justify-center">
        <p onClick={openGroup} className={`${styles.groupTapItem} border p-2`}>
          {groups[seletGroupIndex].groupTitle}
        </p>
        {isGroups ? (
          <ul className={`${styles.groupTapItem} border`}>
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
          return curGroupId === marker.groupId ? (
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
  );
};

export default GroupTap;
