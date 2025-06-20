import Image from "next/image";
import Link from "next/link";

const Section12 = () => {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      {/* Title and Description */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          LOREM IPSUM DOLOR SIT AMET
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
          aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum
          eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>
      </div>

      {/* Image and Content */}
      <div className="flex flex-col md:flex-row relative">
        {/* Left Side Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/sect12.png"
            alt="Bikers"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Side Content Full Width */}
        <div className="md:w-1/2 w-full relative flex items-center justify-center">
          <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:-ml-8 bg-white p-8 rounded-lg shadow-lg z-10 w-full">
            <h3 className="text-2xl font-semibold mb-4">Artist & Investor</h3>
            <p className="text-gray-700 mb-6">
              Enim sagittis, sit porttitor morbi lobortis amet, libero
              adipiscing auctor. Malesuada tristique libero, id netus tincidunt.
              Egestas ac arcu amet nisl quis est …
            </p>
            <Link href="/full-story">
              <span className="text-blue-600 font-semibold flex items-center cursor-pointer">
                Read Full Story <span className="ml-1">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        <div className="w-4 h-2 bg-blue-500 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default Section12;
