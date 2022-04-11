import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import clayful from "clayful/client-js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProductInfo } from "./ProductInfo";

export const DetailProductPage = () => {
  const params = useParams();
  const productId = params.productId;
  const [item, setItem] = useState({});

  useEffect(() => {
    const Product = clayful.Product;
    const options = {};

    Product.get(productId, options, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      setItem(res.data);
    });
  }, []);

  const { description, thumbnail, name } = item;

  return (
    <Container className="pageWrapper">
      <Row>
        <Col md>
          <div>
            <ItemImage src={thumbnail?.url} alt={name} />
          </div>
        </Col>
        <Col md>
          <ProductInfo detail={item} />
        </Col>
      </Row>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  );
};

const Container = styled.article`
  padding: 7rem 3rem 3rem 3rem;
  max-width: 1000px;
  margin: auto;
`;
const ItemImage = styled.img`
  width: 100%;
`;
