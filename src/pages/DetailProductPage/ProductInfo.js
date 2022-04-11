import React, { useState } from "react";
import styled from "styled-components";

export const ProductInfo = ({ detail }) => {
  const [count, setCount] = useState(1);
  const { name, summary, price } = detail;

  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      if (count === 1) return;
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
      <New>New</New>
      <Title>{name} 구입하기</Title>
      <ItemPrice>
        {summary} 개별 판매 가격 {price?.original.formatted}
      </ItemPrice>
      <BtnContainer className="quantity">
        <Count>수량</Count>
        <Button
          className="plus-btn"
          type="button"
          name="button"
          onClick={() => handleQuantity("plus")}
        >
          +
        </Button>
        <input type="text" readOnly name="number" value={count} />
        <Button
          className="minus-btn"
          type="button"
          name="button"
          onClick={() => handleQuantity("minus")}
        >
          -
        </Button>
      </BtnContainer>
      <Price>총 삼품 금액 : {price?.original.raw * count}원</Price>
      <Action>장바구니에 담기</Action>
      <Action>바로 구매</Action>
    </div>
  );
};

const New = styled.p`
  color: #bf4800;
  margin-bottom: 0;
`;
const Title = styled.h1`
  margin-bottom: 20px;
`;
const ItemPrice = styled.p`
  font-size: 16px;
`;
const Count = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;
const BtnContainer = styled.div`
  padding-top: 10px;
  margin-right: 60px;
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
const Action = styled.div`
  cursor: pointer;
  border: 1px solid #d2d2d7;
  padding: 1.3rem;
  border-radius: 5px;
  margin: 7px 0;
  &:hover {
    border: 1px solid #86868b;
  }
`;
