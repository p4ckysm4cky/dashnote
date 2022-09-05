import { gql } from '@apollo/client';

const QuizBriefFragment = gql`
    fragment QuizBriefFragment on Quiz {
        id
        name
        description
    }
`;

export default QuizBriefFragment;
