import React, { ReactNode } from 'react';
import Span from '@atoms/Span';
import { useNavigate } from 'react-router-dom';
import ThumbNail from '@atoms/Thumbnail';
import Star from '@atoms/Star';
import TagList from '@molecules/TagListProps';
import { RecentReviewResponseType } from '@interfaces/ReviewTypes';
import * as S from './styles';

export type ReviewCardProps = {
  tagListChildren: ReactNode;
};

function ReviewCard<T extends Partial<RecentReviewResponseType> & Partial<{ showTagList?: boolean }>>(props: T) {
  const navigate = useNavigate();
  const {
    storeName,
    point,
    content,
    tagList,
    reviewImageUrlList = null,
    address,
    storeId,
    userName,
    showTagList = true,
  } = props;
  return (
    <S.CardItem onClick={() => navigate(`/store/${storeId}`)} showTagList={showTagList}>
      <S.CardItemInner>
        <S.CardContentArea>
          <S.CardContentTop>
            <S.CardStoreInfoArea>
              <Span fontSize="1.6rem" fontWeight="bold">
                {storeName}
              </Span>
              <Span fontSize="1.2rem" color="#3B3b3b" fontWeight="normal">
                {address}
              </Span>
            </S.CardStoreInfoArea>
            <S.CardUserInfoArea>
              <ThumbNail round={100} width="50px" height="50px" alt={storeName} src="./" />
              <S.UserInfoArea>
                <S.UserName fontSize="2rem" fontWeight="bold">
                  {userName}
                </S.UserName>
                <Star sx={{ fontSize: '1.8rem' }} value={point} name="rate01" readOnly />
              </S.UserInfoArea>
            </S.CardUserInfoArea>
            <S.CardTextArea>
              <p>
                <Span
                  ellipsis={reviewImageUrlList && reviewImageUrlList.length > 0 ? 4 : 8}
                  fontSize={1.2}
                  fontWeight="normal"
                >
                  {content}
                </Span>
              </p>
            </S.CardTextArea>
          </S.CardContentTop>
          <S.cCardContentBottom>
            <S.CardImageList>
              {reviewImageUrlList?.map(
                (item, index) =>
                  index < 5 && (
                    <li>
                      <ThumbNail
                        width="100px"
                        height="100px"
                        key={item.url}
                        alt={`${storeName}에 작성된 리뷰 사진`}
                        src={item.url}
                      />
                    </li>
                  ),
              )}
            </S.CardImageList>
          </S.cCardContentBottom>
        </S.CardContentArea>
        {showTagList && tagList && (
          <S.StoreTagListGroup>
            <TagList tagListTitle="편의시설" tags={tagList} />
            <TagList tagListTitle="분위기" tags={tagList} />
          </S.StoreTagListGroup>
        )}
      </S.CardItemInner>
    </S.CardItem>
  );
}

export default ReviewCard;
