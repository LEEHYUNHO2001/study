import React, { useEffect, useState } from "react";
import clayful from "clayful/client-js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PostCodeModal } from "../../components/PostCodeModal";

export const PaymentPage = () => {
  const [cartItem, setCartItem] = useState({});
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [recvUserInfo, setRecvUserInfo] = useState({
    mobile: "",
    full: "",
  });

  const [sendUserInfo, setSendUserInfo] = useState({
    mobile: "",
    full: "",
  });

  const [address, setAddress] = useState({
    postCode: "",
    state: "",
    city: "",
    address1: "",
    address2: "",
    country: "",
  });

  const [isChecked, setIsChecked] = useState(false);

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCompletePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    handleClose();
    setAddress((prev) => ({
      ...prev,
      postCode: data.zonecode,
      state: data.side,
      city: data.sigungu,
      address1: fullAddress,
    }));
  };

  const handleAddress2 = (e) => {
    setAddress((prev) => ({ ...prev, address2: e.target.value }));
  };

  const handlePayment = () => {
    const Cart = clayful.Cart;
    const Customer = clayful.Customer;
    const body = {
      name: { full: sendUserInfo.full },
      mobile: sendUserInfo.mobile,
    };
    const options = {
      customer: localStorage.getItem("accessToken"),
    };
    Customer.updateMe(body, options, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }

      let items = [];
      cartItem.items.map((item) => {
        let itemVariable = {};
        itemVariable.bundleItems = item.bundleItems;
        itemVariable.product = item.product._id;
        itemVariable.quantity = item.quantity.raw;
        itemVariable.shippingMethod = item.shippingMethod._id;
        itemVariable.variant = item.variant._id;
        itemVariable._id = item._id;
        return items.push(itemVariable);
      });

      const payload = {
        items,
        currency: cartItem.currency.payment.code,
        paymentMethod,
        address: {
          shipping: {
            name: {
              full: recvUserInfo.full,
            },
            mobile: recvUserInfo.mobile,
            phone: recvUserInfo.mobile,
            postcode: address.postCode,
            state: address.state,
            city: address.city,
            address1: address.address1,
            address2: address.address2,
            country: "KR",
          },
          billing: {
            name: {
              full: recvUserInfo.full,
            },
            mobile: recvUserInfo.mobile,
            phone: recvUserInfo.mobile,
            postcode: address.postCode,
            state: address.state,
            city: address.city,
            address1: address.address1,
            address2: address.address2,
            country: "KR",
          },
        },
      };
      Cart.checkoutForMe("order", payload, options, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        const Cart = clayful.Cart;
        Cart.emptyForMe(options, (err, res) => {
          if (err) {
            console.log(err);
            return;
          }
          navigate("/history");
        });
      });
    });
  };

  const handleSendChange = (e) => {
    const { name, value } = e.target;
    setSendUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecvChange = (e) => {
    const { name, value } = e.target;
    setRecvUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onCheckbox = () => {
    if (isChecked) {
      setIsChecked(false);
      setRecvUserInfo({
        full: "",
        mobile: "",
      });
    } else {
      setIsChecked(true);
      setRecvUserInfo({
        full: sendUserInfo.full,
        mobile: sendUserInfo.mobile,
      });
    }
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
          <Input
            type="text"
            name="full"
            placeholder="주문자명"
            onChange={handleSendChange}
            value={sendUserInfo.full}
          />
          <Input
            type="text"
            name="mobile"
            placeholder="무선 연락처"
            onChange={handleSendChange}
            value={sendUserInfo.mobile}
          />
          <div>
            <input
              type="checkbox"
              id="sameInfo"
              name="sameInfo"
              onChange={onCheckbox}
              value={isChecked}
            />
            <label htmlFor="sameInfo">수취자 정보도 위와 동일합니다.</label>
          </div>
        </div>
        <div style={{ width: "2%" }}></div>
        <div style={{ width: "49%" }}>
          <h3>수취자 정보</h3>
          <Input
            type="text"
            name="full"
            placeholder="수취자명"
            onChange={handleRecvChange}
            value={recvUserInfo.full}
          />
          <Input
            type="text"
            name="mobile"
            placeholder="무선 연락처"
            onChange={handleRecvChange}
            value={recvUserInfo.mobile}
          />

          <h3>배송 정보</h3>
          <Input
            type="text"
            readOnly
            placeholder="주소"
            onClick={() => setShow(true)}
            value={address.address1}
          />
          <Input
            type="text"
            name="address2"
            placeholder="상세 주소"
            value={address.address2}
            onChange={handleAddress2}
          />
          <Input
            type="text"
            readOnly
            placeholder="우편번호"
            value={address.postCode}
          />

          <h3>결제</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>결제 수단 선택</option>
            {paymentMethods.map((method) => (
              <option key={method.slug} value={method.slug}>
                {method.name}
              </option>
            ))}
          </select>
          <Button onClick={handlePayment}>주문</Button>
          {paymentMethod === "bank-transfer" && (
            <p>계좌번호 : 1234-5678 은행</p>
          )}
        </div>
      </Inputcontainer>
      <PostCodeModal
        show={show}
        handleClose={handleClose}
        handleCompletePostCode={handleCompletePostCode}
      />
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
