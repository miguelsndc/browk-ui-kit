import { ComponentStory, ComponentMeta } from '@storybook/react';

import Notification from './index';

export default {
  title: 'Components/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = args => (
  <Notification {...args} />
);

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  head: 'Head',
  description: 'Description',
  shouldHaveDismissButton: true,
  shouldHaveHelpButton: true,
  onHelp: () => {},
  onDismiss: () => {},
};

export const SuccessWithoutButtons = Template.bind({});
SuccessWithoutButtons.args = {
  type: 'success',
  head: 'Head',
  description: 'Description',
  shouldHaveDismissButton: false,
  shouldHaveHelpButton: false,
};

export const SuccessWithoutHead = Template.bind({});
SuccessWithoutHead.args = {
  type: 'success',
  description: 'Description',
  shouldHaveDismissButton: false,
  shouldHaveHelpButton: false,
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  head: 'Head',
  description: 'Description',
  shouldHaveDismissButton: true,
  shouldHaveHelpButton: true,
  onHelp: () => {},
  onDismiss: () => {},
};

export const ErrorWithoutDesc = Template.bind({});
ErrorWithoutDesc.args = {
  type: 'error',
  head: 'Head',
  shouldHaveDismissButton: true,
  shouldHaveHelpButton: true,
  onHelp: () => {},
  onDismiss: () => {},
};

export const Information = Template.bind({});
Information.args = {
  type: 'info',
  head: 'Head',
  description: 'Description',
  shouldHaveDismissButton: true,
  shouldHaveHelpButton: true,
  onHelp: () => {},
  onDismiss: () => {},
};
