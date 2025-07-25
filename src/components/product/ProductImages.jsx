import React, { useState } from "react";
import "../../styles/product.css";

const images = [
  "/assets/images/traytable1.jpg",
  "/assets/images/traytable2.jpg",
  "/assets/images/traytable3.jpg",
  "/assets/images/traytable4.jpg"
];

function ProductImages() {
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div className="images">
      <img src={mainImg} alt="Main" />
     {images
  .filter((img) => img !== mainImg)
  .map((img, idx) => (
    <img key={idx} src={img} alt={`product ${idx}`} onClick={() => setMainImg(img)} />
))}

    </div>
  );
}

export default ProductImages;