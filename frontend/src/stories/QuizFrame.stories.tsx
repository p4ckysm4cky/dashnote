import QuizFrame from '../components/home/QuizFrame';
import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react';

export default {
    title: 'QuizFrame',
    component: QuizFrame,
    // We need to use a decorator or else it will error out
    decorators: [
        (Story: any) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
} as Meta;

const Template: Story = (args: any) => <QuizFrame {...args} />;

export const QuizFrameExample = Template.bind({});
QuizFrameExample.args = {
    name: 'Quiz name',
    description: 'This is an example of a quiz displayed on homepage',
    id: '1',
};
