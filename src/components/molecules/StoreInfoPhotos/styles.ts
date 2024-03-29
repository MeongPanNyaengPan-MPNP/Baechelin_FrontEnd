import styled from 'styled-components';
import { Color } from '@constants/styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  user-select: none;
`;
export const Container = styled.div<{ width?: string }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  width: ${(props) => `${props.width}` || `calc(50% - 5px)`};
  height: ${(props) => `${props.width}` || `23.4rem`};

  a {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  }

  ${Wrapper} {
    width: ${(props) => `${props.width ? `100%` : `calc(50% - 5px)`}`};
  }
`;

export const PhotosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  width: calc(50% - 5px);
  height: 50%;
  user-select: none;

  position: relative;

  a {
    position: relative;
    width: calc(50% - 3px);
    padding-bottom: calc(50% - 3px);

    &:nth-child(3),
    &:nth-child(4) {
      margin-top: 6px;
    }

    &:nth-child(4) {
      margin-left: 6px;
    }
  }
`;

export const Photo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
  background: ${Color.lightGrey};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: none;
    border: 1px solid #efefef;
    width: 100%;
    height: 100%;
    opacity: 0.2;
  }
`;

export const Photos = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: none;
    border: 1px solid #efefef;
    width: 100%;
    height: 100%;
    opacity: 0.2;
  }
`;
