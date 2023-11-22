import React, { useState } from 'react';
import Styles from './RankTap.module.css';
import RankSelect from '../../common/select/RankSelect';
import RoundTap from '../../common/btn/RoundTap';
import Posting from '../../common/userposting/Posting';

const RankTap = () => {
  const [isMakerActive, setIsActiveMaker] = useState(true);
  const [selectedValue, setSelectedValue] = useState('실시간 조회수 TOP 10');

  const handleActiveRoute = () => {
    setIsActiveMaker(!isMakerActive);
  };

  const handleSelectChange = value => {
    setSelectedValue(value);
  };

  const userMarkerArr = [
    {
      id: 1,
      nickName: '정윤수',
      title: '만석공원',
      memo: '만석공원에 왔다!',
      location: {
        latitude: 127.001443714087,
        longitude: 37.300455081,
      },
      wentDate: '2023-11-02T15:30',
    },
    {
      id: 2,
      nickName: '황윤',
      title: '수원역',
      memo: '수원역에 왔다!',
      location: {
        latitude: 127.001443714087,
        longitude: 37.300455081,
      },
      wentDate: '2023-11-02T15:30',
    },
  ];

  return (
    <div className={Styles.rankTap}>
      <RankSelect onSelectChange={handleSelectChange} />
      <RoundTap isMakerActive={isMakerActive} handleActiveRoute={handleActiveRoute} />
      {isMakerActive &&
        userMarkerArr.map(marker => (
          <Posting
            key={marker.id}
            title={marker.title}
            nickName={marker.nickName}
            wentDate={marker.wentDate.slice(0, 10)}
          />
        ))}
    </div>
  );
};

export default RankTap;
