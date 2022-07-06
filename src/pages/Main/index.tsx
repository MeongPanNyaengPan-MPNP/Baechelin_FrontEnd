import React from 'react';
import Link from '@atoms/Link';
import Badge from '@atoms/Badge';
import CheckBoxForm from '@molecules/CheckBoxForm';

function Main() {
  const meowCheck = [{
    label: '시설정보1',
    checked: false,
  },
    {
      label: '시설정보2',
      checked: false,
    }, {
      label: '시설정보3',
      checked: false,
    }];
  return (
    <>
      <Link to='/ReviewWrite'>리뷰쓰기</Link>
      <Badge size='l' alt='dd' src='https://ssl.pstatic.net/static/common/myarea/myInfo.gif' />
      <CheckBoxForm name='dummy' data={meowCheck} />
    </>
  );
}

export default Main;
