import CardFrame from './CardFrame';
import styles from './CardFrameGallery.module.css';

export type cardItemType = {
    id: string;
    term: string;
    answer: string;
};

export const CardFrameGallery = (props: {
    cardArray: cardItemType[];
    setStateFn: (value: any) => void;
}) => {
    return (
        <div className={styles.container}>
            {props.cardArray.map((card) => (
                <CardFrame
                    key={card.id}
                    {...card}
                    setStateFn={props.setStateFn}
                />
            ))}
        </div>
    );
};
