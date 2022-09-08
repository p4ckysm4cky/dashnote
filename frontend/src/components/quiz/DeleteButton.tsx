import { CustomButton } from '../CustomButton';
import { useNavigate } from 'react-router-dom';
import styles from './DeleteButton.module.css';
import { useMutation } from '@apollo/client';
import deleteQuizMutation from '../../backendGql/mutations/deleteQuizMutation';
import allQuizQuery from '../../backendGql/queries/allQuizQuery';

export const DeleteButton = (props: { quizId: string }) => {
    const navigate = useNavigate();
    const [mutateFunction] = useMutation(deleteQuizMutation, {
        variables: { quizId: props.quizId },
        refetchQueries: [{ query: allQuizQuery }],
    });
    const handleClick = () => {
        if (window.confirm('Are you sure you want to delete this quiz?')) {
            mutateFunction();
            navigate('/');
        }
    };
    return (
        <div className={styles.container}>
            <CustomButton
                className={styles.customButton}
                buttonName="Delete quiz"
                fn={handleClick}
            />
        </div>
    );
};

export default DeleteButton;
