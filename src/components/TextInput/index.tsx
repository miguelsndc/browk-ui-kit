import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { InputBox, Wrapper } from './styles';

type InputTextTypes = 'text' | 'email' | 'password';

type TextInputProps = {
  id: string;
  type: InputTextTypes;
  error?: string;
  label: string;
  success?: boolean;
  disabled?: boolean;
  description?: string;
  placeholder?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function TextInput({
  id,
  type,
  value,
  error,
  label,
  success,
  onChange,
  disabled,
  placeholder,
  description,
  ...rest
}: TextInputProps) {
  return (
    <Wrapper>
      <InputBox
        hasErrors={!!error}
        isSuccess={success}
        isDisabled={disabled}
        userHasTyped={!!value}
        shouldDecreaseLabelSize={!!(value || placeholder)}
      >
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          {...rest}
        />
      </InputBox>
      {error && <span>{error}</span>}
      {!error && description && <p>{description}</p>}
    </Wrapper>
  );
}
