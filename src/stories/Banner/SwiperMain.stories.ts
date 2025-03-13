import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SwiperMain from '../../components/Banner/SwiperMain';

const meta = {
  title: 'Banner/SwiperMain', // 폴더 위치
  component: SwiperMain, // 어떤 컴포넌트를 사용할지
  parameters: {
    layout: 'centered', // 컴포넌트 위치
  },
  tags: ['autodocs'],
  argTypes: {
    imgUrl: {}
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SwiperMain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'SwiperMain',
  },
};

export const Secondary: Story = {
  args: {
    label: 'SwiperMain',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'SwiperMain',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'SwiperMain',
  },
};
