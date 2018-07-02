import React from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-materialize";
import ServiceCard from "./components/serviceCard.jsx";

export default class Services extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <h3 className="secondary-text center">Услуги</h3>
                </section>

                <section>
                    <p>Услуги врача-стоматолога затрагивают не только лечение кариеса, но и пульпита, а также включают широкий спектр смежных профессий. Подготовка к сложным лечениям может потребовать выполнить комбинацию действий. Многие из них доступны сразу моих рабочих местах, но иногда необходимое оборудование доступно только в других медицинских учреждениях.</p>
                    <p>Вы можете ознакомиться со списком всех услуг, чтобы иметь представление о возможных методах лечения.</p>
                </section>

                <section className="cardlink-container">
                    <ServiceCard serviceName="Диагностика" to="/services/diagnostics" image="./images/icons/caries-96.png" serviceTasks={[{ name: "Панорамный снимок" }, { name: "Компьютерная томография" }, { name: "Аксиография" }, { name: "Компьютерное моделирование улыбки" }, { name: "Анализ окклюзии" }]}></ServiceCard>
                    <ServiceCard serviceName="Терапия" to="/services/therapy" image="./images/icons/pulpitis-96.png" serviceTasks={[{ name: "Пломбы" }, { name: "Кариес" }, { name: "Пульпит" }, { name: "Периодонтит" }]}></ServiceCard>
                    <ServiceCard serviceName="Ортопедия" to="/services/orthopedics" image="./images/icons/crown-96.png" serviceTasks={[{ name: "Восстановление зубов" }, { name: "Коронки" }, { name: "Протезы" }, { name: "Культевые вкладки" }, { name: "Накладки" }]}></ServiceCard>
                    <ServiceCard serviceName="Хирургия" to="/services/surgery" image="./images/icons/extraction-96.png" serviceTasks={[{ name: "Удаление" }, { name: "Вестибулопластика" }, { name: "Френулопластика" }]}></ServiceCard>
                    <ServiceCard serviceName="Имплантология" to="/services/implantology" image="./images/icons/implant-96.png" serviceTasks={[{ name: "Импланты" }]}></ServiceCard>
                    <ServiceCard serviceName="Гнатология" to="/services/gnathology" image="./images/icons/braces-96.png" serviceTasks={[{ name: "Соотношение зубных рядов" }]}></ServiceCard>
                </section>

                <div className="hide-on-large-only">
                    <Dropdown className="text-primary" options={{ hover: true, constrainWidth: false }} trigger={<Button floating large className="primary services-fab" waves="light" icon="list" />}>
                        <li><Link to="/services/diagnostics">Диагностика</Link></li>
                        <li><Link to="/services/therapy">Терапия</Link></li>
                        <li><Link to="/services/orthopedics">Ортопедия</Link></li>
                        <li><Link to="/services/surgery">Хирургия</Link></li>
                        <li><Link to="/services/implantology">Имплантология</Link></li>
                        <li><Link to="/services/gnathology">Гнатология</Link></li>
                    </Dropdown>
                </div>
            </div>
        );
    }
};