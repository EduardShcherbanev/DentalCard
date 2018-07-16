import React from "react";
import ReactDOM from 'react-dom';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import queryString from "query-string";
import { Parallax, Row, Col } from "react-materialize"
import HeadedPage from "../../components/headedPage.jsx";
import ServiceItemCard from "../services/components/serviceItemCard.jsx";
import { getPage } from "./multipleContentActions.jsx";
import "isomorphic-fetch";

class MultipleContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: location.pathname };
    }

    componentDidMount() {
        this.getPage();
    }

    getPage() {
        this.props.getPage(location.pathname);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.query !== location.pathname) {
            this.setState({ query: location.pathname });
            this.getPage();
        }
    }

    render() {
        const header = this.props.page.header;
        const pageId = this.props.page.pageId;
        let cards = this.props.page.cards.map(card => {


            return (
                <ServiceItemCard key={card.id} name={card.header} to={card.linkToPageUrl} image={card.imageSrc} description={card.description} />
            );
        });
        let paragraphs = this.props.page.paragraphs.map(paragraph => {
            var imageLeft;
            var imageRight;
            var text;
            var header;

            if (paragraph.header != null) {
                header = <h3 className="header-text">{paragraph.header}</h3>;
            } else {
                header = "";
            }

            if (paragraph.imageSrc != null) {
                if (paragraph.isTextOnRight) {
                    imageLeft = <Col s={12} m={6}><Parallax imageSrc={paragraph.imageSrc} /></Col>;
                    imageRight = "";
                } else {
                    imageLeft = "";
                    imageRight = <Col s={12} m={6}><Parallax imageSrc={paragraph.imageSrc} /></Col>;
                }

                text = <Col s={12} m={6}>{header}<p>{paragraph.text}</p></Col>;
            } else {
                imageLeft = "";
                imageRight = "";

                text = <Col s={12} m={12}>{header}<p>{paragraph.text}</p></Col>;
            }

            return (
                <section key={paragraph.id}>
                    <Row>
                        {imageLeft}
                        {text}
                        {imageRight}
                    </Row>
                </section>
            );
        });

        if (cards.length !== 0) {
            cards = <section className="cardlink-container">{cards}</section>;
        }

        return (
            <HeadedPage header={header}>
                {paragraphs}
                {cards}
            </HeadedPage>
        );
    }
};

let mapProps = (state) => {
    return {
        page: state.multipleContent.data,
        error: state.multipleContent.error
    };
};

let mapDispatch = (dispatch) => {
    return {
        getPage: bindActionCreators(getPage, dispatch)
    };
};

export default connect(mapProps, mapDispatch)(MultipleContent);