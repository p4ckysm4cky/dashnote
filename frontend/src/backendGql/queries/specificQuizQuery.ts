import { gql } from '@apollo/client';

export const specificQuizQuery = gql`
    query specificQuizQuery($quizId: ID!) {
        quiz(quizId: $quizId) {
            id
            name
            description
            cards {
                id
                term
                answer
            }
        }
    }
`;

export default specificQuizQuery;
