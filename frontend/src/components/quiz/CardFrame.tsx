import styles from './CardFrame.module.css';
import { CustomButton } from '../CustomButton';
import { useMutation } from '@apollo/client';
import deleteCardMutation from '../../backendGql/mutations/deleteCardMutation';
import { useEffect } from 'react';

export const CardFrame = (props: {
    id: string;
    term: string;
    answer: string;
    setStateFn: (value: any) => void;
}) => {
    const [mutateFunction, { data }] = useMutation(deleteCardMutation, {
        variables: {
            cardId: props.id,
        },
    });
    useEffect(() => {
        if (data) {
            props.setStateFn(data.quiz);
        }
    }, [data]);
    return (
        <div className={styles.container}>
            <div className={`${styles.innerContainer} ${styles.rhsTextColor}`}>
                {props.term}
            </div>
            <div className={styles.innerContainer}>{props.answer}</div>
            <CustomButton
                buttonName="Delete card"
                className={styles.customButton}
                fn={() => {
                    mutateFunction();
                }}
            />
        </div>
    );
};

export default CardFrame;
