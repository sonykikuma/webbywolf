"use client";

const SectionEleven = () => {
  return (
    <section className="bg-white py-20 text-center">
      {/* Logo */}
      <div className="mb-6">
        <div className="inline-block bg-gray-300 px-6 py-3 text-2xl font-bold text-black">
          LOGO
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        LOREM IPSUM DOLOR SIT AMET <br />
        CONSECTETUR. DUI.
      </h2>

      {/* Paragraph */}
      <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
        Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
        pharetra tempor quis arcu. Ipsum nullam.
      </p>

      {/* Button */}
      <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition shadow-md">
        Loerum Ipsum
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </section>
  );
};

export default SectionEleven;
