import React, { useState } from 'react';
import styles from './GroupTap.module.css';

import Datepicker from 'react-tailwindcss-datepicker';
import { groupMarkers, groups } from '../group/datas';
import Posting from '../../common/userposting/Posting';
const GroupTap = () => {
  const [curGroup, setCurGroup] = useState(0);
  const [curGroupId, setCurGroupId] = useState(0);
  const [isGroups, setIsGroups] = useState(false);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = newValue => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };
  const seletGroup = groupId => {
    const seletIndex = groups.findIndex(el => {
      return el.groupId === groupId;
    });
    setCurGroup(seletIndex);
    setCurGroupId(groupId);
    console.log(curGroup);
    setIsGroups(false);
  };

  const openGroup = () => {
    setIsGroups(!isGroups);
  };

  return (
    <div className={styles.groupTap}>
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
        {/* <select className={`${styles.groupTapItem} flex items-center justify-center border p-2`}>
          {groups.map((group, i) => {
            return (
              <option
                onClick={() => {
                  seletGroup(group.groupId);
                }}
                key={group.groupId}
              >
                {group.groupTitle}
              </option>
            );
          })}
        </select> */}
        {/* <ul className={`${styles.groupTapItem} border`}>
          {groups.map((group, i) => {
            return curGroup === i ? <li className="p-2">{group.groupTitle}</li> : null;
          })}
        </ul> */}

        <p onClick={openGroup} className={`${styles.groupTapItem} border p-2`}>
          {groups[curGroup].groupTitle}
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
      <div className="w-full flex flex-col gap-3 items-center justify-center">
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
