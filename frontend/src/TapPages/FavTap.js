import React from 'react';
import Styles from './FavTap.module.css';
import RoundTap from '../common/RoundTap';
import Posting from '../common/Posting';

const FavTap = () => {
  const userPostingArr = [];

  return (
    <div className={Styles.favTap}>
      <RoundTap />
      <div className={Styles.post}>
        <Posting title="안녕" writer="작성자" date="2023-10-1" fav={true} />
        <Posting title="안녕" writer="작성자" date="2023-10-2" fav={true} />
        <Posting title="안녕" writer="작성자" date="2023-10-3" fav={true} />
        <Posting title="안녕" writer="작성자" date="2023-10-4" fav={true} />
        <Posting title="안녕" writer="작성자" date="2023-10-5" fav={true} />
        <Posting title="안녕" writer="작성자" date="2023-10-6" fav={true} />
        <Posting title="안녕" writer="작성자" date="2023-10-7" fav={true} />
        <Posting title="안녕" writer="작성자" date="2023-10-8" fav={true} />
        <Posting title="안녕" writer="작성자" date="2023-10-9" fav={true} />
        <Posting title="안녕" writer="작성자" date="2023-10-10" fav={true} />
        <Posting title="안녕" writer="작성자" date="2023-10-11" fav={true} />
        <Posting title="안녕" writer="작성자" date="2023-10-12" fav={true} />
      </div>
    </div>
  );
};

export default FavTap;
