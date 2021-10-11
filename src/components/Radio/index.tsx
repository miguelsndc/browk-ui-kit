import { Dispatch, SetStateAction } from 'react';

import { Wrapper } from './styles';

type RadioProps = {
  selected: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
  label: string;
};

export default function Radio({
  selected,
  label,
  onChange,
  ...rest
}: RadioProps) {
  function handleChange() {
    onChange(prevState => !prevState);
  }

  return (
    <Wrapper>
      <input
        {...rest}
        type='radio'
        checked={selected}
        onChange={handleChange}
      />
      <div className='select-box'>
        {selected && <div className='selected'></div>}
      </div>
      {label}
    </Wrapper>
  );
}
