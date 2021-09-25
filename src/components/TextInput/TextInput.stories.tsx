import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from './index';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => (
  <TextInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  label: 'Your name',
  errorMessage: '',
  success: false,
  description: '',
  type: 'text',
  id: 'field-id',
};
