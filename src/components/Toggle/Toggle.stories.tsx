import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from './index';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = args => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  checked: false,
  disabled: false,
};
