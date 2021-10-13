import { ComponentStory, ComponentMeta } from '@storybook/react';
import Popup from './index';

export default {
  title: 'Components/Popup',
  component: Popup,
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = args => <Popup {...args} />;

export const SuccessWithConfirmAndCancel = Template.bind({});
SuccessWithConfirmAndCancel.args = {
  type: 'confirm-cancel',
  icon: 'warning',
  head: 'Do you want to delete ?',
  description: "You can't restore this file",
};

export const SuccessWithSingleConfirmButton = Template.bind({});
SuccessWithSingleConfirmButton.args = {
  type: 'confirm',
  icon: 'success',
  head: 'File deleted',
  description: "That's all",
};
export const ErrorWithNoButton = Template.bind({});
ErrorWithNoButton.args = {
  type: 'no-button',
  icon: 'error',
  head: 'Error',
  description: 'Sorry',
};
