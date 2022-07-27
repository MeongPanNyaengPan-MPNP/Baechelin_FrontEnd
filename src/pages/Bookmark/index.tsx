import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery } from 'react-query';

import BookmarkTemplate from '@templates/BookmarkTemplate';

import * as S from './styles';

function Bookmark() {
  // const { storeName } = useParams();

  // const { data: BookmarkData }: any = useQuery(
  //   ['getShopDetail', storeName],
  //   () => getBookmark(Number(storeName)),
  //   {
  //     // eslint-disable-next-line object-curly-newline
  //     staleTime: 5000,
  //     cacheTime: Infinity,
  //     enabled: !!storeName,
  //   },
  // );
  // console.log('storedata', BookmarkData);

  return (
    <S.Container>
      <BookmarkTemplate />
    </S.Container>
  );
}

export default Bookmark;
