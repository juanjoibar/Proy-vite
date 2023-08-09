import React, { useState , useEffect} from 'react';

const images = [
  'https://images.dog.ceo/breeds/retriever-golden/n02099601_67.jpg',
  'https://images.dog.ceo/breeds/basenji/n02110806_479.jpg',
  'https://images.dog.ceo/breeds/hound-blood/n02088466_4178.jpg',
  // Agrega aquí las URL de tus imágenes
];


function Carousel() {
 
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 10000);
      return () => clearInterval(interval);
    }, [currentIndex]);
 
    return (
      <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-80 sm:h-96 md:h-120 lg:h-160 xl:h-200">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="text-white text-3xl px-4 py-2 bg-black bg-opacity-50 hover:bg-opacity-75"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="text-white text-3xl px-4 py-2 bg-black bg-opacity-50 hover:bg-opacity-75"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel