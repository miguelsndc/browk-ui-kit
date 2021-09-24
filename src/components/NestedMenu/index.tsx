import { Dispatch, SetStateAction, useEffect, useCallback } from 'react';
import { Wrapper, Option, Label } from './styles';

import checkedIcon from '../../assets/checked.svg';

export type Options = {
  [key: string]: string[];
};

export type SelectedOptions = {
  [key: string]: string | null;
};

type NestedMenuProps = {
  currentOptions: SelectedOptions | null;
  required?: boolean;
  options: Options;
  onSelect: Dispatch<SetStateAction<SelectedOptions | null>>;
};

export default function NestedMenu({
  currentOptions,
  onSelect,
  options,
  required,
}: NestedMenuProps) {
  function handleSelectOption(label: string, option: string) {
    const optionIsSelected =
      currentOptions &&
      Object.values(currentOptions as SelectedOptions).includes(option);

    const shouldUnselect = !required && optionIsSelected;

    onSelect({
      ...currentOptions,
      [label]: shouldUnselect ? null : option,
    });
  }

  console.log(currentOptions);

  const getDefaultOptions = useCallback(() => {
    const defaultOptions = Object.entries(options as Options)
      .map(option => {
        return {
          [option[0]]: option[1][0],
        };
      })
      .reduce((acc, curVal) => {
        return { ...acc, ...curVal };
      });

    return defaultOptions;
  }, [options]);

  useEffect(() => {
    if (required) {
      const defaultOptions = getDefaultOptions();
      onSelect(defaultOptions);
    }
  }, [required, onSelect, getDefaultOptions]);

  return (
    <Wrapper role='container'>
      {Object.entries(options).map((option, i) => {
        const selectedOptions = currentOptions
          ? Object.values(currentOptions as SelectedOptions)
          : null;

        const label = option[0];
        const fieldOptions = option[1];

        return (
          <div key={i}>
            <Label>{label}</Label>
            <div>
              {fieldOptions.map((opt, i) => {
                return (
                  <Option
                    key={i}
                    onClick={() => handleSelectOption(label, opt)}
                  >
                    {opt}
                    {selectedOptions?.includes(opt) && (
                      <img src={checkedIcon} alt='checked' />
                    )}
                  </Option>
                );
              })}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}
