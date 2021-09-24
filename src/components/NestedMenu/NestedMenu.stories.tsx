import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NestedMenu, { SelectedOptions } from './index';

export default {
  title: 'Components/NestedMenu',
  component: NestedMenu,
} as ComponentMeta<typeof NestedMenu>;

const Template: ComponentStory<typeof NestedMenu> = args => {
  const [selected, setSelected] = useState<SelectedOptions | null>(null);

  return (
    <NestedMenu {...args} onSelect={setSelected} currentOptions={selected} />
  );
};

const options = {
  Places: ['dsadsadsadsa', 'UdsSA', 'Dada'],
  Ddada: ['dsadsadsadsa', 'dsadsa', 'dsdsadsads'],
};
export const Opened = Template.bind({});
Opened.args = {
  options,
};
