import React from 'react';
import SlideGroup, { SlideButtonNext, SlideButtonPrev } from '@molecules/VisualSlide';
import { ThumbNailProps } from '@atoms/Thumbnail';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as S from './styles';

function MainVisualSlide({ slideItems }: { slideItems: ThumbNailProps[] }) {
  return (
    <S.MainVisualSlideWrap>
      <SlideGroup slideItems={slideItems} paginationId="pagination">
        <S.ButtonArea>
          <SlideButtonPrev>
            <ArrowBackIosNewIcon />
          </SlideButtonPrev>
          <SlideButtonNext>
            <ArrowForwardIosIcon />
          </SlideButtonNext>
        </S.ButtonArea>
        <S.PaginationArea id="pagination" />
      </SlideGroup>
    </S.MainVisualSlideWrap>
  );
}

export default MainVisualSlide;
