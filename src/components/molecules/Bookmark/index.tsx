import React from 'react';
import Icon from '@atoms/Icon';
import BookmarkRegister from '@organisms/BookmarkRegister';

interface BookmarkProps {
  size?: string;
}

function Bookmark({ size }: BookmarkProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Icon iconName="bookmark" color="#ED6F2A" size={size} cursor="pointer" onClick={handleClick} />
      <BookmarkRegister anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
}

export default Bookmark;
