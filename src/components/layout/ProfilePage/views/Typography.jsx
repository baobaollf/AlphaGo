import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Card from "../Card/Card.jsx";

class Typography extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Other Stuff Title"
                category="category"
                content={
                  <div>
                    <div className="typo-line">
                      <h1>
                        <p className="category">Header 1</p>Header{" "}
                      </h1>
                    </div>
                    <div className="typo-line">
                      <p className="category">Muted Text</p>
                      <p className="text-muted">
                        Some thing else may be needed for 2nd version?
                      </p>
                    </div>
                    <div className="typo-line">
                      {/* <!--primary info success warning danger : 5 colors--> */}
                      <p className="category">Coloured Text</p>
                      <p className="text-primary">
                        Example color text from react-boostrap!
                      </p>
                      <p className="text-info">
                        Example color text from react-boostrap!
                      </p>
                      <p className="text-success">
                        Example color text from react-boostrap!
                      </p>
                      <p className="text-warning">
                        Example color text from react-boostrap!
                      </p>
                      <p className="text-danger">
                        Example color text from react-boostrap!
                      </p>
                    </div>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Typography;
