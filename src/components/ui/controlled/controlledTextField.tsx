import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '../textField'

type ControlledTextFieldProps<T extends FieldValues> = {
  name: FieldPath<T>
  control: Control<T> //Control<TFieldValues, TContext>
} & Omit<TextFieldProps, 'value' | 'onChange' | 'onBlur'>
export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error }, //field: { value, onChange }
  } = useController({
    name,
    control,
  })

  return <TextField {...field} errorMessage={error?.message} {...restProps} />
}
