import CardDisplay from './CardDisplay';
import { CustomButton } from '../CustomButton';
import { useEffect, useState } from 'react';
import styles from './CardDisplayControl.module.css';

export type CardDisplayControlType = {
    cards: {
        id: string;
        term: string;
        answer: string;
    }[];
};

export const CardDisplayControl = (props: CardDisplayControlType) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTerm, setCurrentTerm] = useState(
        props.cards[currentIndex].term,
    );
    const [currentAnswer, setCurrentAnswer] = useState(
        props.cards[currentIndex].answer,
    );
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (direction: 'left' | 'right') => {
        const myIndex = currentIndex;
        if (direction === 'left' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setCurrentTerm(props.cards[myIndex - 1].term);
            setCurrentAnswer(props.cards[myIndex - 1].answer);
        }
        if (direction === 'right' && currentIndex < props.cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setCurrentTerm(props.cards[myIndex + 1].term);
            setCurrentAnswer(props.cards[myIndex + 1].answer);
        }
        setIsFlipped(false);
    };
    // Need to add a useEffect to reset everything if something is deleted
    useEffect(() => {
        setCurrentIndex(0);
        setCurrentTerm(props.cards[currentIndex].term);
        setCurrentAnswer(props.cards[currentIndex].answer);
    }, [props]);

    return (
        <div className={styles.container}>
            <div>
                <CardDisplay
                    isFlipped={isFlipped}
                    setIsFlipped={setIsFlipped}
                    term={currentTerm}
                    answer={currentAnswer}
                />
            </div>
            <div className={styles.buttonContainer}>
                <CustomButton
                    className=""
                    buttonName="⮘"
                    fn={() => handleClick('left')}
                />
                <CustomButton
                    className=""
                    buttonName="⮚"
                    fn={() => handleClick('right')}
                />
            </div>
        </div>
    );
};

export default CardDisplayControl;
