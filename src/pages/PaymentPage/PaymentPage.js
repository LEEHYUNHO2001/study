import React, { useEffect, useState } from "react";
import clayful from "clayful/client-js";
import styled from "styled-components";

export const PaymentPage = () => {
  const [cartItem, setCartItem] = useState({});
  const [paumentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    getCartData();
    getPaymentData();
  }, []);

  const getPaymentData = () => {
    const PaymentMethod = clayful.PaymentMethod;
    PaymentMethod.list({}, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      setPaymentMethods(res.data);
    });
  };

  const getCartData = () => {
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
  };
  return <Container>PaymentPage</Container>;
};

const Container = styled.section`
  padding: 7rem 3rem 3rem 3rem;
  max-width: 1000px;
  margin: auto;
`;
