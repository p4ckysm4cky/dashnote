import styles from './Navbar.module.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <Link to="/">
                    <img
                        className={styles.logo}
                        src={logo}
                        alt="Dashnote logo"
                    />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
