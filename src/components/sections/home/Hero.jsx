import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/cars/hero.jpeg')",
        transform: "scaleX(-1)", // Flip horizontally
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content -scale-x-100 text-center md:text-start max-w-5xl w-full mx-auto flex justify-center md:justify-start  ">
        <div className="max-w-lg flex items-center md:items-start flex-col">
          <h1 className="mb-5 text-6xl font-bold">السيارة الذهبية</h1>
          <p className="mb-5 text-xl">
            اختر السيارة المثالية لرحلتك القادمة مع السيارة الذهبية. مجموعة
            واسعة من السيارات الفاخرة والاقتصادية لتلبية جميع احتياجاتك، مع
            خدمات متميزة وأسعار تنافسية.
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary ">عرض السيارات</button>
            <button className="btn btn-outline btn-primary ">احجز الان</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
