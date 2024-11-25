import { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to advance to the next image
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set up an interval to change images automatically (e.g., every 3 seconds)
    const intervalId = setInterval(nextImage, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}
          key={index}
        >
          <img src={image} className="d-block w-100" alt={`Image${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
