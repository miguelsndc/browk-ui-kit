import { Wrapper } from './styles';

export type BadgeVariants = 'white' | 'primary' | 'secondary';

type BadgeProps = {
  text: string;
  variant: BadgeVariants;
};

export default function Badge({ text, variant = 'primary' }: BadgeProps) {
  return (
    <Wrapper variant={variant}>
      <span>{text}</span>
    </Wrapper>
  );
}
