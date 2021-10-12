import { ComponentStory, ComponentMeta } from '@storybook/react';
import Island from './index';

export default {
  title: 'Components/Island',
  component: Island,
} as ComponentMeta<typeof Island>;

const Template: ComponentStory<typeof Island> = args => <Island {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  progress: 32,
  author: {
    profilePic:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Alexa',
  },
  bannerUrl:
    'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
  title: 'How buy new clothes without money in USA',
  lessons: 12,
  tasks: 12,
  duration: 30,
  continueToUrl: 'https://google.com',
  moreUrl: 'https://google.com',
};
