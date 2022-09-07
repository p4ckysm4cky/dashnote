import styles from './AddCard.module.css';
import { useEffect, useState } from 'react';
import { CustomButton } from '../CustomButton';
import { useMutation } from '@apollo/client';
import addCardMutation from '../../backendGql/mutations/addCardMutation';

export const AddCard = (props: {
    quizId: string;
    setStateFn: (array: any) => void;
}) => {
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            handleMutation();
        }
    };

    const handleMutation = () => {
        mutateFunction();
        setTermInput('');
        setAnswerInput('');
    };
    const [termInput, setTermInput] = useState('');
    const [answerInput, setAnswerInput] = useState('');
    const [mutateFunction, { data }] = useMutation(addCardMutation, {
        variables: {
            quizId: props.quizId,
            term: termInput,
            answer: answerInput,
        },
    });
    useEffect(() => {
        if (data) {
            props.setStateFn(data.addCard);
        }
    }, [data]);
    return (
        <div className={styles.container}>
            <input
                className={styles.inputBar}
                type="text"
                placeholder="Card term"
                value={termInput}
                onChange={(e) => setTermInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <input
                className={styles.inputBar}
                type="text"
                placeholder="Card description"
                value={answerInput}
                onChange={(e) => setAnswerInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <CustomButton
                className={styles.customButton}
                buttonName={'Add card'}
                fn={handleMutation}
            />
        </div>
    );
};

export default AddCard;
