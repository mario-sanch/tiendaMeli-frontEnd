import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
  const id = params.id;

  const product = {
    id: id,
    name: "cacauate",
  };

  return { product };
}

const ProductDetail = () => {
  const { product } = useLoaderData();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product: {product.name}</p>
      <p>product id: {product.id}</p>
    </div>
  );
};

export default ProductDetail;
