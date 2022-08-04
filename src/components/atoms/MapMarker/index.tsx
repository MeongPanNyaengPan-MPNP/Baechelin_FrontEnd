/* eslint-disable react-hooks/exhaustive-deps */
import React, { useImperativeHandle, useLayoutEffect, useMemo } from 'react';
import UseMap from '@hooks/UseMap';
import './index.css';
import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';

interface MarkerProps {
  position: {
    lat: number;
    lng: number;
  };
  firstStoreName: string;
  storeItems: StoreMapResponseTypes[];
  mapItem?: kakao.maps.Map;
}

const OverlayDiv = (items: StoreMapResponseTypes[]) => {
  // eslint-disable-next-line react/destructuring-assignment
  const itemsEl = items.map(
    (item) => `
  <div class='overlay_box'>
  <a href='/store/${item.storeId}'>
    <div class='text_area'>
      <h5>
        <p>${item.name}</p>
      </h5>
      <div class='info_area'>
      <small>${item.category}</small>
        <div class='rate'>
          <figure class='star'><img src='/img/ui/ic_star.png' alt='별 아이콘'/></figure>
          <span>${item.pointAvg}</span>
        </div>
      </div>
    </div>
    </a>
  </div>
  `,
  );
  const itemElString = itemsEl.join('');
  return `<div class='overlay_group'>

${itemElString}
</div>`;
};

/*
const InfoWindowEl = ({ title, src, rate, category }: InfoWindowTypes) =>; */
const Marker = React.forwardRef((props: MarkerProps, ref) => {
  // Marker 객체는 단 한번만 생성 되도록 함
  const { position, storeItems, firstStoreName, mapItem } = props;
  // const container = React.useRef(document.createElement('div'));
  // , onClick, onMouseOut, onMouseOver, onDragEnd, onDragStart
  //
  const map = UseMap('marker');
  const markerPosition = useMemo(() => new kakao.maps.LatLng(position.lat, position.lng), [position.lat, position.lng]);
  const marker = useMemo(() => {
    const markerImg = {
      src: '/img/ui/ic_marker.png',
      size: new window.kakao.maps.Size(30, 66),
      option: new window.kakao.maps.Point(15, 20),
    };
    const kakaoMarker = new kakao.maps.Marker({
      image: new kakao.maps.MarkerImage(markerImg.src, markerImg.size, markerImg.option),
      position: markerPosition,
      title: firstStoreName,
      clickable: true,
    });

    return kakaoMarker;
  }, []);
  const overlayEl = useMemo(() => {
    // 인포윈도우를 생성
    const overlay = new kakao.maps.CustomOverlay({
      map,
      content: OverlayDiv(storeItems),
      position: markerPosition,
      xAnchor: 0.5,
      yAnchor: 1,
      zIndex: 3,
      clickable: true,
    });
    return overlay;
  }, []);
  /* 마우스오버시 오버레이 노출 */
  kakao.maps.event.addListener(marker, 'click', () => {
    /* ------------ 리스트 액티브 이벤트 */
    const storeItemEl = document.querySelectorAll('.store_wrap');
    storeItemEl.forEach((el) => {
      el.classList.remove('active');
    });
    const target = document.querySelector(`#wrap_${storeItems[0].storeId}`);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
    target.classList.add('active');
    /* 해당 윈도우 셋팅 */
    overlayEl.setVisible(true);
  });
  React.useEffect(() => {
    if (mapItem) {
      kakao.maps.event.addListener(mapItem, 'click', () => {
        overlayEl.setVisible(false);
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (map) {
      marker.setMap(map);
      overlayEl.setMap(map);
      overlayEl.setVisible(false);
    }
    return () => {
      marker.setMap(null);
      overlayEl.setMap(null);
    };
  }, []);
  useImperativeHandle(ref, () => marker, [marker]);
  return null;
});

export default Marker;
