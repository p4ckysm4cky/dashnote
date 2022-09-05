import styles from './CustomButton.module.css';

export const CustomButton = (props: {
    className: any;
    buttonName: string;
    fn: () => void;
}) => {
    return (
        <button
            className={`${props.className} ${styles.myButton}`}
            onClick={props.fn}
        >
            {props.buttonName}
        </button>
    );
};
