import QuizFrame from './QuizFrame';
import styles from './QuizFrameGallery.module.css';

export type quizItemType = {
    id: string;
    name: string;
    description: string;
};

export const QuizFrameGallery = (props: { quizArray: quizItemType[] }) => {
    return (
        <div className={styles.container}>
            {props.quizArray.map((quiz) => (
                <QuizFrame key={quiz.id} {...quiz} />
            ))}
        </div>
    );
};
