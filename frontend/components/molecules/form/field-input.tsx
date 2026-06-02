'use client';

import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'input'> {
  icon?: React.ElementType;
  label: string;
  name: string;
  placeholder: string;
  error?: string;
  required?: boolean;
  dataInvalid?: boolean;
}

export const FieldInput: React.FC<Props> = props => {
  const { icon: Icon, label, name, placeholder, error, required, dataInvalid, disabled, value, onChange } = props;

  return (
    <Field data-invalid={dataInvalid}>
      <FieldLabel htmlFor={name} className={cn({ required })}>
        {label}
      </FieldLabel>
      <InputGroup aria-invalid={dataInvalid} className="md:h-12">
        {Icon && (
          <InputGroupAddon align="inline-start">
            <Icon className="size-4.5" />
          </InputGroupAddon>
        )}
        <InputGroupInput
          id={name}
          aria-invalid={dataInvalid}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="text-sm md:h-12 md:text-base!"
        />
      </InputGroup>
      {Boolean(error) && <FieldError>{error}</FieldError>}
    </Field>
  );
};

export interface InputProps<T extends FieldValues> extends Props {
  name: Path<T>;
  control?: Control<T>;
}

export function ControlFieldInput<T extends FieldValues>(props: InputProps<T>) {
  const { control, ...rest } = props;
  return (
    <Controller
      control={control}
      name={rest.name}
      render={({ fieldState, field }) => (
        <FieldInput
          {...rest}
          error={fieldState.error?.message}
          dataInvalid={fieldState.invalid}
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
}
