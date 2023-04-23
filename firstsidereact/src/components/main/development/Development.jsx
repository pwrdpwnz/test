import React from 'react';
import development from '../../../images/development.png'
import {Link} from "react-router-dom";

const Development = (props) => {
    return (
        <section className="development">
            <div className="development__container _container">
                <div className="development__media">
                    <div className="media-development">
                        <div className="media-development__image">
                            <img className="image-development" src={development} alt="development"/>
                        </div>
                    </div>
                </div>
                <div className="development__content">
                    <div className="development__block-text block-text">
                        <h2 className="block-text__title">Разработано 2000+ приложений</h2>
                        <div className="block-text__text">Для вашего удобства мы разработали множество приложений для
                            вашего бизнеса и команды, которые доступны в любое время суток
                        </div>
                        <Link to="/indusries" className="block-text__button button">Присоединяйтесь {props.linking} </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Development;