import React from 'react';
import * as S from './styles';

function StoreInfoPhotos() {
  const photos = [
    'https://photos.bigoven.com/recipe/hero/best-spaghetti-bolognese-2ea1ce.jpg?h=300&w=300',
    'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg',
    'https://www.recipegirl.com/wp-content/uploads/2021/08/Spaghetti-and-Meatballs-1-200x200.jpeg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542310072.png',
  ];

  const onClickPhoto = () => {
    alert('사진 캐루셀');
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Photo
          src="https://content.api.news/v3/images/bin/104903dc87c2963a2d3e722aa85fe923?width=650"
          onClick={onClickPhoto}
        />
      </S.Wrapper>
      <S.Wrapper>
        {photos.map((v) => (
          <S.Photos src={v} key={v} onClick={onClickPhoto} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}

export default StoreInfoPhotos;
