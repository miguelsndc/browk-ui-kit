import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from './index';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    position: [
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right',
      'left',
      'right',
    ],
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Your text',
};
