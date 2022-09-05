import { gql } from '@apollo/client';
import QuizBriefFragment from '../fragments/quizBriefFragment';

export const newQuizMutation = gql`
    mutation newQuizMutation($name: String!, $description: String!) {
        newQuiz(name: $name, description: $description) {
            ...QuizBriefFragment
        }
    }
    ${QuizBriefFragment}
`;

export default newQuizMutation;
