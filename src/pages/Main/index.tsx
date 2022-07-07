import React from 'react';
import Link from '@atoms/Link';
import Badge from '@atoms/Badge';

function Main() {
  return (
    <>
      <Link to='/ReviewWrite'>리뷰쓰기</Link>
      <Badge size='l' alt='dd' src='https://ssl.pstatic.net/static/common/myarea/myInfo.gif' />
    </>
  );
}


export default Main;
