import React from 'react';

import Icon from '@atoms/Icon';
import Span from '@atoms/Span';

import * as S from './styles';

interface BookmarkRegisterFolderNameProps {
  name: string;
  iconName?: string;
  fontSize?: string;
  iconSize?: string;
  height?: string;
  justify?: string;
  onClick?: () => void;
}

function BookmarkRegisterFolderName({
  name = '북마크폴더명',
  iconName = 'folder',
  fontSize = '1rem',
  iconSize = '1.7rem',
  height = '1.5rem',
  justify,
  onClick,
}: BookmarkRegisterFolderNameProps) {
  return (
    <S.Container height={height} justify={justify} onClick={onClick}>
      <Icon iconName={iconName} size={iconSize} />
      <Span display="block" fontSize={fontSize} width="80px" style={{ margin: '0 0 0.2rem 0.5rem' }}>
        {name}
      </Span>
    </S.Container>
  );
}

export default BookmarkRegisterFolderName;
