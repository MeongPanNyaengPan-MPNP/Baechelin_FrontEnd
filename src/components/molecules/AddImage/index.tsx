import React, { useCallback, useRef, useState } from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form/dist/types/form';
import Buttons from '@atoms/Buttons';
import styled from 'styled-components';
import Icon from '@atoms/Icon';
import ThumbNail from '@atoms/Thumbnail';
import { FormErrMessage } from '@styles/ui';
import * as S from './styles';

type FileLeaderProps = {
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
} & UseControllerProps;
const StyledInput = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;
  position: absolute;
  left: -100000px;
`;

function AddImage({ name, control, setValue, getValues }: FileLeaderProps) {
  const inputRef = useRef<any>();
  const [imgSrc, setImgSrc] = useState<(string | ArrayBuffer | null)[]>([]);
  const fileMax = 6;
  const saveImage = useCallback((file: any) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImgSrc((values) => [...values, fileReader.result]);
    };
  }, []);
  const clickAddImage = () => {
    inputRef.current.click();
  };
  return (
    <div className="uploader-wrapper">
      <S.FileUploaderWrap>
        {imgSrc.map(
          (src, index) =>
            typeof src === 'string' && (
              // eslint-disable-next-line react/no-array-index-key
              <ThumbNail key={`addImg${index}`} width="100px" height="100px" alt="preview" src={src} />
            ),
        )}
        <Controller
          name={name}
          control={control}
          render={({ field: { ref, ...restField } }) => (
            <>
              <StyledInput
                type="file"
                accept="image/*"
                id={name}
                ref={inputRef}
                {...restField}
                multiple
                onChange={({ target: { files } }) => {
                  const prevValue = getValues(name) || [];
                  const len = files?.length;
                  if (len && len > fileMax + 1 - prevValue.length) {
                    alert('최대 7개까지 첨부할 수 있습니다.');
                    return;
                  }
                  if (prevValue.length < fileMax) {
                    restField.onChange(() => {
                      if (files !== null && files?.length > 0) {
                        Object.keys(files).forEach((_, index) => {
                          saveImage(files[index]);
                        });
                        setValue(name, [...prevValue, ...files]);
                      }
                    });
                  }
                }}
              />
              <S.FileAddButton>
                <Buttons type="button" onClick={clickAddImage} bgColor="transparent">
                  <Icon iconName="add_icon" size="2.6rem" />
                </Buttons>
              </S.FileAddButton>
            </>
          )}
        />
      </S.FileUploaderWrap>
      <FormErrMessage color="#3B3B3B" opacity={0.5}>
        최대 7개까지 첨부할 수 있습니다.
      </FormErrMessage>
    </div>
  );
}

export default AddImage;
