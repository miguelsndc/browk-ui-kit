import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Wrapper, Option } from './styles';

import checkedIcon from '../../assets/checked.svg';

type Option = string;

type GroupedOptions = {
  [key: string]: Option[];
};

// Nested Options : { optionGroup: Option[]} ex: { Country: ['Russia','USA','China'] }

type ContextMenuProps = {
  currentOption: string | null;
  required: boolean;
  multiple: boolean;
  options: Option[]; // Não funciona
  onSelect: Dispatch<SetStateAction<string | null>>;
};

export default function ContextMenu({
  options,
  onSelect,
  required,
  currentOption,
}: ContextMenuProps) {
  function handleSelectOption(i: number) {
    const selectedOption = options[i];

    if (!required && selectedOption === currentOption) {
      onSelect(null);
      return;
    }

    onSelect(selectedOption);
  }

  useEffect(() => {
    required && onSelect(currentOption || options[0]);
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
