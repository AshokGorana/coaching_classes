import React from "react";

const CallbackForm = () => {
  return (
    <div className="flex items-center justify-center p-6 bg-[#1d283d]">
      <div className="flex flex-col gap-18 md:flex-row items-center p-6 md:p-10 max-w-5xl w-full">
        
        {/* Left Side Image */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img
            src="https://asset.allen.in/dccd40f4-6c9d-4d84-8dc5-287391ec51a2/original.webp"
            alt="Student Illustration"
            className="max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right Side Form */}
        <div className="flex-1 text-white bg-[#111c2e] px-12 py-4 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Request a callback</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ex: Rohit Singh"
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="text"
                placeholder="Ex: +91 9876543210"
                className="border rounded-lg p-3 w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="border rounded-lg p-3 w-full">
                <option>12th+</option>
              </select>
              <select className="border rounded-lg p-3 w-full">
                <option>NEET</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="border rounded-lg p-3 w-full">
                <option>Online Courses</option>
              </select>
              <select className="border rounded-lg p-3 w-full">
                <option>Andaman and Nicobar Islands</option>
              </select>
            </div>

            <p className="text-xs text-gray-500">
              By continuing, you agree to our{" "}
              <a href="#" className="text-blue-600 underline">
                Terms & Conditions
              </a>
            </p>

            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;

