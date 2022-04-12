import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import clayful from "clayful/client-js";
import { AuthContext } from "../../utils/AuthContext";
import { Alert } from "react-bootstrap";

export const ProductInfo = ({ detail }) => {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  const { _id, variants, name, shipping, summary, price } = detail;

  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      if (count === 1) return;
      setCount((prev) => prev - 1);
    }
  };

  const handleAction = (type) => {
    if (!isAuth) {
      alert("먼저 로그인을 해주세요.");
      navigate("/login");
    }
    const Cart = clayful.Cart;
    const payload = {
      product: _id,
      variant: variants[0]._id,
      quantity: count,
      shippingMethod: shipping.methods[0]._id,
    };
    const options = {
      customer: localStorage.getItem("accessToken"),
    };
    Cart.addItemForMe(payload, options, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }

      if (type === "cart") {
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("/user/cart");
        }, 1000);
      }
    });
  };

  return (
    <div>
      {show && (
        <Alert variant="info">
          <Alert.Heading>상품이 장바구니에 담겼습니다.</Alert.Heading>
          <p>장바구니에서 확인해주세요.</p>
        </Alert>
      )}
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
      <Action onClick={() => handleAction("cart")}>장바구니에 담기</Action>
      <Action onClick={() => handleAction("buy")}>바로 구매</Action>
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
