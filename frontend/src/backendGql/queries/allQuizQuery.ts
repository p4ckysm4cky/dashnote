import { gql } from '@apollo/client';
import QuizBriefFragment from '../fragments/quizBriefFragment';

export const allQuizQuery = gql`
    query AllQuiz {
        allQuiz {
            ...QuizBriefFragment
        }
    }
    ${QuizBriefFragment}
`;

export default allQuizQuery;
