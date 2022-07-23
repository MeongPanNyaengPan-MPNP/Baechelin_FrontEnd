import styled from 'styled-components';
import { Container } from '@styles/layout';

export const FormContainer = styled(Container)`
  background: #fff;
  padding: 40px 0;
`;
export const Inner = styled.div`
  max-width: 945px;
  width: 100%;
  margin: 0px auto;
`;
export const QuestionSection = styled.section`
  margin-bottom: 70px;

  h5 {
    margin-bottom: 30px;
  }

  .MuiRating-root {
    transform: scale(1.7) translateX(20%);
  }
`;
