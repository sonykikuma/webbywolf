import Image from "next/image";

export default function Section14() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
      {/* Left Section */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          LOREM IPSUM DOLOR SIT AMET
        </h2>

        {/* Tabs */}
        <div className="flex border rounded overflow-hidden mb-6 w-full max-w-md">
          <button className="flex-1 px-4 py-2 bg-gray-100 font-semibold text-gray-800">
            Research
          </button>
          <button className="flex-1 px-4 py-2 bg-white font-semibold text-gray-800 border-l">
            Plan
          </button>
          <button className="flex-1 px-4 py-2 bg-white font-semibold text-gray-800 border-l">
            Design
          </button>
        </div>

        {/* Description Text */}
        <p className="text-gray-600 mb-4">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
          pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis
          ac turpis at amet. Purus malesuada placerat arcu at enim elit in
          accumsan.
        </p>

        {/* Link */}
        <a
          href="#"
          className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
        >
          Check tools
          <span>→</span>
        </a>
      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0 md:ml-12">
        <Image
          src="/sect14.png"
          alt="Handshake"
          width={500}
          height={300}
          className="rounded shadow-lg"
        />
      </div>
    </section>
  );
}
