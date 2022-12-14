import { useEffect, useState } from 'react';
import styles from './AddQuiz.module.css';
import { CustomButton } from '../CustomButton';
import newQuizMutation from '../../backendGql/mutations/newQuizMutation';
import { useMutation } from '@apollo/client';
import allQuizQuery from '../../backendGql/queries/allQuizQuery';

export const AddQuiz = (props: { setStateFn: (array: any) => void }) => {
    const [nameInput, setNameInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [mutateFunction, { data }] = useMutation(newQuizMutation, {
        variables: { name: nameInput, description: descriptionInput },
        refetchQueries: [{ query: allQuizQuery }],
    });
    useEffect(() => {
        if (data) {
            props.setStateFn(data.newQuiz);
        }
    }, [data]);
    return (
        <div className={styles.container}>
            <input
                className={styles.searchBar}
                type="text"
                placeholder="Quiz name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
            />
            <input
                className={styles.searchBar}
                type="text"
                placeholder="Quiz description"
                value={descriptionInput}
                onChange={(e) => setDescriptionInput(e.target.value)}
            />
            <CustomButton
                className={styles.customButton}
                buttonName={'Add Quiz'}
                fn={() => {
                    mutateFunction();
                    setNameInput('');
                    setDescriptionInput('');
                }}
            />
        </div>
    );
};

export default AddQuiz;
