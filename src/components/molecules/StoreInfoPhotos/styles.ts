import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  width: 49%;
  user-select: none;
`;
export const Container = styled.div<{ width?: string }>`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  width: ${(props) => `${props.width}` || `49%`};
  height: ${(props) => `${props.width}` || `23.4rem`};

  a {
    width: 100%;
    height: 100%;
  }
  ${Wrapper} {
    width: ${(props) => `${props.width ? `100%` : `49%`}`};
  }
`;


export const PhotosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  width: 49%;
  user-select: none;

  a {
    width: 49%;
    height: 49%;
  }
`;

export const Photo = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export const Photos = styled.img`
  width: 49%;
  height: 49%;
  object-fit: cover;
  cursor: pointer;
`;
