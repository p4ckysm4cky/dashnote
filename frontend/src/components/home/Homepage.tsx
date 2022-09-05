import { useQuery, useMutation } from '@apollo/client';
import allQuizQuery from '../../backendGql/queries/allQuizQuery';
import newQuizMutation from '../../backendGql/mutations/newQuizMutation';
import { QuizFrameGallery } from './QuizFrameGallery';
import AddQuiz from './AddQuiz';
import { useEffect, useState } from 'react';

const Homepage = () => {
    const { loading, error, data } = useQuery(allQuizQuery);
    const [allQuiz, setAllQuiz] = useState([]);

    useEffect(
        () => {
            if (data) {
                setAllQuiz(data.allQuiz);
            }
        },
        [data], // allQuiz is updated when data is changed
    );
    if (error) return <p>{error.message}</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <QuizFrameGallery quizArray={allQuiz} />
            <AddQuiz setStateFn={setAllQuiz} />
        </div>
    );
};

export default Homepage;
