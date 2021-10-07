import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from './index';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = args => {
  const [checked, setChecked] = useState(true);

  console.log(checked);

  return <Toggle {...args} checked={checked} onChange={setChecked} />;
};

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
