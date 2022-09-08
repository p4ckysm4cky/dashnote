import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import specificQuizQuery from '../../backendGql/queries/specificQuizQuery';
import AddCard from './AddCard';
import { CardFrameGallery } from './CardFrameGallery';
import CardDisplayControl from './CardDisplayControl';
import { CardDisplayControlType } from './CardDisplayControl';
import DeleteButton from './DeleteButton';

export const QuizPage = () => {
    const { quizId } = useParams();
    const [clientData, setClientData] = useState<CardDisplayControlType>({
        cards: [],
    });
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
            {clientData!.cards.length > 0 ? (
                <CardDisplayControl cards={clientData!['cards']} />
            ) : (
                <p>No cards</p>
            )}
            {clientData ? (
                <CardFrameGallery
                    cardArray={clientData['cards']}
                    setStateFn={setClientData}
                />
            ) : (
                <div></div>
            )}
            <AddCard quizId={quizId!} setStateFn={setClientData} />
            <DeleteButton quizId={quizId!} />
        </div>
    );
};
