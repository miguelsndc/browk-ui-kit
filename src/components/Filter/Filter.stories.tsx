import { ComponentStory, ComponentMeta } from '@storybook/react';
import Filter from './index';

export default {
  title: 'Components/Filter',
  component: Filter,
  argTypes: {
    side: ['left', 'right', 'center'],
  },
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = args => <Filter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  isActive: false,
};
