import React, { useEffect, useState } from "react";

export default function Slider({ images }) {
  const [selectImage, setSelectImage] = useState(images[1]);
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    let timer = setTimeout(() => {
      next();
    }, 15000);

    return () => {
      clearTimeout(timer);
    };
  }, [imageIndex]);

  const selectNewImage = (index) => {
    let conditinal = imageIndex < images.length - 1;
    let nextIndex = conditinal ? index + 1 : 0;
    setSelectImage(images[nextIndex]);
    setImageIndex(nextIndex);
  };

  const next = () => {
    selectNewImage(imageIndex);
  };

  const selectNewIndex = (index) => {
    setSelectImage(images[index]);
    setImageIndex(index);
  };

  return (
    <>
      <div className="home_Image">
        <img src={`../../assets/${selectImage}`} alt="Image" />
      </div>
      <div className="slider_content">
      <div className="slider_title">
        <p>
          ESTAR CÁMODO,
          <br /> NUNCA FUE TAN FÁCIL.
        </p>
        <button>Shop</button>
      </div>
      <div className="slide_index">
        {images &&
          images.map((image, index) => (
            <label
              key={index}
              onClick={() => selectNewIndex(index)}
              className={imageIndex === index ? "focus" : " "}
            >
              &nbsp; ⚫
            </label>
          ))}
      </div>
      </div>
    </>
  );
}
