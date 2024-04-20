import "./product-list.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Product from "../../../component/product/product";
import SearchBox from "../../../component/search-box/search-box";

export function loader({ request }) {
  // fetch products from api
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  //const products = await getProducts(q);

  const products = [
    {
      name: "zapato",
      price: "12500",
      description: "product description 1",
      imgUrl: "",
    },
    {
      name: "perfume",
      price: "17850",
      description: "product description 2",
      imgUrl: "",
    },
  ];

  //return { products, q };
  return { products };
}

const Products = () => {
  //const { products, q } = useLoaderData(); // use q as default value for the search component
  const { products } = useLoaderData();

  const navigate = useNavigate();

  return (
    <div>
      <h2>Productos</h2>
      <div>
        <SearchBox />
        <button
          onClick={() => {
            navigate(`/create-product`);
          }}
        >
          Crear nuevo Producto
        </button>
      </div>
      <div>
        {products && products.length ? (
          <div>
            {products.map((product, index) => {
              return <Product />;
            })}
          </div>
        ) : (
          <div>No, no hay products q mostrar</div>
        )}
      </div>
    </div>
  );
};

export default Products;
