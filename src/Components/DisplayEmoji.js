import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

function dispalyReact(props) {
  console.log("orginal " + `${props.data}`);
  let display = `&#x${props.data.split("-")[0]};`;
  return (
    <div>
      <span
        style={{
          fontSize: "100px",
          position: "relative",
          top: "369px"
        }}
        dangerouslySetInnerHTML={{ __html: display }}
      />
    </div>
  );
}

export default dispalyReact;

/*
function dispalyReact(props) {
  console.log(props);

  let arrProps = props.data.map((value, index) => {
    console.log(value);
    let display = `&#x${value.split("-")[0]};`;
    console.log(display);

    return (
      <Row>
        <Col md={4}>
          <span
            style={{
              fontSize: "100px",
              // position: "absolute",
              position: "relative",
              bottom: "130px"
            }}
            dangerouslySetInnerHTML={{ __html: display }}
          />
        </Col>
      </Row>
    );
  });

  return <div>{arrProps}</div>;
} */
