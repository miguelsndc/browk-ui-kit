import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from './index';

export default {
  title: 'Components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

// const Template: ComponentStory<typeof Radio> = args => <Radio {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   selected: false,
//   label: 'Option',
//   disabled: false,
// };

const Template: ComponentStory<typeof Radio> = args => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  selected: false,
  label: 'Option',
  disabled: false,
};
