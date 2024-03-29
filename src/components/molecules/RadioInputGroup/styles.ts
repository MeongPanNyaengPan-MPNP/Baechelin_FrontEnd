import styled from 'styled-components';

import { FormControlLabel, RadioGroup } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const RadioInputGroup = styled(RadioGroup)`
  flex-direction: row;
`;
export const Label = styled(FormControlLabel)`
  margin-left: 0;

  &:hover {
    .MuiFormControlLabel-label {
      font-weight: bold;
    }
  }
`;
