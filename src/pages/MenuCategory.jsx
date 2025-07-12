import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import menuData from '../data/MenuData';
import pun from "../../public/images/pun.png";
import cake from "../../public/images/cake.png";
import dessert from "../../public/images/dessert.png";
import drinks from "../../public/images/drinks.png";

export default function MenuCategory() {
  const { category } = useParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formattedCategory = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const categoryDisplay = (
    <>
      <span className="text-[#CCAA35]">{formattedCategory.slice(0, 2)}</span>
      <span className="text-black dark:text-white">{formattedCategory.slice(2)}</span>
    </>
  );

  const filteredDishes = menuData.filter(
    (dish) => dish.category.toLowerCase() === formattedCategory.toLowerCase()
  );

  const radius = 200;

  const categoryImages = {
    'Break Fast': pun,
    'Cakes': cake,
    'Desserts': dessert,
    'Drinks': drinks,
  };

  const topRightImage = categoryImages[formattedCategory] || null;

  return (
    <div className="relative bg-white dark:bg-gray-900 w-screen min-h-screen flex flex-col items-center justify-start pt-20 overflow-x-hidden">
      {topRightImage && (
        <img
          src={topRightImage}
          alt="Decoration"
          className="absolute top-0 right-0 w-60 h-60 sm:w-40 lg:w-48 opacity-10 rotate-12 pointer-events-none z-0"
        />
      )}

      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center w-full px-4 z-10">
        Menu {categoryDisplay}
      </h1>

      {filteredDishes.length === 0 ? (
        <p className="text-center text-gray-500 px-4 w-full max-w-3xl z-10">
          No dishes found for this category.
        </p>
      ) : (
        <div
          className="relative w-full z-10"
          style={{ minWidth: '300px', maxWidth: isMobile ? '100%' : '42rem' }}
        >
          {filteredDishes.map((dish, index) => {
            const pattern = ['left', 'right', 'right'];
            const position = pattern[index % 3];
            const isLast = index === filteredDishes.length - 1;
            const isLeft = isLast || position === 'left';

            if (isMobile) {
              return (
                <div
                  key={dish.id}
                  className={`flex items-center justify-${isLeft ? 'start' : 'end'} mb-6 w-full px-4`}
                >
                  {isLeft ? (
                    <>
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-24 h-24 object-cover rounded-full flex-shrink-0"
                      />
                      <div className="ml-4 flex flex-col">
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-xl shadow text-left w-fit">
                          <h2 className="text-md font-bold text-gray-800 dark:text-white truncate">
                            {dish.name}
                          </h2>
                          <p className="text-[#CCAA35] font-semibold text-sm whitespace-nowrap mt-1 flex items-center justify-start gap-2">
                            <span className="w-px h-4 bg-[#CCAA35] inline-block"></span>
                            <span>sh {dish.price}</span>
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mr-4 flex flex-col items-end">
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-xl shadow text-right w-fit">
                          <h2 className="text-md font-bold text-gray-800 dark:text-white truncate">
                            {dish.name}
                          </h2>
                          <p className="text-[#CCAA35] font-semibold text-sm whitespace-nowrap mt-1 flex items-center justify-end gap-2">
                            <span className="w-px h-4 bg-[#CCAA35] inline-block"></span>
                            <span>sh {dish.price}</span>
                          </p>
                        </div>
                      </div>
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-24 h-24 object-cover rounded-full flex-shrink-0"
                      />
                    </>
                  )}
                </div>
              );
            }

            // Desktop circular layout
            const angleDeg = (360 / filteredDishes.length) * index;
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = radius * Math.cos(angleRad);
            const y = radius * Math.sin(angleRad);

            return (
              <div
                key={dish.id}
                className="absolute flex items-start transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${250 + x}px`,
                  top: `${250 + y}px`,
                  flexDirection: isLeft ? 'row-reverse' : 'row',
                  textAlign: isLeft ? 'right' : 'left',
                }}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="w-32 h-32 object-cover rounded-full"
                />
                <div className="ml-3 w-52 max-w-[230px] bg-gray-100 dark:bg-gray-800 p-3 rounded-xl shadow">
                  <h2 className="text-md font-bold text-gray-800 dark:text-white truncate">
                    {dish.name}
                  </h2>
                  <p className="text-[#CCAA35] font-semibold text-sm whitespace-nowrap mt-1 text-right flex items-center justify-end gap-2">
                    <span className="w-px h-4 bg-[#CCAA35] inline-block"></span>
                    <span>sh {dish.price}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
