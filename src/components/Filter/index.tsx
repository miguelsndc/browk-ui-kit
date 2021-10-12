import { Dispatch, SetStateAction } from 'react';
import { Wrapper } from './styles';

export type Side = 'left' | 'right' | 'center';

type FilterProps = {
  label: string;
  onChange: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
  side: Side;
};

export default function Filter({
  onChange,
  isActive,
  label,
  side,
}: FilterProps) {
  function handleChange() {
    onChange(prevActive => !prevActive);
  }

  return (
    <Wrapper isActive={isActive} side={side} onClick={handleChange}>
      {label}
    </Wrapper>
  );
}
