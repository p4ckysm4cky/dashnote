import { gql } from '@apollo/client';
import QuizBriefFragment from '../fragments/quizBriefFragment';

export const deleteQuizMutation = gql`
    mutation deleteQuizMutation($quizId: ID!) {
        deleteQuiz(quizId: $quizId) {
            ...QuizBriefFragment
        }
    }
    ${QuizBriefFragment}
`;

export default deleteQuizMutation;
