import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Click me',
};

export const PrimaryWhite = Template.bind({});
PrimaryWhite.parameters = {
  backgrounds: { default: 'primary' },
};

PrimaryWhite.args = {
  variant: 'primary-white',
  label: 'Click me',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Click me',
};

export const SecondaryWhite = Template.bind({});
SecondaryWhite.parameters = {
  backgrounds: { default: 'primary' },
};

SecondaryWhite.args = {
  variant: 'secondary-white',
  label: 'Click me',
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  label: 'Click me',
};

export const FlatWhite = Template.bind({});
FlatWhite.parameters = {
  backgrounds: { default: 'primary' },
};
FlatWhite.args = {
  variant: 'flat-white',
  label: 'Click me',
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  variant: 'secondary-dark',
  label: 'Click me',
};
