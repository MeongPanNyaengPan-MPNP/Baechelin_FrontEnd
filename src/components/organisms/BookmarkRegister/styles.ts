import styled from 'styled-components';
import { Color } from '@constants/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  /* max-height: 13rem; */
  min-height: 4rem;
  background-color: ${Color.white};
  border-bottom: 1px solid ${Color.grey};
  padding: 0.6rem 1rem;

  span {
    :hover {
      background-color: ${Color.lightGrey};
    }
  }
`;
export const Inner = styled.div`
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 1.5rem;
  margin-bottom: 1rem;
`;

export const FolderConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 100;
  width: 100%;
  height: 2.6rem;
  background-color: ${Color.orange};
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95%;
  height: 1.5rem;
  margin: 0.5rem 0;
`;

export const folderNameWrapper = styled.div`
  display: block;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 1rem;
  width: 85px;
`;

export const Input = styled.input<{ fontSize: string }>`
  margin-left: 0.5rem;
  width: 10.5rem;
  height: 1.8rem;
  border: 1px solid ${Color.grey};
  background-color: ${Color.lightGrey};
  border-color: ${Color.darkGrey};
  font-size: 1.2rem;
`;

export const Button = styled.button`
  position: absolute;
  top: 0.1rem;
  right: 0;
`;
