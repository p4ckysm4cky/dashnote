import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import specificQuizQuery from '../../backendGql/queries/specificQuizQuery';
import AddCard from './AddCard';

export const QuizPage = () => {
    const { quizId } = useParams();
    const [clientData, setClientData] = useState(null);
    const { loading, error, data } = useQuery(specificQuizQuery, {
        variables: { quizId },
    });
    useEffect(() => {
        if (data) {
            setClientData(data.quiz);
        }
    }, [data]);
    if (error) return <p>{error.message}</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {JSON.stringify(clientData)}
            <AddCard quizId={quizId!} setStateFn={setClientData} />
        </div>
    );
};
