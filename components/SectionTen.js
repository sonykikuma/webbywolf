// "use client";

// import Image from "next/image";

// const SectionTen = () => {
//   return (
//     <section className="bg-[#f4f8ff] py-20 mt-[40px]">
//       <div className="max-w-screen-xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/* Left Content */}
//         <div>
//           <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
//             No Limits
//           </p>
//           <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
//             Lorem ipsum dolor sit amet
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
//             porttitor pharetra tempor quis arcu. Ipsum nullam.
//           </p>
//           <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium transition">
//             Loerum Ipsum
//             <svg
//               className="ml-2 w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Right Image Grid */}
//         <div className="grid grid-cols-6 grid-rows-6 gap-2">
//           {/* Top row */}
//           <div className="col-span-2 row-span-2">
//             <Image
//               src="/img3.png"
//               alt="img1"
//               width={400}
//               height={300}
//               className="w-full h-full object-cover rounded"
//             />
//           </div>
//           <div className="col-span-4 row-span-2">
//             <Image
//               src="/img2.png"
//               alt="img2"
//               width={800}
//               height={300}
//               className="w-full h-full object-cover rounded"
//             />
//           </div>

//           {/* Middle left column image */}
//           <div className="col-span-2 row-span-2">
//             <Image
//               src="/img4.png"
//               alt="img3"
//               width={400}
//               height={300}
//               className="w-full h-full object-cover rounded"
//             />
//           </div>

//           {/* Middle large image */}
//           <div className="col-span-4 row-span-3">
//             <Image
//               src="/img1.png"
//               alt="img4"
//               width={800}
//               height={500}
//               className="w-full h-full object-cover rounded"
//             />
//           </div>

//           {/* Bottom left row - two small stacked */}
//           <div className="col-span-1 row-span-2">
//             <Image
//               src="/img6.png"
//               alt="img5"
//               width={200}
//               height={300}
//               className="w-full h-full object-cover rounded"
//             />
//           </div>
//           <div className="col-span-3 row-span-2">
//             <Image
//               src="/img5.png"
//               alt="img6"
//               width={600}
//               height={300}
//               className="w-full h-full object-cover rounded"
//             />
//           </div>
//           <div className="col-span-2 row-span-2">
//             <Image
//               src="/mot2.png"
//               alt="img7"
//               width={400}
//               height={300}
//               className="w-full h-full object-cover rounded"
//             />
//           </div>

//           {/* Bonus image in empty space (optional, adjust position as per layout) */}
//           <div className="col-span-2 row-span-2">
//             <Image
//               src="/twowheeler.png"
//               alt="img8"
//               width={400}
//               height={300}
//               className="w-full h-full object-cover rounded"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionTen;

"use client";

import Image from "next/image";

const SectionTen = () => {
  return (
    <section className="bg-[#f4f8ff] py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-8">
        {/* Left Section */}
        <div className="flex flex-col justify-between h-full space-y-8">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
              No Limits
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
              porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>
            <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium transition">
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
          </div>

          {/* Left image column at bottom */}
          <div className="grid grid-cols-2 gap-2 mt-10">
            <div className="col-span-1">
              <Image
                src="/img3.png"
                alt="Bottom Left 1"
                width={200}
                height={200}
                className="w-full h-auto object-cover rounded"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/img4.png"
                alt="Bottom Left 2"
                width={200}
                height={200}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>

          {/* Center tall image */}
          {/* <div className="mt-6">
            <Image
              src="/img1.png"
              alt="Center Tall"
              width={400}
              height={600}
              className="w-full h-auto object-cover rounded"
            />
          </div> */}
        </div>

        {/* Right Section with image collage */}
        <div className="grid grid-cols-2 gap-2 auto-rows-[150px]">
          <Image
            src="/img2.png"
            alt="Right Top 1"
            width={400}
            height={200}
            className="w-full h-full object-cover rounded"
          />
          <Image
            src="/img5.png"
            alt="Right Top 2"
            width={400}
            height={200}
            className="w-full h-full object-cover rounded"
          />
          <Image
            src="/img6.png"
            alt="Right Mid"
            width={400}
            height={200}
            className="w-full h-full object-cover rounded"
          />
          <Image
            src="/mot2.png"
            alt="Right Bottom 1"
            width={400}
            height={200}
            className="w-full h-full object-cover rounded"
          />
          <Image
            src="/twowheeler.png"
            alt="Right Bottom 2"
            width={400}
            height={200}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="mt-6">
          <Image
            src="/img1.png"
            alt="Center Tall"
            width={400}
            height={600}
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTen;
