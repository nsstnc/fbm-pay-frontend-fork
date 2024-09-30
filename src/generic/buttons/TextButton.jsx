import style from './textButton.module.css'
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TextButton = ({text = '', img = <></>, link = "", onClick = null}) => {

    const handleClick = (e) => {
        // Если передана функция onClick, выполнить её
        if (onClick) {
            onClick(e);
        }
    };

    if (text.toLowerCase() === 'go back') {
        return (
            <Link to={link}>
                <a href="#">
                    <button className={style.button} onClick={handleClick}>
                        {img}
                        {text}
                    </button>
                </a>
            </Link>
        );
    }

    return (
        <Link to={link}>
            <button className={style.button} onClick={handleClick}>
                {text}
                {img}
            </button>
        </Link>
    );
};

export default TextButton