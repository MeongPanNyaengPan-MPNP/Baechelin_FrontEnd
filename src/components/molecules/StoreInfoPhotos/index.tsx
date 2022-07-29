import React from 'react';
import { Link } from 'react-router-dom';

import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import * as S from './styles';

interface StoreInfoPhotosProps {
  width?: string;
  tile?: boolean;
  location?: any;
  storeDetailData: StoreMapResponseTypes;
}

function StoreInfoPhotos({ storeDetailData, location, width, tile = true }: StoreInfoPhotosProps) {
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
    <S.Container width={width} className="thumbnail">
      <S.Wrapper>
        <Link
          to="/photosModal"
          state={{
            data: storeDetailData?.storeImgList,
            locationState: location,
          }}
        >
          <S.Photo src={storeDetailData?.storeImgList[0] || '/img/ui/no_picture.svg'} key="main" />
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
