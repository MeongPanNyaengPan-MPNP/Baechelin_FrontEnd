import React from 'react';
import { useQuery } from 'react-query';

import { getStoreDetail } from '@service/storeDetailApi';
import { Link } from 'react-router-dom';

import * as S from './styles';

interface StoreInfoPhotosProps {
  storeName: string | undefined;
}

// const style = {
//   position: 'absolute' as const,
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

function StoreInfoPhotos({ storeName }: StoreInfoPhotosProps) {
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
    <S.Container>
      <S.Wrapper>
        <Link to="/photosModal" state={{ data: storeDetailData?.storeImgList }}>
          <S.Photo src={storeDetailData?.storeImgList[0]?.storeImageUrl} key="main" />
        </Link>
      </S.Wrapper>
      <S.PhotosWrapper>
        {photos.map((v) => (
          <Link to="/photosModal" state={{ data: storeDetailData?.storeImgList }}>
            <S.Photos src={v.img} key={v.key} />
          </Link>
        ))}
      </S.PhotosWrapper>
    </S.Container>
  );
}

export default StoreInfoPhotos;
