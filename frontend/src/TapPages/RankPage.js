import React from 'react';
import Styles from './RankPage.module.css';
import RankSelect from '../common/RankSelect';

const RankPage = () => {
  return (
    <div className={Styles.rankPage}>
      <RankSelect />
    </div>
  );
};

export default RankPage;
