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
        <Payment>??????</Payment>
        <PaymentPrice>
          ?????? ??? ?????? : {cartItem.total?.amount.raw + 3000}??? (????????? 3000???)
        </PaymentPrice>
      </PaymentC>
      <Inputcontainer>
        <div style={{ width: "49%" }}>
          <h3>????????? ??????</h3>
          <Input
            type="text"
            name="full"
            placeholder="????????????"
            onChange={handleSendChange}
            value={sendUserInfo.full}
          />
          <Input
            type="text"
            name="mobile"
            placeholder="?????? ?????????"
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
            <label htmlFor="sameInfo">????????? ????????? ?????? ???????????????.</label>
          </div>
        </div>
        <div style={{ width: "2%" }}></div>
        <div style={{ width: "49%" }}>
          <h3>????????? ??????</h3>
          <Input
            type="text"
            name="full"
            placeholder="????????????"
            onChange={handleRecvChange}
            value={recvUserInfo.full}
          />
          <Input
            type="text"
            name="mobile"
            placeholder="?????? ?????????"
            onChange={handleRecvChange}
            value={recvUserInfo.mobile}
          />

          <h3>?????? ??????</h3>
          <Input
            type="text"
            readOnly
            placeholder="??????"
            onClick={() => setShow(true)}
            value={address.address1}
          />
          <Input
            type="text"
            name="address2"
            placeholder="?????? ??????"
            value={address.address2}
            onChange={handleAddress2}
          />
          <Input
            type="text"
            readOnly
            placeholder="????????????"
            value={address.postCode}
          />

          <h3>??????</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>?????? ?????? ??????</option>
            {paymentMethods.map((method) => (
              <option key={method.slug} value={method.slug}>
                {method.name}
              </option>
            ))}
          </select>
          <Button onClick={handlePayment}>??????</Button>
          {paymentMethod === "bank-transfer" && (
            <p>???????????? : 1234-5678 ??????</p>
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
