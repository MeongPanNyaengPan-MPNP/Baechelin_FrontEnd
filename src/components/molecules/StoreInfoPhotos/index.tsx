import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '@constants/url';
import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import * as S from './styles';

interface StoreInfoPhotosProps {
  width?: string;
  tile?: boolean;
  location?: any;
  storeDetailData: StoreMapResponseTypes;
}

function StoreInfoPhotos({ storeDetailData, location, width, tile = true }: StoreInfoPhotosProps) {
  return (
    <S.Container width={width} className="thumbnail">
      <S.Wrapper>
        <Link
          to="/photosModal"
          state={{
            data: {
              imgList: storeDetailData?.storeImgList,
              alt: storeDetailData?.name,
            },
            locationState: location,
          }}
        >
          <S.Photo src={storeDetailData?.storeImgList[0] || IMAGE_URL.NO_IMAGE} key="main" />
        </Link>
      </S.Wrapper>
      {tile && (
        <S.PhotosWrapper>
          {storeDetailData?.storeImgList?.slice(1, 5).map((img, index) => (
            <Link
              to="/photosModal"
              /* eslint-disable-next-line react/no-array-index-key */
              key={index}
              state={{
                data: {
                  imgList: storeDetailData?.storeImgList,
                  alt: storeDetailData?.name,
                },
                locationState: location,
              }}
            >
              <S.Photos src={img || IMAGE_URL.NO_IMAGE} />
            </Link>
          ))}
        </S.PhotosWrapper>
      )}
    </S.Container>
  );
}

export default StoreInfoPhotos;
