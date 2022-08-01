import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextAreaInput from '@atoms/TextAreaInput';
import AddImage from '@molecules/AddImage';
import CheckBoxGroup from '@molecules/CheckBoxGroup';
import { REVIEW_FILTERS } from '@constants/store';
import Star from '@atoms/Star';
import Span from '@atoms/Span';
import Buttons from '@atoms/Buttons';
import { postReview } from '@service/reviewApi';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

function ReviewForm({ storeName: storeId }: { storeName: string }) {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    point: Yup.number().required('별점을 선택해주세요.'),
    content: Yup.string()
      .required('리뷰는 최소 30자 이상 작성해주세요.')
      .min(20, '리뷰는 최소 20자 이상 작성해주세요.')
      .max(100, '리뷰는 최대 100자까지 가능합니다.'),
  });
  const { handleSubmit, control, setValue, getValues } = useForm<FieldValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
  });
  const [curValues, setCurValues] = React.useState<FieldValues | undefined>();

  const onSubmit = (data: FieldValues) => {
    const resultForm = new FormData();
    data.imageFile?.forEach((file: File) => {
      resultForm.append('imageFile', file);
    });
    [...data.facility, ...data.quality].forEach((item) => {
      if (item !== undefined) {
        resultForm.append('tagList', item);
      }
    });
    resultForm.append('point', data.point);
    resultForm.append('content', data.content);
    resultForm.append('storeId', storeId);
    postReview(resultForm)
      .then(() => {
        navigate(`/store/${storeId}`);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  const handleFormChange = React.useCallback(() => {
    const cur = getValues();
    setCurValues(cur);
  }, [getValues]);

  const boxStyled = {
    grid: '20%',
    margin: '0 0 15px',
    width: '100%',
    round: '3em',
    paddingBetween: '0 10px',
    textAlign: 'center',
    fontSize: '1.4rem',
    checkedBg: '#F2F2F2',
    checkedColor: '#3B3B3B',
    basicBg: '#ED6F2A',
    basicColor: '#fff',
  };
  return (
    <S.FormArea>
      <form onSubmit={handleSubmit(onSubmit)} onChange={handleFormChange}>
        <S.QuestionSection>
          <h5>
            <Span fontSize="2rem" fontWeight="bold">
              방문하신 장소가 마음에 드셨나요? *
            </Span>
          </h5>
          <Star
            name="point"
            setvalue={setValue}
            control={control}
            defaultValue={5}
            max={5}
            color="#ED6F2A"
            sx={{ fontSize: '3.2rem' }}
            readOnly={false}
          />
        </S.QuestionSection>
        <S.QuestionSection>
          <h5>
            <Span fontSize="2rem" fontWeight="bold">
              이 장소는 어떤 시설이 있었나요? (복수 선택 가능)
            </Span>
          </h5>
          <CheckBoxGroup
            control={control}
            curValue={curValues?.facility}
            data={REVIEW_FILTERS.FACILITY}
            name="facility"
            boxStyleProps={boxStyled}
            iconShow={false}
          />
        </S.QuestionSection>
        <S.QuestionSection>
          <h5>
            <Span fontSize="2rem" fontWeight="bold">
              이 장소의 분위기는 어떤가요? (복수 선택 가능)
            </Span>
          </h5>
          <CheckBoxGroup
            control={control}
            curValue={curValues?.quality}
            data={REVIEW_FILTERS.QUALITY}
            name="quality"
            boxStyleProps={boxStyled}
            iconShow={false}
          />
        </S.QuestionSection>
        <S.QuestionSection>
          <h5>
            <Span fontSize="2rem" fontWeight="bold">
              이 장소에 대한 솔직한 리뷰를 남겨주세요 *
            </Span>
          </h5>
          <TextAreaInput name="content" control={control} />
          <AddImage name="imageFile" getValues={getValues} setValue={setValue} control={control} />
        </S.QuestionSection>
        <S.ButtonArea>
          <Buttons type="submit" bgColor="#ED6F2A" color="#fff" round="5em" size="large" fontSize="2.2rem">
            후기 올리기
          </Buttons>
        </S.ButtonArea>
      </form>
    </S.FormArea>
  );
}

export default ReviewForm;
