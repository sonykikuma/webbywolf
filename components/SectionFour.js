"use client";

import Image from "next/image";

const SectionFour = () => {
  return (
    <section className="relative w-full h-auto text-white py-8 bg-white">
      {/* Background Image */}
      <div className="relative w-full h-[700px]">
        <Image
          src="/section4.png"
          alt="Section Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />{" "}
        {/*Optional dark overlay */}
        {/* Content */}
        <div className="absolute top-10 left-6 md:left-12 lg:left-25 bg-gray-200 text-black px-4 py-2 font-bold w-fit">
          LOGO
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 text-left items-center space-y-6">
          {/* <div className="bg-gray-200 text-black px-4 py-2 w-fit font-bold">
            LOGO
          </div> */}

          <h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl leading-tight">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS
            EGESTAS ALIQUAM VIVERRA MI.
          </h2>

          <p className="text-lg max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
            volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
            justo pellentesque id sed. Id tellus id luctus id. At quis nunc
            libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum
            nulla quam.
          </p>

          <p className="text-lg max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
            condimentum ultrices non. Ornare semper in tincidunt pellentesque
            cras mauris in vitae. At viverra quis eu malesuada vel et porttitor.
            Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a
            pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
