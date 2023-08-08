import React, { useState } from 'react';

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
 
    return (
      <div className="m-8 md:m-4 lg:m-16">
        <div className="relative ">
        <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="w-full h-auto" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
          <button onClick={prevSlide} className="text-white text-2xl px-4 py-2 bg-black opacity-50 hover:opacity-75">
            &lt;
          </button>
          <button onClick={nextSlide} className="text-white text-2xl px-4 py-2 bg-black opacity-50 hover:opacity-75">
            &gt;
          </button>
        </div>
      </div>
      </div>
  )
}

export default Carousel