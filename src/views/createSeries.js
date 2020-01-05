
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CreateSeriesForm from "../components/components-overview/createSeries";
import CreateOffersForm from "../components/components-overview/createOffers";

class SeriesPlusRatecards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        // Second list of posts.
        PostsListTwo: [
            {
                backgroundImage: require("../images/content-management/5.jpeg"),
                category: "Travel",
                categoryTheme: "info",
                author: "Anna Ken",
                authorAvatar: require("../images/avatars/0.jpg"),
                title:
                "Attention he extremity unwilling on otherwise cars backwards yet",
                body:
                "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
                date: "29 February 2019"
            },
            {
                backgroundImage: require("../images/content-management/6.jpeg"),
                category: "Business",
                categoryTheme: "dark",
                author: "John James",
                authorAvatar: require("../images/avatars/1.jpg"),
                title:
                "Totally words widow one downs few age every seven if miss part by fact",
                body:
                "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
                date: "29 February 2019"
            }
        ],

    }
  }

  render() {
    const {
      PostsListTwo,
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Series and offer" subtitle="Paper" className="text-sm-left" />
        </Row>

        {/* Second Row of Posts */}
        <Row>
            <Col lg="6" sm="12" className="mb-4" >
              <Card small className="card-post card-post--aside card-post--1">
                <CreateSeriesForm></CreateSeriesForm>
              </Card>
            </Col>
            <Col lg="6" sm="12" className="mb-4" >
              <Card small className="card-post card-post--aside card-post--1">
                <CreateOffersForm></CreateOffersForm>
              </Card>
            </Col>
        </Row>
</Container>
    );
  }
}

export default SeriesPlusRatecards;
