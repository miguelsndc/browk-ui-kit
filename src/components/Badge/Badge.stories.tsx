import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './index';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  text: 'Your text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  text: 'Your text',
};

export const White = Template.bind({});
White.args = {
  variant: 'white',
  text: 'Your text',
};
