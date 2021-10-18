import { useState } from 'react';
import { TextInput, ContextMenu } from '..';

import { Wrapper } from './styles';

import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/arrow-up.svg';

type SelectProps = {
  options: string[];
  opened?: boolean;
  required?: boolean;
  error?: string;
  success?: boolean;
};

export default function Select({
  options,
  opened,
  required = false,
  error = '',
  success = false,
}: SelectProps) {
  const [currentOption, setCurrentOption] = useState<string | null>(null);

  const [areOptionsVisible, setAreOptionsVisible] = useState(opened);

  function handleSelectOption(option: string | null) {
    setCurrentOption(option);
    setAreOptionsVisible(false);
  }

  return (
    <Wrapper onFocus={() => setAreOptionsVisible(true)}>
      <TextInput
        type='text'
        id='Select'
        label='Your Country'
        value={currentOption ? currentOption : ''}
        success={success}
        error={error}
        onChange={() => {}}
        autoComplete='off'
      ></TextInput>
      {areOptionsVisible && (
        <ContextMenu
          options={options}
          currentOption={currentOption}
          onSelectOption={handleSelectOption}
          required={required}
        />
      )}
    </Wrapper>
  );
}
