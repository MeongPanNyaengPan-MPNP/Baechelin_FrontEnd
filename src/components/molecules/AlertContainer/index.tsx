import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Alert, { AlertButtonContent } from '@atoms/Alert';
import { useRecoilState } from 'recoil';
import modalAtom from '@recoil/modalAtom';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 660px;
`;
const Wrapper = styled.div<{ modalExist: boolean }>`
  position: fixed;
  z-index: ${(props) => (props.modalExist ? '1000' : -1)};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function AlertContainer() {
  const [modalContent, setModalContent] = useRecoilState(modalAtom);

  const [submitButton, setSubmitButton] = React.useState<AlertButtonContent>({
    message: '예',
    onClick() {},
    point: false,
    show: true,
  });
  const [cancelButton, setCancelButton] = React.useState<AlertButtonContent>({
    message: '아니요',
    onClick() {},
    point: true,
    show: true,
  });

  const onSubmit = useCallback(() => {
    modalContent?.submitButton?.onClick();
    setModalContent(null);
  }, [modalContent, setModalContent]);

  const onCancel = useCallback(() => {
    modalContent?.cancelButton?.onClick();
    setModalContent(null);
  }, [modalContent?.cancelButton, setModalContent]);
  useEffect(() => {
    setSubmitButton({
      message: modalContent?.submitButton?.message || '예',
      onClick: onSubmit,
      point: modalContent?.submitButton?.point || false,
      show: modalContent?.submitButton?.show || true,
    });
    setCancelButton({
      message: modalContent?.cancelButton?.message || '아니요',
      onClick: onCancel,
      point: modalContent?.cancelButton?.point || true,
      show: modalContent?.cancelButton?.show || true,
    });
  }, [modalContent, onCancel, onSubmit]);

  return (
    <Wrapper id="alertModal" modalExist={!!modalContent}>
      {modalContent && (
        <Inner>
          <Container>
            {modalContent.cancelButton !== null && modalContent.submitButton !== null && (
              <Alert messages={modalContent.messages} submitButton={submitButton} cancelButton={cancelButton} />
            )}
          </Container>
        </Inner>
      )}
    </Wrapper>
  );
}

export default AlertContainer;
