import React from 'react';
import StoreReviewsTitle from '@molecules/StoreReviewsTitle';
import { UseReviewList } from '@hooks/UseQueryHooks';
import NoDataMessage from '@molecules/NodataMessage';
import { useParams } from 'react-router-dom';
import { ReviewResponseDtoList, ReviewResponseRootType } from '@interfaces/ReviewTypes';
import { REVIEW } from '@constants/useQueryKey';
import ReviewCard from '@molecules/ReviewCard';
import * as S from './styles';

function StoreReviewsList() {
  const { UseDetailReview } = UseReviewList();
  const { storeId } = useParams();
  const { data: reviewList, isSuccess } = UseDetailReview<ReviewResponseRootType>(
    REVIEW.DETAIL_REVIEW_LIST,
    Number(storeId),
  );

  return (
    <S.Container>
      <StoreReviewsTitle storeId={storeId} />
      {isSuccess && reviewList && reviewList.reviewResponseDtoList.length === 0 && (
        <NoDataMessage message={['리뷰가 없어요.', '첫 리뷰를 작성해주세요!']} />
      )}
      <S.ReviewListGroup>
        {isSuccess &&
          reviewList &&
          reviewList.reviewResponseDtoList.length > 0 &&
          reviewList?.reviewResponseDtoList.map((reviewItem, index) => (
            <li key={`${reviewItem?.createdAt?.toString() || index}`}>
              <ReviewCard<ReviewResponseDtoList> {...reviewItem} showStoreInfo={false} />
            </li>
          ))}
      </S.ReviewListGroup>
    </S.Container>
  );
}

export default StoreReviewsList;
