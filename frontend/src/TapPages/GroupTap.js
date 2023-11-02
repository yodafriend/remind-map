import React from 'react';
import styles from './GroupTap.module.css';
import MakeBtn from '../common/MakeBtn';
import { Link, useNavigate } from 'react-router-dom';

const GroupTap = () => {
  const navigete = useNavigate();
  const isGroup = () => {
    navigete('/group');
  };
  return (
    <div className={styles.groupTap}>
      <MakeBtn text="그룹 관리" />
    </div>
  );
};

export default GroupTap;
