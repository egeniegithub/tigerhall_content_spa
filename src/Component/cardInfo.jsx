import React from "react";
import "./card.css";
import Card from "react-bootstrap/Card";

export const BlogPostWithImage = (props) => {
  const { firstName, lastName, title, company } = props.data.experts[0];

  return (
    <>
      <div className="mainCOntainer">
        <Card>
          <div>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "200px", objectFit: "fill" }}
              src={props.data.image.uri}
            />
          </div>
          <Card.Body className="cardContentBody mb-3">
            <p className="category">{props.data.categories[0].name}</p>
            <p className="name">{props.data.name}</p>
            <p className="userName">{`${firstName} ${lastName}`}</p>
            <p className="title">{`${title}`}</p>
            <p className="company">{`${company}`}</p>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
