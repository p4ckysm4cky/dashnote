import styles from './CardDisplay.module.css';
import { useEffect, useState } from 'react';

export const CardDisplay = (props: {
    term: string;
    answer: string;
    isFlipped: boolean;
    setIsFlipped: (bool: boolean) => void;
}) => {
    const { isFlipped, setIsFlipped } = props;
    const [containerStyle, setContainerStyle] = useState(styles.flipCard);
    const handleClick = () => {
        if (isFlipped) {
            setContainerStyle(styles.flipCard);
        } else {
            setContainerStyle(`${styles.flipCard} ${styles.showBack}`);
        }
        setIsFlipped(!isFlipped);
    };
    useEffect(() => {
        if (!isFlipped) {
            setContainerStyle(styles.flipCard);
        } else {
            setContainerStyle(`${styles.flipCard} ${styles.showBack}`);
        }
    }, [isFlipped]);
    return (
        <div className={containerStyle} onClick={handleClick}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                    <p>{props.term}</p>
                </div>
                <div className={styles.flipCardBack}>
                    <p>{props.answer}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDisplay;
