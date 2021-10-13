import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: [
      'primary',
      'primary-white',
      'secondary',
      'secondary-white',
      'flat',
      'flat-white',
      'secondary-dark',
    ],
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Click me',
};

export const PrimaryWhite = Template.bind({});
PrimaryWhite.parameters = {
  backgrounds: { default: 'primary' },
};

PrimaryWhite.args = {
  ...Primary.args,
  variant: 'primary-white',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
};

export const SecondaryWhite = Template.bind({});
SecondaryWhite.parameters = {
  backgrounds: { default: 'primary' },
};

SecondaryWhite.args = {
  ...Primary.args,
  variant: 'secondary-white',
};

export const Flat = Template.bind({});
Flat.args = {
  ...Primary.args,
  variant: 'flat',
};

export const FlatWhite = Template.bind({});
FlatWhite.parameters = {
  backgrounds: { default: 'primary' },
};
FlatWhite.args = {
  ...Primary.args,
  variant: 'flat-white',
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  ...Primary.args,
  variant: 'secondary-dark',
};
