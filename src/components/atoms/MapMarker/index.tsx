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
  /*
    onClick?: (marker: kakao.maps.Marker) => void;
    onMouseOver?: (marker: kakao.maps.Marker) => void;
    onMouseOut?: (marker: kakao.maps.Marker) => void;
    onDragStart?: (marker: kakao.maps.Marker) => void;
    onDragEnd?: (marker: kakao.maps.Marker) => void; */
}

/* `
  <div class='overlay_box'>
    <span class='store_length'>+ ${len}</span>
    <figure><img src='${item.storeImgList[0] || `/img/ui/no_picture.svg`}' alt='${item.name}'/></figure>
    <div class='text_area'>
      <h5>
      <small>${item.category}</small>
      <p>${item.name}</p>
      </h5>
      <div class='rate'>
      <figure class='star'><img src='/img/ui/ic_star.png' alt='별 아이콘'/></figure>
      <span>${item.pointAvg}</span>
      </div>
    </div>
  </div>
  `; */

const OverlayDiv = (items: StoreMapResponseTypes[]) => {
  // eslint-disable-next-line react/destructuring-assignment
  const itemsEl = items.map(
    (item) => `
  <div class='overlay_box'>
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
  </div>
  `,
  );
  const itemElString = itemsEl.join('');
  return `<div class='overlay_group'>${itemElString}</div>`;
};

/*
const InfoWindowEl = ({ title, src, rate, category }: InfoWindowTypes) =>; */
const Marker = React.forwardRef((props: MarkerProps, ref) => {
  // Marker 객체는 단 한번만 생성 되도록 함
  const { position, storeItems, firstStoreName } = props;
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
    // 인포윈도우를 생성합니다
    const overlay = new kakao.maps.CustomOverlay({
      map,
      content: OverlayDiv(storeItems),
      position: markerPosition,
      xAnchor: 0.5,
      yAnchor: 1,
      zIndex: 3,
    });
    return overlay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* 마우스오버시 오버레이 노출 */
  kakao.maps.event.addListener(marker, 'click', () => {
    const storeItemEl = document.querySelectorAll('.store_wrap');
    storeItemEl.forEach((el) => {
      el.classList.remove('active');
    });
    const target = document.querySelector(`#wrap_${storeItems[0].storeId}`);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
    target.classList.add('active');
  });
  kakao.maps.event.addListener(marker, 'mouseover', () => {
    overlayEl.setMap(map);
  });
  kakao.maps.event.addListener(marker, 'mouseout', () => {
    overlayEl.setMap(null);
  });
  useLayoutEffect(() => {
    if (map) {
      marker.setMap(map);
      overlayEl.setMap(null);
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
