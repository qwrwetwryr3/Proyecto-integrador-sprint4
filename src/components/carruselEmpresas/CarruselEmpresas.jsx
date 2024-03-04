import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarruselEmpresas.css';

function CarruselEmpresas() {
  const cursorRing = document.getElementById("cursor-ring");

  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        cursorRing.style.left = `${e.clientX}px`;
        cursorRing.style.top = `${e.clientY}px`;
      });
    };

    const toggleCursor = () => {
      cursorRing.classList.toggle("active");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", toggleCursor);
    document.addEventListener("mouseup", toggleCursor);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", toggleCursor);
      document.removeEventListener("mouseup", toggleCursor);
    };
  }, [cursorRing]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    '../../public/andina-carrusel.png',
    '../../public/ccu.carrusel.png',
    '../../public/coca-cola-carrusel.jpg',
    '../../public/manantial-carrusel.png',
  ];

  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`imagen-${index}`} />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default CarruselEmpresas;