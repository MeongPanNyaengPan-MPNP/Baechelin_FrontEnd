import React, { ReactNode } from 'react';

import Buttons from '@atoms/Buttons';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as S from './styles';

type SlideButtonsProps = {
  color?: string;
  hover?: boolean;
  prevIcon?: ReactNode;
  nextIcon?: ReactNode;
  prevId?: string;
  nextId?: string;
};

export function SlideButtonPrev({ children, id }: { children: any; id?: string }) {
  return (
    <Buttons id={id} transparent type="button">
      {children}
    </Buttons>
  );
}

export function SlideButtonNext({ children, id }: { children: any; id?: string }) {
  return (
    <Buttons id={id} transparent width="auto" type="button">
      {children}
    </Buttons>
  );
}

export default function SlideButtonsArea({ prevIcon, nextIcon, color, hover, nextId, prevId }: SlideButtonsProps) {
  return (
    <S.SlideButtonArea hover={hover} color={color}>
      <SlideButtonPrev id={prevId}>{prevIcon || <ArrowBackIosNewIcon />}</SlideButtonPrev>
      <SlideButtonNext id={nextId}>{nextIcon || <ArrowForwardIosIcon />}</SlideButtonNext>
    </S.SlideButtonArea>
  );
}
