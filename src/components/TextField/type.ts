import {CSSProperties, HTMLProps} from "react";
import { TextFieldProps } from '@material-ui/core';
import { UseControllerProps } from 'react-hook-form/dist/types/controller';


export type TextInputProps = {
  style?: CSSProperties,
  errors?: { message: string | null },
  fieldAreaHeight?: number,
  onChange: () => void,
} & UseControllerProps
  & HTMLProps<HTMLInputElement>
  & TextFieldProps;