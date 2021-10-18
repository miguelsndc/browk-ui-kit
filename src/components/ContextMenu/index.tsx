import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Wrapper, Option } from './styles';

import checkedIcon from '../../assets/checked.svg';

type Option = string;

type ContextMenuProps = {
  currentOption: string | null;
  required: boolean;
  options: Option[];
  onSelectOption: (option: string | null) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function ContextMenu({
  options,
  onSelectOption,
  required,
  currentOption,
}: ContextMenuProps) {
  function handleSelectOption(i: number) {
    const selectedOption = options[i];

    if (!required && selectedOption === currentOption) {
      onSelectOption(null);
      return;
    }

    onSelectOption(selectedOption);
  }

  useEffect(() => {
    required && onSelectOption(currentOption || options[0]);
  }, [required]);

  return (
    <Wrapper>
      {options.map((opt, i) => (
        <Option key={i} onClick={() => handleSelectOption(i)}>
          {opt}
          {opt === currentOption && <img src={checkedIcon} alt='checked' />}
        </Option>
      ))}
    </Wrapper>
  );
}
