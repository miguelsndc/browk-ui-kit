import { HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import { CtaButton } from './styles';

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
  const theme = useTheme();

  const Loader = () => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22.1036 11.3811C22.0914 11.1207 21.9764 10.8759 21.7837 10.7004C21.591 10.5248 21.3365 10.4331 21.0762 10.4452C20.8158 10.4573 20.571 10.5724 20.3955 10.765C20.2199 10.9577 20.1281 11.2122 20.1403 11.4726C20.2229 13.2296 19.7129 14.9635 18.6919 16.3959C17.6709 17.8283 16.1983 18.8762 14.5104 19.3712C12.8225 19.8663 11.0172 19.7799 9.38427 19.1259C7.75136 18.4719 6.38553 17.2882 5.50602 15.7649C4.62651 14.2415 4.28434 12.4669 4.53441 10.7257C4.78449 8.98456 5.61232 7.37792 6.88502 6.16369C8.15772 4.94946 9.80148 4.19805 11.5525 4.03007C13.3034 3.86209 15.0601 4.28729 16.5404 5.23741C16.649 5.30707 16.7703 5.35464 16.8974 5.37743C17.0244 5.40021 17.1547 5.39775 17.2807 5.37018C17.4068 5.34262 17.5262 5.29049 17.6321 5.21678C17.7381 5.14307 17.8284 5.04922 17.8981 4.94058C17.9678 4.83195 18.0153 4.71065 18.0381 4.58363C18.0609 4.45661 18.0584 4.32634 18.0309 4.20027C18.0033 4.07419 17.9512 3.95479 17.8775 3.84886C17.8038 3.74293 17.7099 3.65256 17.6013 3.5829C15.7507 2.39589 13.555 1.865 11.3666 2.07541C9.17815 2.28582 7.12385 3.22534 5.53335 4.74319C3.94286 6.26105 2.9084 8.26922 2.596 10.4454C2.28358 12.6217 2.71134 14.8398 3.8106 16.7437C4.90987 18.6477 6.61691 20.1272 8.65778 20.9448C10.6986 21.7623 12.955 21.8705 15.0648 21.2521C17.1745 20.6336 19.0153 19.3243 20.2917 17.5342C21.5682 15.7442 22.2063 13.5772 22.1036 11.3811Z'
        fill={theme.colors.primary}
      />
    </svg>
  );

  return (
    <CtaButton
      variant={variant}
      {...rest}
      circle={circle}
      disabled={disabled}
      icon={icon}
    >
      {loading ? <Loader /> : label}
    </CtaButton>
  );
}
