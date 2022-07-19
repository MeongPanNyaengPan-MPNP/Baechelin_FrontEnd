import { UseControllerProps } from 'react-hook-form';

export type FormValues = {
  facility: CheckBoxType[];
  selectBox: string | ReadonlyArray<string> | number | undefined;
  textarea: string;
  files: File[];
};

export interface CheckBoxType {
  LABEL: string | undefined;
  KEY: string | undefined;
  CHECKED: boolean | undefined;
}

export type HookFormControl = {
  sd?: string;
} & UseControllerProps;
