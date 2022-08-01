import React, { useState } from 'react';
import StoreReviewsTitle from '@molecules/StoreReviewsTitle';
import { UseReviewList } from '@hooks/UseQueryHooks';
import NoDataMessage from '@molecules/NodataMessage';
import { useParams } from 'react-router-dom';
import { ReviewResponseDtoItem, ReviewResponseRootType } from '@interfaces/ReviewTypes';
import { REVIEW } from '@constants/useQueryKey';
import ReviewCard from '@molecules/ReviewCard';
import { Pagination } from '@mui/material';
import * as S from './styles';

function StoreReviewsList() {
  const { UseDetailReview } = UseReviewList();
  const { storeId } = useParams();
  const [pageNum, setPageNum] = useState<number>(0);
  const {
    data: reviewList,
    isSuccess,
    refetch,
  } = UseDetailReview<ReviewResponseRootType>(REVIEW.DETAIL_REVIEW_LIST, Number(storeId), pageNum);
  console.log(reviewList);
  const pageChangeHandler = (pageNumber = 1) => {
    refetch();
    setPageNum(pageNumber - 1);
  };
  return (
    <S.Container>
      <StoreReviewsTitle storeId={storeId} />
      {isSuccess && reviewList && reviewList.reviewResponseDtoList.length === 0 && (
        <NoDataMessage message={['작성된 방문 후기가 없습니다.', '첫 방문 후기를 작성해 주세요!']} />
      )}
      <S.ReviewListGroup>
        {isSuccess &&
          reviewList &&
          reviewList.reviewResponseDtoList.length > 0 &&
          reviewList?.reviewResponseDtoList.map((reviewItem, index) => (
            <li key={`${reviewItem?.createdAt?.toString() || index}`}>
              <ReviewCard<ReviewResponseDtoItem>
                {...reviewItem}
                showStoreInfo={false}
                showControll
                refetchEvent={refetch}
              />
            </li>
          ))}
      </S.ReviewListGroup>

      <S.PaginationArea>
        <Pagination
          count={reviewList?.totalPages}
          showFirstButton
          showLastButton
          size="medium"
          siblingCount={0}
          sx={{ fontSize: '2rem' }}
          boundaryCount={1}
          onChange={(e, page) => pageChangeHandler(page)}
        />
      </S.PaginationArea>
    </S.Container>
  );
}

export default StoreReviewsList;
