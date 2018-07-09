﻿import React from 'react';
import { Parallax, Row, Col } from 'react-materialize'
import HeadedPage from "../../components/headedPage.jsx";

export default class MultipleContent extends React.Component {
    render() {
        return (
            <HeadedPage header="Врач-стоматолог терапевт, хирург, ортопед">
                <section>
                    <Row>
                        <Col s={12} m={6}><Parallax imageSrc="images/home/parallax-1.jpg" /></Col>
                        <Col s={12} m={6}>
                            <h3 className="header-text">Заголовок</h3>
                            <p>Основными направлениями моей работы являются протезирование, имплантация и хирургическая стоматология. Я веду прием в нескольких московских стоматологических клиниках, из которых вы можете выбрать самый удобный вариант. Лечение у частного врача, конкретного специалиста – это гарантия внимательного отношения и индивидуального подхода. Со всеми своими пациентами я устанавливаю личный контакт, детально анализирую клиническую ситуацию и даю советы по поддержанию красоты и здоровья зубов. Клиники сегодня не могут дать пациенту этого – они настроены на потоковую работу. Записываясь на прием, вы можете попадать к разным специалистам, что иногда не позволяет осуществлять качественное последовательное лечение. Я рад предложить пациентам свои услуги в сфере хирургической, эстетической и ортопедической стоматологии.</p>
                        </Col>
                    </Row>
                </section>

                <section>
                    <p>Основными направлениями моей работы являются протезирование, имплантация и хирургическая стоматология. Я веду прием в нескольких московских стоматологических клиниках, из которых вы можете выбрать самый удобный вариант. Лечение у частного врача, конкретного специалиста – это гарантия внимательного отношения и индивидуального подхода. Со всеми своими пациентами я устанавливаю личный контакт, детально анализирую клиническую ситуацию и даю советы по поддержанию красоты и здоровья зубов. Клиники сегодня не могут дать пациенту этого – они настроены на потоковую работу. Записываясь на прием, вы можете попадать к разным специалистам, что иногда не позволяет осуществлять качественное последовательное лечение. Я рад предложить пациентам свои услуги в сфере хирургической, эстетической и ортопедической стоматологии.</p>
                </section>

                <section>
                    <Row>
                        <Col s={12} m={6}>
                            <h3 className="header-text">Глубокий смысл</h3>
                            <p>Хочу выразить , большую благодарность Дианке за ее особенный подход работе с пациентом, в котором сочетается помимо высокого профессионализма учёт индивидуальных особенностей , причем , с применением, эстетических навыков,филлигранной работы и совершенного знания всех нюансов рабочего процесса . Низкий поклон.</p>
                        </Col>
                        <Col s={12} m={6}><Parallax imageSrc="images/home/parallax-2.jpg" /></Col>
                    </Row>
                </section>
            </HeadedPage>
        );
    }
};