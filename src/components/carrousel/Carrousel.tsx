import React, { useState, useRef, useEffect } from 'react';
import './carrousel.css';
import { Category } from 'types';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
  const navigate = useNavigate();

  const goTo = (categoryId: string) => {
    navigate("/category/" + categoryId);
  }

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
                    <Link to={'/category/' + category.id}>
                      <img
                      src={
                            ['Bikes', 'Skateboards', 'Skis'].includes(category.name)
                              ? `${category.name}.jpg`
                              : 'Nocontent.jpg'
                          }
                      alt={category.name}
                      className={`carrousel-image ${!category.enabled ? 'disabled' : ''}`}
                      />
                    </Link>
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
