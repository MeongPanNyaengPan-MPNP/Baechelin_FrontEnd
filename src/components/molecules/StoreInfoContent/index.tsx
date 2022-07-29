import Badge from '@atoms/Badge';
import Icon from '@atoms/Icon';
import Span from '@atoms/Span';
import React from 'react';
import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import * as S from './styles';

interface StoreInfoContentProps {
  showIcons?: boolean;
  storeDetailData: StoreMapResponseTypes;
}

function StoreInfoContent({
                            storeDetailData,
                            showIcons = true
                          }: StoreInfoContentProps) {
  // const icons = ['local_parking', 'wheelchair_pickup', 'accessible_forward'];

  return (
    <S.Container>
      {
        storeDetailData?.address &&
        <S.Wrapper className="address_area">
          <Icon iconName="location_on" size="2.4rem" margin="0 1.2rem 0 0" />
          <Span fontSize="2rem">{storeDetailData?.address}</Span>
        </S.Wrapper>
      }
      {
        storeDetailData?.phoneNumber &&
        <S.Wrapper className="phone_area">
          <Icon iconName="local_phone" size="2.4rem" margin="0 1.2rem 0 0" />
          <Span fontSize="2rem">{storeDetailData?.phoneNumber}</Span>
        </S.Wrapper>
      }

      {showIcons && (
        <S.IconsWrapper className="icons_area">
          {/* {icons.map((v) => (
          <Icon iconName={v} size="3.6rem" margin="0 1.4rem 0 0" key={v} />
        ))} */}
          <Badge
            name="elevator"
            state={storeDetailData?.elevator}
            style={{
              height: '4.4rem',
              width: '4.4rem',
            }}
          />
          <Badge
            name="height"
            state={storeDetailData?.heightDifferent}
            style={{
              height: '4.4rem',
              width: '4.4rem',
            }}
          />
          <Badge
            name="approach"
            state={storeDetailData?.approach}
            style={{
              height: '4.4rem',
              width: '4.4rem',
            }}
          />
          <Badge
            name="parking"
            state={storeDetailData?.parking}
            style={{
              height: '4.4rem',
              width: '4.4rem',
            }}
          />
          <Badge
            name="toilet"
            state={storeDetailData?.toilet}
            style={{
              height: '4.4rem',
              width: '4.4rem',
            }}
          />
        </S.IconsWrapper>
      )}
    </S.Container>
  );
}

export default StoreInfoContent;
