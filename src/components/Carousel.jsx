import { useState } from 'react';

/**
 * A carousel component that displays a collection of images and allows navigation through them.
 *
 * @param {Object} props - The component props.
 * @param {string[]} props.images - An array of image URLs to be displayed in the carousel.
 * @returns {JSX.Element} - The rendered carousel component.
 */
const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * Updates the active index when a thumbnail image is clicked.
   *
   * @param {number} index - The index of the clicked thumbnail image.
   */
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const defaultImage = ['http://pets-images.dev-apis.com/pets/none.jpg'];
  images = images.length ? images : defaultImage;

  return (
    <div className="carousel">
      <img src={images[activeIndex]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((image, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <img
            key={image}
            src={image}
            className={index === activeIndex ? 'active' : ''}
            alt="animal thumbnail"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
