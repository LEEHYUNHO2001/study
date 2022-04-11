import clayful from "clayful/client-js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingPage = () => {
  const Product = clayful.Product;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const options = {
      query: {
        page: 1,
      },
    };

    Product.list(options, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      setItems(res.data);
    });
  }, []);

  const renderCards = items.map((item) => {
    const { _id, thumbnail, name, price } = item;
    if (item) {
      return (
        <ItemContainer key={_id}>
          <Link to={`/product/${_id}`}>
            <ItemImage src={thumbnail.url} alt={name} />
            <p>{name}</p>
            <p>From {price.original.formatted}</p>
          </Link>
        </ItemContainer>
      );
    }
  });

  return <Conteiner>{renderCards}</Conteiner>;
};

const Conteiner = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 7rem 3rem 3rem 3rem;
  max-width: 1000px;
  margin: auto;
`;
const ItemContainer = styled.section`
  background-color: #dbdbdb;
`;
const ItemImage = styled.img`
  width: 300px;
  height: 250px;
  padding: 20px;
`;

export default LandingPage;
