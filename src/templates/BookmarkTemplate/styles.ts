import styled from 'styled-components';
import { Color } from '@constants/styles';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: -2px;
  width: 1240px;
  margin: 0 auto;
  padding: 4rem 0px 1rem;
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
`;

export const CreateBookmarkButtonWrapper = styled.div`
  display: block;
  position: absolute;
  right: 0rem;
  bottom: 5rem;

  button {
    position: relative;
    transition: none;
  }

  button::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border: 2px solid ${Color.darkGrey};
    opacity: 0.5;
    border-radius: 50em;
  }

  button:hover::after {
    border: 2px solid ${Color.orange};

    opacity: 1;
  }
`;
