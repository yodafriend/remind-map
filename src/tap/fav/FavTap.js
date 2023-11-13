import React, { useState } from 'react';
import Styles from './FavTap.module.css';
import RoundTap from '../../common/btn/RoundTap';
import Posting from '../../common/userposting/Posting';

const FavTap = () => {
  const [isMakerActive, setIsActiveMaker] = useState(true);

  const handleActiveRoute = () => {
    setIsActiveMaker(!isMakerActive);
  };

  const userMarkerArr = [
    {
      title: '홍대 개미',
      writer: '작성자',
      date: '2023-10-1',
      fav: true,
      latitude: 0,
      longitued: 1,
    },
    { title: '피오니', writer: '작성자', date: '2023-10-2', fav: true, latitude: 0, longitued: 1 },
    { title: '탕후루', writer: '작성자', date: '2023-10-3', fav: true, latitude: 0, longitued: 1 },
    { title: '현우동', writer: '작성자', date: '2023-10-4', fav: true, latitude: 0, longitued: 1 },
    {
      title: '슈붕 파는 곳',
      writer: '작성자',
      date: '2023-10-5',
      fav: true,
      latitude: 0,
      longitued: 1,
    },
    {
      title: '파주 영어마을',
      writer: '작성자',
      date: '2023-10-5',
      fav: true,
      latitude: 0,
      longitued: 1,
    },
  ];

  const userRouteArr = [
    {
      title: '파주 여행',
      writer: '작성자',
      date: '2023-10-1',
      fav: true,
      latitude: 0,
      longitued: 1,
    },
    {
      title: '수원 데이트',
      writer: '작성자',
      date: '2023-10-2',
      fav: true,
      latitude: 0,
      longitued: 1,
    },
  ];

  return (
    <div className={Styles.favTap}>
      <RoundTap isMakerActive={isMakerActive} handleActiveRoute={handleActiveRoute} />
      <div className={Styles.searchMarker}>
        {isMakerActive &&
          userMarkerArr.map((marker, index) => (
            <Posting
              key={index}
              title={marker.title}
              writer={marker.writer}
              date={marker.date}
              fav={marker.fav}
            />
          ))}
        {!isMakerActive &&
          userRouteArr.map((route, index) => (
            <Posting
              key={index}
              title={route.title}
              writer={route.writer}
              date={route.date}
              fav={route.fav}
            />
          ))}
      </div>
    </div>
  );
};

export default FavTap;
