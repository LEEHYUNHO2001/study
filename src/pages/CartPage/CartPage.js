import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import clayful from "clayful/client-js";
import { CartItem } from "./Sections/CartItem";

export const CartPage = () => {
  const [cartItem, setCartItem] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const Cart = clayful.Cart;
    const options = {
      customer: localStorage.getItem("accessToken"),
    };
    Cart.getForMe({}, options, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      setCartItem(res.data.cart);
    });
  }, []);

  const items = cartItem.item;

  return (
    <Container>
      <Cart>
        <Title>장바구니</Title>
        <CartBody>
          {items && items.length > 0 ? (
            items.map((item, i) => {
              return <CartItem key={item._id} item={item} i={i} />;
            })
          ) : (
            <NoItem>장바구니에 상품이 없습니다.</NoItem>
          )}
        </CartBody>
        {items && items.length > 0 && (
          <PayContainer>
            <Total>총 금액: {cartItem.total?.amount.raw}</Total>
            <BuyBtn onClick={() => navigate("/payment")}>결제</BuyBtn>
          </PayContainer>
        )}
      </Cart>
    </Container>
  );
};

const Container = styled.section`
  padding: 7rem 3rem 3rem 3rem;
  max-width: 1000px;
  margin: auto;
`;
const Cart = styled.div`
  width: 750px;
  margin: auto;
  background-color: #fff;
  box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  height: 60px;
  padding: 20px 30px;
  color: #5e6977;
  font-size: 18px;
  font-weight: 400;
`;
const CartBody = styled.div`
  min-height: 100px;
`;
const NoItem = styled.p`
  text-align: center;
  margin-top: 2rem;
`;
const PayContainer = styled.div`
  height: 80px;
  padding: 20px 30px;
  color: #5e6977;
  font-size: 18px;
  font-weight: 400;
`;
const Total = styled.p`
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43483d;
  font-weight: 300;
`;
const BuyBtn = styled.button`
  float: right;
  padding: 4px 8px;
  height: 2.29412rem;
  border-radius: 4px;
  border: 1px solid #555;
  background: 0 0;
  background-color: #555;
  font-size: 13px;
`;
