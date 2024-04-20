import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";

export function loader({ params }) {
  const id = params.id;

  return id;
}

export async function action({ request, params }) {
  //const formData = await request.formData();
  //const updates = Object.fromEntries(formData);
  //await updateProduct(params.productId, updates);
  return redirect(`/products`);
}

const ProductUpdate = () => {
  const id = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Update Product</h1>
      <Form method="post" id="product-form">
        <p>
          <span>Nombre</span>
          <input
            place-holder="Edite el nombre"
            aria-label="nombre del producto"
            type="text"
            name="name"
            defaultValue={id}
          />
        </p>
        <p>
          <button type="submit">Guardar</button>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancelar
          </button>
        </p>
      </Form>
    </div>
  );
};

export default ProductUpdate;
