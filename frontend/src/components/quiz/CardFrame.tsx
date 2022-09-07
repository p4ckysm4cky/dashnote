import styles from './CardFrame.module.css';
import { CustomButton } from '../CustomButton';

export const CardFrame = (props: { term: string; answer: string }) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.innerContainer} ${styles.rhsTextColor}`}>
                {props.term}
            </div>
            <div className={styles.innerContainer}>{props.answer}</div>
            <CustomButton
                buttonName="Delete card"
                className={styles.customButton}
                fn={() => {}}
            />
        </div>
    );
};

export default CardFrame;
