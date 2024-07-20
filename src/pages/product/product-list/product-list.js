import "./product-list.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Product from "../../../component/product/product";
import SearchBox from "../../../component/search-box/search-box";
import { IoIosAddCircleOutline } from "react-icons/io";

export function loader({ request }) {
  //fetch products from api
  //const url = new URL(request.url);
  //const q = url.searchParams.get("q");
  //const products = await getProducts(q);

  const products = [
    {
      id: 1,
      name: "zapato",
      price: "12500",
      description: "product description 1",
      imgUrl: "../../../../images/zapato_w_150.jpg",
    },
    {
      id: 2,
      name: "perfume",
      price: "17850",
      description: "product description 2",
      imgUrl: "../../../../images/perfume.jpg",
    },
    {
      id: 3,
      name: "Aretes",
      price: "17850",
      description: "product description 2",
      imgUrl: "../../../../images/aretes.jpg",
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
    <div className="productsPage-container">
      <h2 className="">Productos</h2>
      <div className="addButton-container">
        <IoIosAddCircleOutline
          size={25}
          onClick={() => {
            navigate(`/create-product`);
          }}
        />
      </div>
      <div className="search-box-container">
        <SearchBox />
      </div>
      <div className="productList">
        {products.map((product, index) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
