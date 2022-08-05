import React, { useState } from 'react';
import NodataMessage from '@molecules/NodataMessage';
import { useQuery } from 'react-query';
import { getUserBookmarkDetailFolders, getUserBookmarkFolders } from '@service/bookmarkApi';
import { useParams } from 'react-router-dom';
import * as S from '@templates/BookmarkTemplate/styles';
import StoreCard from '@molecules/StoreCard';
import { CardList } from '@organisms/StoreCardList/styles';
import Span from '@atoms/Span';
import BookmarkSelect from '@molecules/BookmarkSelect';

export { Container, Wrapper } from '@styles/layout';

/*   const [id, setId] = React.useState<number>(0);
  React.useEffect(() => {
    setId(Number(folderId));
  }, []); */
function BookmarkDetail() {
  const { folderId } = useParams();
  const { data: BookmarkDetailData } = useQuery(
    ['getBookmarkFoldersList', folderId],
    () => getUserBookmarkDetailFolders(Number(folderId)),
    {
      staleTime: 5000,
      cacheTime: Infinity,
    },
  );
  const [selectedOption, setSelectedOption] = useState<string | number>('all');
  const { data: BookmarkData } = useQuery(['getBookmarkFolders'], () => getUserBookmarkFolders(), {
    staleTime: 5000,
    cacheTime: Infinity,
  });

  return (
    <S.Container>
      <S.TitleWrapper>
        <Span fontSize="2.4rem" fontWeight="700">
          내가 저장한 가게
        </Span>
        <BookmarkSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          BookmarkData={BookmarkData}
        />
      </S.TitleWrapper>

      <S.BookmarkListWrapper>
        {BookmarkDetailData && BookmarkDetailData.cards.length > 0 ? (
          <>
            {BookmarkDetailData.cards.map((item) => (
              <S.Container>
                <CardList col={4} spaceBetween={40}>
                  <StoreCard {...item} storeImgList={item.storeImgList} size="M" bookmark="Y" />
                </CardList>
              </S.Container>
            ))}
          </>
        ) : (
          <NodataMessage
            message={['폴더안에 담긴 북마크가 없습니다.', '배슐랭에서 내 주변의 배리어프리 가게를 담아보세요!']}
          />
        )}
      </S.BookmarkListWrapper>
    </S.Container>
  );
}

export default BookmarkDetail;
