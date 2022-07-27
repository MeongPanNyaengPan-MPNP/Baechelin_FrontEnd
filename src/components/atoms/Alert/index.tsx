import React from 'react';
import styled from 'styled-components';

export type AlertButtonContent = {
  message?: string;
  point?: boolean;
  onClick: () => void;
};

export type AlertProps = {
  messages: string[];
  submitButton?: AlertButtonContent;
  cancelButton?: AlertButtonContent;
};

const Content = styled.div`
  padding: 20px 0px 0;
  background: #fff;
  text-align: center;
`;
const Message = styled.p`
  font-size: 2rem;
  line-height: 1.4;
`;
const Button = styled.button<{ point?: boolean }>`
  flex: 1;
  font-size: 1.6rem;
  text-align: center;
  padding: 10px;
  background: ${(props) => (props.point ? '#ED6F2A' : '#F2F2F2')};
  color: ${(props) => (props.point ? '#FFF' : '#3B3B3B')};
`;
const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  max-height: 42px;
  margin-top: 36px;
`;

function Alert({ messages, submitButton, cancelButton }: AlertProps) {
  return (
    <Content>
      <div>
        {messages.map((item) => (
          <Message key={item}>{item}</Message>
        ))}
      </div>
      <ButtonArea>
        <Button type="button" onClick={submitButton?.onClick} point={submitButton?.point}>
          {submitButton?.message}
        </Button>
        <Button type="button" onClick={cancelButton?.onClick} point={cancelButton?.point}>
          {cancelButton?.message}
        </Button>
      </ButtonArea>
    </Content>
  );
}

export default Alert;
