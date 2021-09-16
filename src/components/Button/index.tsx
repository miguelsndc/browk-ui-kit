import { HTMLAttributes } from 'react';
import { CtaButton } from './styles';
import { Loader } from '../';

export type ButtonVariants =
  | 'primary'
  | 'primary-white'
  | 'secondary'
  | 'secondary-white'
  | 'flat'
  | 'flat-white'
  | 'secondary-dark';

type ButtonProps = {
  label?: string;
  variant: ButtonVariants;
  circle?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export default function Button({
  label,
  circle,
  variant = 'primary',
  disabled = false,
  loading,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <CtaButton
      variant={variant}
      {...rest}
      circle={circle}
      disabled={disabled}
      icon={icon}
    >
      {loading ? <Loader color='#111' /> : label}
    </CtaButton>
  );
}
