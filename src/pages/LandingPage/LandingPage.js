import clayful from "clayful/client-js";

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
  return <div>LandingPage</div>;
};

export default LandingPage;
