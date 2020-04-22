import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { Card } from "../Card/Card.jsx";
import { FormInputs } from "../FormInputs/FormInputs.jsx";
import Button from "../CustomButton/CustomButton.jsx";

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} >
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3"]}
                      properties={[
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: "rickandmorty100years"
                        },
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        }
                      ]}
                    />
                  </form>
                }
              />
            </Col>
            {/*<Col md={3}>*/}
            {/*  <UserCard*/}
            {/*    bgImage="https://image.freepik.com/free-photo/vintage-color-wood-walls-floor-background_1249-936.jpg"*/}
            {/*    avatar={avatar}*/}
            {/*    name="Rick Sanchez"*/}
            {/*    userName="rickC-137"*/}
            {/*    description={*/}
            {/*      <span>*/}
            {/*        "Remember!*/}
            {/*        <br />*/}
            {/*        Reality's an illusion, the universe is a hologram,*/}
            {/*        <br />*/}
            {/*        buy gold!"*/}
            {/*      </span>*/}
            {/*    }*/}
            {/*    socials={*/}
            {/*      <div>*/}
            {/*        <Button simple>*/}
            {/*          <i className="fa fa-facebook-square" aria-hidden="true" />*/}
            {/*        </Button>*/}
            {/*        <Button simple>*/}
            {/*          <i className="fa fa-twitter" />*/}
            {/*        </Button>*/}
            {/*        <Button simple>*/}
            {/*          <i className="fa fa-google-plus-square" />*/}
            {/*        </Button>*/}
            {/*      </div>*/}
            {/*    }*/}
            {/*  />*/}
            {/*</Col>*/}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
