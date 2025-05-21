import React, { useState, useRef, useEffect } from 'react';

import './carrousel.css';
import { Category } from 'types';

interface CarouselProps {
  width?: string;
  height?: string;
  infinite?: boolean;
  categories: Category[];
}

const Carousel: React.FC<CarouselProps> = ({
  width,
  height,
  infinite,
  categories
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const totalItems = categories.length;

  const next = () => {
    setCurrentIndex((prevIndex) =>
      infinite ? (prevIndex + 1) % totalItems : Math.min(prevIndex + 1, totalItems - 1)
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      infinite ? (prevIndex - 1 + totalItems) % totalItems : Math.max(prevIndex - 1, 0)
    );
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
      <div style={{ overflow: 'hidden', width, height, position: 'relative'}}>
            <div ref={trackRef} className='carrousel-container'>
              {
                categories.map((category) => (
                  <div key={category.id}
                      className='carrousel-item'>
                    <img
                    src={`${category.name}.jpg`}
                    alt={category.name}
                    className={`carrousel-image ${!category.enabled ? 'disabled' : ''}`}
                    />
                  </div>
                ))
              }
            </div>
            <button
              className="carrousel-button left"
              onClick={prev}
            >&lt;</button>
            <button
              className="carrousel-button right"
              onClick={next}
            >&gt;</button>
      </div>
  );
};

export default Carousel;
