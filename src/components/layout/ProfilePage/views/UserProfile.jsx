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
import { UserCard } from "../UserCard/UserCard.jsx";
import Button from "../CustomButton/CustomButton.jsx";
import avatar from "../../../../assets/images/faces/rick.png";

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
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Company (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "ALPHA GO LLC.",
                          disabled: true
                        },
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
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: "UserFirstName"
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue: "UserLastName"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                          defaultValue:
                            "Default Home Address etc"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          defaultValue: "Chicago"
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          defaultValue: "USA"
                        },
                        {
                          label: "Postal Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code"
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue="Tell me about yourself."
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="warning" pullRight fill type="submit">
                      Update Profile
                    </Button>
                    <div className="clearfix" />
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
