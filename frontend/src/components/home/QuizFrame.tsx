import styles from './QuizFrame.module.css';
import { Link } from 'react-router-dom';

export type quizArgs = {
    name: string;
    description: string;
    id: string;
};

export const QuizFrame = (props: quizArgs) => {
    const { name, description, id } = props;
    return (
        <Link to={`/quiz/${id}`} className={styles.textLink}>
            <div className={styles.container}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </Link>
    );
};

export default QuizFrame;
