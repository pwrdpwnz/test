import React from 'react';
import advantages from '../../../images/advantages.png'
import advantages2 from '../../../images/advantages2.png'
import advantages3 from '../../../images/advantages3.png'
import {Link} from "react-router-dom";


const Services = (props) => {
    return (
        <section className="services">
            <div className="services__container _container">
                <div className="services__block-title">
                    <h2 className="block-title__title">Преимущества</h2>
                </div>
                <div className="services__body">
                    <div className="services__column">
                        <div className="services__item item-service">
                            <div className="item-service__icon">
                                <img className="services__image" src={advantages} alt="Environmental
										Consulting"/>
                            </div>
                            <h3 className="item-service__title">Поддержка 24/7</h3>
                            <div className="item-service__text">Вы можете положиться на нашу круглосуточную поддержку,
                                которая решит любой вопрос в течении часа
                            </div>
                        </div>
                    </div>
                    <div className="services__column">
                        <div className="services__item item-service">
                            <div className="item-service__icon">
                                <img className="services__image" src={advantages2} alt="Finance and
										consultancy"/>
                            </div>
                            <h3 className="item-service__title">Гарантия возврата</h3>
                            <div className="item-service__text">Если вам не понравится сервис, мы вернем вам полную
                                стоимость в течении 30-дневного периода
                            </div>
                        </div>
                    </div>
                    <div className="services__column">
                        <div className="services__item item-service">
                            <div className="item-service__icon">
                                <img className="services__image" src={advantages3} alt="Financial Services
										Consulting"/>
                            </div>
                            <h3 className="item-service__title">Удобство и простота</h3>
                            <div className="item-service__text">Все наши сервисы и приложения интуитивно понятны для
                                пользователей всех<br/>уровней</div>
                        </div>
                    </div>
                    <Link to="/development">go to: {props.linking} </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;