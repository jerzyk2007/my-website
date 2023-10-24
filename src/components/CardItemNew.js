import { useState } from 'react';
import { Link } from 'react-router-dom';
import EmbeddedPage from './EmbeddedPage ';
import './CardItemNew.css';
import { FiX } from "react-icons/fi";

const CardItem = (props) => {
    const [active, setActive] = useState(true);

    const handleActive = () => {
        setActive(!active);
    };

    return (
        <>
            {active && <div className='cardsnew__container__item' >
                <div className="cardsnew__container__item-pic">
                    {!props.www && <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt={props.alt}
                            src={props.src}
                        />
                    </figure>}
                    {props.www && < figure className='cards__item__pic-wrap' data-category={props.label}>
                        <EmbeddedPage src={props.src} title={props.title} />
                    </figure>}
                </div>

                <div className='cards__item__info'>
                    <Link className='cards__item__link' to={props.path}>
                        <h5 className='cards__item__title'>{props.title}</h5></Link>
                    <h5 className='cards__item__text' dangerouslySetInnerHTML={{ __html: props.text }}></h5>
                </div>
                <div className="cardsnew__container-link">
                    <span onClick={handleActive}>Read more ...</span>
                </div>
            </div>}
            {!active && <div className='cardsnew__container__info'>
                <FiX className='cardsnew__container__info-button' onClick={handleActive} />
                {/* <span dangerouslySetInnerHTML={{ __html: props.description }}></span> */}
                <textarea className='cardsnew__container__info-textarea' name="info" readOnly>{props.description}</textarea>

            </div>
            }
        </>
    );
};

export default CardItem;
