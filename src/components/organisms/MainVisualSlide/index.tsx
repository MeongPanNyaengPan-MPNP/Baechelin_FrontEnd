import React from 'react';
import SlideGroup from '@molecules/VisualSlide';
import { ThumbNailProps } from '@atoms/Thumbnail';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SlideButtonsArea from '@molecules/SlideButtons';
import * as S from './styles';

function MainVisualSlide({ slideItems }: { slideItems: ThumbNailProps[] }) {
  return (
    <S.MainVisualSlideWrap id="mainVisualSlide">
      <SlideGroup slideItems={slideItems} paginationId="MainVisualPagination">
        <SlideButtonsArea color="#FFF" nextIcon={<ArrowForwardIosIcon />} prevIcon={<ArrowBackIosNewIcon />} />
      </SlideGroup>
    </S.MainVisualSlideWrap>
  );
}

export default MainVisualSlide;
