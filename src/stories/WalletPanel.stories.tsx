import type { Meta, StoryObj } from '@storybook/react';
import WalletPanel from '../WalletPanel';
import { dummyTokens } from '../dummy/dummyTokens';
import { dummyAddress } from '../dummy/dummyAddress';

const meta: Meta<typeof WalletPanel> = {
  title: 'WalletPanel',
  component: WalletPanel,
};

export default meta;
type Story = StoryObj<typeof WalletPanel>;

const Template: Story = {
  render: (args) => (
    <div className="flex justify-center items-center min-h-screen bg-[#1F2532]">
      <WalletPanel {...args} />
    </div>
  ),
};

export const StoryComponent: Story = {
  ...Template,
  args: {
      tokens: dummyTokens,
  },
};

export const Address: Story = {
  ...Template,
  args: {
    address: dummyAddress,
  },
};

export const OnDisconnect: Story = {
  ...Template,
  args: {
    onDisconnect: () => {},
  },
};