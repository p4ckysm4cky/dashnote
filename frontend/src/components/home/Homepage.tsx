import { useQuery } from '@apollo/client';
import allQuizQuery from '../../backendGql/queries/allQuizQuery';
import { QuizFrame } from './QuizFrame';

const Homepage = () => {
    const { loading, error, data } = useQuery(allQuizQuery);
    if (error) return <p>{error.message}</p>;
    if (loading) return <p>'Loading...'</p>;

    return (
        <div>
            <QuizFrame {...data.allQuiz[0]} />
        </div>
    );
};

export default Homepage;
