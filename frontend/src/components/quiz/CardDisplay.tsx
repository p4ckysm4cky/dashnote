import styles from './CardDisplay.module.css';
import { useEffect, useState } from 'react';

export const CardDisplay = (props: {
    term: string;
    answer: string;
    isFlipped: boolean;
}) => {
    const [isFlipped, setIsFlipped] = useState(!props.isFlipped);
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
        handleClick();
    }, []);
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
