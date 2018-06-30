import React from 'react';
import { Row, Col } from "react-materialize";
import ServiceItemCard from "../components/serviceItemCard.jsx";

export default class Diagnostics extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <div className="row primary-text">
                        <h1>Диагностика</h1>
                    </div>
                </section>

                <section className="cardlink-container">
                    <Row>
                        <Col s={12} m={6} l={4}><ServiceItemCard name="Панорамный снимок" to="/services/diagnostics/panoramic" image="../images/services/panoramic.jpg" description="Ортопантомография или панорамный снимок зубов - это рентгеновский снимок верхней и нижней челюстей, включая верхне-челюстной сустав, придаточные пазухи носа." /></Col>
                        <Col s={12} m={6} l={4}><ServiceItemCard name="Компьютерная томография" to="/services/diagnostics/tomography" image="../images/services/tomography.jpg" description="Представляет собой трехмерное изображение, позволяющее со всех сторон рассмотреть не только зуб, но и окружающие его ткани. Благодаря снимку врачу становятся доступны детальная оценка состояния тканей челюсти и возможность выявления анатомических особенностей и аномалий корней и корневых каналов." /></Col>
                        <Col s={12} m={6} l={4}><ServiceItemCard name="Компьютерное моделирование улыбки" to="/services/diagnostics/design" image="../images/services/design.jpg" description="Методика Digital Smile Design (DSD) – цифровое моделирование улыбки, помогает увидеть конечный результат планируемых стоматологических процедур еще до начала лечения." /></Col>
                        <Col s={12} m={6} l={4}><ServiceItemCard name="Аксиография" to="/services/diagnostics/axiography" image="../images/services/axiography.jpg" description="Регистрация движений челюсти во время различных действий – жевания, глотания, а также в состоянии покоя." /></Col>
                        <Col s={12} m={6} l={4}><ServiceItemCard name="Анализ окклюзии" to="/services/diagnostics/occlusion" image="../images/services/occlusion.jpg" description="Частный вид смыкания зубных рядов, означающий положение нижней челюсти, при котором то или иное количество зубов находится в контакте." /></Col>
                    </Row>
                </section>
            </div>
        );
    }
};