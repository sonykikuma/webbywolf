"use client";

import Image from "next/image";

const InfoSection = () => {
  return (
    <div className="relative z-10 bg-white py-20">
      <div className="w-full px-0 max-w-screen">
        {/* <div className="max-w-screen-xl mx-auto px-4 md:px-8"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
          {/* Left Content */}
          <div className="pl-9">
            <h5 className="text-blue-600 font-semibold mb-2">
              Lorem ipsum dolor sit amet
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-black">
              LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. EU ELIT.
            </h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
              leo eleifend condimentum in vitae faucibus. Amet massa malesuada
              sit pretium. Donec pharetra erat lacus suspendisse ornare.
            </p>

            {/* Feature List */}
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="flex items-start mb-6">
                  <Image
                    src="/infoicon.png" // <-- Replace with your local icon path
                    alt="icon"
                    width={24}
                    height={24}
                    className="mr-4 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                      egestas.
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et
                      arcu eu non viverra. Risus quam mattis senectus vitae
                      interdum odio ornare gravida vestibulum. Donec turpis
                      nulla felis mauris eu donec. Ipsum sit ut tortor.
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Image */}
          <div className="pl-8 flex items-center justify-center">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/info.png"
                alt="Talking professionals"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Gradient Line */}
      <div className="ml-[32px] h-2 w-full bg-gradient-to-r from-blue-800 via-green-500 to-purple-800 rounded-b" />
    </div>
  );
};

export default InfoSection;
