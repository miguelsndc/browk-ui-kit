import { Wrapper } from './styles';

type BadgeProps = {
  text: string;
  variant: 'white' | 'primary' | 'secondary';
};

export const Badge = ({ text, variant = 'primary' }: BadgeProps) => {
  return (
    <Wrapper variant={variant}>
      <span>{text}</span>
    </Wrapper>
  );
};