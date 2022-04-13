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
  return (
    <Container>
      <PaymentC>
        <Payment>결제</Payment>
        <PaymentPrice>
          주문 총 가격 : {cartItem.total?.amount.raw + 3000}원 (배송비 3000원)
        </PaymentPrice>
      </PaymentC>
      <Inputcontainer>
        <div style={{ width: "49%" }}>
          <h3>주문자 정보</h3>
          <Input type="text" name="full" placeholder="주문자명" />
          <Input type="text" name="mobile" placeholder="무선 연락처" />
          <div>
            <input type="checkbox" id="sameInfo" name="sameInfo" />
            <label htmlFor="sameInfo">수취자 정보도 위와 동일합니다.</label>
          </div>
        </div>
        <div style={{ width: "2%" }}></div>
        <div style={{ width: "49%" }}>
          <h3>수취자 정보</h3>
          <Input type="text" name="full" placeholder="수취자명" />
          <Input type="text" name="mobile" placeholder="무선 연락처" />

          <h3>배송 정보</h3>
          <Input type="text" readOnly placeholder="주소" />
          <Input type="text" name="address2" placeholder="상세 주소" />
          <Input type="text" readOnly placeholder="우편번호" />

          <h3>결제</h3>
          <select>
            <option>옵션</option>
          </select>
          <Button>주문</Button>
        </div>
      </Inputcontainer>
    </Container>
  );
};

const Container = styled.section`
  padding: 7rem 3rem 3rem 3rem;
  max-width: 1000px;
  margin: auto;
`;
const PaymentC = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #d2d2d7;
`;
const Payment = styled.div`
  width: 50%;
  font-size: 24px;
  font-weight: 500;
`;
const PaymentPrice = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
`;
const Inputcontainer = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 100%;
  margin-top: 10px;
`;
