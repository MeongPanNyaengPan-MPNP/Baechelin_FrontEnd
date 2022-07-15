import { UseControllerProps } from 'react-hook-form';

export type FormValues = {
  facility: CheckBoxType[];
  selectBox: string | ReadonlyArray<string> | number | undefined;
  textarea: string;
  files: File[];
};

export interface CheckBoxType {
  label: string | undefined;
  key: string | undefined;
  checked: boolean | undefined;
}

export type HookFormControl = {
  sd?: string;
} & UseControllerProps;
