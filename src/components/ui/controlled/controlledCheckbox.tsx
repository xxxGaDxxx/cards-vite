import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxType } from '../checkbox'

type ControlledCheckboxProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValue'
> &
  Omit<CheckboxType, 'value' | 'onChange' | 'onBlur'>
export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  shouldUnregister,
  ...restProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    shouldUnregister,
  })

  return (
    <Checkbox checked={value} onChange={onChange} errorMessage={error?.message} {...restProps} />
  )
}
