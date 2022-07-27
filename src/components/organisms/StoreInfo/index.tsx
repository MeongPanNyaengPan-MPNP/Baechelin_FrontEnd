import StoreInfoContent from '@molecules/StoreInfoContent';
import StoreInfoPhotos from '@molecules/StoreInfoPhotos';
import StoreInfoTitle from '@molecules/StoreInfoTitle';
import React from 'react';
import * as S from './styles';

interface StoreInfoProps {
  storeName: string | undefined;
  showIcons?: boolean;
  type: 'horizontal' | 'vertical';
  size?: 'big' | 'regular' | 'small';
}

function StoreInfo({
                     storeName,
                     showIcons,
                     type,
                     size = 'big'
                   }: StoreInfoProps) {
  return (
    /* 가게 상세페이지 형태 */
    <S.Container type={type}>
      {type === 'vertical' && size === 'big' && (
        <>
          <StoreInfoTitle storeName={storeName} />
          <StoreInfoContent storeName={storeName} showIcons={showIcons} />
          <StoreInfoPhotos />
        </>
      )}
      {/* 리뷰쓰기, 가게 리스트 형태  // TODO : 북마크 예외처리하기 */}
      {type === 'horizontal' && (
        <>
          <StoreInfoPhotos width="180px" photosLength={1} />
          <S.TextArea size={size}>
            <StoreInfoTitle storeName={storeName} />
            <StoreInfoContent storeName={storeName} showIcons={showIcons} />
          </S.TextArea>
        </>
      )}
    </S.Container>
  );
}

export default StoreInfo;
