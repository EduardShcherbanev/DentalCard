import React from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Card, CardTitle } from "react-materialize"
import ServiceCard from "./components/serviceCard.jsx"

export default class Services extends React.Component {
    render() {
        return (
            <div>
                <div className="section">
                    <div className="row primary-text">
                        <h1>Услуги</h1>
                    </div>
                </div>

                <section>
                    <p className="grey-text text-darken-3 lighten-3">
                        Я умею очень многое. Даже не перечислить. Хотя, если напрячься, то вот такой список тех областей медицины, по которым вы можете получить консультацию и лечение.
                    </p>
                </section>
                
                <ServiceCard serviceName="Диагностика" serviceTasks={[{ name: "Выявление кариеса" }, { name: "Выяснение причин боли" }]}></ServiceCard>
                <ServiceCard serviceName="Терапия" serviceTasks={[{ name: "Пломбы" }, { name: "Кариес" }, { name: "Пульпит" }, { name: "Периодонтит" }]}></ServiceCard>
                <ServiceCard serviceName="Ортопедия" serviceTasks={[{ name: "Восстановление зубов" }, { name: "Коронки" }, { name: "Протезы" }, { name: "Культевые вкладки" }, { name: "Накладки" }]}></ServiceCard>
                <ServiceCard serviceName="Хирургия" serviceTasks={[{ name: "Удаление" }, { name: "Вестибулопластика" }, { name: "Френулопластика" }]}></ServiceCard>
                <ServiceCard serviceName="Имплантология" serviceTasks={[{ name: "Импланты" }]}></ServiceCard>
                <ServiceCard serviceName="Гнатология" serviceTasks={[{ name: "Соотношение зубных рядов" }]}></ServiceCard>

                <div className="hide-on-large-only">
                    <Dropdown className="text-primary" options={{ hover: true, constrainWidth: false }} trigger={<Button floating large className="primary services-fab" waves="light" icon="list" />}>
                        <li><Link to="services/diagnostics">Диагностика</Link></li>
                        <li><Link to="services/therapy">Терапия</Link></li>
                        <li><Link to="services/orthopedics">Ортопедия</Link></li>
                        <li><Link to="services/surgery">Хирургия</Link></li>
                        <li><Link to="services/implantology">Имплантология</Link></li>
                        <li><Link to="services/gnathology">Гнатология</Link></li>
                    </Dropdown>
                </div>
            </div>
        );
    }
};