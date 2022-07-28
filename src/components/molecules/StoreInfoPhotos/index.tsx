import React from 'react';
import { useQuery } from 'react-query';

import { getStoreDetail } from '@service/storeDetailApi';
import { Link, useLocation } from 'react-router-dom';

import * as S from './styles';

interface StoreInfoPhotosProps {
  storeName: string | undefined;
  width?: string;
  tile?: boolean;
}

function StoreInfoPhotos({ storeName, width, tile = true }: StoreInfoPhotosProps) {
  const location = useLocation();
  const { data: storeDetailData }: any = useQuery(
    ['getShopDetail', storeName],
    () => getStoreDetail(Number(storeName)),
    {
      // eslint-disable-next-line object-curly-newline
      staleTime: 5000,
      cacheTime: Infinity,
      enabled: !!storeName,
    },
  );

  const photos = [
    {
      img: 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg',
      key: 1,
    },
    {
      img: 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg',
      key: 2,
    },
    {
      img: 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg',
      key: 3,
    },
    {
      img: 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg',
      key: 4,
    },
  ];

  return (
    <S.Container width={width}>
      <S.Wrapper>
        <Link
          to="/photosModal"
          state={{
            data: storeDetailData?.storeImgList,
            locationState: location,
          }}
        >
          <S.Photo src={storeDetailData?.storeImgList[0]} key="main" />
        </Link>
      </S.Wrapper>

      {tile && (
        <S.PhotosWrapper>
          {photos.map((v) => (
            <Link
              to="/photosModal"
              state={{
                data: storeDetailData?.storeImgList,
                locationState: location,
              }}
            >
              <S.Photos src={v.img} key={v.key} />
            </Link>
          ))}
        </S.PhotosWrapper>
      )}
    </S.Container>
  );
}

export default StoreInfoPhotos;
