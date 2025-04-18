import React from "react";

const Discover = () => {
  return (
    <>
      <div className="discover-container bg-white flex justify-center !px-4 md:!px-0">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-3 place-items-center">
            <div>
              <img
                src="/images/home1-about.jpg"
                alt=""
                height="400px"
                width="550px"
                data-aos="zoom-in"
              />
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full gap-0"></div>
                <span className="w-10 md:w-20 h-[1px] bg-orange-500"></span>
                <h2 className="title text-orange-500 text-sm md:text-lg font-semibold tracking-wide uppercase">
                  Discover
                </h2>
                <span className="w-10 md:w-20 h-[1px] bg-orange-500"></span>
                <div className="w-2 h-2 bg-orange-500 rounded-full gap-0"></div>
              </div>
              <h1 className="sub-title text-5xl font-black">Our Story</h1>
              <p className="uppercase font-bold">
                We have the glory beginning in restaurant business
              </p>
              <p className="text-gray-500 text-sm md:text-base font-sans font-sm font-semibold md:!px-10 lg:!px-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                corporis rem tenetur amet distinctio, in esse hic nostrum
                similique facere libero velit minus repudiandae magni, modi aut,
                perspiciatis facilis. Modi Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Alias, sapiente!
              </p>
              <button className="btn-about uppercase text-orange-500 font-semibold border border-orange-500 rounded-4xl flex items-center gap-4 px-4 py-2 relative overflow-hidden group">
                About us
                <div className="dot w-[5px] h-[5px] bg-orange-500 rounded-full transition-all duration-500 ease-in-out transform group-hover:-translate-x-25 "></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
