import { useQuery } from '@apollo/client';
import allQuizQuery from '../../backendGql/queries/allQuizQuery';
import { QuizFrameGallery } from './QuizFrameGallery';

const Homepage = () => {
    const { loading, error, data } = useQuery(allQuizQuery);
    if (error) return <p>{error.message}</p>;
    if (loading) return <p>'Loading...'</p>;

    return (
        <div>
            <QuizFrameGallery quizArray={data.allQuiz} />
        </div>
    );
};

export default Homepage;
