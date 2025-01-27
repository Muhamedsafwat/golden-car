import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="flex gap-20 items-center justify-between container py-24">
      {/* content */}
      <div className="flex-1">
        <p className="text-brand font-thin text-xl mt-7 tracking-widest">
          السيارة الذهبية
        </p>
        <h2 className=" mt-5 mb-10 text-5xl font-semibold tracking-wide leading-snug">
          نحن أكثر من مجرد <br />
          <span className="text-brand">شركة تأجير سيارات.</span>
        </h2>
        <p className="text-gray-300">
          نوفر لك مجموعة واسعة من السيارات لتناسب جميع احتياجاتك، سواء كنت تبحث
          عن الفخامة والراحة أو الحلول الاقتصادية. اكتشف تجربة استثنائية مع
          خدماتنا المصممة لتجعل رحلتك أكثر سلاسة وسهولة.
        </p>
        <button className="btn btn-primary mt-7 rounded-full ">
          عرض السيارات
        </button>
      </div>
      {/* image */}
      <div className="flex-1 flex justify-center relative aspect-square shadow-xl">
        <div className="rounded-3xl overflow-hidden relative w-full h-full group">
          <Image
            src="/images/whychooseus.jpeg"
            fill
            alt="man"
            className="group-hover:scale-105 duration-300"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
