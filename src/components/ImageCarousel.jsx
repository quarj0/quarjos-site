import { useState, useEffect } from "react";
import { propTypes } from "prop-types";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`transition-opacity duration-500 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Carousel Image ${index + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

ImageCarousel.propTypes = {
  images: propTypes.arrayOf(propTypes.string).isRequired,
};

export default ImageCarousel;
