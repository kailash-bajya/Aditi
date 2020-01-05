import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, FormSelect, Row, Col } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        {/* <FormInput size="lg" className="mb-3" placeholder="Your Post Title" /> */}
        <Row>
          <Col lg="12" md="12">
            <label className="label_center_aligned" htmlFor="Question">Question</label>
            <ReactQuill className="add-new-post__editor_question mb-1" placeholder="Start Typing Question Here"/>
          </Col>
        </Row>
        <Row>
          <label className="label_center_aligned" htmlFor="Question">Options</label>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <label className="label_center_aligned" htmlFor="Question">Option : A</label>
            <ReactQuill className="add-new-post__editor_options mb-1" placeholder="Start Typing Option 'A' Here"/>
          </Col>
          <Col lg="6" md="12">
            <label className="label_center_aligned" htmlFor="Question">Option : B</label>
            <ReactQuill className="add-new-post__editor_options mb-1" placeholder="Start Typing Option 'B' Here"/>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <label className="label_center_aligned" htmlFor="Question">Option : C</label>
            <ReactQuill className="add-new-post__editor_options mb-1" placeholder="Start Typing Option 'C' Here"/>
          </Col>
          <Col lg="6" md="12">
            <label className="label_center_aligned" htmlFor="Question">Option : D</label>
            <ReactQuill className="add-new-post__editor_options mb-1" placeholder="Start Typing Option 'D' Here"/>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <label className="label_center_aligned" htmlFor="Question">Option : E</label>
            <ReactQuill className="add-new-post__editor_options mb-1" placeholder="Start Typing Option 'E' Here"/>
          </Col>
          <Col lg="6" md="12">
            <label className="label_center_aligned" htmlFor="Question">Select Answer</label>
            <FormSelect name="series_offer_id" id="forOfferId"
                      placeholder="Series Offer"/>
          </Col>
        </Row>
        <Row>
          <label className="label_center_aligned" htmlFor="Question">Solution</label>
        </Row>
        <Row>
          <Col lg="12" md="12">
            <ReactQuill className="add-new-post__editor_options mb-1" placeholder="Start Typing Option 'E' Here"/>
          </Col>
        </Row>
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
