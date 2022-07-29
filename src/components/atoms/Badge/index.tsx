import React, { useEffect } from 'react';
import styled from 'styled-components';

const BadgeArea = styled.div<BadgeProps>`
  border-radius: 100%;
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
  active?: boolean;
  [prop: string]: any;
};

function Badge({ name, state = 'N', active, ...props }: BadgeProps) {
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
    <BadgeArea {...props}>
      {active ? (
        <img
          alt={`${alt} ${state === 'Y' ? '있음' : '없음'}`}
          src={`/img/ui/picto_${name}_${state === 'Y' ? 'on' : 'off_active'}.${extension}`}
        />
      ) : (
        <img
          alt={`${alt} ${state === 'Y' ? '있음' : '없음'}`}
          src={`/img/ui/picto_${name}_${state === 'Y' ? 'on' : 'off'}.${extension}`}
        />
      )}
    </BadgeArea>
  );
}

export default Badge;
