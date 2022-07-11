import React, { useCallback, useRef, useState } from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form/dist/types/form';
import Buttons from '@atoms/Buttons';
import styled from 'styled-components';
import Thumb from '@atoms/Thumbnail';

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
              onChange={({ target: { files } }) => {
                const prevValue = getValues(name) || [];
                restField.onChange(() => {
                  if (files !== null && files?.length > 0) {
                    saveImage(files[0]);
                    setValue(name, [...prevValue, files[0]]);
                  }
                });
              }}
            />
            <Buttons type="button" onClick={clickAddImage}>
              사진추가
            </Buttons>
          </>
        )}
      />
      {imgSrc.map((src) => typeof src === 'string' && <Thumb key={src} alt="preview" src={src} />)}
    </div>
  );
}

export default AddImage;
