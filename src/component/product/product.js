import "./product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="image-container">
        {/* <img
          sizes="(max-width: 335px) 100vw, 335px"
          srcSet="../../../../images/zapato1_suyske_c_scale,w_150.jpg 150w, 
                ../../../../images/zapato1_suyske_c_scale,w_335.jpg 335w"
          src="../../../../images/zapato1_suyske_c_scale,w_150.jpg"
          alt=""
        /> */}
        <img src={product.imgUrl} alt="product image" />
      </div>
      <div className="product-information">
        <h4>Npmbre: {product.name}</h4>
        <p>Precio: {product.price}</p>
        <p>Descripcion:</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
