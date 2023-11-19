import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InsideHtmlPage from './InsideHtmlPage';
import { FiX } from "react-icons/fi";
import './CardItem.css';


const CardItem = (props) => {
    const [active, setActive] = useState(true);
    const navigate = useNavigate();

    const handleShowInfo = () => {
        setActive(!active);
    };

    const handleRedirect = () => {
        const redirectUrl = 'https://www.memorek-online.pl';
        window.open(redirectUrl, '_blank');
        navigate('/nowa-strona');
    };

    return (
        <>
            {active && <div className='card-item__item' >
                <div className="card-item__item__item-pic">
                    {!props.www && <figure className='card-item__pic-wrap' data-category={props.label}>
                        <img
                            className='card-item__img'
                            alt={props.alt}
                            src={props.src}
                        />
                    </figure>}
                    {props.www && < figure className='card-item__pic-wrap' data-category={props.label}>
                        <InsideHtmlPage src={props.src} title={props.title} />
                    </figure>}
                </div>

                <div className='card-item__item__info'>
                    {props.redirect === "false" ? <Link className='card-item__item__link' to={props.path}>
                        <h5 className='card-item__item-title'>{props.title}</h5></Link> :
                        <Link className='card-item__item__link' to={props.path} target={props.redirect === "false" ? "_self" : "_blank"}>
                            <h5 className='card-item__item-title'>{props.title}</h5>
                        </Link>}

                    <h5 className='card-item__item-text' dangerouslySetInnerHTML={{ __html: props.text }}></h5>
                </div>
                <div className="card-item__item__more-info">
                    <span className='card-item__item__more-info-link' onClick={handleShowInfo}>Read more ...</span>
                </div>
            </div>}
            {!active && <div className='card-item__info'>
                <FiX className='card-item__info__info-button' onClick={handleShowInfo} />
                {/* <span dangerouslySetInnerHTML={{ __html: props.description }}></span> */}
                <textarea className='card-item__info-textarea' name="info" readOnly>{props.description}</textarea>

            </div>
            }
        </>
    );
};

export default CardItem;
