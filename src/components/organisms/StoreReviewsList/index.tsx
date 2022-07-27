import React from 'react';
import StoreReviewsTitle from '@molecules/StoreReviewsTitle';
import { UseReviewList } from '@hooks/UseQueryHooks';
import NoDataMessage from '@molecules/NodataMessage';
import { useParams } from 'react-router-dom';
import { DetailReviewResponseType } from '@interfaces/ReviewTypes';
import { REVIEW } from '@constants/useQueryKey';
import ReviewCard from '@molecules/ReviewCard';
import * as S from './styles';

function StoreReviewsList() {
  const { UseDetailReview } = UseReviewList();
  const { storeName } = useParams();
  const { data: reviewList, isSuccess } = UseDetailReview<DetailReviewResponseType[]>(
    REVIEW.DETAIL_REVIEW_LIST,
    Number(storeName),
  );
  console.log(reviewList);
  return (
    <S.Container>
      <StoreReviewsTitle />
      {isSuccess && reviewList && reviewList.length === 0 && (
        <NoDataMessage message={['리뷰가 없어요.', '첫 리뷰를 작성해주세요!']} />
      )}
      <S.ReviewListGroup>
        {isSuccess &&
          reviewList &&
          reviewList.length > 0 &&
          reviewList?.map((reviewItem, index) => (
            <li key={`${reviewItem?.createdAt?.toString() || index}`}>
              <ReviewCard<DetailReviewResponseType> {...reviewItem} showStoreInfo={false} />
            </li>
          ))}
      </S.ReviewListGroup>
    </S.Container>
  );
}

export default StoreReviewsList;
