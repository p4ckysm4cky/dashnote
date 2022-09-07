import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import specificQuizQuery from '../../backendGql/queries/specificQuizQuery';
import AddCard from './AddCard';
import { CardFrameGallery } from './CardFrameGallery';
import CardDisplay from './CardDisplay';

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
            <CardDisplay
                term="Hello World"
                answer="The quick brown fox jumps over the lazy dog"
                isFlipped={false}
            />
            {clientData ? (
                <CardFrameGallery
                    cardArray={clientData['cards']}
                    setStateFn={setClientData}
                />
            ) : (
                <p>No cards</p>
            )}
            <AddCard quizId={quizId!} setStateFn={setClientData} />
        </div>
    );
};
