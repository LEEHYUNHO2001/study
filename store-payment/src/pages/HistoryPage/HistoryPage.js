import React, { useEffect, useState } from "react";
import styled from "styled-components";
import clayful from "clayful/client-js";
import Table from "react-bootstrap/Table";

export const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const Order = clayful.Order;

    const options = {
      customer: localStorage.getItem("accessToken"),
    };

    Order.listForMe(options, function (err, res) {
      if (err) {
        console.log(err);
        return;
      }
      setHistory(res.data);
    });
  }, []);

  return (
    <Container>
      <div>주문 내역</div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>주문 번호</th>
            <th>총 주문 가격</th>
            <th>주문 일시</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item._id}</td>
              <td>{item.total.amount.converted}</td>
              <td>{item.createdAt.formatted}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  padding: 7rem 3rem 3rem 3rem;
  max-width: 1000px;
  margin: auto;
`;
