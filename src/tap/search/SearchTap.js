import React, { useState, useEffect } from 'react';
import Styles from './SearchTap.module.css';
import SearchInput from '../../common/input/SearchInput';
import RoundTap from '../../common/btn/RoundTap';
import Posting from '../../common/userposting/Posting';

const SearchTap = ({ onSearchResults }) => {
  const [isMakerActive, setIsActiveMaker] = useState(true);
  const [place, setPlace] = useState('');
  const [savedSearchResults, setSavedSearchResults] = useState([]);

  const handleActiveRoute = () => {
    setIsActiveMaker(!isMakerActive);
  };

  /* axios 요청으로 해당하는 마커만 response로 담기 */
  const userMarkerArr = [
    {
      title: '만석공원',
      writer: '작성자',
      wentDate: '2023-11-02T15:30',
      location: {
        latitude: 127.001443714087,
        longitude: 37.300455081,
      },
      fav: true,
    },
    {
      title: '만석초',
      writer: '작성자',
      wentDate: '2023-11-02T15:30',
      location: {
        latitude: 127.001443714087,
        longitude: 37.300455081,
      },
      fav: true,
    },
  ];

  const userRouteArr = [];

  const searchPlaces = async () => {
    if (!place.trim()) {
      alert('검색어를 입력해주세요');
      return;
    }

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(place, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        onSearchResults(data);
        setSavedSearchResults(data);
      }
    });
  };

  useEffect(() => {
    if (savedSearchResults.length > 0) {
      console.log(savedSearchResults[0].x);
      console.log(savedSearchResults[0].y);
    }
  }, [savedSearchResults]);

  const handleInputChange = e => {
    setPlace(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchPlaces();
  };

  return (
    <div className={Styles.searchTap}>
      <form onSubmit={handleSubmit}>
        <SearchInput value={place} onChange={handleInputChange} placeholder="장소를 입력하세요" />
      </form>
      <RoundTap isMakerActive={isMakerActive} handleActiveRoute={handleActiveRoute} />
      <div className={Styles.searchMarker}>
        {savedSearchResults.map((result, index) => (
          <li style={{ width: '100%' }} onClick={() => console.log(index)} key={index}>
            <strong>{result.place_name}</strong>
            <p>주소: {result.road_address_name || result.address_name}</p>
            <p>전화번호: {result.phone}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

/* {isMakerActive &&
          userMarkerArr.map((marker, index) => (
            <Posting
              key={index}
              title={marker.title}
              writer={marker.writer}
              wentDate={marker.wentDate}
              fav={marker.fav}
            />
          ))}
        {!isMakerActive &&
          userRouteArr.map((route, index) => (
            <Posting
              key={index}
              title={route.title}
              writer={route.writer}
              wentDate={route.wentDate}
              fav={route.fav}
            />
          ))} */

export default SearchTap;
