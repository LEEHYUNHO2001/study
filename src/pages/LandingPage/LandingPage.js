import clayful from "clayful/client-js";
import styled from "styled-components";

const LandingPage = () => {
  const Product = clayful.Product;

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

    // console.log(res.data);
  });
  return <Conteiner>LandingPage</Conteiner>;
};

const Conteiner = styled.section`
  padding: 7rem 3rem 3rem 3rem;
  max-width: 1000px;
  margin: auto;
`;

export default LandingPage;
