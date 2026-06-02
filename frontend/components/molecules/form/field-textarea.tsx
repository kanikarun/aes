'use client';

import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupTextarea } from '@/components/ui/input-group';
import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'textarea'> {
  icon?: React.ElementType;
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  dataInvalid?: boolean;
}

export const FieldTextarea: React.FC<Props> = props => {
  const { icon: Icon, dataInvalid, disabled, label, name, placeholder, error, required, value, onChange } = props;
  return (
    <Field data-invalid={dataInvalid}>
      <FieldLabel htmlFor={name} className={cn({ required })}>
        {label}
      </FieldLabel>
      <InputGroup className="items-start" aria-invalid={dataInvalid}>
        {Icon && (
          <InputGroupAddon align="inline-start">
            <Icon className="mt-1.5 size-4.5" />
          </InputGroupAddon>
        )}
        <InputGroupTextarea
          disabled={disabled}
          aria-invalid={dataInvalid}
          id={name}
          className="text-sm md:text-base!"
          placeholder={placeholder}
          rows={4}
          value={value}
          onChange={onChange}
        />
      </InputGroup>
      {Boolean(error) && <FieldError>{error}</FieldError>}
    </Field>
  );
};

export interface TextareaProps<T extends FieldValues> extends Props {
  name: Path<T>;
  control?: Control<T>;
}

export function ControlFieldTextarea<T extends FieldValues>(props: TextareaProps<T>) {
  const { control, ...rest } = props;
  if (rest.hidden) return null;
  return (
    <Controller
      control={control}
      name={rest.name}
      render={({ fieldState, field }) => (
        <FieldTextarea
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
