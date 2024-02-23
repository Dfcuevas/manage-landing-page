import React from "react";
import { useEffect, useState } from "react";
import { ButtonStarted } from "../ButtonStarted";

const Testimonials = ({ slides, autoSlide, autoSlideInterval = 4000 }) => {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    let slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-x-hidden relative lg:overflow-visible">
      <div
        className="flex flex-nowrap  transition-transform ease-out duration-500 lg:gap-10"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s) => {
          return (
            <div
              key={s.name}
              className="flex-shrink-0 w-full max-w-lg px-6 pb-6  mt-16 bg-veryLightGray relative"
            >
              <img
                src={s.imageUrl}
                className="object-cover w-20 absolute left-2/4 -translate-x-2/4 -translate-y-1/2"
              />
              <h3 className="text-darkBlue font-bold mt-16 mb-8">{s.name}</h3>
              <p className="text-darkGrayishBlue text-sm">{s.quote}</p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-2 mb-16">
        {slides.map((_, i) => (
          <div
            className={`transition-all w-3 h-3 border-2 border-brightRed rounded-full mt-4 cursor-pointer ${
              curr === i ? "bg-brightRed" : "bg-opacity-50"
            } md:hidden`}
            key={i}
          ></div>
        ))}
      </div>
      <div className="flex justify-center">
        <ButtonStarted />
      </div>
    </div>
  );
};

export { Testimonials };
