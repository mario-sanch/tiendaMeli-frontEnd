import "./create-product.css";
import { Form, redirect } from "react-router-dom";

export function action() {
  // call api to create a new product

  const newProduct = {
    name: "New Product",
    id: "123",
  };

  return redirect(`/products`);
}

const CreateProduct = () => {
  return (
    <div>
      <h3>Crear producto</h3>
      <Form method="post">
        <input type="text" placeholder="nombre del producto" />
        <button type="submit">Crear</button>
      </Form>
    </div>
  );
};

export default CreateProduct;
