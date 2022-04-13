import React from "react";
import styled from "styled-components";

export const CartItem = ({ item, buttonHandler, i, deleteItemHandler }) => {
  const { _id, product, price, quantity } = item;
  if (!product) return null;

  return (
    <Container>
      <div>
        <ItemImage src={product?.thumbnail.url} />
        <span>{product.name}</span>
      </div>
      <div>
        <Button
          onClick={() => buttonHandler("plus", i)}
          className="plus-btn"
          type="button"
          name="button"
        >
          +
        </Button>
        <input type="text" readOnly name="number" value={quantity.raw} />
        <Button
          onClick={() => buttonHandler("minus", i)}
          className="minus-btn"
          type="button"
          name="button"
        >
          -
        </Button>
        <Price>
          총 삼품 금액 : {price?.original.raw}원
          <Button onClick={() => deleteItemHandler(_id, price.original.raw)}>
            X
          </Button>
        </Price>
      </div>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  justify-content: space-around;
  margin: 20px 0px;
`;
const ItemImage = styled.img`
  height: 80px;
  margin-right: 20px;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #e1e8ee;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;
const Price = styled.p`
  font-size: 18px;
`;
