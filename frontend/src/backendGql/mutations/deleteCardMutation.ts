import { gql } from '@apollo/client';

export const deleteCardMutation = gql`
    mutation deleteCardMutation($cardId: ID!) {
        deleteCard(cardId: $cardId) {
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

export default deleteCardMutation;
