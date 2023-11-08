import React, { useState } from 'react';
import Styles from './SearchTap.module.css';
import SearchInput from '../common/SearchInput';
import RoundTap from '../common/RoundTap';
import Posting from '../userPosting/Posting';

const SearchTap = () => {
  const [activeMaker, setActiveMaker] = useState(true);

  const handleActiveRoute = () => {
    setActiveMaker(!activeMaker);
  };

  const userMarkerArr = [
    { title: '수락산', writer: '작성자', date: '2023-10-1', fav: true },
    { title: '도봉산', writer: '작성자', date: '2023-10-2', fav: true },
  ];

  const userRouteArr = [
    { title: '제주도 여행', writer: '작성자', date: '2023-10-1', fav: true },
    { title: '부산 여행', writer: '작성자', date: '2023-10-2', fav: true },
  ];

  return (
    <div className={Styles.searchTap}>
      <SearchInput />
      <RoundTap activeMaker={activeMaker} handleActiveRoute={handleActiveRoute} />
      <div className={Styles.searchMarker}>
        {activeMaker &&
          userMarkerArr.map((marker, index) => (
            <Posting
              key={index}
              title={marker.title}
              writer={marker.writer}
              date={marker.date}
              fav={marker.fav}
            />
          ))}
        {!activeMaker &&
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

export default SearchTap;
