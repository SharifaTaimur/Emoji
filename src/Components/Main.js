import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import DisplayEmoji from "./DisplayEmoji";
import emo from "./DispEmoji";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

let arr = [];
const initialState = {
  queryError: ""
};

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      isClicked: false,
      queryError: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      query: value,
      isClicked: false
    });
  }

  validate = () => {
    let queryError = "";

    if (!this.state.query) {
      queryError = "Field cannot be blank";
    }

    //here we are checking the querryError is true (has a value)
    if (queryError) {
      this.setState({
        queryError
      });
      return false;
    }

    return true;
  };

  handleClick() {
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        isClicked: true
      });

      //clear form
      this.setState(initialState);
    }
  }

  render() {
    if (this.state.isClicked === true) {
      arr = emo.map((value, index) => {
        // if (this.state.query === value.short_name) {
        if (
          this.state.query === value.short_name ||
          value.short_name.includes(this.state.query)
        ) {
          return <DisplayEmoji data={value.unified} key={index} />;
        }
      });
    }

    return (
      <div>
        <h1 className="neonText" data-text="Emoji Translator">
          Emoji Translator
        </h1>
        <ul className="lightrope">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Form className="input">
          <Form.Group as={Row}>
            <Col md="10">
              <Form.Control
                type="text"
                name="query"
                placeholder="Search Emoji"
                onChange={this.handleChange}
                value={this.state.query}
                size="lg"
                controlId="query"
              />

              {this.state.queryError ? (
                <div style={{ color: "red", fontSize: 16 }}>
                  {this.state.queryError}
                </div>
              ) : null}
            </Col>
            <Col md="2">
              <BrowserRouter>
                <Switch>
                  <Link onClick={this.handleClick}>Search</Link>
                </Switch>
              </BrowserRouter>
            </Col>
          </Form.Group>
        </Form>
        <Row>{arr}</Row>
      </div>
    );
  }
}

export default Main;
