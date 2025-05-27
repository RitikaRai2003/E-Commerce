import React from "react";
import { ShopContext } from "../context/shopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../component/Breadcrum/Breadcrum";
import { useContext } from "react";
import ProductDisplay from "../component/ProductDisplay/Productdisplay"
import DescriptionBox from "../component/DescriptionBox/DescriptionBox"
import RelatedProduct from "../component/RelatedProducts/RelatedProduct";


const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
       <RelatedProduct/>
    </div>
  );
};
export default Product;
