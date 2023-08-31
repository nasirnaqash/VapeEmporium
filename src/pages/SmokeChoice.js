import React from 'react';
import { NavLink } from 'react-router-dom';
const SmokeChoice = () => {
  return (
    <section>
<section className="choice-box relative flex flex-wrap justify-center items-center  bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div >
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" for="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-400 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" for="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input
                className="peer sr-only"
                id="vape"
                type="radio"
                tabindex="-1"
                name="option"
              />
              <label
                for="vape"
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm"> Vaper </span>
              </label>
             
            </div>
            <div>
              <input
                className="peer sr-only"
                id="no-vape"
                type="radio"
                tabindex="-1"
                name="option"
              />
              <label
                for="option2"
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm"> Non-Smoker </span>
              </label>
              
            </div>
          </div>

          <div className="mt-4">
            <NavLink to="/vape">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Details
            </button></NavLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
      
    </section>
  );
};
export default SmokeChoice;
