import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './index';

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Main = Template.bind({});
Main.args = {
  options: ['Russia', 'China', 'USA'],
};
