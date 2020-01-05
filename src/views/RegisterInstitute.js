import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  Alert
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Colors from "../components/components-overview/Colors";
import Checkboxes from "../components/components-overview/Checkboxes";
import RadioButtons from "../components/components-overview/RadioButtons";
import ToggleButtons from "../components/components-overview/ToggleButtons";
import SmallButtons from "../components/components-overview/SmallButtons";
import SmallOutlineButtons from "../components/components-overview/SmallOutlineButtons";
import NormalButtons from "../components/components-overview/NormalButtons";
import NormalOutlineButtons from "../components/components-overview/NormalOutlineButtons";
import RegisterInstituteForms from "../components/components-overview/RegisterInstituteForms";
import FormValidation from "../components/components-overview/FormValidation";
import CompleteFormExample from "../components/components-overview/CompleteFormExample";
import Sliders from "../components/components-overview/Sliders";
import ProgressBars from "../components/components-overview/ProgressBars";
import ButtonGroups from "../components/components-overview/ButtonGroups";
import InputGroups from "../components/components-overview/InputGroups";
import SeamlessInputGroups from "../components/components-overview/SeamlessInputGroups";
import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import DropdownInputGroups from "../components/components-overview/DropdownInputGroups";
import CustomSelect from "../components/components-overview/CustomSelect";
import LoginInstitute from "../components/components-overview/LoginInstitute";
const ComponentsOverview = () => (
  <div>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          //title="Forms & Components"
          subtitle="Register Institute"
          className="text-sm-left"
        />
      </Row>

      <Row>
        <Col lg="8" className="mb-4">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Fill The Details</h6>
            </CardHeader>

            <ListGroup flush>
              {/* Forms & Form Validation */}
              <ListGroupItem className="p-3">
                <Row>
                  <RegisterInstituteForms />
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col lg="4" className="mb-4">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Fill The Details</h6>
            </CardHeader>

            <ListGroup flush>
              {/* Forms & Form Validation */}
              <ListGroupItem className="p-3">
                <Row>
                  <LoginInstitute />
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ComponentsOverview;
