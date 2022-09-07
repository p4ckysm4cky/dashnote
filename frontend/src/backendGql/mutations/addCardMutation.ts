import { gql } from '@apollo/client';

export const addCardMutation = gql`
    mutation addCardMutation($quizId: ID!, $term: String!, $answer: String!) {
        addCard(quizId: $quizId, term: $term, answer: $answer) {
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

export default addCardMutation;
