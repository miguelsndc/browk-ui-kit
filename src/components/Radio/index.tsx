import { Dispatch, SetStateAction } from 'react';

import { Wrapper } from './styles';

type RadioProps = {
  selected: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
  label: string;
  disabled?: boolean;
};

export default function Radio({
  selected,
  label,
  onChange,
  disabled,
}: RadioProps) {
  function handleChange() {
    onChange(prevState => !prevState);
  }

  return (
    <Wrapper>
      <input
        type='radio'
        checked={selected}
        onChange={handleChange}
        disabled={disabled}
      />
      <div className='select-box'>
        {selected && <div className='selected'></div>}
      </div>
      {label}
    </Wrapper>
  );
}
