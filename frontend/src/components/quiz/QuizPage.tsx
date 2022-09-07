import { useParams } from 'react-router-dom';

export const QuizPage = () => {
    const { quizId } = useParams();

    return <div>{quizId}</div>;
};
