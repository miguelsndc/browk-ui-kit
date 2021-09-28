import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './index';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => {
  const [value, setValue] = useState('');

  return (
    <TextInput
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};
export const Primary = Template.bind({});
Primary.args = {
  label: 'Your name',
  placeholder: 'Name',
  error: '',
  success: false,
  disabled: false,
  description: '',
  type: 'text',
  id: 'field-id',
};
