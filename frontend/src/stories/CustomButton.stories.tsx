import { CustomButton } from '../components/CustomButton';
import { Meta, Story } from '@storybook/react';

export default {
    title: 'CustomButton',
    component: CustomButton,
    argTypes: { fn: { action: 'fn ran' } },
} as Meta;

const Template: Story = (args: any) => <CustomButton {...args} />;

export const CustomButtonExample = Template.bind({});
CustomButtonExample.args = {
    className: null,
    buttonName: 'Example button',
};
