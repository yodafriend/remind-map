import React, { useEffect } from 'react';
const { kakao } = window;

const MainMap = () => {
  useEffect(() => {
    const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
    var mapTypeControl = new kakao.maps.MapTypeControl();

    function getInfo() {
      // 지도의 현재 중심좌표를 얻어옵니다
      var center = map.getCenter();

      // 지도의 현재 레벨을 얻어옵니다
      var level = map.getLevel();

      // 지도타입을 얻어옵니다
      var mapTypeId = map.getMapTypeId();

      // 지도의 현재 영역을 얻어옵니다
      var bounds = map.getBounds();

      // 영역의 남서쪽 좌표를 얻어옵니다
      var swLatLng = bounds.getSouthWest();

      // 영역의 북동쪽 좌표를 얻어옵니다
      var neLatLng = bounds.getNorthEast();

      // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
      var boundsStr = bounds.toString();

      var message = '지도 중심좌표는 위도 ' + center.getLat() + ', <br>';
      message += '경도 ' + center.getLng() + ' 이고 <br>';
      message += '지도 레벨은 ' + level + ' 입니다 <br> <br>';
      message += '지도 타입은 ' + mapTypeId + ' 이고 <br> ';
      message +=
        '지도의 남서쪽 좌표는 ' + swLatLng.getLat() + ', ' + swLatLng.getLng() + ' 이고 <br>';
      message += '북동쪽 좌표는 ' + neLatLng.getLat() + ', ' + neLatLng.getLng() + ' 입니다';
    }
    getInfo();
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
      />
    </div>
  );
};

export default MainMap;
