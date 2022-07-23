import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextAreaInput from '@atoms/TextAreaInput';
import AddImage from '@molecules/AddImage';
import CheckBoxGroup from '@molecules/CheckBoxGroup';
import { STORE_FILTERS } from '@constants/store';
import Star from '@atoms/Star';
import Span from '@atoms/Span';
import * as S from './styles';

function ReviewForm() {
  const validationSchema = Yup.object().shape({ checkbox: Yup.bool().oneOf([true], 'Accept Terms is required') });
  const { handleSubmit, control, setValue, getValues } = useForm<FieldValues>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log('data', data);
  };
  const boxStyled = {
    grid: '20%',
    margin: '0 0 15px',
    width: '100%',
    round: '3em',
    paddingBetween: '0 10px',
    textAlign: 'center',
    fontSize: '1.4rem',
    basicBg: '#F2F2F2',
    basicColor: '#3B3B3B',
    checkedBg: '#ED6F2A',
    checkedColor: '#fff',
  };
  return (
    <S.FormContainer>
      <S.Inner>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.QuestionSection>
            <h5>
              <Span fontSize="2rem" fontWeight="bold">
                방문하신 장소가 마음에 드셨나요?
              </Span>
            </h5>
            <Star defaultValue={5} max={5} size="large" />
          </S.QuestionSection>
          <S.QuestionSection>
            <h5>
              <Span fontSize="2rem" fontWeight="bold">
                이 장소는 어떤 편의 시설이 있었나요? (복수 선택 가능)
              </Span>
            </h5>
            <CheckBoxGroup control={control} data={STORE_FILTERS.CATEGORY} name="facility" boxStyleProps={boxStyled} />
          </S.QuestionSection>
          <S.QuestionSection>
            <h5>
              <Span fontSize="2rem" fontWeight="bold">
                이 장소의 분위기는 어떤가요? (복수 선택 가능)
              </Span>
            </h5>
            <CheckBoxGroup control={control} data={STORE_FILTERS.CATEGORY} name="facility" boxStyleProps={boxStyled} />
          </S.QuestionSection>
          <S.QuestionSection>
            <h5>
              <Span fontSize="2rem" fontWeight="bold">
                이 장소에 대한 솔직한 리뷰를 남겨주세요
              </Span>
            </h5>
            <TextAreaInput name="textarea" control={control} />
          </S.QuestionSection>
          <AddImage name="files" getValues={getValues} setValue={setValue} control={control} />
          <button type="submit">제출</button>
        </form>
      </S.Inner>
    </S.FormContainer>
  );
}

export default ReviewForm;
