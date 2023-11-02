import React from 'react';
import styles from './GroupTap.module.css';
import MakeBtn from '../common/MakeBtn';
const GroupTap = () => {
  return (
    <div className={styles.groupTap}>
      <MakeBtn text="그룹 관리" />
    </div>
  );
};

export default GroupTap;
