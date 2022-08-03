import React, { useEffect } from 'react';
import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';

const BadgeArea = styled.div<BadgeProps>`
  border-radius: ${(props) => (props.type ? 'none' : '100%;')};
  overflow: hidden;
  background: #fff;
  width: 36px;
  height: 36px;

  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export type BadgeProps = {
  name: 'approach' | 'elevator' | 'height' | 'parking' | 'toilet' | undefined;
  state: 'Y' | 'N' | undefined;
  type?: string;
  active?: boolean;
  isLoading?: boolean;
  [prop: string]: any;
};

function Badge({ name, state = 'N', type = '', active, isLoading, ...props }: BadgeProps) {
  const [alt, setAlt] = React.useState<string>();
  const extension = 'svg';
  useEffect(() => {
    if (name) {
      if (name === 'approach') {
        setAlt('휠체어 경사로');
      } else if (name === 'elevator') {
        setAlt('엘레베이터');
      } else if (name === 'height') {
        setAlt('주 출입구 단차');
      } else if (name === 'parking') {
        setAlt('장애인 전용 주차장');
      } else if (name === 'toilet') {
        setAlt('장애인 전용 화장실');
      }
    }
  }, [name]);
  return (
    <BadgeArea {...props} type={type} className="badge">
      {isLoading && (
        <Skeleton variant="circular" width="36px" height="36px">
          <img
            alt={`${alt} ${state === 'Y' ? '있음' : '없음'}`}
            src={`/img/ui/picto_${name}_${state === 'Y' ? 'on' : 'off_active'}${type ? `_${type}` : ''}.${extension}`}
          />
        </Skeleton>
      )}
      {!isLoading && active ? (
        <img
          alt={`${alt} ${state === 'Y' ? '있음' : '없음'}`}
          src={`/img/ui/picto_${name}_${state === 'Y' ? 'on' : 'off_active'}${type ? `_${type}` : ''}.${extension}`}
        />
      ) : (
        <img
          alt={`${alt} ${state === 'Y' ? '있음' : '없음'}`}
          src={`/img/ui/picto_${name}_${state === 'Y' ? 'on' : 'off'}${type ? `_${type}` : ''}.${extension}`}
        />
      )}
    </BadgeArea>
  );
}

export default Badge;
