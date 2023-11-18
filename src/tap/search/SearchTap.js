import React, { useState, useEffect } from 'react';
import Styles from './SearchTap.module.css';
import SearchInput from '../../common/input/SearchInput';
import RoundTap from '../../common/btn/RoundTap';
import Posting from '../../common/userposting/Posting';
import axios from 'axios';

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

  const userRouteArr = [
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

  const [isclick, setIsClick] = useState(false);

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

  const handleInputChange = e => {
    setPlace(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchPlaces();
  };

  const click = (x, y) => {
    setIsClick(!isclick);
    setPlace('');

    const jwtToken = localStorage.getItem('Authorization');

    if (!isclick && isMakerActive) {
      axios
        .get(`https://localhost:3000/markers?latitude=${x}&longitude=${y}`, {
          headers: {
            Authorization: { jwtToken },
          },
        })
        .then(response => {
          userMarkerArr(response.data);
        })
        .catch(console.error());
    } else if (!isclick && !isMakerActive) {
      axios
        .get(`https://localhost:3000/markers?latitude=${x}&longitude=${y}`, {
          headers: {
            Authorization: { jwtToken },
          },
        })
        .then(response => {
          userRouteArr(response.data);
        })
        .catch(console.error());
    }
  };

  return (
    <div className={Styles.searchTap}>
      <form onSubmit={handleSubmit}>
        <SearchInput value={place} onChange={handleInputChange} placeholder="장소를 입력하세요" />
      </form>
      <div className={Styles.searchMarker}>
        {!isclick &&
          savedSearchResults.map((result, index) => (
            <li onClick={() => click(result.x, result.y)} key={index}>
              <div>{result.place_name}</div>
              <p>{result.road_address_name || result.address_name}</p>
            </li>
          ))}
        {isclick && isMakerActive && (
          <div className={Styles.posting}>
            <RoundTap isMakerActive={isMakerActive} handleActiveRoute={handleActiveRoute} />
            {isMakerActive &&
              userMarkerArr.map((marker, index) => (
                <Posting
                  key={index}
                  title={marker.title}
                  nickName={marker.nickName}
                  wentDate={marker.wentDate.slice(0, 10)}
                />
              ))}
          </div>
        )}
        {isclick && !isMakerActive && (
          <div className={Styles.posting}>
            <RoundTap isMakerActive={isMakerActive} handleActiveRoute={handleActiveRoute} />
            {!isMakerActive &&
              userRouteArr.map((route, index) => (
                <Posting
                  key={index}
                  title={route.title}
                  nickName={route.nickName}
                  wentDate={route.wentDate.slice(0, 10)}
                />
              ))}
          </div>
        )}
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
