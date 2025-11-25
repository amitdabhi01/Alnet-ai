import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <>
      <Container className="pt-5 footer-pic p-5" fluid>
        <div className="text-center">
          <p className="mb-4">[ All Demos Included ]</p>
          <h1 className="mb-4">
            Build a stunning <br /> website in no time!
          </h1>
          <Button class="button">
            <span class="button-content">Download </span>
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Contact;
