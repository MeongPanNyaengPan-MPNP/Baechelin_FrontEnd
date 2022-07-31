import React, { ReactNode } from 'react';

import Span from '@atoms/Span';
import ThumbNail from '@atoms/Thumbnail';
import Star from '@atoms/Star';
import { Link, useLocation } from 'react-router-dom';
import TagList from '@molecules/TagListProps';
import { ReviewResponseDtoItem, TagListType } from '@interfaces/ReviewTypes';
import { STORE_REVIEW_TAG } from '@constants/store';
import { IMAGE_URL } from '@constants/url';
import UseTimeForToday from '@hooks/UseTimeForToday';
import Icon from '@atoms/Icon';
import Buttons from '@atoms/Buttons';
import { Color } from '@constants/styles';
import { UseReviewList } from '@hooks/UseQueryHooks';
import { REVIEW } from '@constants/useQueryKey';
import { useSetRecoilState } from 'recoil';
import modalAtom, { muiAnchorEl } from '@recoil/modalAtom';
import * as S from './styles';

export type ReviewCardProps = {
  tagListChildren: ReactNode;
};

function ReviewCard<T extends Partial<ReviewResponseDtoItem>>(
  props: T & { showTagList?: boolean; showStoreInfo?: boolean; useModal?: boolean; showControll?: boolean },
) {
  const {
    storeName,
    point,
    content,
    tagList,
    reviewImageUrlList = null,
    address,
    name,
    createdAt,
    reviewId,
    myReview,
    useModal = true,
    userImage = IMAGE_URL.NO_IMAGE,
    showStoreInfo = true,
    showTagList = true,
    showControll = false,
  } = props;
  const [facilityTag, setFacilityTag] = React.useState<TagListType[] | null>(null);
  const [qualityTag, setQualityTag] = React.useState<TagListType[] | null>(null);

  const setAnchorEl = useSetRecoilState(muiAnchorEl);
  const setModalContent = useSetRecoilState(modalAtom);
  const { UseDeleteDetailReview } = UseReviewList();
  const { mutate } = UseDeleteDetailReview(REVIEW.DETAIL_REVIEW_LIST, Number(reviewId));
  const location = useLocation();

  // b, f 해시태그 키 구분
  React.useEffect(() => {
    if (showTagList) {
      const fa = tagList
        ?.filter((tag) => tag.tag.indexOf('b') === 0)
        .map((filterTag) => ({
          id: filterTag.id,
          tag: STORE_REVIEW_TAG[filterTag.tag],
        }));
      const qu = tagList
        ?.filter((tag) => tag.tag.indexOf('f') === 0)
        .map((filterTag) => ({
          id: filterTag.id,
          tag: STORE_REVIEW_TAG[filterTag.tag],
        }));
      setFacilityTag(fa || null);
      setQualityTag(qu || null);
    }
  }, [showTagList, tagList]);

  const handleDelete = () => {
    setAnchorEl(null); // 헤더 팝업 닫기
    setModalContent({
      messages: ['리뷰를 삭제 하시겠습니까?'],
      submitButton: { onClick: mutate },
    });
  };
  return (
    <S.CardItem showTagList={showTagList}>
      <S.CardItemInner>
        {showControll && myReview === 'Y' && (
          <S.ControlButtonArea>
            <Buttons onClick={() => handleDelete()}>
              <>
                <Icon size="1.8rem" color={Color.darkGrey} iconName="delete_icon" />
                <Span color={Color.darkGrey} fontSize="1.2rem" display="block">
                  삭제
                </Span>
              </>
            </Buttons>
          </S.ControlButtonArea>
        )}

        <S.CardContentArea>
          <S.CardContentTop>
            {showStoreInfo && (
              <S.CardStoreInfoArea>
                <Span fontSize="1.6rem" fontWeight="bold">
                  {storeName}
                </Span>
                <Span fontSize="1.2rem" color="#3B3b3b" fontWeight="normal">
                  {address}
                </Span>
              </S.CardStoreInfoArea>
            )}
            <S.CardUserInfoArea>
              <ThumbNail hover round={100} width="50px" height="50px" alt={storeName} src={userImage} />

              <S.UserInfoArea>
                <S.UserName fontSize="2rem" fontWeight="bold">
                  {name}
                  <Span className="time" fontSize="1.2rem">
                    {UseTimeForToday(createdAt)}
                  </Span>
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
                    <li key={item.url}>
                      {useModal ? (
                        <Link
                          to="/photosModal"
                          state={{
                            data: {
                              imgList: reviewImageUrlList?.map((i) => i.url),
                              alt: storeName,
                            },
                            locationState: location,
                          }}
                        >
                          <ThumbNail
                            hover
                            width="100px"
                            height="100px"
                            alt={`${storeName}에 작성된 리뷰 사진`}
                            src={item.url}
                            borderSize={1}
                          />
                        </Link>
                      ) : (
                        <ThumbNail
                          hover
                          width="100px"
                          height="100px"
                          alt={`${storeName}에 작성된 리뷰 사진`}
                          src={item.url}
                          borderSize={1}
                        />
                      )}
                    </li>
                  ),
              )}
            </S.CardImageList>
          </S.cCardContentBottom>
        </S.CardContentArea>
        {showTagList && tagList && (
          <S.StoreTagListGroup>
            <TagList tagListTitle="편의시설" tags={facilityTag} />
            <TagList tagListTitle="분위기" tags={qualityTag} />
          </S.StoreTagListGroup>
        )}
      </S.CardItemInner>
    </S.CardItem>
  );
}

export default ReviewCard;
