import { ChangeEvent, HTMLAttributes, useState } from 'react';

import { Wrapper } from './styles';

type InputTextTypes = 'text' | 'email' | 'password' | 'url' | 'number' | 'tel';

type TextInputProps = {
  disabled?: boolean;
  label: string;
  errorMessage?: string;
  success?: boolean;
  description?: string;
  type: InputTextTypes;
  id: string;
} & HTMLAttributes<HTMLInputElement>;

export default function TextInput({
  label,
  disabled,
  type,
  errorMessage,
  success,
  description,
  id,
  onChange,
  ...rest
}: TextInputProps) {
  const [value, setValue] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    onChange && onChange(e);
  }

  return (
    <Wrapper shouldDecreaseLabelSize={!!value}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        disabled={disabled}
        id={id}
        {...rest}
        value={value}
        onChange={handleChange}
      />
      {errorMessage && <span>{errorMessage}</span>}
      {description && <p>{description}</p>}
    </Wrapper>
  );
}
