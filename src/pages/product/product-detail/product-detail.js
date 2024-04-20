import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
  const id = params.id;

  const product = {
    name: "cacauate",
  };

  return id;
}

const ProductDetail = () => {
  const id = useLoaderData();
  return (
    <div>
      <h1>Product Detail</h1>
      <p>product detail: {id}</p>
    </div>
  );
};

export default ProductDetail;
