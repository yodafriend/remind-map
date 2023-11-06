import React, { useState } from 'react';
import styles from './GroupTap.module.css';
import MakeBtn from '../common/MakeBtn';
import Datepicker from 'react-tailwindcss-datepicker';
import { Link, useNavigate } from 'react-router-dom';

const GroupTap = () => {
  const navigete = useNavigate();
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = newValue => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <div className={styles.groupTap}>
      <MakeBtn text="그룹 관리" />
      <Datepicker
        inputClassName="w-full p-2"
        containerClassName={`${styles.test} border rounded-sm`}
        toggleClassName="hidden"
        primaryColor="purple"
        useRange={false}
        value={value}
        onChange={handleValueChange}
        placeholder="YYYY-MM-DD"
      />
    </div>
  );
};

export default GroupTap;
