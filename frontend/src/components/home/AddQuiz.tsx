import { useEffect, useState } from 'react';
import styles from './AddQuiz.module.css';
import { CustomButton } from '../CustomButton';
import newQuizMutation from '../../backendGql/mutations/newQuizMutation';
import { useMutation } from '@apollo/client';

export const AddQuiz = (props: { setStateFn: (array: any) => void }) => {
    const [nameInput, SetNameInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [mutateFunction, { data, loading, error }] = useMutation(
        newQuizMutation,
        {
            variables: { name: nameInput, description: descriptionInput },
        },
    );
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
                onChange={(e) => SetNameInput(e.target.value)}
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
                }}
            />
        </div>
    );
};

export default AddQuiz;
