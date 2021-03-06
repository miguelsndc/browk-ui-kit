import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { Wrapper } from './styles';

type ToggleProps = {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
};

export default function Toggle({
  id,
  checked,
  onChange,
  disabled,
}: ToggleProps) {
  function handleChange(_: ChangeEvent<HTMLInputElement>) {
    onChange(prevChecked => !prevChecked);
  }

  return (
    <Wrapper htmlFor={id} isChecked={checked} isDisabled={disabled}>
      <input
        id={id}
        type='checkbox'
        onChange={handleChange}
        disabled={disabled}
        checked={checked}
      />
      <svg
        width='11'
        height='10'
        viewBox='0 0 11 10'
        fill='none'
        className='checked'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.67587 4.98419C1.48741 4.81543 1.24183 4.72386 0.988394 4.72786C0.734961 4.73186 0.492419 4.83113 0.309421 5.00575C0.126422 5.18037 0.0165037 5.41743 0.00171272 5.66938C-0.0130783 5.92133 0.0683524 6.16953 0.229671 6.36419L2.45922 8.69419C2.55257 8.79169 2.66474 8.86941 2.78899 8.92268C2.91325 8.97595 3.04704 9.00368 3.18232 9.00419C3.31689 9.00497 3.45024 8.97882 3.57446 8.92729C3.69867 8.87575 3.81122 8.79988 3.90542 8.70419L10.7146 1.70419C10.8069 1.60964 10.8796 1.49791 10.9286 1.37537C10.9775 1.25284 11.0018 1.12191 10.9999 0.990049C10.998 0.85819 10.9701 0.727988 10.9177 0.606876C10.8653 0.485765 10.7895 0.376117 10.6945 0.284192C10.5995 0.192266 10.4873 0.119864 10.3643 0.0711197C10.2412 0.0223752 10.1097 -0.00175758 9.97728 9.95945e-05C9.84486 0.00195677 9.7141 0.0297673 9.59246 0.0819434C9.47083 0.13412 9.36071 0.20964 9.26839 0.304192L3.19236 6.56419L1.67587 4.98419Z'
          fill='white'
        />
      </svg>
      <div className='unchecked'></div>
      <div className='slider'></div>
    </Wrapper>
  );
}
