import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContextMenu from './index';

export default {
  title: 'Components/ContextMenu',
  component: ContextMenu,
} as ComponentMeta<typeof ContextMenu>;

const Template: ComponentStory<typeof ContextMenu> = args => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ContextMenu
      {...args}
      onSelectOption={setSelected}
      currentOption={selected}
    />
  );
};

export const Opened = Template.bind({});

const options = ['Russia', 'USA', 'China'];

Opened.args = {
  options,
};
