import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: -2px;
  width: 1280px;
  padding: 4rem 0 3.2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.2rem;
  margin-bottom: 2rem;
`;

export const BookmarkListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 50rem;
`;

export const CreateBookmarkButtonWrapper = styled.div`
  display: block;
  position: absolute;
  right: 0rem;
  bottom: 5rem;
`;
