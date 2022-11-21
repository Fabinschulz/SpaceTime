import { CSSProperties, HTMLProps } from "react";
import { TextFieldProps } from '@material-ui/core';
import { UseControllerProps } from 'react-hook-form/dist/types/controller';
import { FieldError } from "react-hook-form";


export type TextInputProps = {
  style?: CSSProperties,
  errors?: FieldError,
  fieldAreaHeight?: number,
  onChange?: () => void,
  control: any
  name: string
}
  & HTMLProps<HTMLInputElement>
  & TextFieldProps;