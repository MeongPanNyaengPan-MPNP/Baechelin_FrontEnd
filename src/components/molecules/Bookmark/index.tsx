import React from 'react';
import Icon from '@atoms/Icon';
import BookmarkRegister from '@organisms/BookmarkRegister';
import { Color } from '@constants/styles';

interface BookmarkProps {
  size?: string;
  marked?: string;
}

function Bookmark({ size, marked = Color.darkGrey }: BookmarkProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Icon iconName="bookmark" color={marked} size={size} cursor="pointer" onClick={handleClick} />
      <BookmarkRegister anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
}

export default Bookmark;
